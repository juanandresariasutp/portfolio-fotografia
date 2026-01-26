function Contact() {
  return (
    <section className="contact-section">
      <h3 className="contact-title">Contacto</h3>

      <form
        className="contact-form"
        action="https://formspree.io/f/mpqdrovv"
        method="POST"
        name="contact"
      >
        {/* Anti-spam */}
        <input type="text" name="_gotcha" style={{ display: "none" }} />

        <input
          type="hidden"
          name="_subject"
          value="Nuevo mensaje desde tu portafolio"
        />

        <label className="sr-only" htmlFor="name">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Nombre"
          required
        />

        <label className="sr-only" htmlFor="email">Correo</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
        />

        <label className="sr-only" htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Cuéntame sobre tu evento o proyecto"
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>

      <p className="contact-alt">
        O contáctame por{" "}
        <a
          href="https://wa.me/573207161427"
          target="_blank"
          rel="noopener noreferrer"
        >
          WhatsApp
        </a>
      </p>
    </section>
  );
}

export default Contact;
