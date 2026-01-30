import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* La tarjeta con fondo traslúcido empieza aquí */}
        <div className="contact-card">
          <div className="contact-header">
            <h3 className="contact-title">Hablemos</h3>
            <p className="contact-subtitle">Déjame tus datos y me pondré en contacto contigo.</p>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/mpqdrovv"
            method="POST"
          >
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <input type="hidden" name="_subject" value="Nuevo contacto desde el Portafolio" />

            <div className="form-group">
              <input type="text" name="name" id="name" placeholder="Nombre completo" required />
              <span className="input-line"></span>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="tel" name="phone" id="phone" placeholder="Celular" required />
                <span className="input-line"></span>
              </div>
              <div className="form-group">
                <input type="email" name="email" id="email" placeholder="Correo electrónico" required />
                <span className="input-line"></span>
              </div>
            </div>

            <div className="checkbox-group">
              <input type="checkbox" id="auth" name="authorization" required />
                <label htmlFor="auth">Autorizo que me envíen información.</label>
            </div>

            <button type="submit" className="submit-btn">
              Enviar
            </button>
          </form>
        </div>
        {/* Fin de la tarjeta */}

      </div>
    </section>
  );
}

export default Contact;