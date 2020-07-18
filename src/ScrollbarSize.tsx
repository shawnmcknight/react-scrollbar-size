import debounce from 'lodash.debounce';
import React, { CSSProperties, FunctionComponent, ReactElement, useEffect, useRef } from 'react';

/** Styles for the div that will be generated for measuring scrollbar size */
const styles: CSSProperties = {
	width: '99px',
	height: '99px',
	position: 'absolute',
	top: '-9999px',
	overflow: 'scroll',
	msOverflowStyle: 'scrollbar',
};

/** Params passed to change handler */
export interface ScrollbarSizeChangeHandlerParams {
	/** Current height of the scrollbar */
	height: number;
	/** Current width of the scrollbar */
	width: number;
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
	const height = useRef<number>(0);
	const width = useRef<number>(0);
	const nodeRef = useRef<HTMLDivElement>(null);

	/** Calculate and set the measurements of the scrollbar */
	const setMeasurements = () => {
		/* istanbul ignore next: nodeRef should be non-null */
		const { offsetHeight = 0, clientHeight = 0, offsetWidth = 0, clientWidth = 0 } =
			nodeRef.current ?? {};

		height.current = offsetHeight - clientHeight;
		width.current = offsetWidth - clientWidth;
	};

	// set up the resize handler
	useEffect(() => {
		const handleResize = debounce(() => {
			const { current: prevHeight } = height;
			const { current: prevWidth } = width;
			setMeasurements();

			if (prevHeight !== height.current || prevWidth !== width.current) {
				onChange({
					height: height.current,
					width: width.current,
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
		onChange({ height: height.current, width: width.current });
	}, [onChange]);

	return <div style={styles} ref={nodeRef} />;
};

export default ScrollbarSize;
