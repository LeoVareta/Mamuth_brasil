import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTAButton from '@/components/CTAButton';

// 1. Adicione 'buttonText' às props
const ProductCard = ({ image, name, description, specs, path, onCTAClick, buttonText }) => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleDetailsClick = () => {
    if (path) {
      navigate(path);
    } else if (onCTAClick) {
      onCTAClick();
    }
  };

  // 2. Lógica para definir o rótulo do botão
  // Se 'buttonText' existir, usa ele. Se não, usa a lógica baseada no 'path'.
  const renderButtonText = buttonText || (path ? t('btnCTA.detalhes') : t('btnCTA.orçamento'));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
    >
      <div className="h-64 overflow-hidden cursor-pointer" onClick={handleDetailsClick}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          loading="lazy"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 
          className="text-xl font-bold mb-3 cursor-pointer" 
          style={{ color: 'var(--color-dark-blue)' }}
          onClick={handleDetailsClick}
        >
          {name}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {specs && (
          <ul className="mb-4 space-y-1">
            {specs.map((spec, index) => (
              <li key={index} className="text-sm text-gray-500 flex items-start">
                <span className="mr-2" style={{ color: '#FF5101' }}>•</span>
                {spec}
              </li>
            ))}
          </ul>
        )}

        <CTAButton 
          onClick={handleDetailsClick} 
          className="w-full py-2 px-4 text-sm md:text-base font-medium"
        >
          {renderButtonText}
        </CTAButton>
      </div>
    </motion.div>
  );
};

export default ProductCard;