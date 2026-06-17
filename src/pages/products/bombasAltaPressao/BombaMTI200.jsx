 import React, { useEffect,useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bombaMTI200 from '@/assets/images/bombas-altapressao.png';

const BombaMTI200 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('bombas.200.title'), cover: bombaMTI200, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bombas.200.title')} - Mamuth</title>
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
            {t('bombas.200.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.200.texto1')}
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
              {t('bombas.200.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
          <table className="w-full border-collapse table-fixed bg-white">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.modelo')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.pressao')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.vazao')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.potencia')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.rotacao')}</th>
                <th className="py-6 px-1 font-bold text-sm md:text-base whitespace-nowrap text-center">{t('tabela.eixo')} (mm)</th>
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
         <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('bombas.600.textoCard')}</h2>
          </div>
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('bombas.200.title')} </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> MTI-200</p>
                    <p><strong>{t('tabela.pressao')} (bar):</strong> 200</p>
                    <p><strong>{t('tabela.vazao')}:</strong> 45 </p>
                    <p><strong>{t('tabela.potencia')}:</strong> 20 </p>
                    <p><strong>{t('tabela.rotacao')}:</strong> 1750 </p>
                    <p><strong>{t('tabela.eixo')} (mm):</strong> 24 </p>
                  </div>
                </div>
              </div>
            </div>
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