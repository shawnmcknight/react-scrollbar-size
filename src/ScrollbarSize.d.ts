import { FunctionComponent } from 'react';
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
declare const ScrollbarSize: FunctionComponent<ScrollbarSizeProps>;
export default ScrollbarSize;
