import React, { Component } from "react";
import "./spinner.css";
class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container">
        <div className="spiner-logo">
          <img
            src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594977363/fidbagraphics/logo/FidbaGraphics_white_without_title_vuvyma.png"
            alt=""
            srcset=""
          />
        </div>
        <div class="triple-spinner"></div>
      </div>
    );
  }
}

export default Spinner;
