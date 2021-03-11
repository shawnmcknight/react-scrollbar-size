import { useEffect, useRef, useState } from 'react';
import { debounce } from './utils';

export interface ScrollbarMeasurements {
	/** Current height of the scrollbar */
	height: number;
	/** Current width of the scrollbar */
	width: number;
}

const useScrollbarSize = (): ScrollbarMeasurements => {
	const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
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
			const { offsetHeight, clientHeight, offsetWidth, clientWidth } = getElement();
			const scrollbarHeight = offsetHeight - clientHeight;
			const scrollbarWidth = offsetWidth - clientWidth;

			setDimensions((currentDimensions) => {
				const { height, width } = currentDimensions;
				return height !== scrollbarHeight || width !== scrollbarWidth
					? { height: scrollbarHeight, width: scrollbarWidth }
					: currentDimensions;
			});
		};

		const handleResize = debounce(updateState, 100);

		// initialize
		window.addEventListener('resize', handleResize);
		document.body.appendChild(getElement());
		updateState();

		const elementToRemove = getElement();
		// cleanup
		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
			document.body.removeChild(elementToRemove);
		};
	}, []);

	return dimensions;
};

export default useScrollbarSize;
