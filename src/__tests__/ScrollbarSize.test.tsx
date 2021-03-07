import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import ScrollbarSize, { ScrollbarSizeChangeHandlerParams } from '../ScrollbarSize';

// get the current sizes so they can be reverted
let originalOffsetHeight: PropertyDescriptor;
let originalOffsetWidth: PropertyDescriptor;
let originalClientHeight: PropertyDescriptor;
let originalClientWidth: PropertyDescriptor;

const onChange = jest.fn(); // set up a jest.fn for testing calls to the onChange handler

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

test('should call onChange on initial render', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
	});

	expect(onChange).toHaveBeenCalledTimes(2);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
});

test('should call onChange on first resize event', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });
	act(() => {
		window.dispatchEvent(new window.Event('resize'));
		jest.advanceTimersByTime(100);
	});

	expect(onChange).toHaveBeenCalledTimes(3);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(3, {
		height: 17,
		width: 27,
	});
});

test('should not call onChange when scrollbar size is unchanged', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
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

	expect(onChange).toHaveBeenCalledTimes(3);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(3, {
		height: 17,
		width: 27,
	});
});

test('should call onChange each time scrollbar height changes', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
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

	expect(onChange).toHaveBeenCalledTimes(4);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(3, {
		height: 17,
		width: 27,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(4, {
		height: 37,
		width: 27,
	});
});

test('should call onChange each time scrollbar width changes', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
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

	expect(onChange).toHaveBeenCalledTimes(4);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(3, {
		height: 17,
		width: 27,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(4, {
		height: 17,
		width: 37,
	});
});

test('should not call onChange additional times if the resize event is not fired', () => {
	act(() => {
		render(<ScrollbarSize onChange={onChange} />);
	});

	Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { value: 17 });
	Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { value: 27 });

	expect(onChange).toHaveBeenCalledTimes(2);
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(1, {
		height: 0,
		width: 0,
	});
	expect(onChange).toHaveBeenNthCalledWith<[ScrollbarSizeChangeHandlerParams]>(2, {
		height: 50,
		width: 50,
	});
});
