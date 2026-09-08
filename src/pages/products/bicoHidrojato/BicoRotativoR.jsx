import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';

// Import das imagens
import bicoRotativoR from '@/assets/images/bico-rotativo-r.png';
import minhaNovaImagem from '@/assets/images/bico-rotativo-r-descricao.jpeg'; // 1. IMPORT DA NOVA IMAGEM

const BicoRotativoR = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const slides = [
    { id: 1, title: t('bicos.rotativoR.title'), cover: bicoRotativoR, color: '#FF5101' }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.rotativoR.title')} - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO */}
      <ProductSection 
        slides={slides} 
        bgImg={bgImg} 
        stretched 
      />

      {/* SEÇÃO DE TEXTOS: BRANCA */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('bicos.rotativoR.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bicos.rotativoR.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bicos.rotativoR.texto2')} <br />
            {t('bicos.rotativoR.texto3')} <br />
            {t('bicos.rotativoR.texto4')}
          </p>
        </div>
      </section>

      {/* 2. NOVA SEÇÃO DE IMAGEM ENTRE DESCRIÇÃO E TABELA */}
      <section className="py-6 mb-10 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex justify-center">
          <img 
            src={minhaNovaImagem} 
            alt={t('bicos.rotativoR.title')} 
            className="w-full max-w-2xl h-auto rounded-2xl shadow-md object-contain"
          />
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
              {t('bicos.rotativoR.textoCard')}
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Mod.</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Ø A</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">L</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Rosca</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Ins.</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">{t('tabela.peso')}</th>
                    {['0.5', '0.6', '0.7', '0.8', '0.9', '1.0'].map(ori => (
                      <th key={ori} className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center last:border-r-0">
                        {ori}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { m: "R10", a: "10", l: "35", r: "M7", i: "F/B", p: "X", o: ["X", "X", "", "-", "-", "-"] },
                    { m: "R12", a: "12", l: "39", r: "1/8", i: "F/B", p: "X", o: ["XC", "X", "X", "-", "-", "-"] },
                    { m: "R15", a: "15", l: "41", r: "1/8", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R18", a: "18", l: "46", r: "1/4", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R22", a: "22", l: "57", r: "1/4", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R25", a: "25", l: "59", r: "1/8", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R28", a: "28", l: "65", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R31", a: "31", l: "65", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R33", a: "33", l: "69", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R35", a: "35", l: "69", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R40", a: "40", l: "70", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R45", a: "45", l: "73", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R55", a: "55", l: "88", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R75", a: "75", l: "95", r: "3/4", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                  ].map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                      <td className="py-3 px-0.5 border-r border-gray-200 font-bold text-[8px] sm:text-[10px] md:text-sm text-center">{row.m}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.a}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.l}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center whitespace-nowrap">{row.r}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.i}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.p}</td>
                      {row.o.map((val, i) => (
                        <td key={i} className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center last:border-r-0">{val}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
          </div>
        </div>

        {/* VERSÃO MOBILE DA TABELA */}
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('bombas.600.textoCard')}</h2>
          </div>
          <div>
            <div className="space-y-4">
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('bombas.600.title')} </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> R10</p>
                    <p><strong>Ø A  :</strong> 10</p>
                    <p><strong>L:</strong> 35 </p>
                    <p><strong>Rosca:</strong> M7 </p>
                    <p><strong>Ins. :</strong> F/B </p>
                    <p><strong>Peso: </strong> X </p>
                    <p><strong>0.5: </strong> X </p>
                    <p><strong>0.6: </strong> X </p>
                    <p><strong>0.7: </strong> X </p>
                    <p><strong>0.8: </strong> - </p>
                    <p><strong>0.9: </strong> - </p>
                    <p><strong>1.0: </strong> - </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: CTA */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default BicoRotativoR;