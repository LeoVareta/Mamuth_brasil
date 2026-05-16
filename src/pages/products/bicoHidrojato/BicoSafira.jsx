import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bicoSafira from '@/assets/images/bico-safira.png';

const BicoSafira = () => {
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: 'Bico Safira',  cover: bicoSafira, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Safira - Mamuth</title>
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
            Bico Safira
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Os bicos ou insertos são utilizados em acessórios aplicados no processo de hidrojateamento 
           como por exemplo: Pistolas, Ferramentas Rotativas, Barras Spray, Bicos Rotativos entre outros. 
           As configurações devem ser observadas a cada aplicação, especificações e limitações de pressão 
           e vazão de cada equipamento ou processo. Podem ser aplicados a processos de corte, limpeza, 
           decapagem, desobstrução e preparação de superfícies.
          </p>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default BicoSafira;