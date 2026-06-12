import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ProductSection from '@/components/ProductSection';
import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bicoRotativoTitan from '@/assets/images/bico-rotativo-titan.jpg';

const BicoRotativoTitan = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: t('bicos.rotativotitan.title'),  cover: bicoRotativoTitan, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bicos.rotativotitan.title')} - Mamuth</title>
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
               {t('bicos.rotativotitan.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bicos.rotativotitan.texto1')}
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
              {t('bicos.rotativotitan.textoCard')}
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
  <thead>
    <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Modelo</th>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Código</th>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Diâmetro</th>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Pressão (bar)</th>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Cabeça</th>
      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">Vazão</th>
      <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm text-center">Entrada</th>
    </tr>
  </thead>
  <tbody>
    {[
      { mod: "TITAN 9.5 22K", cod: "2000.1050", dia: "9.5 mm", pre: "1.500", cab: "Polisher", vaz: "15-23 LPM", ent: "M7" },
      { mod: "TITAN 13 22K", cod: "2000.1055", dia: "13 mm", pre: "1.500", cab: "Polisher", vaz: "20-34 LPM", ent: "1/8 BSP" },
      { mod: "TITAN 13 40K", cod: "2000.1072", dia: "13 mm", pre: "2.800", cab: "Polisher", vaz: "29-33 LPM", ent: "3/8-24 LH" },
      { mod: "TITAN 18 22K", cod: "2000.1059", dia: "18 mm", pre: "1.500", cab: "Polisher", vaz: "22-38 LPM", ent: "1/4 BSP" },
      { mod: "TITAN 18 40K", cod: "2000.1077", dia: "18 mm", pre: "2.800", cab: "Polisher", vaz: "42-64 LPM", ent: "3/8-24 LH" },
      { mod: "TITAN 24 22K", cod: "2000.1065", dia: "24 mm", pre: "1.500", cab: "Polisher", vaz: "42-64 LPM", ent: "3/8 BSP" },
      { mod: "TITAN 33 22K", cod: "2000.1086", dia: "33 mm", pre: "1.500", cab: "Universal", vaz: "42-64 LPM", ent: "1/2 BSP" },
    ].map((item, idx) => (
      <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
        <td className="py-4 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.mod}</td>
        <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.cod}</td>
        <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.dia}</td>
        <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.pre}</td>
        <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.cab}</td>
        <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.vaz}</td>
        <td className="py-4 px-1 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.ent}</td>
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

export default BicoRotativoTitan;