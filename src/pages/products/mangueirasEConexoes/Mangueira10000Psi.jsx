import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import mangueira10kPsi from '@/assets/images/mangueira-10000psi.png';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const Mangueira10000PSI = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Mangueira até 10.000 psi',  cover: mangueira10kPsi, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Mangueira até 10.000 psi- Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Mangueira 10.000 PSI
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           APLICAÇÃO: Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           CONSTRUÇÃO: Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           TEMPERATURA DE TRABALHO: Indicadas para operações em temperatura entre - 40°C até +100°C. Temperatura máxima de trabalho intermitente: +121°C
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

          <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[7%] uppercase">Mod.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Int. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Ext. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">P. Trab. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">P. Rupt. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Raio Curv.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Peso (kg/m)</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Term. (mm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "1/4", int: "6,0", ext: "14,7", p_t: "700 / 10k", p_r: "1.450 / 21k", raio: "100", peso: "0,370", term: "18,0" },
                  { mod: "3/8", int: "10,0", ext: "16,8", p_t: "700 / 10k", p_r: "1.450 / 21k", raio: "127", peso: "0,395", term: "22,5" },
                ].map((item, idx) => (
                  <tr key={idx} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center font-bold">{item.mod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.int}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.ext}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-medium bg-gray-50">{item.p_t}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold text-[#FF6B0A] bg-orange-50/30">{item.p_r}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.raio}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.peso}</td>
                    <td className="py-6 px-1 text-sm text-center">{item.term}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">Veja mais informações técnicas sobre este produto:</h2>
            </div>
    {/* ===== GRUPO 1:===== */}
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]"> 1/4 </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Diâmetro Interno (mm):</strong> 6,0</p>
                    <p><strong>Diâmetro Externo (mm):</strong> 14,7</p>
                    <p><strong>Pressão de Trabalho (bar/psi):</strong> 700/10000 </p>
                    <p><strong>Pressão de Ruptura (bar/psi):</strong> 1450/21000 </p>
                    <p><strong>Raio de Curvatura (mm.r)</strong>100</p>
                    <p><strong>Peso por metro (kg/m)</strong>0,370</p>
                    <p><strong>Diâmetro no terminal (mm)</strong>18,0</p>
                    
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]"> 3/8 </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't2' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Diâmetro Interno (mm):</strong> 10,0</p>
                    <p><strong>Diâmetro Externo (mm):</strong> 16,8</p>
                    <p><strong>Pressão de Trabalho (bar/psi):</strong> 700/10000 </p>
                    <p><strong>Pressão de Ruptura (bar/psi):</strong> 1450/21000 </p>
                    <p><strong>Raio de Curvatura (mm.r)</strong>100</p>
                    <p><strong>Peso por metro (kg/m)</strong>0,395</p>
                    <p><strong>Diâmetro no terminal (mm)</strong>22,5</p>
                    
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

export default Mangueira10000PSI;