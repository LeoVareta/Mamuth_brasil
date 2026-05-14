import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTAButton = ({ children, onClick, href, className = '', icon = true }) => {
  const buttonClasses = `inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-white transition-all hover:shadow-lg transform hover:-translate-y-0.5 ${className}`;
  
  const buttonContent = (
    <>
      {children}
      {icon && <ArrowRight className="ml-2 w-5 h-5" />}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={buttonClasses}
        style={{ backgroundColor: '#FF5101' }}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      style={{ backgroundColor: '#FF5101' }}
    >
      {buttonContent}
    </motion.button>
  );
};

export default CTAButton;