import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";
import ImageGallery from "@/components/ImageGallery";
import ProductGallery from "@/components/ProductGallery";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import robo1 from "@/assets/images/robo-falch-lift-worker-250-beam-1.png";
import robo2 from "@/assets/images/robo-falch-lift-worker-250-beam-2.png";
import robo3 from "@/assets/images/robo-falch-lift-worker-250-beam-3.png";
import robo4 from "@/assets/images/robo-falch-lift-worker-250-beam-4.png";
import robo5 from "@/assets/images/robo-falch-lift-worker-250-beam-5.png";
import aplicacao1 from "@/assets/images/roboliftworker250beam-aplicacao1.jpg";
import aplicacao2 from "@/assets/images/roboliftworker250beam-aplicacao2.jpg";
import aplicacao3 from "@/assets/images/roboliftworker250beam-aplicacao3.jpg";
import aplicacao4 from "@/assets/images/roboliftworker250beam-aplicacao4.jpg";
import aplicacao5 from "@/assets/images/roboliftworker250beam-aplicacao5.jpg";
import aplicacao6 from "@/assets/images/roboliftworker250beam-aplicacao6.jpg";
import seloFalch from "@/assets/images/logo_falch_certificado.png";


const RoboLift250 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const slides = [
      { id: 1, title: t('robo.lift.title'), cover: robo1, color: '#FF5101' },
      { id: 2, title: t('robo.lift.title'), cover: robo2, color: '#FF5101' },
      { id: 5, title: t('robo.lift.title'), cover: robo5, color: '#FF5101' },
      { id: 3, title: t('robo.lift.title'), cover: robo3, color: '#FF5101' },
      { id: 4, title: t('robo.lift.title'), cover: robo4, color: '#FF5101' },
  ];
  const listaDeImagens = [
    aplicacao1,
    aplicacao2,
    aplicacao3,
    aplicacao4,
    aplicacao5,
    aplicacao6
  ];  
    
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('robo.lift.title')} - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('robo.lift.title')}
            <img 
              src={seloFalch}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto2')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto3')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto4')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto5')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.lift.texto6')} <br/> <br/>



            {t('robo.lift.texto7')} <br/><br/>



           {t('robo.lift.texto8')} <br/><br/>



           {t('robo.lift.texto9')} <br/><br/>



            {t('robo.lift.texto10')} <br/><br/>



            {t('robo.lift.texto11')}
          </p> 
        </div>
      </section>
      <section className="py-1 px-4 bg-white">
        {/* Mantive o max-w-4xl conforme solicitado */}
        <div className="max-w-4xl hidden md:block mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>

          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
              > i
            </div>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">
            {t('robo.lift.textoCard')}
          </h2>
          </div>

          {/* Removemos o overflow-x-auto e a largura mínima da tabela */}
          {/* Primeira Div: Espaço grande no topo e menor embaixo */}
          <div className="w-full my-12">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.pressaomaxima')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.vazaomaxima')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.alimentacaoeletrica')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.operacao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.intervalomanutencao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.peso1')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.dimensoes')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar/ 43500 psi</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">60 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">230 V/ 50 Hz/ 16 A/ 5 m</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 {t('tabela.horas')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 {t('tabela.meses')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">155kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">4178 x 1168 x 1758 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('robo.lift.textoCard')}</h2>
          </div>
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Lift Worker 250 Beam </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.pressaomaxima')}:</strong> 3000 bar/ 43500 psi</p>
                    <p><strong>{t('tabela.vazaomaxima')}:</strong> 60 N / 60 kg</p>
                    <p><strong>{t('tabela.alimentacaoeletrica')}:</strong> 230 V/ 50 Hz/ 16 A / 5m</p>
                    <p><strong>{t('tabela.operacao')}:</strong> 24 {t('tabela.horas')}</p>
                    <p><strong>{t('tabela.intervalomanutencao')}:</strong> 24 {t('tabela.meses')}</p>
                    <p><strong>{t('tabela.peso1')}:</strong> 155 kg</p>
                    <p><strong>{t('tabela.dimensoes')}:</strong> 4178 x 1168 x 1758 mm </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=yMmRPzDhgAU" />
      </div>
      <div className="pt-14 pb-24">
        <ProductGallery images={listaDeImagens} />
      </div>
        <CTASection />
    </div>
  );
};

export default RoboLift250;