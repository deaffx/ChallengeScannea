import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../assets/images/404.png";
import "./NotFound.css";
import "./responsive-notfound.css";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <div className="not-found">
      <h2 className="not-found-title">Página Não Encontrada</h2>
      <div className="not-found-content">
        <div className="not-found-left">
          <h2 className="not-found-left-title">Oops!</h2>
          <p className="not-found-left-text">
            Desculpe, a página que você está procurando não foi encontrada.
          </p>
          <button className="home-button" onClick={handleGoHome}>
            Voltar ao Início
          </button>
        </div>
        <div className="not-found-right">
          <img
            src={error}
            alt="Página Não Encontrada"
            className="not-found-image"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
