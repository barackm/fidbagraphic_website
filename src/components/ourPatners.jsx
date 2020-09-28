import React, { Component } from "react";
import "./ourPatners.css";
import Fade from "react-reveal/Fade";
import { partners } from "../data/partners";

class OurPatners extends Component {
  render() {
    return (
      <div className="patners-main-container">
        <div className="patners-text-container">
          <Fade bottom cascade>
            <div className="patner-big-title">
              <h1>Nos Partenaires</h1>
              <div className="patner-line"></div>
            </div>
          </Fade>
        </div>
        <div className="patners-container">
          {partners.map((patner) => (
            <Fade bottom cascade key={patner.id}>
              <div key={patner.id} className="patner-logo-container">
                <img src={patner.imageUrl} alt="" />
              </div>
            </Fade>
          ))}
        </div>
      </div>
    );
  }
}

export default OurPatners;
