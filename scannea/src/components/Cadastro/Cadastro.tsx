import React from "react";
import logoS from "../../assets/images/logo-s.png";
import "./register.css";
import "./responsive-register.css";
import "./reset.css";

const Cadastro: React.FC = () => {
  return (
    <>
      <main className="main">
        <section className="register-menu">
          <img src={logoS} className="logo" alt="Logo" />
          <form className="register-form">
            <input type="text" placeholder="Usuário" className="input" />
            <input type="email" placeholder="Email" className="input" />
            <input type="password" placeholder="Senha" className="input" />
            <input
              type="password"
              placeholder="Confirme a senha"
              className="input"
            />

            <input type="submit" value="CADASTRAR" className="register-btn" />
          </form>
        </section>
      </main>
    </>
  );
};

export default Cadastro;
