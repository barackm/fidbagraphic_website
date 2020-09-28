import React, { Component } from "react";
import "./styles/navbarStyle.css";
import { Link } from "react-scroll";
class NewNavbar extends Component {
  state = {
    isMenuToggled: false,
  };

  render() {
    const { onOpen, onClose } = this.props;

    return (
      <div className="newNavbar-main-container" id="newNav">
        <div className="newNavbar-main-wrapper">
          <div className="navbrand-wrapper">
            <Link to="home" spy={true} smooth={true} duration={800}>
              <div className="logo-brand"></div>
            </Link>
            <div className="hamberger" onClick={onOpen}>
              <i className="fa fa-bars"></i>
            </div>
          </div>
          <div className="navbar-links-wraper">
            <ul>
              <li onClick={onClose}>
                <Link to="about" spy={true} smooth={true} duration={800}>
                  A propos
                </Link>
              </li>
              <li onClick={onClose}>
                <Link to="services" spy={true} smooth={true} duration={800}>
                  Services
                </Link>
              </li>

              <li onClick={onClose}>
                <a
                  href="https://solutionsentreprise.fidbagraphics.com"
                  target="blank"
                >
                  Solutions entreprise
                </a>
              </li>
              <li onClick={onClose}>
                <Link to="contacts" spy={true} smooth={true} duration={800}>
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewNavbar;
