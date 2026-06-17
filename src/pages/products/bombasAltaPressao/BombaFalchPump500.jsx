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
import BombaFalch500K from '@/assets/images/falch-pump-500.png';
import seloFalch from "@/assets/images/logo_falch_certificado.png";

const BombaFalch500 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('bombas.falch500.title'),  cover: BombaFalch500K, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>{t('bombas.falch500.title')} - Mamuth</title>
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
            {t('bombas.falch500.title')}
            <img 
              src={seloFalch}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto2')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto3')}
          </p>
          <h3 
            className="text-4xl md:text-4xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('bombas.falch500.subtitle1')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto4')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto5')}
          </p>
          <ul className="list-disc text-left mb-10 ml-5">
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto6')}
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto7')}
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto8')}
            </li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('bombas.falch500.texto9')}
          </p>
          <h3 
            className="text-4xl md:text-4xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('bombas.falch500.subtitle2')}
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('bombas.falch500.texto10')}
          </p>
          <ul className="list-disc text-left mb-10 ml-5">
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto11')}
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto12')}
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              {t('bombas.falch500.texto13')}
            </li>
          </ul>

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
            {t('bombas.falch500.textoCard')}
          </h2>
          </div>

          
          <div className="w-full my-12">
            <h2 className="text-gray-800 mb-16 text-2xl md:text-3xl font-bold">
              {t('bombas.falch500.subtitleCard1')}
            </h2>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.pressao3')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.eficiencia')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">94%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">94%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">2500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">92%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">91%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full my-12">
            <h2 className="text-gray-800 mb-4 text-2xl md:text-3xl font-bold">
              {t('bombas.falch500.subtitleCard2')}
            </h2>
            <h3 className="text-gray-800 mb-16 text-2xl md:text-2xl font-bold">
              {t('bombas.falch500.subtitleCard3')}
            </h3>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.pressao3')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.rotacaomotor')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.rotacaovirabrequim')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.potencia2')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.vazao')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1500 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">528 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">508</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">280</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1500 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">528 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">488</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">180  </td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">2500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1500 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">528 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">496</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">110</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1500 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">528 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">504</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">90</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full my-12">´
            <h2 className="text-gray-800 mb-16 text-2xl md:text-3xl font-bold">
              {t('bombas.falch500.subtitleCard4')}
            </h2>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.especificacao')}</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">{t('tabela.detalhes')}</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.posicaoinstalacao')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{t('tabela.horizontalvertical')}</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.sistemavedacao')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">PFS</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.quantidadeoleo')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">60,0 L</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.tipooleo')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">DIN 51517 CLP-220 / SEB 181 226 CLP-220</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.pressaoentradaagua')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1,8 – 8 bar</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.temperaturaagua')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 a 40°C</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.filtragem')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1000 bar: {t('tabela.padrao')} Falch / 1000 bar: Falch Nano</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.pesosemfluidos')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{t('tabela.aproximadamente')} 1430 kg</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.temperaturaoperacao')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 a 40°C</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.sistemalubrificacao')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{t('tabela.lubrificacaopressao')}</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.filtrooleo')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{t('tabela.possui')}</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">{t('tabela.materiaLCarcaça')}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{t('tabela.aluminio')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">{t('bombas.falch125.textoCard')}</h2>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('bombas.falch250.subtitleCard1')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    
                    {/* Cabeçalho da Tabela */}
                    <div className="flex justify-between pb-2 border-b border-gray-100 mb-3">
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>{t('tabela.pressao3')}  </strong></span>
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>{t('tabela.eficiencia')}</strong></span>
                    </div>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">1000 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">94% </span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">1500 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">94%</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">2500 bar</span>
                        <span className="text-gray-800 w-2/3 text-right ">92%</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">3000 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">91%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-left text-[#0E0E68]">{t('bombas.falch250.subtitleCard2')} <br/> {t('bombas.falch250.subtitleCard3')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't2' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>{t('tabela.pressao3')}:</strong> 1000 bar </p>
                      <p><strong>{t('tabela.rotacaomotor')}:</strong> 1500 rpm</p>
                      <p><strong>{t('tabela.rotacaovirabrequim')}:</strong> 528 rpm</p>
                      <p><strong>{t('tabela.potencia2')}:</strong>122</p>
                      <p><strong>{t('tabela.vazaomaxima')}:</strong> 280 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>{t('tabela.pressao3')}:</strong> 1500 bar </p>
                      <p><strong>{t('tabela.rotacaomotor')}:</strong> 1500 rpm</p>
                      <p><strong>{t('tabela.rotacaovirabrequim')}:</strong> 528 rpm</p>
                      <p><strong>{t('tabela.potencia2')}:</strong>117</p>
                      <p><strong>{t('tabela.vazaomaxima')}:</strong> 180 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>{t('tabela.pressao3')}:</strong>2500 bar </p>
                      <p><strong>{t('tabela.rotacaomotor')}:</strong> 1500 rpm</p>
                      <p><strong>{t('tabela.rotacaovirabrequim')}:</strong> 528 rpm</p>
                      <p><strong>{t('tabela.potencia2')}:</strong>124</p>
                      <p><strong>{t('tabela.vazaomaxima')}:</strong> 110 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>{t('tabela.pressao3')}:</strong> 3000 bar </p>
                      <p><strong>{t('tabela.rotacaomotor')}:</strong> 1500 rpm</p>
                      <p><strong>{t('tabela.rotacaovirabrequim')}:</strong> 528 rpm</p>
                      <p><strong>{t('tabela.potencia2')}:</strong>124</p>
                      <p><strong>{t('tabela.vazaomaxima')}:</strong> 90 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't3' ? null : 't3')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('bombas.falch250.subtitleCard4')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't3' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't3' ? 'h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    
                    {/* Cabeçalho da Tabela */}
                    <div className="flex justify-between pb-2 border-b border-gray-100 mb-3">
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>{t('tabela.especificacao')}</strong></span>
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>{t('tabela.detalhes')}</strong></span>
                    </div>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.posicaoinstalacao')}</span>
                        <span className="text-gray-800 w-2/3 text-right">{t('tabela.horizontalvertical')} </span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.sistemavedacao')}</span>
                        <span className="text-gray-800 w-2/3 text-right">PFS</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.quantidadeoleo')}</span>
                        <span className="text-gray-800 w-2/3 text-right font-semibold text-blue-600">10,0 L</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.tipooleo')}</span>
                        <span className="text-gray-800 w-2/3 text-right">DIN 51517 CLP-220 / SEB 181 226 CLP-220</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.pressaoentradaagua')}</span>
                        <span className="text-gray-800 w-2/3 text-right">1,8 – 8 bar</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.temperaturaagua')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">0 a 40°C</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.filtragem')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">1000 bar: {t('tabela.padrao')} Falch / 1000 bar: Falch Nano</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.pesosemfluidos')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">300 kg</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.temperaturaoperacao')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">0 a 40°C</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.sistemalubrificacao')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">{t('tabela.lubrificacaopressao')}</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.filtrooleo')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">{t('tabela.possui')}</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">{t('tabela.materialcarcaca')}</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">{t('tabela.aluminio')}</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=FSJUSIAsvu8" />
        <CTASection />
      </div>
    </div>
  );
};

export default BombaFalch500;