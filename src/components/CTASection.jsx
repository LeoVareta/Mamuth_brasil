import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // 1. Importe o Link

import bgCta from "@/assets/images/bg-cta.png"

const CTASection = () => {
  const { t } = useTranslation(); // 2. Remova a prop handleProductClick se não for mais usar
  return (
    <section className="py-16 text-white w-full h-auto bg-fixed bg-top" style={{ backgroundImage: `url(${bgCta})`}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('cta.titleCTA')}
          </h2>
          <p className="text-xl mb-8">
            {t('cta.textCTA')}
          </p>
          <Link
            to="/Contato" 
            className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold bg-white text-lg transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            style={{ color: '#001529' }} // Substituí a variável para garantir que funcione
          >
            {t('cta.btnCTA')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;