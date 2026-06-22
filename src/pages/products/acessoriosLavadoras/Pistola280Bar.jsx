import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import pistola280bar from '@/assets/images/pistola-280bar.png';

const Pistola280bar = () => {
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: t('acessorioslavadoras.pistola280.title'), artist: 'Trifásico', cover: pistola280bar, color: '#FF5101' }
  ];
  

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioslavadoras.pistola280.title')} - Mamuth</title>
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
            {t('acessorioslavadoras.pistola280.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioslavadoras.pistola280.texto1')}
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              {t('acessorioslavadoras.pistola280.textoCard')}
            </h2>
          </div>

          {/* Removemos o overflow-x-auto para evitar o scroll e usamos w-full */}
          <div className="w-full">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  {/* px-2 e text-sm/base para garantir que caiba em telas menores */}
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-xs md:text-lg">{t('tabela.modelo')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-xs md:text-lg">{t('tabela.pressao')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-xs md:text-lg">{t('tabela.vazao')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-xs md:text-lg">{t('tabela.conexaoentrada')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-xs md:text-lg">{t('tabela.peso1')}</th>  
                  <th className="py-4 px-2 font-bold text-xs md:text-lg">{t('tabela.comprimento')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-2 border-r border-gray-200 font-bold text-xs md:text-xl">{t('acessorioslavadoras.pistola280.title')}</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-xs md:text-xl">280</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-xs md:text-xl">42</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-xs md:text-xl">M22x1,5</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-xs md:text-xl">0,9</td>
                  <td className="py-6 px-2 text-xs md:text-xl">1200mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">{t('vestimentas.uap.textoCard')}</h2>
            </div>
    {/* ===== GRUPO 1: Trifásico ===== */}
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('acessorioshidro.lacoseguranca.title')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-autoopacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> {t('acessorioslavadoras.pistola280.title')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 280</p>
                    <p><strong>{t('tabela.vazao')}:</strong> 42</p>
                    <p><strong>{t('tabela.conexaoentrada')}:</strong> M22x1,5</p>
                    <p><strong>{t('tabela.peso1')}:</strong> 0,9</p>
                    <p><strong>{t('tabela.comprimento')}:</strong> 1200mm</p>
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

export default Pistola280bar;