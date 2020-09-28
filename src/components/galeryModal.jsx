import React, { Component } from "react";
import ReactModal from "react-modal";
import "./modal.css";
import Zoom from "react-reveal/Zoom";
ReactModal.setAppElement("#root");
class GaleryModal extends Component {
  render() {
    const { handleCloseModal, showModal, image } = this.props;

    return (
      <div>
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <div class="ribbon">
            <div className="items">
              <img
                src="https://res.cloudinary.com/fidbagraphicscode/image/upload/v1594977363/fidbagraphics/logo/FidbaGraphics_white_without_title_vuvyma.png"
                alt=""
                srcset=""
              />
              <h4>Fidba Graphics</h4>
            </div>
          </div>

          <i className="fa fa-times close" onClick={handleCloseModal}></i>
          <Zoom>
            <div className="modal-image-container">
              <img src={image} alt="" srcset="" />
            </div>
          </Zoom>
        </ReactModal>
      </div>
    );
  }
}

export default GaleryModal;
