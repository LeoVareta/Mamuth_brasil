import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import pistolaFluxoFechadoMTFF from '@/assets/images/pistola-fluxo-fechado-15k.png';
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
const PistolaFluxoFechado = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Pistola Fluxo Fechado MTFF',  cover: pistolaFluxoFechadoMTFF, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Pistola Fluxo Fechado MTFF 1.200 Bar - Mamuth</title>
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
            Pistola Fluxo Fechado MTFF
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Punho fabricado em plástico de alta resistência:
            Desenvolvido para suportar condições extremas, proporcionando durabilidade e longa vida útil ao equipamento.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10  text-left">
            Sistema de fluxo fechado com acionamento por válvula mecânica:
            Garante maior controle e precisão durante a operação, reduzindo o risco de vazamentos e aumentando a segurança.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10  text-left">
            Maior conforto na operação:
            Ergonomicamente projetado para reduzir a fadiga do operador, permitindo uso prolongado sem comprometer o desempenho.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10  text-left">
            Cor verde padrão WJTA:
            Identificação visual rápida e conforme os padrões internacionais de segurança da WJTA.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Pressão máxima de trabalho até 1.200 bar:
            Ideal para aplicações que exigem alta pressão, garantindo eficiência e eficácia em operações exigentes.
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
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[22%] uppercase">Modelo</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[13%] uppercase">Código</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%] uppercase">Pressão (bar)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[10%] uppercase">Peso (kg)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[25%] uppercase">Entrada</th>
                  <th className="py-6 px-1 font-bold text-sm md:text-base text-center w-[15%] uppercase">Comp. Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-bold">Pistola MTFF 1200BAR</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">1001.4005</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">1.200</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">3,7</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center">Engate ER - 12 M22 PL</td>
                  <td className="py-8 px-1 text-sm md:text-lg text-center whitespace-nowrap">1200mm</td>
                </tr>
              </tbody>
            </table>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar { height: 8px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF6B0A; border-radius: 10px; }
          `}} />
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PistolaFluxoFechado;