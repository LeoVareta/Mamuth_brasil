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
import cabecoteRotativo3D from '@/assets/images/cabecote-rotativo-3d-3.png';
import cabecote2 from '@/assets/images/cabecote-rotativo-3d-1.png'
import cabecote3 from '@/assets/images/cabecote-rotativo-3d-2.png'

const CabecoteRotativo3d = () => {
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const navigate = useNavigate();
  const slides = [
    { id: 2, cover: cabecote2, color: '#FF5101' },
    { id: 3, cover: cabecote3, color: '#FF5101' },
    { id: 1, cover: cabecoteRotativo3D, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('acessorioshidro.cabecote.title')} - Mamuth</title>
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
            {t('acessorioshidro.cabecote.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioshidro.cabecote.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('acessorioshidro.cabecote.texto2')}
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
              {t('acessorioshidro.cabecote.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[3%]">#</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">{t('tabela.modelo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">{t('tabela.codigo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">{t('tabela.pressao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">{t('tabela.roscaaparafuso')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">{t('tabela.roscaaanilha')}</th> 
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">{t('tabela.roscabparafuso')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">{t('tabela.roscabanilha')}</th> 
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[11%]">{t('tabela.aplicacao')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center font-bold">1</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">5/6 - 5/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">1001.0061</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/8 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/8 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-base text-center whitespace-nowrap">Mangueiras UAP</td>
                </tr>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center font-bold">2</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">8/6 - 8/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">1001.0067</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">9/16 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">9/16 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-base text-center whitespace-nowrap">Mangueiras UAP</td>
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
                    <p><strong>{t('tabela.modelo')}:</strong> 5/6 - 5/8</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 1001.0061	</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 2800</p>
                    <p><strong>{t('tabela.roscaaparafuso')}:</strong> 3/4 UNF</p>
                    <p><strong>{t('tabela.roscaaanilha')}:</strong> 3/8 UNF LH</p>
                    <p><strong>{t('tabela.roscabparafuso')}:</strong>3/4 UNF</p>
                    <p><strong>{t('tabela.roscabanilha')}:</strong> 3/8 UNF LH</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueiras')}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 8/6 - 8/8</p>
                    <p><strong>{t('tabela.codigo')}:</strong> 1001.0067	</p>
                    <p><strong>{t('tabela.pressao')}:</strong> 2800</p>
                    <p><strong>{t('tabela.roscaaparafuso')}:</strong> M26</p>
                    <p><strong>{t('tabela.roscaaanilha')}:</strong> 9/16 UNF LH</p>
                    <p><strong>{t('tabela.roscabparafuso')}:</strong>M26</p>
                    <p><strong>{t('tabela.roscabanilha')}:</strong> 9/16 UNF LH</p>
                    <p><strong>{t('tabela.aplicacao')}:</strong> {t('tabela.mangueiras')}</p>
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

export default CabecoteRotativo3d;