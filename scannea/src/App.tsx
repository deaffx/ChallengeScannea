import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Contato from "./components/Contato/Contato.tsx";
import Cadastro from "./components/Cadastro/Cadastro.tsx";
import Chatbot from "./components/Chatbot/Chatbot.tsx";
import Login from "./components/Login/Login.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} /> {/* Rota 404 */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
