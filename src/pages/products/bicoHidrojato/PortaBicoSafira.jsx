import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import portaBicoSafira from '@/assets/images/porta-bico-safira.png';

const PortaBicoSafira = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: t('bicos.portasafira.title'),  cover: portaBicoSafira, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.portasafira.title')} - Mamuth</title>
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
            {t('bicos.portasafira.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bicos.portasafira.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          {t('bicos.portasafira.texto2')}
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
              {t('bicos.portasafira.textoCard')}
            </h2>
          </div>

        <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="w-full overflow-hidden rounded-xl shadow-md">
        <table className="w-full border-collapse table-fixed bg-white">
          <thead>
            <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Modelo
              </th>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Código
              </th>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Pressão MAX(bar)
              </th>
              <th className="py-6 px-2 font-bold text-base md:text-lg w-[25%] text-center">
                Conexão Entrada
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800 border-b border-gray-200">
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                3/8-24 UNF
              </td>
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                1341.0092
              </td>
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                2.800
              </td>
              <td className="py-8 px-2 text-sm md:text-xl text-center">
                9/16-18 LH
              </td>
            </tr>
          </tbody>
        </table>
          </div>
          </div>
          </div>
      </section>

      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PortaBicoSafira;