import React, { Component } from "react";
import "./footer.css";
import { Link } from "react-scroll";
class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer-main-container">
        <div className="footer-first-part">
          <div className="footer-left-container">
            <img
              src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594977363/fidbagraphics/logo/FidbaGraphics_white_without_title_vuvyma.png"
              alt=""
              srcSet=""
            />
            <div className="footer-text">
              <p style={{ marginBottom: "-5px" }}>136, La frontière Avenue </p>
              <p>Katindo, Goma RDC</p>
            </div>
          </div>
          <div className="footer-icons-container">
            <div className="icon-text">
              <h1>Fidba Graphics</h1>
            </div>
            <div className="footer-icon-container">
              <div className="footer-icon">
                <a href=" https://wa.me/243995602208" target="blank">
                  <i className="fa fa-whatsapp"></i>
                </a>
              </div>
              <div className="footer-icon">
                <a href="https://web.facebook.com/fidbagraphics" target="blank">
                  <i className="fa fa-facebook"></i>
                </a>
              </div>
              <div className="footer-icon">
                <a
                  href="https://www.instagram.com/fidba_graphics/?hl=fr"
                  target="blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
              <div className="footer-icon">
                <a href="https://twitter.com/fidbagraphics" target="blank">
                  <i className="fa fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-right-container">
            <Link
              to="accueil"
              id="myBtn"
              spy={true}
              smooth={true}
              duration={300}
              title="home"
            >
              <div className="footer-icon-menu">
                <i className="fa fa-home"></i>
                <h4>Home</h4>
              </div>
            </Link>
            <Link
              to="aboutPage"
              id="myBtn"
              spy={true}
              smooth={true}
              duration={300}
              title="a propos"
            >
              <div className="footer-icon-menu">
                <i className="fa fa-question"></i>
                <h4>A propos de nous</h4>
              </div>
            </Link>
            <Link
              to="portfolio"
              id="myBtn"
              spy={true}
              smooth={true}
              duration={300}
              title="Portfolio"
            >
              <div className="footer-icon-menu">
                <i className="fa fa-home"></i>
                <h4>Portfolio</h4>
              </div>
            </Link>
          </div>
        </div>
        <div className="footer-last-part">
          <h3>Copyright&copy; Fidba Graphics 2020</h3>
        </div>
      </div>
    );
  }
}

export default Footer;
