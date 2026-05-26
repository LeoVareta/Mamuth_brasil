import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import VideoSection from "@/components/VideoSection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import typhoonJetEletrica from '@/assets/images/typhoonjet-50cv-eletrica.jpg';
import typhoonJet50cv from '@/assets/images/typhoon-jet-50-cv-eletrica.png';
import typhoonJet50cv2 from '@/assets/images/typhoon-jet-50cv-eletrica-1.png';
import typhoonJet50cv3 from '@/assets/images/typhoon-jet-50cv-eletrica-2.png';
import typhoonJet50cvDiesel from '@/assets/images/typhoon-jet-50cv-Diesel-1.png';
import typhoonJet50cvDiesel2 from '@/assets/images/typhoon-jet-50cv-Diesel-2.png';
import iconCombustao from "@/assets/images/icon-combustao.svg";
import iconTrifasico from "@/assets/images/icon-trifasico.svg";

const Typhoon50cvEletrica = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);

  const slides = [
      { id: 1, title: t('lavadoras.50cv.title'), artist: t('lavadoras.50cv.trifasico'), cover: typhoonJet50cv, color: '#FF5101' },
      { id: 2, title: t('lavadoras.50cv.title'), artist: t('lavadoras.50cv.trifasico'), cover: typhoonJet50cv2, color: '#FF5101' },
      { id: 3, title: t('lavadoras.50cv.title'), artist: t('lavadoras.50cv.trifasico'), cover: typhoonJet50cv3, color: '#FF5101' },
      { id: 4, title: t('lavadoras.50cv.title'), artist: t('lavadoras.50cv.combustao'), cover:typhoonJet50cvDiesel, color: '#FF5101' },
      { id: 5, title: t('lavadoras.50cv.title'), artist: t('lavadoras.50cv.combustao'), cover:typhoonJet50cvDiesel2, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 50cv Elétrica - Mamuth</title>
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
            {t('lavadoras.50cv.title')}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('lavadoras.50cv.texto1')}
          </p>
          
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        {/* Mantive o max-w-4xl conforme solicitado */}
        <div className="max-w-4xl mx-auto hidden md:block text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">
              {t('lavadoras.50cv.textoCard')}
            </h2>
          </div>
        <div className="w-full my-12 ">
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
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 600</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">600</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">35</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">50</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">550</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1400x1000x1000</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 1000</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1000</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">19</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">50</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">960</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1400x1000x1000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full my-12">
          <div className="flex items-center justify-center gap-4 mb-8 ">
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
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 600</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">600</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">35</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">50</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">550</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1400x1000x1000</td>
              </tr>
            </tbody>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 1000</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1000</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">19</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">50</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">960</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">1400x1000x1000</td>
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
                <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 600</h3>
                <span className="text-2xl text-[#FF6B0A] font-light">
                  {aberto === 't1' ? '−' : '+'}
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                  <p><strong>Pressão:</strong> 600 bar</p>
                  <p><strong>Vazão:</strong> 35 L/min</p>
                  <p><strong>Potência:</strong> 50 cv</p>
                  <p><strong>Peso:</strong> 550 kg</p>
                  <p className="col-span-2"><strong>Dimensões:</strong> 1400x1000x1000</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
              <button 
                onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                className="w-full flex justify-between items-center p-5 bg-white"
              >
                <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 1000</h3>
                <span className="text-2xl text-[#FF6B0A] font-light">
                  {aberto === 't2' ? '−' : '+'}
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                  <p><strong>Pressão:</strong> 1000 bar</p>
                  <p><strong>Vazão:</strong> 19 L/min</p>
                  <p><strong>Potência:</strong> 50 cv</p>
                  <p><strong>Peso:</strong> 960 kg</p>
                  <p className="col-span-2"><strong>Dimensões:</strong> 1400x1000x1000</p>
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
                onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                className="w-full flex justify-between items-center p-5 bg-white"
              >
                <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 600</h3>
                <span className="text-2xl text-[#FF6B0A] font-light">
                  {aberto === 't1' ? '−' : '+'}
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                  <p><strong>Pressão:</strong> 600 bar</p>
                  <p><strong>Vazão:</strong> 35 L/min</p>
                  <p><strong>Potência:</strong> 50 cv</p>
                  <p><strong>Peso:</strong> 550 kg</p>
                  <p className="col-span-2"><strong>Dimensões:</strong> 1400x1000x1000</p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
              <button 
                onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                className="w-full flex justify-between items-center p-5 bg-white"
              >
                <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 1000</h3>
                <span className="text-2xl text-[#FF6B0A] font-light">
                  {aberto === 't2' ? '−' : '+'}
                </span>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                  <p><strong>Pressão:</strong> 1000 bar</p>
                  <p><strong>Vazão:</strong> 19 L/min</p>
                  <p><strong>Potência:</strong> 50 cv</p>
                  <p><strong>Peso:</strong> 960 kg</p>
                  <p className="col-span-2"><strong>Dimensões:</strong> 1400x1000x1000</p>
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

export default Typhoon50cvEletrica;