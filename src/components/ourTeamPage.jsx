import React, { Component } from "react";
import "./ourTeam.css";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
class OurTeamPage extends Component {
  state = {};
  render() {
    const { darkMode } = this.props;
    return (
      <div
        className="team-main-container"
        style={{
          backgroundColor: darkMode ? "#222222" : "",
          borderTop: darkMode ? " 2px solid #ccc" : "",
        }}
      >
        <div className="team-title">
          <Slide left cascade>
            <h2>The Team</h2>
          </Slide>
        </div>
        <div className="team-members">
          <Zoom left cascade>
            <div className="member1">
              <div className="member1-image-container">
                <img
                  src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594975306/fidbagraphics/members/members_profile_a32fvi.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="name">Fidel Bashige</h1>

              <p className="fonction">Département créatif</p>
            </div>
            <div className="member1">
              <div className="member1-image-container">
                <img
                  src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594975307/fidbagraphics/members/members_plamedie_ho063a.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="name">Plamedie Nzebra</h1>
              <p className="fonction">Département de Finance</p>
            </div>
            <div className="member1">
              <div className="member1-image-container">
                <img
                  src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594975307/fidbagraphics/members/members_JULIENNE_cq4cyg.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="name">Julienne Okako</h1>
              <p className="fonction">Département de Communication</p>
            </div>
            <div className="member1">
              <div className="member1-image-container">
                <img
                  src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594975307/fidbagraphics/members/members_barack_rclsdy.jpg"
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="name">Baraka Mukelenga</h1>
              <p className="fonction">Département Developpement Web</p>
            </div>
            <div className="member1">
              <div className="member1-image-container">
                <img
                  src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594987072/fidbagraphics/members/DANIEL_hbzar7.png"
                  alt=""
                  srcSet=""
                />
              </div>
              <h1 className="name">Daniel Tulinabo</h1>
              <p className="fonction">Département Graphique</p>
            </div>
          </Zoom>
        </div>
        <h3 className="contactez-nous">Contactez nous</h3>
        <div className="arrow-down-container">
          <Link
            to="contacts"
            spy={true}
            smooth={true}
            duration={800}
            className="container2"
          >
            <div class="chevron"></div>
            <div class="chevron"></div>
            <div class="chevron"></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default OurTeamPage;
