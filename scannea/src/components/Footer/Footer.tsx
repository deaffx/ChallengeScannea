import React from "react";
import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.png";
import Instagram from "../../assets/images/instagram.png";
import Twitter from "../../assets/images/twitter.png";
import Whatsapp from "../../assets/images/whatsapp.png";
import Youtube from "../../assets/images/youtube.png";
import LogoFooter from "../../assets/images/logo2.png";
import "./footer.css";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="conteudo">
        <img src={LogoFooter} alt="Logo do site" className="logo" />
        <div className="redes-sociais">
          {/* Redes Sociais */}
          <a href="https://www.facebook.com" target="_blank">
            <img src={Facebook} alt="Facebook" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a href="https://www.whatsapp.com" target="_blank">
            <img src={Whatsapp} alt="WhatsApp" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={Youtube} alt="YouTube" />
          </a>
        </div>
        <nav className="menu">
          <Link to="/home">Inicio</Link>
          <Link to="/chatbot">Scanbot</Link>
          <Link to="/contato">Integrantes</Link>
          <Link to="/home#faq">Ajuda</Link>
        </nav>
      </div>
      <div className="faixa">
        <div className="left">
          Copyright 2024 by Scannea | Todos os direitos reservados
        </div>
        <div className="right">
          <a href="/">Termos e política</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
