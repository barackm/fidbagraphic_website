import React, { Component } from "react";
import "./webDesign.css";
import Slide from "react-reveal/Slide";
class WebDesignPage extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <div
        className="web-design-main-container"
        style={{
          backgroundColor: darkMode ? "#222222" : "",
          borderTop: darkMode ? " 2px solid #ccc" : "",
        }}
        id="webDesign"
      >
        <Slide bottom>
          <div className="logo-design-container-web">
            <div className="rotating-circle-web"></div>
            <div className="rotating-circle-web2"></div>
            <i className="fa fa-desktop"></i>
          </div>
        </Slide>
        <div className="main-text-web-container-web">
          <Slide bottom>
            <div className="title-web">
              <h1>Services Web</h1>
              <div className="line-web"></div>
            </div>
          </Slide>
          <div className="content-web">
            <Slide bottom>
              <div className="text-container">
                <p>
                  Concevoir des sites internet pour les entreprises africaines
                  afin de rendre leurs produits et services visibles et
                  accessibles partout au monde.
                </p>
              </div>
            </Slide>
            <div className="list-main-content-web">
              <div className="right-list">
                <Slide bottom>
                  <div className="item2-web">
                    <div className="item2-icon-container-web">
                      <i className="fa fa-empire"></i>
                    </div>
                    <h2>Hebergement</h2>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="item2-web">
                    <div className="item2-icon-container-web">
                      <i className="fa fa-empire"></i>
                    </div>
                    <h2>Maintenance</h2>
                  </div>
                </Slide>
                <Slide bottom>
                  <div className="item2-web">
                    <div className="item2-icon-container-web">
                      <i className="fa fa-empire"></i>
                    </div>
                    <h2>Conception des sites</h2>
                  </div>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebDesignPage;
