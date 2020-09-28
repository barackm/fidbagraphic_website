// import React, { Component } from "react";
// import "./menu.css";
// import { Link } from "react-scroll";
// import fidbaLogo from "../images/logos/FidbaGraphics white without title.png";
// import { FaHome } from "react-icons/fa";
// class NavBar extends Component {
//   render() {
//     const { darkMode, onCloseNav, onOpenNav, navbarToggled } = this.props;

//     const navbarClasses1 = navbarToggled
//       ? "navbar-main-container toggled"
//       : "navbar-main-container ";
//     const navbarClasses = darkMode ? navbarClasses1 + " dark" : navbarClasses1;
//     return (
//       <div
//         style={{ backgroundColor: darkMode ? "#575555" : "" }}
//         id="myNav"
//         className={navbarClasses}
//       >
//         <div className="logo-container">
//           <Link
//             to="accueil"
//             spy={true}
//             onClick={onCloseNav}
//             smooth={true}
//             duration={800}
//             style={{ color: darkMode ? "whitesmoke" : "" }}
//           >
//             <div
//               className="logo-fidba"
//               style={{
//                 backgroundImage: darkMode ? fidbaLogo : "",
//                 cursor: "pointer",
//               }}
//             ></div>
//           </Link>
//           <i
//             className={navbarToggled ? "fa fa-times" : "fa fa-bars"}
//             onClick={onOpenNav}
//           ></i>
//         </div>

//         <div className="links-container">
//           <ul className="navigation">
//             <li>
//               <Link
//                 href="#1"
//                 to="accueil"
//                 spy={true}
//                 smooth={true}
//                 duration={800}
//                 className="link"
//                 id="home"
//                 style={{ color: darkMode ? "whitesmoke" : "" }}
//                 onClick={onCloseNav}
//               >
//                 <FaHome />
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="#2"
//                 onClick={onCloseNav}
//                 to="aboutPage"
//                 spy={true}
//                 id="about"
//                 smooth={true}
//                 duration={800}
//                 className="link"
//                 style={{ color: darkMode ? "whitesmoke" : "" }}
//               >
//                 À propos
//               </Link>
//             </li>

//             <li>
//               <div className="dropdown">
//                 <Link
//                   href="#3"
//                   onClick={onCloseNav}
//                   to="services"
//                   spy={true}
//                   id="service"
//                   smooth={true}
//                   duration={800}
//                   className="dropbtn"
//                   style={{ color: darkMode ? "whitesmoke" : "" }}
//                 >
//                   Services
//                 </Link>
//                 <div className="dropdown-content">
//                   <Link
//                     onClick={onCloseNav}
//                     to="designGraphic"
//                     spy={true}
//                     id="graphic"
//                     smooth={true}
//                     duration={800}
//                     className="link"
//                     style={{ color: darkMode ? "whitesmoke" : "" }}
//                   >
//                     Design Graphique
//                   </Link>

//                   <Link
//                     onClick={onCloseNav}
//                     to="webDesign"
//                     spy={true}
//                     smooth={true}
//                     duration={800}
//                     id="web"
//                     className="link"
//                     style={{ color: darkMode ? "whitesmoke" : "" }}
//                   >
//                     Services Web
//                   </Link>
//                   <Link
//                     onClick={onCloseNav}
//                     to="marketingDigital"
//                     spy={true}
//                     smooth={true}
//                     duration={800}
//                     id="marketing"
//                     className="link"
//                     style={{ color: darkMode ? "whitesmoke" : "" }}
//                   >
//                     Marketing Digital
//                   </Link>
//                   <Link
//                     onClick={onCloseNav}
//                     to="portfolio"
//                     spy={true}
//                     smooth={true}
//                     duration={800}
//                     className="link"
//                     style={{ color: darkMode ? "whitesmoke" : "" }}
//                   >
//                     Portfolio
//                   </Link>
//                 </div>
//               </div>
//             </li>
//             <li>
//               <a
//                 href="https://solutionsentreprise.fidbagraphics.com"
//                 target="blank"
//                 id="solution"
//                 style={{ color: darkMode ? "whitesmoke" : "" }}
//               >
//                 Solutions Entreprise
//               </a>
//             </li>
//             <li>
//               <Link
//                 href="#4"
//                 onClick={onCloseNav}
//                 to="contacts"
//                 spy={true}
//                 smooth={true}
//                 duration={800}
//                 className="link"
//                 style={{ color: darkMode ? "whitesmoke" : "" }}
//               >
//                 Contacts
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;
