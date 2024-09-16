import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo1.png";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header>
      <div className="menu">
        <img src={logo} alt="Logo" className="logo" />
        <nav id="menu">
          <ul>
            <li>
              <Link to="/home">Inicio</Link>
            </li>
            <li>
              <Link to="/chatbot">Scanbot</Link>
            </li>
            <li>
              <Link to="/contato">Integrantes</Link>
            </li>
            <li>
              <Link to="/home#faq">Ajuda</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="buttons">
        <Link to="/cadastro" target="">
          <button className="cadastro">Cadastre-se</button>
        </Link>
        <Link to="/login" target="">
          <button className="login">Login</button>
        </Link>
      </div>
      <div className="burger-menu">
        <input type="checkbox" id="menu-hamburger" />
        <label htmlFor="menu-hamburger">
          <span className="line"></span>
        </label>
        <div className="menu-mobile">
          <nav className="nav-mobile">
            <ul>
              <li>
                <Link to="/home">Inicio</Link>
              </li>
              <li>
                <Link to="/chatbot">Scanbot</Link>
              </li>
              <li>
                <Link to="/contato">Integrantes</Link>
              </li>
              <li>
                <Link to="/home#faq">Ajuda</Link>
              </li>
              <li>
                <div className="buttons-mobile">
                  <Link to="/cadastro" target="">
                    <button className="cadastro">Cadastre-se</button>
                  </Link>
                  <Link to="/login" target="">
                    <button className="login">Login</button>
                  </Link>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
