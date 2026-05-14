import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import typhoonHotEletrica from '@/assets/images/typhoon-hot-eletrica.png';
import typhoonHotCombustao from '@/assets/images/typhoon-hot-gasolina.png';
import iconCombustao from "@/assets/images/icon-combustao.svg";
import iconTrifasico from "@/assets/images/icon-trifasico.svg";

const TyphoonHot = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);

  const slides = [
      { id: 1, title: 'Typhoon Jet 50 CV', artist: 'Elétrica', cover: typhoonHotEletrica, color: '#FF5101' },
      { id: 2, title: 'Typhoon Jet 50 CV', artist: 'Combustão', cover: typhoonHotCombustao, color: '#FF5101' },
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet Hot - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
     <ProductSection 
        productSlides={slides} 
        backgroundImage={bgImg} 
      />

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white"> 
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Typhoon-Jet Hot
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            A Typhoon-Jet Hot é uma hidrolavadora industrial de alta pressão com água aquecida, desenvolvida para
            entregar alto desempenho, eficiência e confiabilidade operacional em aplicações de limpeza pesada. 
            Com temperatura de trabalho de até 100 °C, o equipamento potencializa a remoção de resíduos oleosos, 
            graxas, incrustações e sujeiras de difícil remoção, unindo a força da alta pressão à eficiência da água quente.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Sua construção robusta, aliada à bomba triplex industrial, garante maior durabilidade, estabilidade de operação 
            e excelente performance no uso contínuo. Disponível nas versões gasolina e elétrica, a Typhoon-Jet Hot 
            oferece versatilidade operacional, mantendo pressão de até 280 bar (4.000 PSI) e vazão de 15 L/min, com 
            um conjunto projetado para proporcionar produtividade, resistência e facilidade no dia a dia.
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
              Veja mais informações técnicas sobre este produto:
            </h2>
          </div>

          {/* Removemos o overflow-x-auto e a largura mínima da tabela */}
          {/* Primeira Div: Espaço grande no topo e menor embaixo */}
        <div className="w-full my-12">
          <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={iconTrifasico} 
                alt="Ícone Técnico" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-gray-700 text-lg">Trifásico</span>
            </div>
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Rotação</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Temperatura</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon Hot</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">270 BAR / 3900 PSI</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">15</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">7,5 KW /10 HP</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1450 RPM</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 - 100°C</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">186</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">112x76x104 cm</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Segunda Div: Mantendo a proporção de maior em cima e menor embaixo */}
        <div className="w-full my-12">
          <div className="flex items-center justify-center gap-4 mb-8">
              <img 
                src={iconCombustao} 
                alt="Ícone Técnico" 
                className="w-12 h-12 object-contain" 
              />
              <span className="text-gray-700 text-lg">Combustão</span>
            </div>
          <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
            <thead>
              <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Rotação</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Temperatura</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white text-gray-800 border-b border-gray-200">
                <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon Hot</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">280 BAR / 4000 PSI</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">15</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">11 KW /15 HP</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">3400 RPM</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 - 100°C</td>
                <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">215</td>
                <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">100x70x107 cm</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon Hot</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Pressão(bar):</strong> 270</p>
                    <p><strong>Pressão(PSI):</strong> 3900</p>
                    <p><strong>Vazão(L/min):</strong> 15 </p>
                    <p><strong>Potência(KW / HP):</strong>7,5 / 10</p>
                    <p><strong>Rotação:</strong>1450 RPM</p>
                    <p><strong>Temperatura:</strong>0 - 100°C</p>
                    <p><strong>Peso:</strong> 186 kg</p>
                    <p><strong>Dimensões:</strong> 112x76x104 cm</p>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon Hot</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Pressão(bar):</strong> 280</p>
                    <p><strong>Pressão(PSI):</strong> 4000</p>
                    <p><strong>Vazão(L/min):</strong> 15 </p>
                    <p><strong>Potência(KW / HP):</strong>11 / 15</p>
                    <p><strong>Rotação:</strong>3400 RPM</p>
                    <p><strong>Temperatura:</strong>0 - 100°C</p>
                    <p><strong>Peso:</strong> 215 kg</p>
                    <p><strong>Dimensões:</strong> 100x70x107 cm</p>
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

export default TyphoonHot;