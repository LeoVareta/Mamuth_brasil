import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import lacoSeguranca from '@/assets/images/laco-seguranca.png';

const LacoDeSeguranca = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Laço de Segurança',  cover: lacoSeguranca, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Laço de Segurança - Mamuth</title>
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
            Laço de Segurança
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Dispositivo de segurança utilizado em uniões de mangueiras e tubos com o objetivo de evitar o movimento brusco ou chicoteamento em caso de rompimento das conexões.
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
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[5%]">#</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">Modelo</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">Código</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">P. MAX (bar)</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">Rosca 1</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">Rosca 2</th>
                  <th className="py-6 px-2 font-bold text-sm md:text-base text-center w-[20%]">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center font-bold">1</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">1/8</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">3010.0010</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center">500</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center">---</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center">---</td>
                  <td className="py-8 px-2 text-sm md:text-lg text-center">Mangueiras 3/8 - 3/4</td>
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

export default LacoDeSeguranca;