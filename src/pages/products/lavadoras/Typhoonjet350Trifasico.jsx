import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import typhoonjet350Trifasico from "@/assets/images/Typhoon-Jet-350-trifasico.png";
import typhoonjet350Combustao from "@/assets/images/Typhoon-Jet-350-combustao.png";  
import iconCombustao from "@/assets/images/icon-combustao.svg"
import iconTrifasico from "@/assets/images/icon-trifasico.svg"

const Typhoon350trifasico = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);

  const slides = [
    { id: 1, title: 'Typhoon Jet 350', artist: t('lavadoras.50cv.trifasico'), cover: typhoonjet350Trifasico, color: '#FF5101' },
    { id: 2, title: 'Typhoon Jet 350', artist: t('lavadoras.50cv.combustao'), cover: typhoonjet350Combustao, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 350 Trifásico - Mamuth</title>
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
            {t('lavadoras.350bar.title')}
          </h2>  
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.350bar.texto1')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.350bar.texto2')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.350bar.texto3')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.350bar.texto4')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
           {t('lavadoras.350bar.texto5')}
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.350bar.texto6')}<br/>



            {t('lavadoras.350bar.texto7')} <br/><br/>



            {t('lavadoras.350bar.texto8')} <br/><br/>



            {t('lavadoras.350bar.texto9')} <br/><br/>




            {t('lavadoras.350bar.texto10')}
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

          <div className="overflow-x-auto my-12">
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
                  {/* Reduzi o padding lateral (px-1) e a fonte para garantir o encaixe */}
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.modelo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.pressao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.pressao2')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.vazao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.vazao2')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.potencia')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.peso1')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.tensao')}</th>
                  <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.dimensoes')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center">Typhoon-Jet 350</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">350</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">5076</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">17</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1020</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">15</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">280</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">{t('tabela.trifasico')}</td>
                  <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1200x800x900</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-x-auto my-12">
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
                  {/* Reduzi o padding lateral (px-1) e a fonte para garantir o encaixe */}
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.modelo')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.pressao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.pressao2')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.vazao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.vazao2')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.potencia')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.peso1')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.tensao')}</th>
                  <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm text-center">{t('tabela.dimensoes')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center">Typhoon-Jet 350</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">350</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">5076</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">17</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1020</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">15</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">280</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">{t('tabela.gasolina')}</td>
                  <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1200x800x900</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">{t('lavadoras.50cv.textoCard')}</h2>
            </div>
    {/* ===== GRUPO 1: Trifásico ===== */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={iconTrifasico} alt="Trifásico" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-[#0E0E68]">{t('tabela.trifasico')}</h2>
            </div>
  
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 350</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>{t('tabela.pressao')}:</strong> 350</p>
                    <p><strong>{t('tabela.pressao2')}:</strong> 5076</p>
                    <p><strong>{t('tabela.vazao')}:</strong> 17 </p>
                    <p><strong>{t('tabela.vazao2')}</strong> 1020 </p>
                    <p><strong>{t('tabela.potencia')}:</strong> 15</p>
                    <p><strong>{t('tabela.peso1')}:</strong> 280 kg</p>
                    <p><strong>{t('tabela.tensao')}:</strong> {t('tabela.trifasico')}</p>
                    <p><strong>{t('tabela.dimensoes')}:</strong> 1200x800x900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* ===== GRUPO 2: Combustão ===== */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={iconCombustao} alt="Combustão" className="w-10 h-10" />
              <h2 className="text-xl font-bold text-[#0E0E68]">{t('tabela.combustao')}</h2>
            </div>
  
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 350</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>{t('tabela.pressao')}:</strong> 350</p>
                    <p><strong>{t('tabela.pressao2')}:</strong> 5076 </p>
                    <p><strong>{t('tabela.vazao')}:</strong> 17</p>
                    <p><strong>{t('tabela.vazao2')}</strong> 1020 </p>
                    <p><strong>{t('tabela.potencia')}:</strong> 15</p>
                    <p><strong>{t('tabela.peso1')}:</strong> 280 kg</p>
                    <p><strong>{t('tabela.tensao')}:</strong> {t('tabela.gasolina')}</p>
                    <p><strong>{t('tabela.dimensoes')}:</strong>1200x800x900</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=M9I8rx1XVyI" />
      </div> */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default Typhoon350trifasico;