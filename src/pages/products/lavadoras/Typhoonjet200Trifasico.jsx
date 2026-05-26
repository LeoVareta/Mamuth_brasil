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
import typhoonJet200 from '@/assets/images/typhoon-jet-200-combustao.png';
import typhoonJet200T from '@/assets/images/typhoon-jet-200-trifasico.png';
import iconCombustao from "@/assets/images/icon-combustao.svg"
import iconTrifasico from "@/assets/images/icon-trifasico.svg"

const Typhoon200Trifasico = () => {
  const navigate = useNavigate();
  const { t } = useTranslation(); 
  const [aberto, setAberto] = useState(null);
  const slides = [
      { id: 1, title: 'Typhoon Jet 200', artist: t('lavadoras.50cv.trifasico'), cover: typhoonJet200T, color: '#FF5101' },
      { id: 2, title: 'Typhoon Jet 200', artist: t('lavadoras.50cv.combustao'), cover: typhoonJet200, color: '#FF5101' },
    ];
    const openContact = () => {
    console.log("Abrindo orçamento...");
  };

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 200 Trifásico - Mamuth</title>
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
            {t('lavadoras.200bar.title')}
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.200bar.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.200bar.texto2')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.200bar.texto3')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.200bar.texto4')}


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.200bar.texto5')} <br/><br/>



            {t('lavadoras.200bar.texto6')} <br/><br/>



            {t('lavadoras.200bar.texto7')} <br/><br/>



            {t('lavadoras.200bar.texto8')} <br/><br/>



            {t('lavadoras.200bar.texto9')} <br/><br/>



            {t('lavadoras.200bar.texto10')}
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl hidden md:block mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rounded-[30px] mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          <div className="overflow-x-auto pb-4  my-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={iconTrifasico} 
                alt="Ícone Técnico" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-gray-700 text-lg">{t('lavadoras.50cv.trifasico')}</span>
            </div>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (bar)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (PSI)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/min)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/h)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Potência (cv)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Peso (kg)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Tipo de Tensão</th>
                  <th className="py-6 px-4 font-bold text-lg">Dimensões(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Typhoon-Jet 200</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">200</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">2900</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">45</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">2700</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">20</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">280</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">Trifásico</td>
                  <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold">1200x800x900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto pb-4 custom-scrollbar  my-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={iconCombustao} 
                alt="Ícone Técnico" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-gray-700 text-lg">{t('lavadoras.50cv.combustao')}</span>
            </div>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (bar)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Pressão (PSI)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/min)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Vazão (L/h)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Potência (cv)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Peso (kg)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Tipo de Tensão</th>
                  <th className="py-6 px-4 font-bold text-lg">Dimensões(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">Typhoon-Jet 200</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">200</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">2900</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">45</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm">2700</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">20</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">280</td>
                  <td className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm font-semibold">Gasolina</td>
                  <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold">1200x800x900</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
                <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl text-center font-bold text-[#000]">Veja mais informações técnicas sobre este produto:</h2>
                  </div>
          {/* ===== GRUPO 1: Trifásico ===== */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={iconTrifasico} alt="Trifásico" className="w-10 h-10" />
                    <h2 className="text-xl font-bold text-[#0E0E68]">Trifásico</h2>
                  </div>
        
                  <div className="space-y-4">
                    {/* CARD 1 */}
                    <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                      <button 
                        onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                        className="w-full flex justify-between items-center p-5 bg-white"
                      >
                        <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 200</h3>
                        <span className="text-2xl text-[#FF6B0A] font-light">
                          {aberto === 't1' ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                          <p><strong>Pressão(bar):</strong> 200</p>
                          <p><strong>Pressão(PSI):</strong> 2900</p>
                          <p><strong>Vazão(L/min):</strong> 45 </p>
                          <p><strong>Vazão(L/h)</strong> 2700 </p>
                          <p><strong>Potência(cv)</strong> 20</p>
                          <p><strong>Peso:</strong> 280 kg</p>
                          <p><strong>Tipo de Tensão:</strong>Trifásico</p>
                          <p><strong>Dimensões(mm):</strong> 1200x800x900</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
        
                {/* ===== GRUPO 2: Combustão ===== */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img src={iconCombustao} alt="Combustão" className="w-10 h-10" />
                    <h2 className="text-xl font-bold text-[#0E0E68]">Combustão</h2>
                  </div>
        
                  <div className="space-y-4">
                    {/* CARD 1 */}
                    <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                      <button 
                        onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                        className="w-full flex justify-between items-center p-5 bg-white"
                      >
                        <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 200</h3>
                        <span className="text-2xl text-[#FF6B0A] font-light">
                          {aberto === 't1' ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                          <p><strong>Pressão(bar):</strong> 200</p>
                          <p><strong>Pressão(PSI):</strong> 2900 </p>
                          <p><strong>Vazão(L/min):</strong> 45</p>
                          <p><strong>Vazão(L/h)</strong> 2700 </p>
                          <p><strong>Potência(cv):</strong> 20</p>
                          <p><strong>Peso:</strong> 280 kg</p>
                          <p><strong>Tipo de Tensão</strong> Gasolina</p>
                          <p><strong>Dimensões(mm):</strong>1200x800x900</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection handleProductClick={openContact} />
      </div>
    </div>
  );
};

export default Typhoon200Trifasico;