import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import pistola350bar from '@/assets/images/pistola-350bar.png';

const Pistola350bar = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Pistola 350 Bar', artist: 'Trifásico', cover: pistola350bar, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Pistola 350 bar - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative py-0 w-full" 
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
            Pistola 350 Bar
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Gatilhos e lanças indicadas para hidrolavadoras de alta pressão
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          <div className="w-full">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-lg">Modelo</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-lg">Pressão MAX (bar)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-lg">Vazão (L/min)</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-lg">Conexão Entrada</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-lg">Peso (kg)</th>
                  <th className="py-4 px-2 font-bold text-[10px] sm:text-xs md:text-lg">Comprimento</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-2 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-xl">Pistola 350 Bar</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-xl">350</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-xl">37</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-xl">M22x1,5</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-xl">1,0</td>
                  <td className="py-6 px-2 text-[10px] sm:text-xs md:text-xl">1200mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default Pistola350bar;