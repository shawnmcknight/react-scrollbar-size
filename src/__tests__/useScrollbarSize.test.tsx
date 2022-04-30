import { act, render, screen } from '@testing-library/react';
import type { FunctionComponent } from 'react';
import { mockClientDimensions, mockOffsetDimensions } from '../../test/mockDimensions';
import useScrollbarSize from '../useScrollbarSize';

const ScrollbarSizeExample: FunctionComponent = () => {
	const { height, width } = useScrollbarSize();

	return (
		<div>
			<div>Height: {height}</div>
			<div>Width: {width}</div>
		</div>
	);
};

const offsetDimensionsMocker = mockOffsetDimensions();
const clientDimensionsMocker = mockClientDimensions();

beforeAll(() => {
	// set to base state before all tests
	clientDimensionsMocker.mock(0, 0);
});

beforeEach(() => {
	// reset to base state before each test
	offsetDimensionsMocker.mock(50, 50);
});

afterAll(() => {
	// reset sizes to their original values
	offsetDimensionsMocker.unmock();
	clientDimensionsMocker.unmock();
});

test('should set measurements on initial render', () => {
	render(<ScrollbarSizeExample />);

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);

	expect(height).toHaveTextContent('Height: 50');
	expect(width).toHaveTextContent('Width: 50');
});

test('should set measurements on first resize event', () => {
	render(<ScrollbarSizeExample />);

	offsetDimensionsMocker.mock(17, 27);
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
	render(<ScrollbarSizeExample />);

	offsetDimensionsMocker.mock(17, 27);
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
	render(<ScrollbarSizeExample />);

	offsetDimensionsMocker.mock(17, 27);
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	// resize again
	offsetDimensionsMocker.mockHeight(37);
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
	render(<ScrollbarSizeExample />);

	offsetDimensionsMocker.mock(17, 27);
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	// resize again
	offsetDimensionsMocker.mockWidth(37);
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
	render(<ScrollbarSizeExample />);

	offsetDimensionsMocker.mock(17, 27);

	const height = screen.getByText(/height/i);
	const width = screen.getByText(/width/i);
	expect(height).toHaveTextContent('Height: 50');
	expect(width).toHaveTextContent('Width: 50');
});
