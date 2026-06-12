import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import portaBicoRetoELeque from '@/assets/images/porta-bico-reto-e-leque.png';

const PortaBicoRetoELeque = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: t('bicos.portareto.title'),  cover: portaBicoRetoELeque, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.portareto.title')} - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 md:text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('bicos.portareto.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bicos.portareto.texto1')}
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
              {t('bicos.portareto.textoCard')}
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full border-collapse table-fixed">
    <thead>
      <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Modelo
        </th>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Código
        </th>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Pressão MAX
        </th>
        <th className="py-6 px-2 font-bold text-base md:text-lg w-[25%]">
          Conexão
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white text-gray-800 border-b border-gray-200">
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1/4 BSP
        </td>
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1341.0050
        </td>
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1.500 bar
        </td>
        <td className="py-8 px-2 text-sm md:text-xl text-center">
          1/4 BSP
        </td>
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
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PortaBicoRetoELeque;