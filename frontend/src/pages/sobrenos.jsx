// src/pages/SobreNos.jsx
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FaMoneyBillWave, FaCreditCard, FaRegCreditCard, FaQrcode, FaWhatsapp, FaPhone } from "react-icons/fa";
import imge from "../assets/icone/imge.webp"; // substitua se quiser um banner da Copo Cheio
import "./sobrenos.css";

const Sobrenos = () => {
  return (
    <div className="sobrenos-container">
      <Navbar />
      <main className="sobrenos-main">
        <div className="sobrenos-card">
          {/* Banner */}
          <div className="sobrenos-banner">
            <img src={imge} alt="Banner Copo Cheio App" />
          </div>

          {/* Conteúdo */}
          <div className="sobrenos-content">
            {/* Status e título */}
            <div className="sobrenos-status-title">
              <span className="sobrenos-status">ABERTO</span>
              <div className="sobrenos-title-group">
                <h1 className="sobrenos-title">Copo Cheio App</h1>
                <p className="sobrenos-subtitle">Sua bebida favorita entregue gelada onde você estiver!</p>
              </div>
            </div>

            {/* Abas */}
            <div className="sobrenos-tabs">
              <button className="sobrenos-tab">Sobre</button>
              <button className="sobrenos-tab">Horários</button>
            </div>

            {/* Dados */}
            <div className="sobrenos-info">
              <div>
                <h2>Endereço:</h2>
                <p>Avenida das Bebidas, 777, Centro, São Paulo - SP</p>
              </div>

              <div>
                <h2>Formas de pagamento:</h2>
                <div className="sobrenos-pagamento">
                  <span><FaMoneyBillWave /> Dinheiro</span>
                  <span><FaCreditCard /> Cartão de Crédito</span>
                  <span><FaRegCreditCard /> Cartão de Débito</span>
                  <span><FaQrcode /> Pix via App</span>
                </div>
              </div>

              <div>
                <h2>Telefone:</h2>
                <a href="tel:+551130000000"><FaPhone /> (11) 3000-0000</a>
              </div>

              <div>
                <h2>WhatsApp:</h2>
                <a href="https://wa.me/5511999999999"><FaWhatsapp /> (11) 99999-9999</a>
              </div>

              <div>
                <h2>Tempo médio p/ retirar no local:</h2>
                <p>15 mins</p>
              </div>

              <div>
                <h2>Taxa e tempo de entrega:</h2>
                <span className="entrega-gratis">Entrega Grátis</span>
                <span> / 45 mins</span>
              </div>

              <div>
                <h2 className="entrega-gratis-title">Entregas grátis</h2>
                <p>Pedido mínimo: <strong>R$ 20,00</strong></p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Sobrenos;
