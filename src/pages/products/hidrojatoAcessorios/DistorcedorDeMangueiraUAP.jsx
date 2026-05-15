import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import distorcedorMangueiraUap from '@/assets/images/distorcedor-mangueira-uap.jpeg';

const DistorcedorMangueiraUAP = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Distorcedor de Mangueira UAP',  cover: distorcedorMangueiraUap, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Distorcedor de Mangueira UAP MT2800 - Mamuth</title>
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
            Distorcedor de Mangueira UAP MT2800
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Distorcedor é um item de segurança que quando utilizado junto a mangueira elimina o esforço por torção do terminal, evitando assim a quebra prematura e posteriores acidentes.
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[3%]">#</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">P. MAX</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">Rosca A (Paraf.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">Rosca A (Anil.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">Rosca B (Paraf.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">Rosca B (Anil.)</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[16%] uppercase">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold">1</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center whitespace-nowrap">5/6 - 5/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center whitespace-nowrap">1001.0061</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">3/8 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">3/8 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-sm text-center">Mangueiras UAP</td>
                </tr>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold">2</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center whitespace-nowrap">8/6 - 8/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center whitespace-nowrap">1001.0067</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">9/16 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">9/16 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-sm text-center">Mangueiras UAP</td>
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

export default DistorcedorMangueiraUAP;