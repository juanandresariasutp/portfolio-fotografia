import React from 'react';
import { MessageCircle } from 'lucide-react'; // Usamos Lucide para el icono
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573207161427"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
};

export default WhatsAppButton;