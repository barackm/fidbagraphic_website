import React, { Component } from "react";
import "./styles/newAboutPage.css";
import Fade from "react-reveal/Fade";
class NewAboutPage extends Component {
  state = {};
  render() {
    return (
      <div className="new-about-page-wrapper" id="about">
        <div className="new-about-page-container">
          <Fade bottom>
            <h1 className="about-title2">A propos de nous</h1>
          </Fade>

          <div className="qui-sommes-nous">
            <div className="qui-sommes-nous-icon-wrapper">
              <Fade left>
                <div className="qui-sommes-nous-icon">
                  <i className="fa fa-question"></i>
                </div>
              </Fade>
            </div>
            <div className="qui-sommes-nous-content-wrapper">
              <Fade bottom>
                <h1>Qui sommes nous ?</h1>
              </Fade>
              <Fade bottom>
                <p>
                  <strong> Fidba Graphics</strong> est une agence de
                  communication offrant ses services en paquet pour les startups
                  et enteprises africaines afin de promouvoir les produits et
                  services made in Africa en répondant à tous les besoins de
                  communication et à un prix très abordable.
                </p>
              </Fade>
            </div>
          </div>
          <div className="qui-sommes-nous">
            <div className="qui-sommes-nous-content-wrapper">
              <Fade bottom>
                <h1>Notre Objectif</h1>
              </Fade>
              <Fade bottom>
                <p>
                  Est d’appuyer sur le plan marketing les enteprises africaines,
                  dans le souci de vendre l’image positive de l’Afrique au monde
                  à travers l’entrepreneuriat.
                </p>
              </Fade>
            </div>
            <div className="qui-sommes-nous-icon-wrapper two">
              <Fade right>
                <div className="qui-sommes-nous-icon">
                  <i className="fa fa-trophy"></i>
                </div>
              </Fade>
            </div>
          </div>
          <div className="qui-sommes-nous">
            <div className="qui-sommes-nous-icon-wrapper">
              <Fade left>
                <div className="qui-sommes-nous-icon">
                  <i className="fa fa-heart-o"></i>
                </div>
              </Fade>
            </div>
            <div className="qui-sommes-nous-content-wrapper">
              <Fade bottom>
                <h1>Nos Valeurs</h1>
              </Fade>
              <Fade bottom>
                <p>
                  Nos valeurs sont les principes qui nous amènent au
                  développement des entreprises africaines Elles sont aussi le
                  bouclier de leurs épanouissements.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewAboutPage;
