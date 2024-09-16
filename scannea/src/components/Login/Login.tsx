import React from "react";
import logoS from "../../assets/images/logo-s.png";
import "./login.css";
import "./responsive-login.css";

const Login: React.FC = () => {
  return (
    <>
      <main className="main">
        <section className="login-menu">
          <img src={logoS} className="logo" />
          <form className="login-form">
            <input
              type="text"
              placeholder="Usuário / Email"
              className="input"
            />
            <input type="password" placeholder="Senha" className="input" />

            <input type="submit" value="ENTRAR" className="login-btn" />
          </form>
        </section>
      </main>
    </>
  );
};
export default Login;
