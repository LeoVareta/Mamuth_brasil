 import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bombaMTI200 from '@/assets/images/bombas-altapressao.png';

const BombaMTI200 = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Bomba MTI-200',  cover: bombaMTI200, color: '#FF5101' },
        { id: 2, title: 'Bomba MTI-200',  cover: bombaMTI200, color: '#FF5101' },
        { id: 3, title: 'Bomba MTI-200',  cover: bombaMTI200, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bomba MTI-200 - Mamuth</title>
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
            Bomba MTI-200
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Bomba Tríplex para hidrolavadoras ou testes hidrostaticos com pressão de 200 bar e vazão de 45L/min.
          </p>

        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rounded-[30px] mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
          <table className="w-full border-collapse table-fixed bg-white">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">Modelo</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">Pressão (bar)</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">Vazão (L/min)</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">Potência (cv)</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">Rotação (cv)</th>
                <th className="py-6 px-1 font-bold text-sm md:text-base whitespace-nowrap text-center">Eixo (mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-gray-800 border-b border-gray-200">
                <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-lg text-center whitespace-nowrap">MTI-200</td>
                <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-lg text-center whitespace-nowrap">200</td>
                <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-lg text-center whitespace-nowrap">45</td>
                <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-lg text-center whitespace-nowrap">20</td>
                <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-lg text-center whitespace-nowrap">1750</td>
                <td className="py-8 px-1 text-xs md:text-lg text-center whitespace-nowrap">24</td>
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

export default BombaMTI200;