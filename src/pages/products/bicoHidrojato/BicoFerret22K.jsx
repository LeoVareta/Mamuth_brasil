import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bicoFerret22k from '@/assets/images/bico-ferret-22k.png';

const BicoFerret22K = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
   const [aberto, setAberto] = useState(null);
  const slides = [
          { id: 1, title: t('bicos.ferret22.title'),  cover: bicoFerret22k, color: '#FF5101' },
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.ferret22.title')} - Mamuth</title>
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
            {t('bicos.ferret22.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bicos.ferret22.texto1')} 
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bicos.ferret22.texto2')}

          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl md:block hidden mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rounded-[30px] mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              {t('bicos.ferret22.textoCard')}
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.modelo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.codigo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.pressao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.vazao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.entrada')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.diametro')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[8px] sm:text-[10px] md:text-xs text-center">{t('tabela.comprimento')}</th>
                  <th className="py-4 px-1 font-bold text-[8px] sm:text-[10px] md:text-xs text-center leading-tight">{t('tabela.aplicacaotubo')}</th>
                </tr>
              </thead>
              <tbody>
                {/* Ferret 2° */}
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ferret 2°</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">1001.0014</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">1.500</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">55</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center whitespace-nowrap">1/4 BSP</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">33 mm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">50 mm</td>
                  <td className="py-6 px-1 text-[9px] sm:text-xs md:text-sm text-center">2" até 3"</td>
                </tr>
                {/* Ferret° */}
                <tr className="bg-gray-50 text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ferret°</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">1001.0014</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">1.500</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">80</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center whitespace-nowrap">1/4 BSP</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">33 mm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[9px] sm:text-xs md:text-sm text-center">103 mm</td>
                  <td className="py-6 px-1 text-[9px] sm:text-xs md:text-sm text-center">4" até 6"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('bicos.portasafira.textoCard')}</h2>
          </div>
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('bicos.portasafira.title')} </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 3/8-24 UNF</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 1341.0092</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 2.800</p>
                    <p><strong>{t('tabela.vazao')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.entrada')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.diametro')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.comprimento')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.aplicacaotubo')}:</strong> 9/16-18 LH </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 3/8-24 UNF</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 1341.0092</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 2.800</p>
                    <p><strong>{t('tabela.vazao')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.entrada')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.diametro')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.comprimento')}:</strong> 9/16-18 LH </p>
                    <p><strong>{t('tabela.aplicacaotubo')}:</strong> 9/16-18 LH </p>
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

export default BicoFerret22K;