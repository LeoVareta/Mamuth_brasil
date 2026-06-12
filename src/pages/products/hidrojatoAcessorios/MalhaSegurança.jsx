import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import malhaSeguranca from '@/assets/images/malha-de-seguranca.png';

const MalhaDeSeguranca = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: t('acessorioshidro.malhaseguranca.title'),  cover: malhaSeguranca, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioshidro.malhaseguranca.title')} - Mamuth</title>
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
            {t('acessorioshidro.malhaseguranca.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioshidro.malhaseguranca.texto1')}
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
              {t('acessorioshidro.malhaseguranca.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[5%]">#</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[15%]">Modelo</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[20%]">Código</th>
                  <th className="py-6 px-4 font-bold text-sm md:text-base text-center w-[60%]">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, mod: "DN3 - DN4", cod: "3010.0098", app: "Mangueiras Termoplásticas DN3 e DN4" },
                  { id: 2, mod: "DN5 - DN6", cod: "3010.0103", app: "Mangueiras Termoplásticas DN5 e DN6" },
                  { id: 3, mod: "DN8", cod: "3010.0104", app: "Mangueiras Termoplásticas DN8" },
                  { id: 4, mod: "3/8 - 1/2", cod: "3010.0100", app: "Mangueiras de Borracha 3/8 e 1/2" },
                  { id: 5, mod: "3/4", cod: "3010.0101", app: "Mangueiras de Borracha 3/4" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200">
                    <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-bold">{item.id}</td>
                    <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">{item.mod}</td>
                    <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">{item.cod}</td>
                    <td className="py-8 px-4 text-sm md:text-lg text-center">{item.app}</td>
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

export default MalhaDeSeguranca;