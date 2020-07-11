import debounce from 'lodash.debounce';
import React, { CSSProperties, FunctionComponent, ReactElement, useEffect, useRef } from 'react';

/** Styles for the div that will be generated for measuring scrollbar size */
const styles: CSSProperties = {
	width: '99',
	height: '99',
	position: 'absolute',
	top: '-9999',
	overflow: 'scroll',
	msOverflowStyle: 'scrollbar',
};

/** Params passed to change handler */
export interface ScrollbarSizeChangeHandlerParams {
	/** Current height of the scrollbar */
	scrollbarHeight: number;
	/** Current width of the scrollbar */
	scrollbarWidth: number;
}

/** ScrollbarSize component props */
export interface ScrollbarSizeProps {
	/** Callback fired when the component loads and when the scrollbar size changes */
	onChange: (result: ScrollbarSizeChangeHandlerParams) => void;
}

/** React component to fire an event when the size of the scrollbar changes */
const ScrollbarSize: FunctionComponent<ScrollbarSizeProps> = ({
	onChange,
}: ScrollbarSizeProps): ReactElement => {
	const scrollbarHeight = useRef<number>(0);
	const scrollbarWidth = useRef<number>(0);
	const nodeRef = useRef<HTMLDivElement>(null);

	/** Calculate and set the measurements of the scrollbar */
	const setMeasurements = () => {
		const { offsetHeight = 0, clientHeight = 0, offsetWidth = 0, clientWidth = 0 } =
			nodeRef.current ?? {};

		scrollbarHeight.current = offsetHeight - clientHeight;
		scrollbarWidth.current = offsetWidth - clientWidth;
	};

	// set up the resize handler
	useEffect(() => {
		const handleResize = debounce(() => {
			const { current: prevHeight } = scrollbarHeight;
			const { current: prevWidth } = scrollbarWidth;
			setMeasurements();

			if (prevHeight !== scrollbarHeight.current || prevWidth !== scrollbarWidth.current) {
				onChange({
					scrollbarHeight: scrollbarHeight.current,
					scrollbarWidth: scrollbarWidth.current,
				});
			}
		}, 100);

		window.addEventListener('resize', handleResize);

		// cleanup
		return () => {
			handleResize.cancel();
			window.removeEventListener('resize', handleResize);
		};
	}, [onChange]);

	// Fire the onChange handler on first render
	useEffect(() => {
		setMeasurements();
		onChange({ scrollbarHeight: scrollbarHeight.current, scrollbarWidth: scrollbarWidth.current });
	}, [onChange]);

	return <div style={styles} ref={nodeRef} />;
};

export default ScrollbarSize;
