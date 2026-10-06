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
import robo1 from "@/assets/images/robo-line-worker-250-2.png";
import robo2 from "@/assets/images/robo-line-worker-250-3.png";
import robo3 from "@/assets/images/robo-line-worker-250-4.png";
import robo4 from "@/assets/images/robo-line-worker-250-cp.png";
import aplicacao1 from "@/assets/images/aplicacao-surface1.jpeg";
import aplicacao2 from "@/assets/images/aplicacao-surface2.jpeg";
import aplicacao3 from "@/assets/images/aplicacao-surface3.jpeg";
import aplicacao4 from "@/assets/images/aplicacao-surface4.jpeg";
import aplicacao5 from "@/assets/images/aplicacao-surface5.jpeg";
import aplicacao6 from "@/assets/images/aplicacao-surface6.jpeg";
import aplicacao7 from "@/assets/images/aplicacao-surface7.jpeg";
import seloFalch from "@/assets/images/logo_falch_certificado.png";


const RoboSurface = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const slides = [
      { id: 1, title: t('robo.line.title'), cover: robo1, color: '#FF5101' },
      { id: 2, title: t('robo.line.title'), cover: robo2, color: '#FF5101' },
      { id: 3, title: t('robo.line.title'), cover: robo3, color: '#FF5101' },
      { id: 4, title: t('robo.line.title'), cover: robo4, color: '#FF5101' },
    ];
  const listaDeImagens = [
    aplicacao1,
    aplicacao2,
    aplicacao3,
    aplicacao4,
    aplicacao5,
    aplicacao6,
    aplicacao7
  ];  

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Robo Line Worker 250 - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <ProductSection 
        slides={slides} 
        bgImg={bgImg} 
      />

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    
    {/* Título e Selo */}
    <h2 
      className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
      style={{ color: 'var(--color-dark-blue)' }}
    >
      {t('robo.surface.title')}
      <img 
        src={seloFalch}
        alt="Selo de Qualidade" 
        className="w-16 h-auto md:w-32 md:h-auto object-contain" 
      />
    </h2>  

    {/* Textos Descritivos Principais */}
    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
      {t('robo.surface.texto1')}
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
      {t('robo.surface.texto2')}
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
      {t('robo.surface.texto3')}
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mb-6 text-left">
      {t('robo.surface.texto4')}
    </p>
    <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
      {t('robo.surface.texto5')}
    </p>

    {/* Grid de 2 Colunas (Destaques e Aplicações) igual à imagem */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left my-12">
      
      {/* Coluna 1: Destaques */}
      <div>
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
          {t('robo.surface.destaque') || 'Destaques'}
        </h3>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque1')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque2')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque3')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque4')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque5')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque6')}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.destaque7')}</span>
          </li>
        </ul>
      </div>

      {/* Coluna 2: Aplicações (Textos adicionais ou separados por tradução se possuir) */}
      <div>
        <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
          {t('robo.surface.aplicacoes') || 'Aplicações'}
        </h3>
        <ul className="space-y-4 text-gray-600">
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.aplicacoes1') || 'Hidrodemolição e recuperação de concreto'}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.aplicacoes2') || 'Obras e manutenção de pontes e viadutos'}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.aplicacoes3') || 'Tratamento e preparação de superfícies'}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.aplicacoes4') || 'Remoção de revestimentos, tintas e incrustações'}</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2.5 h-2.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: '#FF6B0A' }}></span>
            <span>{t('robo.surface.aplicacoes5') || 'Limpeza de pisos, paredes e tetos'}</span>
          </li>
        </ul>
      </div>

    </div>

  </div>
</section>
      <section className="py-4 px-4 bg-white">
  {/* Aumentado de max-w-4xl para max-w-7xl para expandir na horizontal */}
        <div className="max-w-7xl hidden md:block mx-auto text-center p-6 md:p-14 rounded-[30px] shadow-sm" style={{ backgroundColor: '#d3d3d3' }}>

            <div className="flex flex-col items-center mb-12">
            <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg text-lg"
                style={{ backgroundColor: '#FF6B0A' }}
            > 
                i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
                {t('robo.magnetico.textoCard')}
            </h2>
            </div>

            <div className="w-full my-14">
            {/* Tabela com padding vertical maior nas células (py-8) para dar mais altura */}
            <table className="w-full table-fixed border-collapse rounded-xl overflow-hidden shadow-md">
                <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.forcamaxima')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.pressaomaxima')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.alimentacaoeletrica')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.grauprotecao')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.garantia')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.peso1')}</th>
                    <th className="py-5 px-3 border-r border-orange-400 font-bold text-xs sm:text-sm md:text-base uppercase break-words">{t('tabela.dimensoes')}</th>
                </tr>
                </thead>
                <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                    <td className="py-8 px-3 border-r border-gray-200 font-bold text-xs sm:text-sm md:text-base text-center italic break-words">3.000 / 43.500 psi</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">600 N / 60 kg</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">400 V/ 60 Hz/ 16 A</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">IP 54 (comando: IP 64)</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">24 {t('tabela.meses')}</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">240(robo) + 92(comando)</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">IP 65 / 55</td>
                    <td className="py-8 px-3 border-r border-gray-200 text-xs sm:text-sm md:text-base text-center break-words">70 kg</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>

        {/* Versão Mobile (mantida com adaptação proporcional se necessário) */}
        <div className="md:hidden space-y-10 px-2">
            <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">{t('robo.magnetico.textoCard')}</h2>
            </div>
            <div>
            <div className="space-y-4">
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
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-6 pt-0' : 'max-h-0 opacity-0'}`}>
                    <div className="grid grid-cols-2 gap-3 text-sm border-t py-4">
                    <p><strong>{t('tabela.pressaomaxima')}:</strong> 500 a 3000 bar </p>
                    <p><strong>{t('tabela.forcafixacao')}:</strong> 600 kg</p>
                    <p><strong>{t('tabela.alimentacaoeletrica')}:</strong> 400 V/ 50/60 Hz/ 16 A</p>
                    <p><strong>{t('tabela.grauprotecao')}:</strong> 360 mm</p>
                    <p><strong>{t('tabela.garantia')}:</strong> 260 a 1200 mm</p>
                    <p><strong>{t('tabela.peso1')}:</strong> IP 65 / 55</p>
                    <p><strong>{t('tabela.dimensoes')}:</strong> 24 {t('tabela.meses')} 25 anos</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=pUE75jKzEww&t=2s" />
      </div>
      <div className="pt-14 pb-24">
        <ProductGallery images={listaDeImagens} />
      </div>
        <CTASection />
    </div>
  );
};

export default RoboSurface;