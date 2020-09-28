import React, { Component } from "react";
import "./floatingActionBtn.css";
import { GiMoon } from "react-icons/gi";
import { FaSun } from "react-icons/fa";
import { IconContext } from "react-icons";
class FloatingActionBtn extends Component {
  state = {
    toggled: false,
  };

  handleShowElements = () => {
    this.setState({ toggled: !this.state.toggled });
  };

  render() {
    const { onToggleDrakMode, darkMode } = this.props;
    const darkStyle = {
      backgroundColor: darkMode ? "#cccc" : "#000",
    };
    const icon = darkMode ? <FaSun /> : <GiMoon />;

    return (
      <>
        <div className="main" onClick={this.handleShowElements}>
          <i className="fa fa-cog"></i>
        </div>

        <div className={this.state.toggled ? "c1 toggled" : "c1"}>
          <a href="https://web.whatsapp.com/" target="blank">
            <i className="fa fa-whatsapp"></i>
          </a>
        </div>
        <div
          className={this.state.toggled ? "c2 toggled" : "c2"}
          style={darkStyle}
          onClick={onToggleDrakMode}
        >
          <IconContext.Provider
            value={{ color: "#fff", className: "global-class-name" }}
          >
            {icon}
          </IconContext.Provider>
        </div>
        <div className={this.state.toggled ? "c3 toggled" : "c3"}>
          <a
            href="https://www.instagram.com/fidba_graphics/?hl=fr"
            target="bank"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </>
    );
  }
}

export default FloatingActionBtn;
