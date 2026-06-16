import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";
import ProductGallery from "@/components/ProductGallery";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import robocp from "@/assets/images/robo-line-worker-250-2.png";
import robo from "@/assets/images/robo-magnetico-climb-rob.png";
import robo1 from "@/assets/images/robo-magnetico-climb-rob-2.png";
import robo2 from "@/assets/images/robo-magnetico-climb-rob-3.png";
import robo3 from "@/assets/images/robo-magnetico-climb-rob-4.png";
import robo4 from "@/assets/images/robo-magnetico-climb-rob-5.png";
import aplicacao1 from "@/assets/images/aplicacaoclimb1.jpg";
import aplicacao2 from "@/assets/images/aplicacaoclimb2.jpg";
import aplicacao3 from "@/assets/images/aplicacaoclimb3.jpg";
import aplicacao4 from "@/assets/images/aplicacaoclimb4.jpg";
import aplicacao5 from "@/assets/images/aplicacaoclimb5.jpg";
import aplicacao6 from "@/assets/images/aplicacaoclimb6.jpg";
import aplicacao7 from "@/assets/images/aplicacaoclimb7.jpg";
import aplicacao8 from "@/assets/images/aplicacaoclimb8.jpg";
import seloFalch from "@/assets/images/logo_falch_certificado.png";

const RoboMagnetico = () => {
  const [aberto, setAberto] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: t('robo.magnetico.title'), cover: robo1, color: '#FF5101' },
          { id: 2, title: t('robo.magnetico.title'), cover: robo2, color: '#FF5101' },
          { id: 3, title: t('robo.magnetico.title'), cover: robo3, color: '#FF5101' },
          { id: 4, title: t('robo.magnetico.title'), cover: robo4, color: '#FF5101' },
          { id: 5, title: t('robo.magnetico.title'), cover: robo, color: '#FF5101' }
  ];
   const listaDeImagens = [
    aplicacao1,
    aplicacao2,
    aplicacao3,
    aplicacao4,
    aplicacao5,
    aplicacao6,
    aplicacao7,
    aplicacao8
  ];  


  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('robo.magnetico.title')} - Mamuth</title>
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
              {t('robo.magnetico.title')}
              <img 
                src={seloFalch}
                alt="Selo de Qualidade" 
                className="w-16 h-auto md:w-32 md:h-auto object-contain" 
              />
            </h2>  
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.magnetico.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('robo.magnetico.texto2')}
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
              {t('robo.magnetico.textoCard')}
            </h2>
          </div>

          <div className="w-full my-12">
            {/* ADICIONADO: table-fixed para forçar a distribuição correta e ocupar toda a largura */}
            <table className="w-full table-fixed border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.pressaotrabalho')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.forcafixacao')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.alimentacaoeletrica')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">Jet Cap</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.bracoarticulado')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.grauprotecao')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.manutencaovidautil')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.pesotransportadora')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.pesojetcap')}</th>
                  <th className="py-4 px-2 font-bold text-[10px] sm:text-xs md:text-sm uppercase break-words">{t('tabela.pesobracoarticulado')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-2 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-sm text-center italic break-words">500 a 3000 bar</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">600 Kg</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">400 V/ 50/60 Hz/ 16 A</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">360 mm</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">260 a 1200 mm</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">IP 65 / 55</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">24 {t('tabela.meses')} /25 anos</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">70 kg</td>
                  <td className="py-6 px-2 border-r border-gray-200 text-[10px] sm:text-xs md:text-sm text-center break-words">106 kg</td>
                  <td className="py-6 px-2 text-[10px] sm:text-xs md:text-sm text-center break-words">94 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('robo.magnetico.textoCard')}</h2>
          </div>
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Robo Magnetico Climb Rob </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.pressaomaxima')}:</strong> 500 a 3000 bar </p>
                    <p><strong>{t('tabela.forcafixacao')}:</strong>600 kg</p>
                    <p><strong>{t('tabela.alimentacaoeletrica')}:</strong> 400 V/ 50/60 Hz/ 16 A</p>
                    <p><strong>Jet Cap:</strong> 360 mm</p>
                    <p><strong>{t('tabela.braçoarticulado')}:</strong> 260 a 1200 mm</p>
                    <p><strong>{t('tabela.grauprotecao')}:</strong> IP 65 / 55</p>
                    <p><strong>{t('tabela.manutencaovidautil')}:</strong> 24 {t('tabela.meses')} /25 anos</p>
                    <p><strong>{t('tabela.pesotransportadora')}:</strong> 70 kg </p>
                    <p><strong>{t('tabela.pesobracoarticulado')}:</strong> 94 kg </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=JTGLGNKVcAE&t=115s" />
      </div>
      <div className="pt-14 pb-24">
        <ProductGallery images={listaDeImagens} />
      </div>
        <CTASection />
    </div>
  );
};

export default RoboMagnetico;