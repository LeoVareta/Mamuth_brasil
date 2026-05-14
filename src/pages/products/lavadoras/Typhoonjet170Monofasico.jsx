import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import typhoonJet170Monofasico from '@/assets/images/Typhoon-Jet-170cv-eletrica-1.png';
import typhoonJet170Monofasico2 from '@/assets/images/Typhoon-Jet-170cv-eletrica-2.png';
import typhoonJet170Monofasico3 from '@/assets/images/Typhoon-Jet-170cv-eletrica-3.png';
import iconTrifasico from "@/assets/images/icon-trifasico.svg"

const Typhoon170Monofasico = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);

  const slides = [
    { id: 2, title: 'Typhoon Jet 170', artist: 'Monofásico/Trifásico', cover: typhoonJet170Monofasico2, color: '#FF5101' },
    { id: 2, title: 'Typhoon Jet 170', artist: 'Monofásico/Trifásico', cover: typhoonJet170Monofasico, color: '#FF5101' },
    { id: 2, title: 'Typhoon Jet 170', artist: 'Monofásico/Trifásico', cover: typhoonJet170Monofasico3, color: '#FF5101' },
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Typhoon Jet 170 Monofásico - Mamuth</title>
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
            Typhoon-Jet 170: A Solução Completa para Limpeza Moderada
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          O Typhoon-Jet 170 é um equipamento de alta pressão projetado para oferecer desempenho excepcional em limpezas moderadas em ambientes industriais, agrícolas e comerciais. Este equipamento garante resultados eficazes em desafios de limpeza de intensidade moderada.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Ideal para fácil transporte e uso em diferentes ambientes. o Typhoon-Jet 170 oferece praticidade e eficiência durante o uso, tornando-o ideal para uma variedade de aplicações.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Além disso, o Typhoon-Jet 170 é fácil de operar e manter, proporcionando uma experiência de limpeza eficiente e sem complicações. Com ele, você pode remover sujeira leve a moderada de forma rápida e eficaz, economizando tempo e esforço.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Ideal para pequenos estabelecimentos comerciais, oficinas, condomínios, e outras áreas que necessitem de limpezas moderadas.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Itens Inclusos: <br/><br/>



            1 mangueira 3/8 de 20 metros de alta pressão <br/><br/>



            1 pistola de alta pressão Typhoon <br/><br/>



            1 bico leque de alta pressão Typhoon <br/><br/>



            1 regulador de pressão <br/><br/>



            1 carrinho 
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
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (PSI)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/h)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Tensão</th>
                    <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-gray-800 border-b border-gray-200">
                    <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 170</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">170</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">2465</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">12</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">720</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">5</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">40</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">Trifásico</td>
                    <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">950x640x540</td>
                  </tr>
                </tbody>
              </table>
            </div>
    
            {/* Segunda Div: Mantendo a proporção de maior em cima e menor embaixo */}
            <div className="w-full my-12">
              <div className="flex items-center justify-center gap-4 mb-8">
                  <img 
                    src={iconTrifasico} 
                    alt="Ícone Técnico" 
                    className="w-12 h-12 object-contain" 
                  />
                  <span className="text-gray-700 text-lg">Monofásico</span>
                </div>
              <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
                <thead>
                  <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (bar)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão (PSI)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/h)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (cv)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso (kg)</th>
                    <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Tensão</th>
                    <th className="py-4 px-1 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white text-gray-800 border-b border-gray-200">
                    <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Typhoon-Jet 170</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">170</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">2465</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">12</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">720</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">5</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">40</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">Monofásico</td>
                    <td className="py-6 px-1 text-[10px] sm:text-xs md:text-base font-semibold text-center">950x640x540</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
            <div className="block md:hidden space-y-10">
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
                      <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 170</h3>
                      <span className="text-2xl text-[#FF6B0A] font-light">
                        {aberto === 't1' ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                      <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                          <p><strong>Pressão(bar):</strong> 170 </p>
                          <p><strong>Pressão(PSI):</strong> 2465 </p>
                          <p><strong>Vazão(L/min):</strong> 12 </p>
                          <p><strong>Vazão(L/h)</strong> 720 </p>
                          <p><strong>Potência(cv):</strong> 5 </p>
                          <p><strong>Peso:</strong> 40 kg </p>
                          <p><strong>Tipo de Tensão</strong> Trifásico</p>
                          <p><strong>Dimensões(mm):</strong>950x640x540</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img src={iconTrifasico} alt="Trifásico" className="w-10 h-10" />
                  <h2 className="text-xl font-bold text-[#0E0E68]">Monofásico</h2>
                </div>
      
                <div className="space-y-4">
                  {/* CARD 1 */}
                  <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                    <button 
                      onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                      className="w-full flex justify-between items-center p-5 bg-white"
                    >
                      <h3 className="font-bold text-lg text-[#0E0E68]">Typhoon-Jet 170</h3>
                      <span className="text-2xl text-[#FF6B0A] font-light">
                        {aberto === 't2' ? '−' : '+'}
                      </span>
                    </button>
                    
                    <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                      <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                          <p><strong>Pressão(bar):</strong> 170</p>
                          <p><strong>Pressão(PSI):</strong> 2465 </p>
                          <p><strong>Vazão(L/min):</strong> 12</p>
                          <p><strong>Vazão(L/h)</strong> 720 </p>
                          <p><strong>Potência(cv):</strong> 5 </p>
                          <p><strong>Peso:</strong> 40 kg</p>
                          <p><strong>Tipo de Tensão</strong> Monofásico</p>
                          <p><strong>Dimensões(mm):</strong>950x640x540</p>
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

export default Typhoon170Monofasico;