import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true, 
  titleColor = "text-[var(--color-dark-blue)]",
  subtitleColor = "text-[var(--color-gray)]"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${titleColor}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`text-lg md:text-2xl lg:text-2xl max-w-2xl mx-auto ${subtitleColor}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};


export default SectionTitle;