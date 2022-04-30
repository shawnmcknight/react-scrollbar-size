import type { CSSProperties, FunctionComponent } from 'react';
import React from 'react';
import useScrollbarSize from '../src';

const styles: CSSProperties = {
	margin: '1rem',
	textAlign: 'center',
};

const ScrollbarSizeDemo: FunctionComponent = () => {
	const { height, width } = useScrollbarSize();

	return (
		<div style={styles}>
			<h2>React Scrollbar Size Demo</h2>
			<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
			<p>
				The current height of the scrollbar is {height}px.
				<br />
				The current width of the scrollbar is {width}px.
			</p>
		</div>
	);
};

export default ScrollbarSizeDemo;
