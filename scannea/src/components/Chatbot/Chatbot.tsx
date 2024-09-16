// src/components/Chatbot.tsx
import React from "react";
import avatarRobo from "../../assets/images/robot-avatar.jpg";
import "./chatbot.css";
import "./responsive-chatbot.css";

const Chatbot: React.FC = () => {
  return (
    <>
      <main className="main">
        <div className="profile-menu">
          <div className="profile-card">
            <div className="profile-image">
              <img src={avatarRobo} alt="Avatar do Scanbot" />
            </div>
            <h2>ScanBot</h2>
          </div>
          <div className="button-container">
            <button>Conheça o ScanBot</button>
            <button>Veja nossos serviços</button>
            <button>Faça um upgrade</button>
            <button>Fale com o suporte</button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Chatbot;
