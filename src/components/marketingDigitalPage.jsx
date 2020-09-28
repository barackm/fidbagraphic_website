import React, { Component } from "react";
import "./marketingDigital.css";
import Fade from "react-reveal/Fade";
class MarketingDigitalPage extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <div
        className="marketing-digital-main-container1"
        style={{
          backgroundColor: darkMode ? "#222222" : "",
          borderTop: darkMode ? " 2px solid #ccc" : "",
        }}
        id="marketingDigital"
      >
        <Fade bottom cascade>
          <div className="logo-design-container1">
            <div
              className="rotating-circle1"
              style={{ borderColor: darkMode ? "#fff" : "" }}
            ></div>
            <div
              className="rotating-circle21"
              style={{ borderColor: darkMode ? "#fff" : "" }}
            ></div>
            <i
              className="fa fa-bullhorn"
              style={{ color: darkMode ? "#fff" : "" }}
            ></i>
          </div>
        </Fade>
        <div
          className="main-text-design-container1"
          style={{ borderColor: darkMode ? "#fff" : "" }}
        >
          <div className="title1">
            <Fade bottom cascade>
              <h1 style={{ color: darkMode ? "whitesmoke" : "" }}>
                Marketing Digital
              </h1>
            </Fade>
            <div
              className="line1"
              style={{ backgroundColor: darkMode ? "#fff" : "" }}
            ></div>
          </div>
          <div className="content1">
            <Fade bottom cascade>
              <p style={{ color: darkMode ? "whitesmoke" : "" }}>
                Donner une meilleure image des entreprises africaines <br /> à
                travers les réseaux sociaux.
              </p>
            </Fade>
            <div
              className="list-main-content1"
              style={{ borderColor: darkMode ? "#fff" : "" }}
            >
              <div className="right-list1">
                <Fade bottom cascade>
                  <div className="item21">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-empire"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Promotion des pages
                    </h2>
                  </div>
                </Fade>
                <Fade bottom cascade>
                  <div className="item21">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-empire"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Publications hebdomadaires
                    </h2>
                  </div>
                </Fade>
                <Fade bottom cascade>
                  <div className="item21">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-empire"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Gestion des pages
                    </h2>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MarketingDigitalPage;
