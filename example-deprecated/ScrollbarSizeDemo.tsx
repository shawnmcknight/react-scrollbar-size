import React, { CSSProperties, FunctionComponent, useState } from 'react';
import ScrollbarSize, { ScrollbarSizeChangeHandlerParams } from '../src';

const styles: CSSProperties = {
	margin: '1rem',
	textAlign: 'center',
};

const ScrollbarSizeDemo: FunctionComponent = () => {
	const [currentHeight, setHeight] = useState(0);
	const [currentWidth, setWidth] = useState(0);

	const scrollbarSizeChange = ({ height, width }: ScrollbarSizeChangeHandlerParams) => {
		if (height !== currentHeight) {
			setHeight(height);
		}

		if (width !== currentWidth) {
			setWidth(width);
		}
	};

	return (
		<div style={styles}>
			<h2>React-Scrollbar-Size Component Example (Deprecated)</h2>
			<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
			<ScrollbarSize onChange={scrollbarSizeChange} />
			<p>
				{`The current height of the scrollbar is ${currentHeight}px.`}
				<br />
				{`The current width of the scrollbar is ${currentWidth}px.`}
			</p>
		</div>
	);
};

export default ScrollbarSizeDemo;
