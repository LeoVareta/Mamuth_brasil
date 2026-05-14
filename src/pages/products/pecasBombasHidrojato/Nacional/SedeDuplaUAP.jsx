import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import sedeDuplaUAP from '@/assets/images/sede-dupla-uap.png';

const SedeDuplaUAP = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Sede Dupla UAP', cover: sedeDuplaUAP, color: '#FF5101' },
        { id: 2, title: 'Sede Dupla UAP', cover: sedeDuplaUAP, color: '#FF5101' },
        { id: 3, title: 'Sede Dupla UAP', cover: sedeDuplaUAP, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Sede dupla UAP - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-[1400px] mx-auto">
          <AppleCoverFlow slides={slides} />
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Sede Dupla UAP
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            A MAMUTH oferece uma linha completa de peças para Bombas de Alta e Ultra-Alta Pressão, abrangendo 
            diversas marcas e modelos disponíveis no mercado. Nossas peças são de fabricação própria, o que nos permite 
            garantir altos padrões de qualidade e durabilidade. Cada componente passa por um rigoroso controle de qualidade 
            para garantir desempenho superior e compatibilidade total com as bombas existentes no mercado nacional. 
            Com a MAMUTH, você pode confiar que está adquirindo peças confiáveis ​​e de alta performance, projetadas para atender às demandas exigidas.
          </p>

        </div>
      </section>
      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default SedeDuplaUAP;