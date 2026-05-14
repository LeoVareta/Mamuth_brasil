import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import lancaTuboinox from '@/assets/images/lanca-tubo-inox.png';

const LancaTuboInox = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Lança e Tubo Inox',  cover: lancaTuboinox, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Lança e Tubo Inox - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <ProductSection 
        productSlides={slides} 
        backgroundImage={bgImg} 
      />

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Lança e Tubo Inox
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Conhecidas como Varetas ou Lanças, essas são utilizadas como condutoras de fluxo, ou como prolongadores para bicos e mangueiras. Podem ser fabricadas em qualquer comprimento.
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
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[4%]">#</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[8%]">Modelo</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[12%]">Código</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[12%]">P. MAX (bar)</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[22%]">Opção de Rosca 1</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[22%]">Opção de Rosca 2</th>
        <th className="py-6 px-1 font-bold text-[10px] md:text-sm text-center w-[20%]">Aplicação</th>
      </tr>
    </thead>
    <tbody>
      {[
        { id: 1, mod: "1/8", cod: "SOB MEDIDA", pres: "1.000", r1: "M7 (Fêmea)", r2: "M7 (Fêmea)", app: "Mangueiras, Bicos, etc." },
        { id: 2, mod: "1/8", cod: "SOB MEDIDA", pres: "1.500", r1: "1/8 BSP (Macho)", r2: "1/8 BSP (Macho)", app: "Mangueiras, Bicos, etc." },
        { id: 3, mod: "1/4", cod: "SOB MEDIDA", pres: "1.500", r1: "1/4 BSP (Macho)", r2: "1/4 BSP (Macho)", app: "Mangueiras, Bicos, etc." },
        { id: 4, mod: "3/8", cod: "SOB MEDIDA", pres: "2.800", r1: "3/8 UNF Esq (M)", r2: "3/8 UNF Esq (M)", app: "Mangueiras, Bicos, etc." },
        { id: 5, mod: "9/16", cod: "SOB MEDIDA", pres: "3.200", r1: "9/16 UNF Esq (M)", r2: "9/16 UNF Esq (M)", app: "Mangueiras, Bicos, etc." },
      ].map((item) => (
        <tr key={item.id} className="text-gray-800 border-b border-gray-200">
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center font-bold">{item.id}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center">{item.mod}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-semibold">{item.cod}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center">{item.pres}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">{item.r1}</td>
          <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">{item.r2}</td>
          <td className="py-6 px-1 text-[10px] md:text-sm text-center">{item.app}</td>
        </tr>
      ))}
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

export default LancaTuboInox;