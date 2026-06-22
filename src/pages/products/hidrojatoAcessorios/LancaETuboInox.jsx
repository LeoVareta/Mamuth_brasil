import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import lancaTuboinox from '@/assets/images/lanca-tubo-inox.png';

const LancaTuboInox = () => {
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: t('acessorioshidro.lancatubo.title'),  cover: lancaTuboinox, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioshidro.lancatubo.title')} - Mamuth</title>
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
            {t('acessorioshidro.lancatubo.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioshidro.lancatubo.texto1')}
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
              {t('acessorioshidro.lancatubo.textoCard')}
            </h2>
          </div>

        <div className="w-full overflow-hidden rounded-xl shadow-md">
          <table className="w-full border-collapse table-fixed bg-white">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[4%]">#</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[8%]">{t('tabela.modelo')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[12%]">{t('tabela.codigo')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[12%]">{t('tabela.pressao')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[22%]">{t('tabela.opcaorosca1')}</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-sm text-center w-[22%]">{t('tabela.opcaorosca2')}</th>
                <th className="py-6 px-1 font-bold text-[10px] md:text-sm text-center w-[20%]">{t('tabela.aplicacao')}</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, mod: "1/8", cod: t('tabela.sobmedida'), pres: "1.000", r1: "M7 (F)", r2: "M7 (F)", app: t('tabela.mangueirasbicosetc') },
                { id: 2, mod: "1/8", cod: t('tabela.sobmedida'), pres: "1.500", r1: "1/8 BSP (M)", r2: "1/8 BSP (M)", app: t('tabela.mangueirasbicosetc') },
                { id: 3, mod: "1/4", cod: t('tabela.sobmedida'), pres: "1.500", r1: "1/4 BSP (M)", r2: "1/4 BSP (M)", app: t('tabela.mangueirasbicosetc') },
                { id: 4, mod: "3/8", cod: t('tabela.sobmedida'), pres: "2.800", r1: "3/8 UNF Esq (M)", r2: "3/8 UNF Esq (M)", app: t('tabela.mangueirasbicosetc') },
                { id: 5, mod: "9/16", cod: t('tabela.sobmedida'), pres: "3.200", r1: "9/16 UNF Esq (M)", r2: "9/16 UNF Esq (M)", app: t('tabela.mangueirasbicosetc') },
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('acessorioshidro.lancatubo.title')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-autoopacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 1/8</p>
                    <p><strong>{t('tabela.codigo')}:</strong> {t('tabela.sobmedida')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 1000</p>
                    <p><strong>{t('tabela.opcaorosca1')}:</strong> M7 (f)</p>
                    <p><strong>{t('tabela.opcaorosca2')}:</strong> M7 (f)</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueirasbicosetc')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 1/8</p>
                    <p><strong>{t('tabela.codigo')}:</strong> {t('tabela.sobmedida')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 1500</p>
                    <p><strong>{t('tabela.opcaorosca1')}:</strong> 1/8 BSP (M)</p>
                    <p><strong>{t('tabela.opcaorosca2')}:</strong> 1/8 BSP (M)</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueirasbicosetc')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 1/4</p>
                    <p><strong>{t('tabela.codigo')}:</strong> {t('tabela.sobmedida')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 1500</p>
                    <p><strong>{t('tabela.opcaorosca1')}:</strong> 1/4 BSP (M)</p>
                    <p><strong>{t('tabela.opcaorosca2')}:</strong> 1/4 BSP (M)</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueirasbicosetc')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 3/8</p>
                    <p><strong>{t('tabela.codigo')}:</strong> {t('tabela.sobmedida')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 2800</p>
                    <p><strong>{t('tabela.opcaorosca1')}:</strong> 3/8 UNF Esq (M)</p>
                    <p><strong>{t('tabela.opcaorosca2')}:</strong> 3/8 UNF Esq (M)</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueirasbicosetc')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 9/16</p>
                    <p><strong>{t('tabela.codigo')}:</strong> {t('tabela.sobmedida')}</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 3200</p>
                    <p><strong>{t('tabela.opcaorosca1')}:</strong> 9/16 UNF Esq (M)</p>
                    <p><strong>{t('tabela.opcaorosca2')}:</strong> 9/16 UNF Esq (M)</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueirasbicosetc')}</p>
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

export default LancaTuboInox;