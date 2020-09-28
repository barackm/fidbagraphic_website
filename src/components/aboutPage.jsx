// import React, { Component } from "react";
// import "./aboutPage.css";
// import Slide from "react-reveal/Slide";
// import Shake from "react-reveal/Shake";
// import Fade from "react-reveal/Fade";
// import Reveal from "react-reveal/Reveal";
// import Zoom from "react-reveal/Zoom";
// import desktop from "../images/backgrounds/28505-7-macbook-picture.png";
// import tablet from "../images/44-transparent-tablet-png-image.png";
// import mobile from "../images/5-apple-iphone-png-image.png";
// class AboutPage extends Component {
//   state = {
//     firstContent: true,
//     secondContent: false,
//     thirdContent: false,
//     height: 512,
//   };

//   componentDidMount() {
//     this.updateWindowDimensions();
//     window.addEventListener("resize", this.updateWindowDimensions.bind(this));
//   }

//   componentWillUnmount() {
//     window.removeEventListener(
//       "resize",
//       this.updateWindowDimensions.bind(this)
//     );
//   }

//   updateWindowDimensions = () => {
//     this.setState({ width: window.innerWidth, height: window.innerHeight });
//   };
//   handleShowFirstContent = () => {
//     this.setState({
//       firstContent: true,
//       secondContent: false,
//       thirdContent: false,
//     });
//   };
//   handleShowSecondContent = () => {
//     this.setState({
//       firstContent: false,
//       secondContent: true,
//       thirdContent: false,
//     });
//   };
//   handleShowThirdContent = () => {
//     this.setState({
//       firstContent: false,
//       secondContent: false,
//       thirdContent: true,
//     });
//   };
//   render() {
//     const {
//       firstContent: first,
//       secondContent: second,
//       thirdContent: third,
//       width,
//     } = this.state;
//     const { darkMode } = this.props;
//     const logoContainerStyles = (contentSelected) => {
//       if (contentSelected) {
//         return {
//           backgroundColor: darkMode ? "#fff" : "#000",
//         };
//       }
//     };
//     const logoStyles = (contentSelected) => {
//       if (contentSelected) {
//         return {
//           color: darkMode ? "#000" : "#fff",
//         };
//       } else {
//         return {
//           color: darkMode ? "#fff" : "#000",
//         };
//       }
//     };

//     const image = () => {
//       if (width > 800) {
//         return desktop;
//       } else if (width <= 468) {
//         return null;
//       } else {
//         return tablet;
//       }
//     };
//     return (
//       <div
//         className={
//           darkMode
//             ? "aboutPage-main-container dark"
//             : "aboutPage-main-container"
//         }
//         id="aboutPage"
//       >
//         <div className="about-title">
//           <Slide bottom>
//             <h1 style={{ color: darkMode ? "#fff" : "" }}>À propos</h1>
//           </Slide>

//           <div
//             className="about-line"
//             style={{ backgroundColor: darkMode ? "#fff" : "" }}
//           ></div>
//         </div>

//         <div className="main-content-about">
//           <div className="computer-container">
//             <img src={image()} alt="" srcSet="" />
//           </div>

//           <div className="icons-content">
//             <Slide bottom>
//               <div
//                 className="qui-sommes-nous"
//                 onClick={this.handleShowFirstContent}
//               >
//                 <div
//                   className="icon-container-about"
//                   style={logoContainerStyles(first)}
//                 >
//                   <i className="fa fa-question" style={logoStyles(first)}></i>
//                 </div>
//                 <Fade left>
//                   <h4 style={{ color: darkMode ? "#fff" : "" }}>
//                     Qui sommes nous
//                   </h4>
//                 </Fade>
//               </div>
//             </Slide>
//             <Slide bottom>
//               <div
//                 className="qui-sommes-nous"
//                 onClick={this.handleShowSecondContent}
//               >
//                 <div
//                   className="icon-container-about"
//                   style={logoContainerStyles(second)}
//                 >
//                   <i className="fa fa-trophy" style={logoStyles(second)}></i>
//                 </div>
//                 <Fade left>
//                   <h4 style={{ color: darkMode ? "#fff" : "" }}>
//                     Notre objectif
//                   </h4>
//                 </Fade>
//               </div>
//             </Slide>
//             <Slide bottom>
//               <div
//                 className="qui-sommes-nous"
//                 onClick={this.handleShowThirdContent}
//               >
//                 <div
//                   className="icon-container-about"
//                   style={logoContainerStyles(third)}
//                 >
//                   <i className="fa fa-heart" style={logoStyles(third)}></i>
//                 </div>
//                 <Fade left>
//                   <h4 style={{ color: darkMode ? "#fff" : "" }}>Nos valeurs</h4>
//                 </Fade>
//               </div>
//             </Slide>
//           </div>

//           <Shake>
//             <div className="text-content-about">
//               {first ? (
//                 <Reveal effect="fadeInUp">
//                   <div className="quiSommeNous1-container">
//                     <h1 style={{ color: darkMode ? "#fff" : "" }}>
//                       Qui sommes nous
//                     </h1>
//                     <Zoom left cascade>
//                       <div className="secondary-container">
//                         <p style={{ color: darkMode ? "#fff" : "" }}>
//                           Fidba Graphics est une agence de communication offrant
//                           ses services en paquet pour les startups et enteprises
//                           africaines afin de promouvoir les produits et services
//                           made in Africa en répondant à tous les besoins de
//                           communication et à un prix très abordable.
//                         </p>
//                       </div>
//                     </Zoom>
//                   </div>
//                 </Reveal>
//               ) : (
//                 ""
//               )}

//               {second ? (
//                 <div className="quiSommeNous1-container">
//                   <h1 style={{ color: darkMode ? "#fff" : "" }}>
//                     Notre Objectif
//                   </h1>
//                   <Zoom left cascade>
//                     <div className="secondary-container">
//                       <p style={{ color: darkMode ? "#fff" : "" }}>
//                         Est d’appuyer sur le plan marketing les enteprises
//                         africaines, <br></br>dans le souci de vendre l’image
//                         positive de l’Afrique au monde à travers
//                         l’entrepreneuriat.
//                       </p>
//                     </div>
//                   </Zoom>
//                 </div>
//               ) : (
//                 ""
//               )}

//               {third ? (
//                 <div className="quiSommeNous1-container">
//                   <h1 style={{ color: darkMode ? "#fff" : "" }}>Nos Valeurs</h1>
//                   <Zoom left cascade>
//                     <div className="secondary-container">
//                       <p style={{ color: darkMode ? "#fff" : "" }}>
//                         Nos valeurs sont les principes qui nous amènent au
//                         développement des entreprises africaines.<br></br> Elles
//                         sont aussi le bouclier de leurs épanouissements.
//                       </p>
//                     </div>
//                   </Zoom>
//                 </div>
//               ) : (
//                 ""
//               )}
//             </div>
//           </Shake>
//         </div>
//       </div>
//     );
//   }
// }

// export default AboutPage;
