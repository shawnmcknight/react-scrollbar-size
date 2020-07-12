import React, { CSSProperties, FunctionComponent, useState } from 'react';
import ScrollbarSize, { ScrollbarSizeChangeHandlerParams } from '../src';

const styles: CSSProperties = {
	margin: '1rem',
	textAlign: 'center',
};

const ScrollbarSizeDemo: FunctionComponent = () => {
	const [height, setHeight] = useState(0);
	const [width, setWidth] = useState(0);

	const scrollbarSizeChange = ({
		scrollbarHeight,
		scrollbarWidth,
	}: ScrollbarSizeChangeHandlerParams) => {
		if (scrollbarHeight !== height) {
			setHeight(scrollbarHeight);
		}

		if (scrollbarWidth !== width) {
			setWidth(scrollbarWidth);
		}
	};

	return (
		<div style={styles}>
			<h2>React Scrollbar Size Demo</h2>
			<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
			<ScrollbarSize onChange={scrollbarSizeChange} />
			<p>
				{`The current height of the scrollbar is ${height}px.`}
				<br />
				{`The current width of the scrollbar is ${width}px.`}
			</p>
		</div>
	);
};

export default ScrollbarSizeDemo;
