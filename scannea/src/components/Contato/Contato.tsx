import React from "react";
import thiagoFoto from "../../assets/images/thiago.jpeg";
import giovannaFoto from "../../assets/images/giovanna.jpg";
import raphaelFoto from "../../assets/images/raphael.jpeg";
import "../Home/Home.css";
import "./responsive-contato.css";

const Contato: React.FC = () => {
  const integrantes = [
    {
      nome: "Thiago Moreno Matheus",
      rm: "554507",
      github: "https://github.com/deaffx",
      foto: thiagoFoto,
    },
    {
      nome: "Giovanna Laturague Bueno",
      rm: "556248",
      github: "https://github.com/giovanna2005lb",
      foto: giovannaFoto,
    },
    {
      nome: "Raphael Cardoso Peres",
      rm: "558578",
      github: "https://github.com/raphacp35",
      foto: raphaelFoto,
    },
  ];

  return (
    <>
      <div className="container-1">
        <div className="main-contato">
          <div className="profile-menu-contato">
            <h2>Conheça os Integrantes</h2>
            <div className="profiles-wrapper">
              {integrantes.map((integrante, index) => (
                <div key={index} className="profile-card">
                  <div className="profile-image">
                    <img
                      src={integrante.foto}
                      alt={`Foto de ${integrante.nome}`}
                    />
                  </div>
                  <div className="profile-infos">
                    <h3>{integrante.nome}</h3>
                    <p>RM: {integrante.rm}</p>
                    <p>Turma 1TDSA</p>
                  </div>
                  <div className="profile-links">
                    <a
                      href={integrante.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <a
              href="https://github.com/deaffx/ChallengeScannea"
              target="_blank"
            >
              Repositório do GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contato;
