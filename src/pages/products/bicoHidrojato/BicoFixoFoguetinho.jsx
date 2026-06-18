import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import bgImg from '@/assets/images/bg-carrousel.png';
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
// Import da imagem
import bicoFixoFoguetinho from '@/assets/images/bico-fixo-foguetinho.png';

const BicoFixoFoguetinho = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
          { id: 1, title: t('bicos.foguetinho.title'),  cover: bicoFixoFoguetinho, color: '#FF5101' },
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.foguetinho.title')} - Mamuth</title>
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
            {t('bicos.foguetinho.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bicos.foguetinho.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bicos.foguetinho.texto2')}
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
              {t('bicos.foguetinho.textoCard')}
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
           <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Modelo</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Código</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">L</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Rosca</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø A</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø B</th>
                <th className="py-4 px-1 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø C</th>
              </tr>
            </thead>
            <tbody>
              {[
                { mod: "D10", cod: "2000.0500", l: "31", r: "M7", a: "XB", b: "X", c: "X" },
                { mod: "D12", cod: "2000.0501", l: "40", r: "1/8 BSP", a: "x", b: "X", c: "XC" },
                { mod: "D16", cod: "2000.0502", l: "47", r: "1/4 BSP", a: "X", b: "X", c: "X" },
                { mod: "D22", cod: "2000.0503", l: "55", r: "1/4 BSP", a: "XB", b: "X", c: "X" },
                { mod: "D28", cod: "2000.0554", l: "65", r: "1/2 BSP", a: "X", b: "X", c: "X" },
                { mod: "D30", cod: "2000.0530", l: "76", r: "1/2 BSP", a: "X", b: "X", c: "X" },
                { mod: "D40", cod: "2000.0513", l: "87", r: "M22x1,5", a: "X", b: "X", c: "X" },
                { mod: "D50", cod: "2000.0514", l: "102", r: "M30x1,5", a: "X", b: "X", c: "X" },
                { mod: "D70", cod: "2000.0507", l: "120", r: "M50x1,5", a: "X", b: "X", c: "X" },
              ].map((item, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                  <td className="py-4 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center">{item.mod}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.cod}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.l}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.r}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.a}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.b}</td>
                  <td className="py-4 px-1 text-[10px] sm:text-xs md:text-base text-center">{item.c}</td>
                </tr>
              ))}
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
                  {/* D10 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D10</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0500</p>
                    <p><strong>L:</strong> 31</p>
                    <p><strong>{t('tabela.rosca')}:</strong> M7</p>
                    <p><strong>Ø A:</strong> XB</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D12 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D12</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0501</p>
                    <p><strong>L:</strong> 40</p>
                    <p><strong>{t('tabela.rosca')}:</strong> 1/8 BSP</p>
                    <p><strong>Ø A:</strong> x</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> XC</p>
                  </div>

                  {/* D16 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D16</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0502</p>
                    <p><strong>L:</strong> 47</p>
                    <p><strong>{t('tabela.rosca')}:</strong> 1/4 BSP</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D22 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D22</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0503</p>
                    <p><strong>L:</strong> 55</p>
                    <p><strong>{t('tabela.rosca')}:</strong> 1/4 BSP</p>
                    <p><strong>Ø A:</strong> XB</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D28 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D28</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0554</p>
                    <p><strong>L:</strong> 65</p>
                    <p><strong>{t('tabela.rosca')}:</strong> 1/2 BSP</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D30 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D30</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0530</p>
                    <p><strong>L:</strong> 76</p>
                    <p><strong>{t('tabela.rosca')}:</strong> 1/2 BSP</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D40 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D40</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0513</p>
                    <p><strong>L:</strong> 87</p>
                    <p><strong>{t('tabela.rosca')}:</strong> M22x1,5</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D50 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D50</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0514</p>
                    <p><strong>L:</strong> 102</p>
                    <p><strong>{t('tabela.rosca')}:</strong> M30x1,5</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
                  </div>

                  {/* D70 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> D70</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 2000.0507</p>
                    <p><strong>L:</strong> 120</p>
                    <p><strong>{t('tabela.rosca')}:</strong> M50x1,5</p>
                    <p><strong>Ø A:</strong> X</p>
                    <p><strong>Ø B:</strong> X</p>
                    <p><strong>Ø C:</strong> X</p>
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

export default BicoFixoFoguetinho;