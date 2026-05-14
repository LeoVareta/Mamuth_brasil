import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import niplesAdaptador from '@/assets/images/niples-adaptador-hp9-16.png';

const NiplesAdaptadorHP = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Niples Adaptador HP',  cover: niplesAdaptador, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Niples (Adaptador HP 9-16 HP X 9-16 JIC-1)- Mamuth</title>
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
            Niples Adaptador HP 
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar 
           mangueiras e acessórios. A MAMUTH possui uma linha completa destes itens para atender todas 
           as necessidades. Também atendemos solicitações e fabricamos itens sob medida e encomenda. 
           Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser 
           utilizada em pressões de até 2800 Bar todos esses itens são fabricados 
           em aço inoxidável de alta performance.
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
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[5%] uppercase">#</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[12%] uppercase">Modelo</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Código</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">P. Max (bar)</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Rosca A (Tipo)</th>
                <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Rosca B (Tipo)</th>
                <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[22%] uppercase">Aplicação</th>
              </tr>
            </thead>
            <tbody>
              {[
                { id: 1, cod: "3006.0394", p: "2.800", ra: "3/8 UNF LH (M)", rb: "9/16 UNF LH (M)" },
                { id: 2, cod: "3006.0588", p: "2.800", ra: "3/8 UNF LH (M)", rb: "7/16 UNF LH (M)" },
                { id: 3, cod: "3006.0018", p: "2.800", ra: "9/16 UNF LH (M)", rb: "9/16 UNF LH (M)" },
                { id: 4, cod: "3006.0299", p: "2.800", ra: "9/16 UNF LH (M)", rb: "9/16 UNF LH (M)" },
                { id: 5, cod: "3006.0557", p: "2.800", ra: "9/16 UNF LH (M)", rb: "7/16 UNF LH (M)" },
                { id: 6, cod: "3006.0275", p: "2.800", ra: "7/8 UNF LH (M)", rb: "7/8 UNF LH (M)" },
              ].map((item) => (
                <tr key={item.id} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                  <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-bold">{item.id}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-medium">Niple</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-sm text-center font-mono text-gray-600">{item.cod}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-sm text-center">{item.p}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center">{item.ra}</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold text-[#FF6B0A]">{item.rb}</td>
                  <td className="py-6 px-1 text-xs md:text-sm text-center text-gray-500 italic">Mangueiras, acessórios...</td>
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
    {/* ===== GRUPO 1: Trifásico ===== */}
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Niples Adaptador HP</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>

                {/* ITEM 1 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0394</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 3/8 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0588</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 3/8 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 7/16 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0018</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0299</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
                  </div>
                </div>

                {/* ITEM 5 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0557</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 9/16 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 7/16 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
                  </div>
                </div>

                {/* ITEM 6 */}
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3006.0275</p>
                    <p><strong>Modelo:</strong> Niple</p>
                    <p><strong>Pressão:</strong> 2.800 bar</p>
                    <p><strong>Rosca A:</strong> 7/8 UNF LH (M)</p>
                    <p><strong>Rosca B:</strong> 7/8 UNF LH (M)</p>
                    <p><strong>Aplicação:</strong> Mangueiras, acessórios...</p>
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

export default NiplesAdaptadorHP;