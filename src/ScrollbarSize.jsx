import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventListener from 'react-event-listener';
import isEqual from 'lodash.isequal';
import throttle from 'lodash.throttle';

const styles = {
	width: '100px',
	height: '100px',
	position: 'absolute',
	top: '-100000px',
	overflow: 'scroll',
	msOverflowStyle: 'scrollbar',
};

class ScrollbarSize extends Component {
	static propTypes = {
		onLoad: PropTypes.func,
		onChange: PropTypes.func,
	}

	static defaultProps = {
		onLoad: null,
		onChange: null,
	}

	componentDidMount() {
		const {
			onLoad,
		} = this.props;

		if (onLoad) {
			this.setMeasurements();
			onLoad(this.measurements);
		}
	}

	setMeasurements = () => {
		this.measurements = {
			scrollbarHeight: (this.node.offsetHeight - this.node.clientHeight),
			scrollbarWidth: (this.node.offsetWidth - this.node.clientWidth),
		};
	}

	handleResize = throttle(() => {
		const {
			onChange,
		} = this.props;

		const prevMeasurements = this.measurements;
		this.setMeasurements();
		if (!isEqual(prevMeasurements, this.measurements)) {
			onChange(this.measurements);
		}
	}, 166); // Corresponds to 10 frames at 60 Hz.

	render() {
		const {
			onChange,
		} = this.props;

		return (
			<div>
				{onChange ?
					<EventListener
						target="window"
						onResize={this.handleResize}
					/> :
					null
				}
				<div
					style={styles}
					ref={(node) => { this.node = node; }}
				/>
			</div>
		);
	}
}

export default ScrollbarSize;
