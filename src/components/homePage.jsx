import React from "react";
import { Link } from "react-scroll";
import "./menu.css";
import "./styles/homeNewStyle.css";
import BackToTop from "./common/backToTop";
import Fade from "react-reveal/Fade";
import AnimatedScreen from "./common/animatedScreen";
class HomePage extends React.Component {
  state = {
    firstContent: true,
    secondContent: false,
    thirdContent: false,
    height: 512,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener(
      "resize",
      this.updateWindowDimensions.bind(this)
    );
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  render() {
    const { darkMode } = this.props;
    // const { width } = this.state;
    return (
      <section className="home">
        <div className="home-main-container" id="accueil">
          <div className="home-background-container">
            <div className="background-desk"></div>
          </div>
          <div className="navbar-info-container">
            <div className="brand-info">
              <div className="le-monde-a-besoin-de-nous">
                <h1>Le monde a besoin de nous</h1>
              </div>

              <Fade right cascade>
                <div className="servicesTextContainer">
                  <p>La Solution du moment</p>
                  <p>L'agence de Communication</p>
                  <p>L'Afrique notre Priorité</p>
                </div>
              </Fade>
            </div>

            <span className="main">
              <i className="fa fa-cogs"></i>
            </span>

            <AnimatedScreen />
            <BackToTop darkMode={darkMode} />
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={800}
              className="arrow-down-container home"
            >
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={800}
                className="container2"
              >
                <div class="chevron"></div>
                <div class="chevron"></div>
                <div class="chevron"></div>
              </Link>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
