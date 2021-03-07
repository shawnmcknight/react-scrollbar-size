import React, { FunctionComponent } from 'react';
import { act } from 'react-dom/test-utils';
import { render, screen } from '@testing-library/react';
import useScrollbarSize from '../useScrollbarSize';

// get the current sizes so they can be reverted
let originalOffsetHeight: PropertyDescriptor;
let originalOffsetWidth: PropertyDescriptor;
let originalClientHeight: PropertyDescriptor;
let originalClientWidth: PropertyDescriptor;

const ScrollbarSizeExample: FunctionComponent = () => {
	const { height, width } = useScrollbarSize();

	return (
		<div>
			<div>Height: {height}</div>
			<div>Width: {width}</div>
		</div>
	);
};

beforeAll(() => {
	originalOffsetHeight =
		Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight') ?? {};
	originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth') ?? {};
	originalClientHeight =
		Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientHeight') ?? {};
	originalClientWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'clientWidth') ?? {};
});

beforeEach(() => {
	// reset to a clean base state before each test
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 50 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 50 });
	Object.defineProperty(HTMLElement.prototype, 'clientHeight', { value: 0 });
	Object.defineProperty(HTMLElement.prototype, 'clientWidth', { value: 0 });
});

afterAll(() => {
	// reset sizes to their original values
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight);
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
	Object.defineProperty(HTMLElement.prototype, 'clientHeight', originalClientHeight);
	Object.defineProperty(HTMLElement.prototype, 'clientWidth', originalClientWidth);
});

test('should set measurements on initial render', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);

	expect(height).toHaveTextContent('Height: 50');
	expect(width).toHaveTextContent('Width: 50');
});

test('should set measurements on first resize event', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 17');
	expect(width).toHaveTextContent('Width: 27');
});

test('should not change measurements when scrollbar size is unchanged', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	// resize again
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 17');
	expect(width).toHaveTextContent('Width: 27');
});

test('should set height each time scrollbar height changes', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	// resize again
	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 37 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 37');
	expect(width).toHaveTextContent('Width: 27');
});

test('should set width each time scrollbar width changes', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	// resize again
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 37 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 17');
	expect(width).toHaveTextContent('Width: 37');
});

test('should not change sizes if the resize event is not fired', () => {
	act(() => {
		render(<ScrollbarSizeExample />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 50');
	expect(width).toHaveTextContent('Width: 50');
});
