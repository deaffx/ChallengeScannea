import React, { useState } from "react";
import Banner from "../../assets/images/robot.jpg";
import IconCheck from "../../assets/images/verifica.png";
import IconRelatorio from "../../assets/images/relatorio.png";
import IconTempo from "../../assets/images/de-volta-no-tempo.png";
import IconIdeia from "../../assets/images/ideia.png";
import Banner2 from "../../assets/images/ilustration.png";
import "./Home.css";
import "./responsive-home.css";

const Home: React.FC = () => {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  const handleFAQClick = (
    index: number,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    setActiveFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="home">
      <section className="cta">
        <div>
          <h2>
            Seu assistente,
            <br />
            para seu automóvel.
          </h2>
          <a href="/cadastro" target="">
            <button className="cadastro">Cadastre-se</button>
          </a>
        </div>
        <div>
          <img src={Banner} alt="Banner" />
        </div>
      </section>

      <div className="cards-background">
        <section className="cards container mt-5">
          <div className="card">
            <img src={IconRelatorio} className="card-img-top" alt="Card 1" />
            <div className="card-body">
              <h5 className="card-title">Diagnóstico</h5>
              <p className="card-text">
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Preciso
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Descomplicado
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Rápido
              </p>
            </div>
          </div>

          <div className="card">
            <img src={IconTempo} className="card-img-top" alt="Card 2" />
            <div className="card-body">
              <h5 className="card-title">Economize Tempo</h5>
              <p className="card-text">
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Sem filas
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Sem dor de cabeça
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                100% automático
              </p>
            </div>
          </div>

          <div className="card">
            <img src={IconIdeia} className="card-img-top" alt="Card 3" />
            <div className="card-body">
              <h5 className="card-title">Sugestões</h5>
              <p className="card-text">
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Melhorias
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Dicas personalizadas
                <br />
                <img src={IconCheck} className="card-img-top" alt="Card 3" />
                Suporte especializado
              </p>
            </div>
          </div>
        </section>
      </div>

      <section id="faq" className="custom-section section-1">
        <div className="faq container">
          <div className="left-content">
            <img src={Banner2} alt="Ilustração" className="section-image" />
          </div>
          <div className="right-content">
            <h2>Tenha seu diagnóstico sempre que precisar.</h2>
          </div>
        </div>
        <div className="faq-card">
          <div className="faq-left">
            <h3>
              Dúvidas <br />
              frequentes
            </h3>
            <p>
              Acesse nossa central de <br />
              suporte, caso não encontre <br />
              sua dúvida aqui
            </p>
            <button>Central de suporte</button>
          </div>
          <div className="faq-right">
            <ul>
              {[
                "O que é o Scannea?",
                "Existe alguma taxa de serviço?",
                "Existe alguma cobrança pra usar o Scannea?",
                "Por quanto tempo posso usar o Scanbot?",
                "Tenho um problema no meu automóvel, posso usar o Scannea?",
              ].map((question, index) => (
                <li key={index}>
                  <a href="#" onClick={(event) => handleFAQClick(index, event)}>
                    {`0${index + 1} - ${question}`}
                  </a>
                  <p
                    className={`faq-answer ${
                      activeFAQ === index ? "show" : ""
                    }`}
                  >
                    {index === 0 &&
                      "O Scannea é uma plataforma que usa chatbot para diagnosticar problemas automotivos de forma automatizada, gerando um auto orçamento e descritivo do problema, permitindo ao cliente economizar tempo e ser orientado de forma mais acertiva possível."}
                    {index === 1 &&
                      "Sim, após o período de teste gratuito, será cobrada uma assinatura mensal de 30 reais para continuar utilizando o serviço."}
                    {index === 2 &&
                      "O Scannea oferece um período de teste gratuito para novos clientes, mas após o teste, é necessário uma assinatura mensal."}
                    {index === 3 &&
                      "O Scannea oferece um período de teste de 30 dias gratuito, após o qual será cobrada uma assinatura mensal para continuar usando o serviço."}
                    {index === 4 &&
                      "Sim, o Scannea pode ser utilizado para diagnosticar problemas automotivos de forma automatizada e fornecer um orçamento preliminar (peças e serviço físico)."}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="fundo"></div>
    </div>
  );
};

export default Home;
