import { useEffect, useRef, useState } from 'react';
import { debounce } from './utils';

export interface ScrollbarMeasurements {
	/** Current height of the scrollbar */
	height: number;
	/** Current width of the scrollbar */
	width: number;
}

const useScrollbarSize = (): ScrollbarMeasurements => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);
	const element = useRef<HTMLDivElement | null>(null);

	// initialize resize event handler and state when mounted
	useEffect(() => {
		const getElement = () => {
			if (element.current == null) {
				// element was not created yet -- initialize
				element.current = document.createElement('div');
				element.current.style.width = '99px';
				element.current.style.height = '99px';
				element.current.style.overflow = 'scroll';
				element.current.style.position = 'absolute';
				element.current.style.top = '-9999px';
				element.current.setAttribute('aria-hidden', 'true');
				element.current.setAttribute('role', 'presentation');
			}
			return element.current;
		};

		const updateState = () => {
			const { offsetHeight = 0, clientHeight = 0, offsetWidth = 0, clientWidth = 0 } = getElement();
			const scrollbarHeight = offsetHeight - clientHeight;
			const scrollbarWidth = offsetWidth - clientWidth;
			setHeight((h) => (h !== scrollbarHeight ? scrollbarHeight : h));
			setWidth((w) => (w !== scrollbarWidth ? scrollbarWidth : w));
		};

		const handleResize = debounce(updateState, 100);

		// initialize
		window.addEventListener('resize', handleResize);
		document.body.appendChild(getElement());
		updateState();

		// cleanup
		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
			document.body.removeChild(getElement());
		};
	}, []);

	return { height, width };
};

export default useScrollbarSize;
