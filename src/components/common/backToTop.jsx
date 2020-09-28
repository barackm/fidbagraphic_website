import React, { Component } from "react";
import "./backTop.css";
import { Link } from "react-scroll";
class BackToTop extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <Link
        to="accueil"
        id="myBtn"
        spy={true}
        smooth={true}
        duration={300}
        title="Go to top"
        className={darkMode ? "myBtn active" : "myBtn"}
      >
        <i
          className="fa fa-chevron-circle-up"
          style={{ color: darkMode ? "#575555" : "" }}
        ></i>
      </Link>
    );
  }
}

export default BackToTop;
