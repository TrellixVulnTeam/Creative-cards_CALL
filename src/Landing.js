import React from "react";
// import "./stylesheets/App.scss"; No debe tener el importa llega desde index.js a todo el componente
//import Header from './components/Header';
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
// import App from "./App";
import giftlogo from "./images/giftlogo.gif";

class Landing extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="page">
        <main class="main-container">
          <img
            class="main-container__logo"
            src={giftlogo}
            alt="profile-cards"
          />
          <h2 class="main-container__title">
            Reactiva tu presente, diseña tu futuro
          </h2>
          <p class="main-container__text">
            Crea mejores contactos profesionales de forma fácil y cómoda
          </p>
          <nav class="nav-container">
            <ul class="nav-container___list">
              <li class="nav-container___list--item">
                <i class="far fa-object-group list-icon"></i>
                <span class="list-text">Diseña</span>
              </li>
              <li class="nav-container___list--item">
                <i class="far fa-keyboard list-icon"></i>
                <span class="list-text">Rellena</span>
              </li>
              <li class="nav-container___list--item">
                <i class="fas fa-share-alt list-icon"></i>
                <span class="list-text">Comparte</span>
              </li>
            </ul>
          </nav>
          <Link to="/card">
            <span className="main-container__link">comenzar</span>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
