import { FunctionComponent, useEffect } from 'react';
import type { ScrollbarMeasurements } from './useScrollbarSize';
import useScrollbarSize from './useScrollbarSize';

/** Params passed to change handler */
export type ScrollbarSizeChangeHandlerParams = ScrollbarMeasurements;

/** ScrollbarSize component props */
export interface ScrollbarSizeProps {
	/** Callback fired when the component loads and when the scrollbar size changes */
	onChange: (result: ScrollbarSizeChangeHandlerParams) => void;
}

/** React component to fire an event when the size of the scrollbar changes */
const ScrollbarSize: FunctionComponent<ScrollbarSizeProps> = ({
	onChange,
}: ScrollbarSizeProps): null => {
	const { height, width } = useScrollbarSize();

	useEffect(() => {
		onChange({ height, width });
	}, [height, width, onChange]);

	return null;
};

export default ScrollbarSize;
