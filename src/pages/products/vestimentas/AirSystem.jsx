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
import Air1 from '@/assets/images/airsystem-1.png';
import Air2 from '@/assets/images/airsystem-2.png';
import Air3 from '@/assets/images/airsystem-3.png';
import Air4 from '@/assets/images/airsystem-4.png';
import Air5 from '@/assets/images/airsystem-5.png';
import Air6 from '@/assets/images/airsystem-6.png';
import Air7 from '@/assets/images/airsystem-7.png';

const AirSystem = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const { t } = useTranslation();
  const slides = [
    { id: 2, title: t('vestimentas.air.title'), cover: Air2, color: '#FF5101' },
    { id: 3, title: t('vestimentas.air.title'), cover: Air3, color: '#FF5101' },
    { id: 4, title: t('vestimentas.air.title'), cover: Air4, color: '#FF5101' },
    { id: 1, title: t('vestimentas.air.title'), cover: Air1, color: '#FF5101' },
    { id: 5, title: t('vestimentas.air.title'), cover: Air5, color: '#FF5101' },
    { id: 6, title: t('vestimentas.air.title'), cover: Air6, color: '#FF5101' },
    { id: 7, title: t('vestimentas.air.title'), cover: Air7, color: '#FF5101' }
];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('vestimentas.air.title')} - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <ProductSection 
        slides={slides} 
        bgImg={bgImg} 
      />
            <section className="py-20 px-4 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 
                  className="text-5xl md:text-6xl font-bold mb-10 text-left "
                  style={{ color: 'var(--color-dark-blue)' }}
                >
                  {t('vestimentas.air.title')}
                </h2>   
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                    {t('vestimentas.air.texto1')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  {t('vestimentas.air.texto2')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  {t('vestimentas.air.texto3')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  {t('vestimentas.air.texto4')}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  {t('vestimentas.air.texto5')}
                </p>
                <ul className="list-disc text-left mb-10 ml-5">
                  <li className="marker:text-[#FF5101] text-gray-700">
                    {t('vestimentas.air.texto6')}
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    {t('vestimentas.air.texto7')}
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    {t('vestimentas.air.texto8')}
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    {t('vestimentas.air.texto9')}
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    {t('vestimentas.air.texto10')}
                  </li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  <strong>{t('vestimentas.air.texto11')}</strong>
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
                  {t('vestimentas.air.textoCard')}
                </h2>
                </div>

                {/* Removemos o overflow-x-auto e a largura mínima da tabela */}
                {/* Primeira Div: Espaço grande no topo e menor embaixo */}
                <div className="w-full my-12">
                  <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                    <thead>
                      <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Código</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Alimentação</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Capacidade</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Fluxo de Entrada Mínimo</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Conexão</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Medidas</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white text-gray-800 border-b border-gray-200">
                      <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Air System 200</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1001.0080</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">220V / 60HZ <br/> Monofásico</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">204 Nm3/h</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">60 pcm @ 5,0 bar (75 psi/)</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">1" NPT</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">825 x 805 x 760 mm</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">45 Kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="md:hidden space-y-10">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-2xl text-center font-bold text-[#000]">Veja mais informações técnicas sobre este produto:</h2>
                </div>
                <div>
                  <div className="space-y-4">
                    {/* CARD 1 */}
                    <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                      <button 
                        onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                        className="w-full flex justify-between items-center p-5 bg-white"
                      >
                        <h3 className="font-bold text-lg text-[#0E0E68]">Capa de Mangueira </h3>
                        <span className="text-2xl text-[#FF6B0A] font-light">
                          {aberto === 't1' ? '−' : '+'}
                        </span>
                      </button>
                      
                      <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                        <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                          <p><strong>Modelo:</strong> Air System 200</p>
                          <p><strong>Código:</strong> 1001.0080</p>
                          <p><strong>Alimentação:</strong> 220V / 60HZ Monofásico </p>
                          <p><strong>Capacidade:</strong> 204 Nm3/h	 </p>
                          <p><strong>Fluxo de entrada mínimo:</strong> 60 pcm @ 5,0 bar (75 psi/)</p>
                          <p><strong>Conexão:</strong> 1" NPT</p>
                          <p><strong>Medidas:</strong> 825 x 805 x 760 mm </p>
                          <p><strong>Peso:</strong> 45 Kg</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default AirSystem;