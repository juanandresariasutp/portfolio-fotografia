import React from 'react';
import './Hero.css';
import miFoto from '../assets/JuanArias.jpg'; // Asegúrate de tener tu foto en assets

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LADO IZQUIERDO: TEXTO */}
        <div className="hero-content">
          <h1>Juan Andrés Arias Tascón</h1>
          <p>Fotógrafo de eventos, deportes y retratos</p>
          <a href="https://wa.me/3207161427" className="hero-btn">
            Contáctame
          </a>
        </div>

        {/* LADO DERECHO: IMAGEN */}
        <div className="hero-image">
          <img src={miFoto} alt="Juan Andrés Arias - Fotógrafo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;