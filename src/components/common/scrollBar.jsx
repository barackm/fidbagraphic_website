import React, { Component } from "react";
import "./scrollBar.css";
class ScrollBar extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <div className="bar-container">
        <div
          className="bar"
          id="bar"
          style={{ backgroundColor: darkMode ? "#ccc" : "" }}
        ></div>
      </div>
    );
  }
}

export default ScrollBar;
