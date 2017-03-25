import React, { Component } from 'react';
import ScrollbarSize from 'react-scrollbar-size/ScrollbarSize';

const styles = {
	margin: '1rem',
	textAlign: 'center',
};

class ScrollbarSizeDemo extends Component {
	state = {};
	initialMeasurements = {};

	scrollbarSizeLoad = (measurements) => {
		this.handleUpdate(measurements);
		this.initialMeasurements = measurements;
	}

	scrollbarSizeChange = (measurements) => {
		this.handleUpdate(measurements);
	}

	handleUpdate = ({ scrollbarHeight, scrollbarWidth }) => {
		if (scrollbarHeight !== this.state.height || scrollbarWidth !== this.state.width) {
			this.setState({
				height: scrollbarHeight,
				width: scrollbarWidth,
			});
		}
	}

	render() {
		return (
			<div style={styles}>
				<h2>React Scrollbar Size Demo</h2>
				<h4>Tip: Change browser zoom level to see scrollbar sizes change.</h4>
				<ScrollbarSize
					onLoad={this.scrollbarSizeLoad}
					onChange={this.scrollbarSizeChange}
				/>
				<p>
					{`The initial height of the scrollbar was ${this.initialMeasurements.scrollbarHeight}px.`}<br />
					{`The initial width of the scrollbar was ${this.initialMeasurements.scrollbarWidth}px.`}<br />
					{`The current height of the scrollbar is ${this.state.height}px.`}<br />
					{`The current width of the scrollbar is ${this.state.width}px.`}
				</p>
			</div>
		);
	}
}

export default ScrollbarSizeDemo;
