import React from 'react';
import { Instagram, Linkedin, MessageCircle, Mail } from 'lucide-react';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LADO IZQUIERDO: Logo o Nombre */}
        <div className="footer-brand">
          <h2 className="footer-logo">Juan Andrés Arias</h2>
          <p>Capturando momentos, creando recuerdos.</p>
        </div>

        {/* CENTRO: Redes Sociales */}
        <div className="footer-socials">
          <a href="https://www.instagram.com/_avenue.vitae_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/573207161427" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <MessageCircle size={24} />
          </a>
          <a href="https://www.linkedin.com/in/juan-andrés-arias-tascón-328704280" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={24} />
          </a>
          <a href="mailto:juanandres.arias@utp.edu.co" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>

        {/* LADO DERECHO: Enlaces Rápidos (Opcional) */}
        <div className="footer-links">
          <a href="#hero">Inicio</a>
          <a href="#categories">Portafolio</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>&copy; {year} Juan Andrés Arias. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;