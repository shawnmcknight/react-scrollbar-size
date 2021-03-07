import React from 'react';
import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';
import { mockClientDimensions, mockOffsetDimensions } from '../../test/mockDimensions';
import ScrollbarSize, { ScrollbarSizeChangeHandlerParams } from '../ScrollbarSize';

const onChange = jest.fn(); // set up a jest.fn for testing calls to the onChange handler

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

	offsetDimensionsMocker.mock(17, 27);
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

	offsetDimensionsMocker.mock(17, 27);

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
