import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./contacts.css";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import LoadingSpinner from "./common/loadingSpinner";
class ContactsPage extends Component {
  state = {
    data: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
    errors: {},
    isSending: false,
  };

  hangleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    const data = { ...this.state.data };
    data[name] = value;
    this.setState({ data });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateInputs(this.state.data);

    if (Object.keys(errors).length > 0) return;
    this.setState({ isSending: true });
    const { name, message, email, phone } = this.state.data;
    var template_params = {
      fname: name,
      lastname: email,
      contact: phone,
      message: message,
    };

    var service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    var template_id = process.env.REACT_APP_EMAILJS_TEMPLETE_ID;
    var userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(service_id, template_id, template_params, userId)
      .then((res) => {
        this.setState({ isSending: false });
        toast.success("Votre message a été envoyé avec success");
        const data = {
          name: "",
          phone: "",
          email: "",
          message: "",
        };
        this.setState({ data });
      })
      .catch((err) => {
        this.setState({ isSending: false });
        toast.error(
          "Désolé votre message n'a pas pu être envoyé vérifiez votre connexion et réessayer"
        );
      });
  };
  validateInputs = (data) => {
    const errors = {};
    if (data.name.trim().length === 0) {
      errors.name = "Veuillez completer votre nom S'il vous plait";
    }
    if (data.message.trim().length === 0) {
      errors.message = "Veillez entrer votre message s'il vous plais";
    }
    if (data.phone.trim().length === 0) {
      errors.phone = "Veillez entrer votre numero de téléphone s'il vous plais";
    }
    this.setState({ errors });
    return errors;
  };
  //
  render() {
    const { darkMode } = this.props;
    const containerStyle = {
      position: "relative",
      height: "100%",
      width: "100%",
      padding: "0px",
      borderWidth: "0px",
      margin: " 0px",
      left: "0px",
      top: " 0px",
      // touchAction: "pan-x pan-y;",
    };

    const contactClasses = darkMode
      ? "contacts-main-container dark"
      : "contacts-main-container";
    const { name, email, phone, message } = this.state.data;

    return (
      <div className={contactClasses} id="contacts">
        <div className="contact-header-container">
          <Fade up>
            <div className="main-title">
              <h1
                className="bigTitle"
                style={{ color: darkMode ? "whitesmoke" : "" }}
              >
                Contactez nous
              </h1>
              <div
                style={{ backgroundColor: darkMode ? "whitesmoke" : "" }}
                className="contacts-line"
              ></div>
            </div>
          </Fade>
          <Fade up>
            <div className="contactez-nous-txt">
              <p style={{ color: darkMode ? "whitesmoke" : "" }}>
                Voulez vous qu'on s'occupe de votre entreprise ?
              </p>
              <p
                style={{
                  color: darkMode ? "whitesmoke" : "",
                  marginTop: "-60px",
                  textAlign: "center",
                }}
              >
                N'hésitez pas à nous contacter...
              </p>
            </div>
          </Fade>
        </div>
        <div className="contacts-secondary-container">
          <div className="contacts-left-container">
            <div className="contacts-left">
              <Fade up>
                <div className="address">
                  <div className="iconContact-container">
                    <i
                      style={{ color: darkMode ? "whitesmoke" : "" }}
                      className="fa fa-map-marker"
                    ></i>
                  </div>
                  <div
                    className="contacts-adress-container"
                    style={{ color: darkMode ? "whitesmoke" : "" }}
                  >
                    <h3>Addresse</h3>
                    <p>Goma, République Démocratique du Congo</p>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="address">
                  <div className="iconContact-container">
                    <i
                      style={{ color: darkMode ? "whitesmoke" : "" }}
                      className="fa fa-envelope"
                    ></i>
                  </div>
                  <div
                    className="contacts-adress-container"
                    style={{ color: darkMode ? "whitesmoke" : "" }}
                  >
                    <h3>Email</h3>
                    <p>contact@fidbagraphics.com</p>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="address">
                  <div className="iconContact-container">
                    <i
                      style={{ color: darkMode ? "#fff" : "" }}
                      className="fa fa-phone"
                    ></i>
                  </div>
                  <div
                    className="contacts-adress-container"
                    style={{ color: darkMode ? "whitesmoke" : "" }}
                  >
                    <h3>Telephones</h3>
                    <p>+243 995 602 208</p>
                    <p style={{ marginTop: -30 }}>+243 974 242 040</p>
                  </div>
                </div>
              </Fade>
              <Fade up>
                <div className="address">
                  <div className="iconContact-container">
                    <i
                      style={{ color: darkMode ? "whitesmoke" : "" }}
                      className="fa fa-calendar"
                    ></i>
                  </div>
                  <div
                    className="contacts-adress-container"
                    style={{ color: darkMode ? "whitesmoke" : "" }}
                  >
                    <h3>Horaires</h3>
                    <p>Lundi - Vendredi</p>
                    <p style={{ marginTop: "-20px" }}>08h- 18h</p>
                    <p>Samedi</p>
                    <p style={{ marginTop: "-20px" }}>10h- 16h</p>
                  </div>
                </div>
              </Fade>
            </div>
          </div>
          <Bounce center>
            <div className="contacts-body-container">
              <Map
                containerStyle={containerStyle}
                google={this.props.google}
                zoom={16}
                initialCenter={{
                  lat: -1.6835,
                  lng: 29.2356,
                }}
              >
                <Marker
                  onClick={this.onMarkerClick}
                  name={"Current location"}
                />

                <InfoWindow onClose={this.onInfoWindowClose}>
                  <h4>FIDBA GRAPHICS</h4>
                </InfoWindow>
              </Map>
            </div>
          </Bounce>
          <div className="contacts-right-container">
            <div className="contacts-form-main-container">
              <form onSubmit={this.handleSubmit}>
                <Fade up>
                  <div className="name-input">
                    <div className="contacts-icon-container">
                      <i
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        className="fa fa-user"
                      ></i>
                    </div>
                    <div className="form-container">
                      <input
                        name="name"
                        value={name}
                        onChange={this.hangleChange}
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        type="text"
                        placeholder="Nom / Postnom"
                      />
                    </div>
                    <div className="star-container">
                      <i
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        className="fa fa-star"
                      ></i>
                    </div>
                    {this.state.errors.message && (
                      <span className="error-message">
                        {this.state.errors.message}
                      </span>
                    )}
                  </div>
                </Fade>
                <Fade up>
                  <div className="name-input">
                    <div className="contacts-icon-container">
                      <i
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        className="fa fa-envelope"
                      ></i>
                    </div>
                    <div className="form-container">
                      <input
                        name="email"
                        value={email}
                        onChange={this.hangleChange}
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        type="text"
                        placeholder="Email"
                      />
                    </div>
                    <div className="star-container">
                      <i
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        className="fa fa-star"
                      ></i>
                    </div>
                  </div>
                </Fade>
                <Fade up>
                  <div className="name-input">
                    <div className="contacts-icon-container">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="form-container">
                      <input
                        name="phone"
                        value={phone}
                        onChange={this.hangleChange}
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        type="text"
                        placeholder="Telephone"
                      />
                    </div>
                    {this.state.errors.phone && (
                      <span className="error-message">
                        {this.state.errors.phone}
                      </span>
                    )}
                  </div>
                </Fade>
                <Fade up>
                  <div className="text-area-container">
                    <textarea
                      name="message"
                      value={message}
                      onChange={this.hangleChange}
                      style={{ color: darkMode ? "whitesmoke" : "" }}
                      id="w3review"
                      rows="6"
                      cols="50"
                      placeholder="Veuillez enter votre message ou commentaire par ici...  
                   "
                    ></textarea>

                    <div className="star-container">
                      <i
                        style={{ color: darkMode ? "whitesmoke" : "" }}
                        className="fa fa-star"
                      ></i>
                    </div>
                    {this.state.errors.message && (
                      <span className="error-message">
                        {this.state.errors.message}
                      </span>
                    )}
                  </div>
                </Fade>
                <Fade up>
                  <div className="condition">
                    <input type="checkbox" />
                    <div className="text">
                      <p style={{ color: darkMode ? "whitesmoke" : "" }}>
                        En soumettant ces informations, vous acceptez de
                        recevoir nos newsletter via votre addresse E-mail.
                      </p>
                    </div>
                  </div>
                </Fade>
                <Fade up>
                  <div className="submit-btn-container">
                    <div className="btn-wrapper-submit">
                      <button
                        style={{
                          backgroundColor: "#ccc",
                          color: "whitesmoke",
                          cursor: this.state.isSending && "none",
                        }}
                      >
                        {this.state.isSending ? <LoadingSpinner /> : "Envoyer"}
                      </button>
                      {this.state.isSending && (
                        <div className="button-desable"></div>
                      )}
                    </div>
                  </div>
                </Fade>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDOhrqODvE_uljJS62OjJaadQI6_NQfkrQ",
})(ContactsPage);
// AIzaSyD86JrnzmW9XAJMtre0i4snDmOuPJIuOEs not restricted
// AIzaSyDOhrqODvE_uljJS62OjJaadQI6_NQfkrQ restricted API key for google maps
//https://www.youtube.com/watch?v=rWiYi9v8JFU
