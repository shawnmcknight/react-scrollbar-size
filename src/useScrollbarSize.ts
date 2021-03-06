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
	const element = useRef(document.createElement('div'));

	element.current.style.width = '99px';
	element.current.style.height = '99px';
	element.current.style.overflow = 'scroll';
	element.current.style.position = 'absolute';
	element.current.style.top = '-9999px';
	element.current.setAttribute('aria-hidden', 'true');
	element.current.setAttribute('role', 'presentation');

	const updateState = () => {
		const {
			offsetHeight = 0,
			clientHeight = 0,
			offsetWidth = 0,
			clientWidth = 0,
		} = element.current;
		const scrollbarHeight = offsetHeight - clientHeight;
		const scrollbarWidth = offsetWidth - clientWidth;
		setHeight((h) => (h !== scrollbarHeight ? scrollbarHeight : h));
		setWidth((w) => (w !== scrollbarWidth ? scrollbarWidth : w));
	};

	// initialize resize event handler and state when mounted
	useEffect(() => {
		const handleResize = debounce(updateState, 100);

		// initialize
		window.addEventListener('resize', handleResize);
		document.body.appendChild(element.current);
		updateState();

		// cleanup
		const elementToRemove = element.current;
		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
			document.body.removeChild(elementToRemove);
		};
	}, []);

	return { height, width };
};

export default useScrollbarSize;
