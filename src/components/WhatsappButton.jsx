import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp
import './WhatsappButton.css'; // Vamos criar este CSS abaixo

const WhatsappButton = () => {
  const phoneNumber = "551127955555"; // Substitua pelo seu número (DDI + DDD + Número)
  const message = "Olá! Gostaria de mais informações."; // Mensagem padrão opcional
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contato pelo WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
    </a>
  );
};

export default WhatsappButton;