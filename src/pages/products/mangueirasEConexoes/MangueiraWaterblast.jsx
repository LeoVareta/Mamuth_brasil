import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import mangueiraWaterblast from '@/assets/images/mangueira-waterblast.jpg';
import mangueiraWaterblast2 from '@/assets/images/mangueira-waterblast-1.png';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const MangueiraWaterblast = () => {
  const [aberto, setAberto] = useState(null);
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Mangueira Waterblast',  cover: mangueiraWaterblast2, color: '#FF5101' },
        { id: 2, title: 'Mangueira Waterblast',  cover: mangueiraWaterblast, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Mangueira Waterblast para Hidrojateamento - Mamuth</title>
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
            Mangueira Waterblast
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           APLICAÇÃO: Recomendadas para sistemas de limpeza, desobstrução, remoção de resíduos e preparação de superfícies com o uso de Hidrojateamento;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           CONSTRUÇÃO: Tubo interno fabricado em borracha sintética resistente a água envolta por espirais trançadas de fio de aço, coberta com uma camada de borracha sintética resistente ao ozônio, intempéries e calor;
          </p>
           <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           TEMPERATURA DE TRABALHO: Indicadas para operações em temperatura entre - 10°C até +70°C. Temperatura máxima de trabalho intermitente: +93°C
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Int. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[9%] uppercase">Ø Ext. (mm)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[15%] uppercase">P. Trab. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[15%] uppercase">P. Rupt. (bar/psi)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Raio Curv.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Peso (kg/m)</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Ø Term. (mm)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "3/8 - 1250", int: "10,0", ext: "21,4", p_t: "1.250 / 18k", p_r: "3.125 / 45k", raio: "150", peso: "0,850", term: "25,0" },
                  { mod: "1/2 - 1100", int: "13,0", ext: "25,4", p_t: "1.100 / 16k", p_r: "2.750 / 40k", raio: "200", peso: "1.260", term: "28,5" },
                  { mod: "1/2 - 1450", int: "13,0", ext: "29,5", p_t: "1.400 / 20.3k", p_r: "3.500 / 50k", raio: "200", peso: "1.750", term: "32,5" },
                  { mod: "3/4 - 1000", int: "20,0", ext: "31,8", p_t: "1.000 / 14.5k", p_r: "2.500 / 36.2k", raio: "280", peso: "1.780", term: "33,5" },
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
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Mangueira Waterblast </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Modelo:</strong> 3/8 - 1250</p>
                    <p><strong>Diâmetro Interno:</strong> 10,0 mm</p>
                    <p><strong>Diâmetro Externo:</strong> 21,4 mm </p>
                    <p><strong>Pressão de Trabalho:</strong> 1250 bar / 18000 psi </p>
                    <p><strong>Pressão de Ruptura:</strong> 3125 bar / 45000 psi </p>
                    <p><strong>Raio de Curvatura:</strong> 150 (mm.r)</p>
                    <p><strong>Peso por metro:</strong>0,850 (kg/m)</p>
                    <p><strong>Diâmetro no terminal:</strong> 25,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Modelo:</strong> 1/2 - 1100</p>
                    <p><strong>Diâmetro Interno:</strong> 13,0 mm</p>
                    <p><strong>Diâmetro Externo:</strong> 25,4 mm </p>
                    <p><strong>Pressão de Trabalho:</strong> 1100 bar/ 16000 psi </p>
                    <p><strong>Pressão de Ruptura:</strong> 2750 bar / 40000 psi </p>
                    <p><strong>Raio de Curvatura:</strong> 200 (mm.r)</p>
                    <p><strong>Peso por metro:</strong>1,260 (kg/m)</p>
                    <p><strong>Diâmetro no terminal:</strong> 28,5 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Modelo:</strong> 1/2 - 1450</p>
                    <p><strong>Diâmetro Interno:</strong> 13,0 mm</p>
                    <p><strong>Diâmetro Externo:</strong> 29,5 mm</p>
                    <p><strong>Pressão de Trabalho:</strong> 1400 bar / 20300 psi </p>
                    <p><strong>Pressão de Ruptura:</strong> 3500 bar / 50000 bar </p>
                    <p><strong>Raio de Curvatura:</strong> 200 (mm.r)</p>
                    <p><strong>Peso por metro:</strong>1,750 (kg/m)</p>
                    <p><strong>Diâmetro no terminal:</strong> 32,5 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Modelo:</strong> 3/4</p>
                    <p><strong>Diâmetro Interno:</strong> 20,0 mm</p>
                    <p><strong>Diâmetro Externo:</strong> 31,8 mm</p>
                    <p><strong>Pressão de Trabalho:</strong> 1000 bar / 14500 psi </p>
                    <p><strong>Pressão de Ruptura:</strong> 2500 bar / 36250 bar </p>
                    <p><strong>Raio de Curvatura:</strong> 280 (mm.r)</p>
                    <p><strong>Peso por metro:</strong>1,780 (kg/m)</p>
                    <p><strong>Diâmetro no terminal:</strong> 33,5 (kg/m)</p>
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

export default MangueiraWaterblast;