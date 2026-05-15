import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import capaMangueira from '@/assets/images/capa-protetora-mangueira.png';

const CapaMangueira = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Capa de Mangueira', cover: capaMangueira, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Capa de Mangueira- Mamuth</title>
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
            Capa de Mangueira 
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Capa protetora indicada para mangueiras que trabalham com pressões de até 2800 Bar, proteção 
            em caso de ruptura acidental formando um escudo e impedindo que a água em alta pressão atinja o operador.
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[8%] uppercase">#</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[20%] uppercase">Material</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[22%] uppercase">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[20%] uppercase">Compr.</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[30%] uppercase">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, mat: "Aramida", cod: "1320.0132", comp: "1,0 m" },
                  { id: 2, mat: "Aramida", cod: "1320.0074", comp: "2,0 m" },
                  { id: 3, mat: "Aramida", cod: "1320.0020", comp: "3,0 m" },
                  { id: 4, mat: "PVC", cod: "1320.0131", comp: "1,0 m" },
                  { id: 5, mat: "PVC", cod: "1320.0073", comp: "2,0 m" },
                  { id: 6, mat: "PVC", cod: "1320.0043", comp: "3,0 m" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold">{item.id}</td>
                    <td className={`py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-semibold ${item.mat === 'Aramida' ? 'text-orange-700' : 'text-blue-700'}`}>
                      {item.mat}
                    </td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-mono">{item.cod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-medium bg-gray-50/50">{item.comp}</td>
                    <td className="py-6 px-1 text-[10px] md:text-sm text-center italic text-gray-500 leading-tight">
                      Proteção Hidrojato
                    </td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Capa de Mangueira </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong> Aramida</p>
                    <p><strong>Código:</strong> 1320.0132</p>
                    <p><strong>Comprimento:</strong> 1,0 m </p>
                    <p><strong>Aplicação:</strong> Proteção Hidrojato </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong> Aramida</p>
                    <p><strong>Código:</strong> 1320.0074</p>
                    <p><strong>Comprimento:</strong> 2,0 m </p>
                    <p><strong>Aplicação:</strong> Proteção Hidrojato </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong> Aramida</p>
                    <p><strong>Código:</strong> 1320.0020</p>
                    <p><strong>Comprimento:</strong> 3,0 m </p>
                    <p><strong>Aplicação:</strong> Proteção Hidrojato </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong> PVC </p>
                    <p><strong>Código:</strong> 1320.0131</p>
                    <p><strong>Comprimento:</strong> 1,0 m </p>
                    <p><strong>Aplicação:</strong> 2800 bar / 40600 psi </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong>PVC</p>
                    <p><strong>Código:</strong> 1320.0073</p>
                    <p><strong>Comprimento:</strong> 2,0 m </p>
                    <p><strong>Aplicação:</strong> 2800 bar / 40600 psi </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Material:</strong>PVC</p>
                    <p><strong>Código:</strong> 1320.0043</p>
                    <p><strong>Comprimento:</strong> 3,0 m </p>
                    <p><strong>Aplicação:</strong> 2800 bar / 40600 psi </p>
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

export default CapaMangueira;