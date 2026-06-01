import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';

// Import da imagem
import bicoJatoAbrasivo from '@/assets/images/bico-jato-abrasivo-500bar.png';

const BicoJatoAbrasivo = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: t('acessorioslavadoras.bicojato.title'), cover: bicoJatoAbrasivo, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioslavadoras.bicojato.title')} - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <ProductSection 
        slides={slides} 
        bgImg={bgImg} 
      />

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('acessorioslavadoras.bicojato.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioslavadoras.bicojato.texto1')}
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection/>
      </div>
    </div>
  );
};

export default BicoJatoAbrasivo;