import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import pistolaFluxoAbertoMTFA from '@/assets/images/pistola-fluxo-aberto-mtfa.png';

const PistolaFluxoAberto = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Pistola Fluxo Aberto MTFA',  cover: pistolaFluxoAbertoMTFA, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Pistola Fluxo Aberto MTFA 1.400 Bar - Mamuth</title>
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
            Pistola Fluxo Aberto MTFA
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Sistema de fluxo aberto:
            Permite o funcionamento contínuo e eficiente, adequado para diversas aplicações industriais.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Acionamento por válvula ON/OFF:
            Facilita o controle preciso do sistema, oferecendo praticidade no uso e segurança nas operações.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Fácil manutenção:
            Projetado para simplificar processos de manutenção, garantindo menos tempo de inatividade e maior durabilidade do equipamento.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Pressão máxima de trabalho: 1.400 bar:
            Alta capacidade de pressão, ideal para trabalhos que exigem desempenho elevado e confiabilidade.
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
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-bold">Pistola MTFA 1400BAR</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">1001.4005</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">1.400</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">4,2</td>
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

export default PistolaFluxoAberto;