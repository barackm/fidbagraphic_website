import React, { Component } from "react";
import "./services.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-scroll";
class Services extends Component {
  render() {
    return (
      <div className="services-main-container" id="services">
        <div className="services-main">
          <div className="bigTitleContainer">
            <Fade left>
              <h1 className="big-title">NOS SERVICES</h1>
            </Fade>
            <div className="line"></div>
          </div>

          <div className="servicesText">
            <Bounce left>
              <div className="first-service">
                <div className="icon-container">
                  <Link
                    to="designGraphic"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="link"
                  >
                    <i className="fa fa-paint-brush"></i>{" "}
                  </Link>
                </div>
                <div className="body-container">
                  <h2>Design Graphique</h2>
                </div>
                <div className="main-text-container">
                  <p>
                    Assoir la réputation des entreprises Africaines à travers la
                    conception des outils de communication.
                  </p>
                </div>
              </div>
            </Bounce>
            <Bounce bottom>
              <div className="second-service">
                <div className="icon-container">
                  <Link
                    to="webDesign"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="link"
                  >
                    <i
                      className="fa fa-desktop"
                      style={{ transform: "rotate(-45deg)" }}
                    ></i>
                  </Link>
                </div>
                <div className="body-container">
                  <h2>Services Web</h2>
                </div>
                <div className="main-text-container">
                  <p>
                    Concevoir des sites internet pour la visibilité de votre
                    entreprise partout au monde.
                  </p>
                </div>
              </div>
            </Bounce>
            <Bounce right>
              <div className="third-service">
                <div className="icon-container">
                  <Link
                    to="marketingDigital"
                    spy={true}
                    smooth={true}
                    duration={800}
                    className="link"
                  >
                    <i className="fa fa-bullhorn"></i>{" "}
                  </Link>
                </div>
                <div className="body-container">
                  <h2>Marketing Digital</h2>
                </div>
                <div className="main-text-container">
                  <p>
                    Donner une meilleure image des entreprises africaines à
                    travers les réseaux sociaux.
                  </p>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
