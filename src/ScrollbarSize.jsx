import React, { Component } from "react";
import PropTypes from "prop-types";
import EventListener from "react-event-listener";
import stifle from "stifle";

const styles = {
  width: "100px",
  height: "100px",
  position: "absolute",
  top: "-100000px",
  overflow: "scroll",
  msOverflowStyle: "scrollbar",
};

class ScrollbarSize extends Component {
  static propTypes = {
    onLoad: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    onLoad: null,
    onChange: null,
  };

  componentDidMount() {
    const { onLoad } = this.props;

    if (onLoad) {
      this.setMeasurements();
      onLoad({
        scrollbarHeight: this.scrollbarHeight,
        scrollbarWidth: this.scrollbarWidth,
      });
    }
  }

  componentWillUnmount() {
    this.handleResize.cancel();
  }

  setMeasurements = () => {
    this.scrollbarHeight = this.node.offsetHeight - this.node.clientHeight;
    this.scrollbarWidth = this.node.offsetWidth - this.node.clientWidth;
  };

  handleResize = stifle(() => {
    const { onChange } = this.props;

    const prevHeight = this.scrollbarHeight;
    const prevWidth = this.scrollbarWidth;
    this.setMeasurements();
    if (
      prevHeight !== this.scrollbarHeight ||
      prevWidth !== this.scrollbarWidth
    ) {
      onChange({
        scrollbarHeight: this.scrollbarHeight,
        scrollbarWidth: this.scrollbarWidth,
      });
    }
  }, 166); // Corresponds to 10 frames at 60 Hz.

  render() {
    const { onChange } = this.props;

    return (
      <div>
        {onChange ? (
          <EventListener target="window" onResize={this.handleResize} />
        ) : null}
        <div
          style={styles}
          ref={node => {
            this.node = node;
          }}
        />
      </div>
    );
  }
}

export default ScrollbarSize;
