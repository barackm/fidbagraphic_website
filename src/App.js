import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/homePage";
// import AboutPage from "./components/aboutPage";
import ScrollBar from "./components/common/scrollBar";
// import AnimatedScreen from "./components/common/animatedScreen";
import Services from "./components/servicesPage";
// import $ from "jquery";
import GraphicDesign from "./components/graphicDesign";
import Footer from "./components/footer";
import OurTeamPage from "./components/ourTeamPage";
import WebDesignPage from "./components/webDesignPage";
import MarketingDigitalPage from "./components/marketingDigitalPage";
import ContactsPage from "./components/contactsPage";
import Portfolio from "./components/portfolio";
import FloatingActionBtn from "./components/common/floatingActionBtn";
import OurPatners from "./components/ourPatners";
import Spinner from "./components/common/spinner/spinner";
import NewNavbar from "./components/newNavbar";
import NewAboutPage from "./components/newAboutPage";
class App extends React.Component {
  state = {
    toggleDarkMode: false,
    loadPage: false,
    navbarToggled: false,
    isMenuToggled: false,
  };
  componentDidMount() {
    const closeNavbar = () => {
      this.setState({ isMenuToggled: false });
    };

    window.addEventListener("load", (event) => {
      setTimeout(() => {
        this.setState({ loadPage: true });

        window.onscroll = function () {
          const navbar = document.getElementById("newNav");
          closeNavbar();
          navbar.classList.remove("toggled");
          const scrollHeight = window.scrollY;
          if (scrollHeight > 600) {
            navbar.classList.add("scrolling");
          } else {
            navbar.classList.remove("scrolling");
          }
          myFunction();
          scrollFunction();
        };
        function myFunction() {
          var winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
          var height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          var scrolled = (winScroll / height) * 100;
          document.getElementById("bar").style.width = scrolled + "%";
        }
        var mybutton = document.getElementById("myBtn");
        function scrollFunction() {
          if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
          ) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
      }, 5000);
    });

    window.addEventListener("scroll", () => {
      this.setState({
        navbarToggled: false,
      });
    });
  }
  handleToggleDakkMode = () => {
    this.setState({ toggleDarkMode: !this.state.toggleDarkMode });
    localStorage.setItem("darkMode", this.state.toggleDarkMode);
    const aboutPage = document.getElementById("about");
    if (!this.state.toggleDarkMode) {
      aboutPage.classList.add("dark");
    } else {
      aboutPage.classList.remove("dark");
    }
  };
  handleShowMenuLinks = () => {
    this.setState({ isMenuToggled: !this.state.isMenuToggled });
    const navbar = document.getElementById("newNav");
    if (!this.state.isMenuToggled) {
      navbar.classList.add("toggled");
    } else {
      navbar.classList.remove("toggled");
    }
  };
  handleCloseNavBar = () => {
    this.setState({ isMenuToggled: false });
  };

  render() {
    const { toggleDarkMode, navbarToggled } = this.state;

    return (
      <React.Fragment>
        <ToastContainer />
        {!this.state.loadPage ? (
          <Spinner />
        ) : (
          <>
            <div className="app-main-container">
              <div className="app-up-container">
                <ScrollBar darkMode={toggleDarkMode} />
                <section className="page-section" id="1">
                  <NewNavbar
                    isMenuToggled={this.state.isMenuToggled}
                    onOpen={this.handleShowMenuLinks}
                    onClose={this.handleCloseNavBar}
                  />
                  <HomePage
                    darkMode={toggleDarkMode}
                    onCloseNav={this.handleCloseNav}
                    onOpenNav={this.handleOpenNav}
                    navbarToggled={navbarToggled}
                  />
                </section>
                <section className="page-section" id="2">
                  <NewAboutPage />
                </section>
                <section className="page-section" id="3">
                  <Services darkMode={toggleDarkMode} />
                </section>
                <section className="page-section" id="3">
                  <GraphicDesign darkMode={toggleDarkMode} />
                </section>
                <WebDesignPage darkMode={toggleDarkMode} />
                <MarketingDigitalPage darkMode={toggleDarkMode} />
                <OurPatners />
                <Portfolio darkMode={toggleDarkMode} />
                <OurTeamPage darkMode={toggleDarkMode} />
                <section className="page-section" id="4">
                  <ContactsPage darkMode={toggleDarkMode} />
                </section>
                <FloatingActionBtn
                  darkMode={toggleDarkMode}
                  onToggleDrakMode={this.handleToggleDakkMode}
                />
              </div>
              <Footer darkMode={toggleDarkMode} />
            </div>
          </>
        )}
      </React.Fragment>
    );
  }
}

export default App;
