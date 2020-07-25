// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface DebouncedFn<F extends (...args: any[]) => void> {
	(...args: Parameters<F>): void;
	cancel: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const debounce = <F extends (...args: any[]) => void>(func: F, waitFor: number): DebouncedFn<F> => {
	let timeout: NodeJS.Timeout | null;

	const clear = () => {
		if (timeout != null) {
			clearTimeout(timeout);
			timeout = null;
		}
	};

	const debouncedFn = (...args: Parameters<F>): void => {
		clear();

		timeout = setTimeout(() => {
			func(...args);
		}, waitFor);
	};

	debouncedFn.cancel = () => {
		clear();
	};

	return debouncedFn;
};

export default debounce;
