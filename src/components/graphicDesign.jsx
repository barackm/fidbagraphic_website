import React, { Component } from "react";
import "./graphicDesign.css";
import RubberBand from "react-reveal/RubberBand";
import Bounce from "react-reveal/Bounce";
import Zoom from "react-reveal/Zoom";
import Jello from "react-reveal/Jello";
import { FaStamp, FaTshirt } from "react-icons/fa";
import { GiPaintBucket } from "react-icons/gi";
import { IconContext } from "react-icons";
class GraphicDesign extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <div
        className="graphicDesign-main-container"
        style={{
          backgroundColor: darkMode ? "#222222" : "",
          borderTop: darkMode ? " 2px solid #ccc" : "",
        }}
        id="designGraphic"
      >
        <Jello></Jello>
        <div className="main-text-design-container">
          <div className="title">
            <RubberBand>
              <h1 style={{ color: darkMode ? "whitesmoke" : "" }}>
                Design Graphique
              </h1>
            </RubberBand>
            <div
              className="line"
              style={{ backgroundColor: darkMode ? "whitesmoke" : "" }}
            ></div>
          </div>
          <div className="content">
            <Zoom left>
              <div className="text-container-graphic">
                <p style={{ color: darkMode ? "whitesmoke" : "" }}>
                  Assoir la réputation des entreprises Africaines à travers la
                  conception des outils de communication professionnels:
                </p>
              </div>
            </Zoom>
            <div className="list-main-content">
              <div className="left-list">
                <Bounce left>
                  <div className="item1">
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Conception logo
                    </h2>
                    <div
                      className="item1-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-paint-brush"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                  </div>
                </Bounce>
                <Bounce left>
                  <div className="item1">
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      T-shirt Design
                    </h2>
                    <div
                      className="item1-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <IconContext.Provider
                        value={{
                          color: darkMode ? "#fff" : "#000",
                          className: "global-class-name",
                        }}
                      >
                        <FaTshirt />
                      </IconContext.Provider>
                    </div>
                  </div>
                </Bounce>
                <Bounce left>
                  <div className="item1">
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Profile Book
                    </h2>
                    <div
                      className="item1-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-book"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                  </div>
                </Bounce>
              </div>
              <div className="right-list">
                <Bounce right>
                  <div className="item2">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-image"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Conception Flyers/Affiche
                    </h2>
                  </div>
                </Bounce>
                <Bounce right>
                  <div className="item2">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <IconContext.Provider
                        value={{
                          color: darkMode ? "#fff" : "#000",
                          className: "global-class-name",
                        }}
                      >
                        <FaStamp />
                      </IconContext.Provider>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Cachet Électronique
                    </h2>
                  </div>
                </Bounce>
                <Bounce right>
                  <div className="item2">
                    <div
                      className="item2-icon-container"
                      style={{ borderColor: darkMode ? "#fff" : "" }}
                    >
                      <i
                        className="fa fa-id-card"
                        style={{ color: darkMode ? "#fff" : "" }}
                      ></i>
                    </div>
                    <h2 style={{ color: darkMode ? "whitesmoke" : "" }}>
                      Cartes de visite
                    </h2>
                  </div>
                </Bounce>
              </div>
            </div>
          </div>
        </div>
        <div className="logo-design-container">
          <div
            className="rotating-circle"
            style={{ borderColor: darkMode ? "whitesmoke" : "" }}
          ></div>
          <div
            className="rotating-circle2"
            style={{ borderColor: darkMode ? "whitesmoke" : "" }}
          ></div>
          <i style={{ color: darkMode ? "#fff" : "" }}>
            <GiPaintBucket />
          </i>
        </div>
      </div>
    );
  }
}

export default GraphicDesign;
