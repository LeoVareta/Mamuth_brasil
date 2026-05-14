import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import CTAButton from '@/components/CTAButton';

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  benefits,
  buttonText,
  link,
  onCTAClick
}) => {
  
  const navigate = useNavigate();

  const handleClick = () => {

    // se tiver link → navega para a rota
    if (link) {
      navigate(link);
      return;
    }

    // se não tiver link → executa função normal
    if (onCTAClick) {
      onCTAClick(title);
    }

  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg p-6 h-full flex flex-col"
    >

      {/* Ícone */}
      <div
        className="w-16 h-16 rounded-lg flex items-center justify-center mb-4"
        style={{ backgroundColor: '#FF5101' }}
      >
        <Icon className="w-8 h-8 text-white" />
      </div>

      {/* Título */}
      <h3
        className="text-xl font-bold mb-3"
        style={{ color: 'var(--color-dark-blue)' }}
      >
        {title}
      </h3>

      {/* Descrição */}
      <p className="text-gray-600 mb-4">
        {description}
      </p>

      {/* Benefícios */}
      {benefits && (
        <ul className="mb-4 space-y-2 flex-grow">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="text-sm text-gray-600 flex items-start"
            >
              <span
                className="mr-2 mt-0.5"
                style={{ color: '#FF5101' }}
              >
                ✓
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      )}

      {/* Botão */}
      <CTAButton
        onClick={handleClick}
        className="w-full text-sm"
      >
        {buttonText}
      </CTAButton>

    </motion.div>
  );
};

export default ServiceCard;