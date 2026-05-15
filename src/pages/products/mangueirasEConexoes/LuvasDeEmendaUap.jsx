import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import luvasEmendaUap from '@/assets/images/luvas-emenda-uap.png';

const LuvasDeEmendaUAP = () => {
  const navigate = useNavigate();
   const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Luvas de Emenda UAP',  cover: luvasEmendaUap, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Luvas de Emenda UAP até 3.200bar - Mamuth</title>
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
            Luvas de Emenda UAP
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Conexões indicadas para bombas, mangueiras, varetas e acessórios de hidrojateamento com pressão de até 3.200 bar (46.400 psi)
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

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[4%] uppercase">#</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[10%] uppercase">Modelo</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[12%] uppercase">Código</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[8%] uppercase">P. Max</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">R.A (Vazado)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">R.A (Anilha)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">R.B (Vazado)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[13%] uppercase">R.B (Anilha)</th>
                  <th className="py-6 px-1 font-bold text-[10px] md:text-xs text-center w-[14%] uppercase">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, cod: "3006.0213", p: "2.800", ra_v: "3/4 UNF", ra_a: "3/8 UNF Esq", rb_v: "3/4 UNF", rb_a: "3/8 UNF Esq" },
                  { id: 2, cod: "3006.0053", p: "2.800", ra_v: "M26", ra_a: "3/8 UNF Esq", rb_v: "M26", rb_a: "3/8 UNF Esq" },
                  { id: 3, cod: "3006.0224", p: "2.800", ra_v: "M26", ra_a: "3/8 UNF Esq", rb_v: "M26", rb_a: "9/16 UNF Esq" },
                  { id: 4, cod: "3006.0022", p: "2.800", ra_v: "M26", ra_a: "9/16 UNF Esq", rb_v: "M26", rb_a: "9/16 UNF Esq" },
                  { id: 5, cod: "3006.0040", p: "2.800", ra_v: "1.1/8 UNF", ra_a: "9/16 UNF Esq", rb_v: "1.1/8 UNF", rb_a: "9/16 UNF Esq" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200">
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold">{item.id}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">Luva</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-xs text-center font-semibold">{item.cod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center">{item.p}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-xs text-center">{item.ra_v}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-xs text-center">{item.ra_a}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-xs text-center">{item.rb_v}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-xs text-center font-bold text-[#FF6B0A]">{item.rb_a}</td>
                    <td className="py-6 px-1 text-[10px] md:text-xs text-center">Varetas, Mang...</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Luvas </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0213</p>
                    <p><strong>Pressão Máx:</strong> 2800</p>
                    <p><strong>Rosca A (Parafuso Vazado)</strong> 3/4 UNF </p>
                    <p><strong>Rosca A (Anilha)</strong> 3/8 UNF Esq </p>
                    <p><strong>Rosca B (Parafuso Vazado)</strong> 3/4 UNF </p>
                    <p><strong>Rosca B (Anilha)</strong> 3/8 UNF Esq </p>
                    <p><strong>Aplicação:</strong>Varetas, Mangueiras, Etc</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                   <p><strong>Código:</strong> 3006.0053</p>
                    <p><strong>Pressão Máx:</strong> 2800</p>
                    <p><strong>Rosca A (Parafuso Vazado)</strong> M26 </p>
                    <p><strong>Rosca A (Anilha)</strong> 3/8 UNF Esq </p>
                    <p><strong>Rosca B (Parafuso Vazado)</strong> M26 </p>
                    <p><strong>Rosca B (Anilha)</strong> 3/8 UNF Esq </p>
                    <p><strong>Aplicação:</strong>Varetas, Mangueiras, Etc</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0224</p>
                    <p><strong>Pressão Máx:</strong> 2800</p>
                    <p><strong>Rosca A (Parafuso Vazado)</strong> M26 </p>
                    <p><strong>Rosca A (Anilha)</strong> 3/8 UNF Esq </p>
                    <p><strong>Rosca B (Parafuso Vazado)</strong> M26 </p>
                    <p><strong>Rosca B (Anilha)</strong> 9/16 UNF Esq </p>
                    <p><strong>Aplicação:</strong>Varetas,Mangueiras, Etc</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0022</p>
                    <p><strong>Pressão Máx:</strong> 2800</p>
                    <p><strong>Rosca A (Parafuso Vazado)</strong> 9/16 UNF Esq </p>
                    <p><strong>Rosca A (Anilha)</strong> M26 </p>
                    <p><strong>Rosca B (Parafuso Vazado)</strong> 9/16 UNF Esq </p>
                    <p><strong>Rosca B (Anilha)</strong> M26 </p>
                    <p><strong>Aplicação:</strong>Varetas,Mangueiras, Etc</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0040</p>
                    <p><strong>Pressão Máx:</strong> 2800</p>
                    <p><strong>Rosca A (Parafuso Vazado)</strong> 1.1/8 UNF </p>
                    <p><strong>Rosca A (Anilha)</strong> 9/16 UNF Esq </p>
                    <p><strong>Rosca B (Parafuso Vazado)</strong> 1.1/8 UNF </p>
                    <p><strong>Rosca B (Anilha)</strong> 9/16 UNF Esq </p>
                    <p><strong>Aplicação:</strong>Varetas,Mangueiras, Etc</p>
                    
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

export default LuvasDeEmendaUAP;