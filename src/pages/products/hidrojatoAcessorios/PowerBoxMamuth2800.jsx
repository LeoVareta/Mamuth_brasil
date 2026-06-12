import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import powerBoxMamuth from '@/assets/images/powerbox-mamuth-2800.jpeg';

const PowerBox2800 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: t('acessorioshidro.powerbox.title'),  cover: powerBoxMamuth, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioshidro.powerbox.title')} - Mamuth</title>
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
            {t('acessorioshidro.powerbox.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioshidro.powerbox.texto1')}
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
              {t('acessorioshidro.powerbox.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
  <table className="w-full border-collapse table-fixed bg-white">
    <thead>
      <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[18%] uppercase">Modelo</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">Código</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">P. Máx (bar)</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Vazão</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Peso (kg)</th>
        <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[23%] uppercase">Entrada</th>
        <th className="py-6 px-1 font-bold text-[10px] md:text-xs text-center w-[15%] uppercase">Entrada Ar</th>
      </tr>
    </thead>
    <tbody>
      <tr className="text-gray-800 border-b border-gray-200">
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-base text-center font-bold">Power Box 2800BAR</td>
        <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center">1001.0006</td>
        <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center">2.800</td>
        <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center">27</td>
        <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-base text-center">18,0</td>
        <td className="py-8 px-1 border-r border-gray-200 text-[11px] md:text-sm text-center">1.1/8 UNF - 9/16-18 LH</td>
        <td className="py-8 px-1 text-sm md:text-base text-center">7 Bar</td>
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

export default PowerBox2800;