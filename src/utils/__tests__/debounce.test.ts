import debounce from '../debounce';

const wait = 1000;
const spy = jest.fn();
const debouncedFn = debounce(spy, wait);

test('should only fire the debounced function once it has not run for the defined wait period', () => {
	expect(spy).not.toHaveBeenCalled();
	debouncedFn(); // run the function
	expect(spy).not.toHaveBeenCalled();
	jest.advanceTimersByTime(wait - 1); // advance to just before the wait period
	expect(spy).not.toHaveBeenCalled();
	jest.advanceTimersByTime(1); // advance to the wait period
	expect(spy).toHaveBeenCalledTimes(1);
});

test('should reset the timer if debounced function runs before wait period has elapsed', () => {
	expect(spy).not.toHaveBeenCalled();
	debouncedFn(); // run the function
	expect(spy).not.toHaveBeenCalled();
	jest.advanceTimersByTime(wait - 1); // advance to just before the wait period
	expect(spy).not.toHaveBeenCalled();
	debouncedFn(); // run again
	expect(spy).not.toHaveBeenCalled();
	jest.advanceTimersByTime(wait - 1); // advance to just before the wait period
	expect(spy).not.toHaveBeenCalled();
	jest.advanceTimersByTime(1); // advance to the wait period
	expect(spy).toHaveBeenCalledTimes(1);
});

test('should cancel the execution of the debounced function', () => {
	expect(spy).not.toHaveBeenCalled();
	debouncedFn(); // run the function
	jest.advanceTimersByTime(wait - 1);
	expect(spy).not.toHaveBeenCalled();
	debouncedFn.cancel(); // cancel right before wait ends
	jest.advanceTimersByTime(wait); // advance beyond the wait period
	expect(spy).not.toHaveBeenCalled();
});
