import React, { Component } from "react";
import "./portfolio.css";
import GaleryModal from "./galeryModal";
import Skeleton from "react-loading-skeleton";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";

import { logoFlyers } from "../data/logosFlyers";

class Portfolio extends Component {
  state = {
    genreSelected: "logo",
    showModal: false,
    image:
      "https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594975390/fidbagraphics/logo/logo_logo113_tzjvj9.png",
  };
  handleOpenModal = (image) => {
    this.setState({ showModal: true, image });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };
  handleGendreSelect = (genre) => {
    this.setState({ genreSelected: genre });
  };
  render() {
    const { darkMode } = this.props;
    const { genreSelected, showModal, image } = this.state;

    const imagesSelected = (images) => {
      if (genreSelected === "logo") {
        return images.filter((image) => image.genreId === 1);
      } else if (genreSelected === "flyers") {
        return images.filter((image) => image.genreId === 2);
      } else {
        return images.filter((image) => image.genreId === 3);
      }
    };
    return (
      <div
        className={
          darkMode ? "portfoli-main-container dark" : "portfoli-main-container"
        }
        id="portfolio"
      >
        <GaleryModal
          showModal={showModal}
          image={image}
          handleCloseModal={this.handleCloseModal}
        />
        <div className="portofolio-header">
          <Jump>
            <h1 style={{ color: darkMode ? "whitesmoke" : "" }}>Portfolio</h1>
          </Jump>
          <Fade left>
            <div
              className="portfolio-line"
              style={{
                backgroundColor: darkMode ? "whitesmoke" : "",
              }}
            ></div>
          </Fade>
        </div>
        <div className="portfolio-selector">
          <Flip left>
            <div
              onClick={() => this.handleGendreSelect("logo")}
              className="first-selection"
              style={{ color: darkMode ? "whitesmoke" : "" }}
            >
              <i
                className="fa fa-paint-brush"
                style={{ color: genreSelected === "logo" ? "#ff5e00" : " " }}
              ></i>
              <h2 className="description">Logo concept</h2>
            </div>
          </Flip>
          <Flip left>
            <div
              onClick={() => this.handleGendreSelect("flyers")}
              className="first-selection"
              style={{ color: darkMode ? "whitesmoke" : "" }}
            >
              <i
                className="fa fa-edit"
                style={{ color: genreSelected === "flyers" ? "#ff5e00" : " " }}
              ></i>
              <h2 className="description">Flyers Concepts</h2>
            </div>
          </Flip>
          <Flip left>
            <div
              onClick={() => this.handleGendreSelect("page-layout")}
              className="first-selection"
              style={{ color: darkMode ? "whitesmoke" : "" }}
            >
              <i
                className="fa fa-book"
                style={{
                  color: genreSelected === "page-layout" ? "#ff5e00" : " ",
                }}
              ></i>
              <h2 className="description">Page layout</h2>
            </div>
          </Flip>
        </div>
        <Zoom top cascade>
          <div className="portfolio-images-container">
            {imagesSelected(logoFlyers).map((image) => (
              <div
                key={image.id}
                onClick={() => this.handleOpenModal(image.original)}
              >
                {image.original ? (
                  <div className="portfolio-image-container">
                    <img src={image.original} alt="" srcSet="" />
                    <i className="fa fa-plus"></i>
                  </div>
                ) : (
                  <Skeleton />
                )}
              </div>
            ))}
            {/* <Zoom center>
            <ImageGallery items={imagesSelected(images)} />
          </Zoom> */}
          </div>
        </Zoom>
      </div>
    );
  }
}

export default Portfolio;
