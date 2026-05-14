import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import niplesM24DKO from '@/assets/images/niples-m24dko-1.png';

const PoliamidaSAP1500 = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Niples M24DKO-1',  cover: niplesM24DKO, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Niples M24DKO-1 Mamuth</title>
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
            Niples M24DKO-1
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Conexões, Uniões, Adaptadores e Engates, são itens necessários para unir, acoplar e adaptar mangueiras e 
           acessórios. A MAMUTH possui uma linha completa destes itens para atender todas as necessidades. 
           Também atendemos solicitações e fabricamos itens sob medida e encomenda. 
           Nosso portfólio de divide em duas linhas, a limitada até 1500 BAR e a que pode ser 
           utilizada em pressões de até 2800 Bar todos esses itens são fabricados em aço inoxidável de alta performance.
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
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-white text-[10px] md:text-xs uppercase" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-3 px-1 border-r border-orange-400 font-bold">#</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Modelo</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Código</th>
                  <th className="py-3 px-1 border-r border-orange-400 font-bold text-center">Pressão (bar)</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Rosca A</th>
                  <th className="py-3 px-2 border-r border-orange-400 font-bold">Rosca B</th>
                  <th className="py-3 px-2 font-bold">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, cod: "3006.0174", p: "1.500", ra: "M7 (M)", rb: "M7 (M)" },
                  { id: 2, cod: "3006.0208", p: "1.500", ra: "M7 (M)", rb: "1/8 BSP (M)" },
                  { id: 3, cod: "3006.0201", p: "1.500", ra: "1/8 BSP (M)", rb: "1/8 BSP (M)" },
                  { id: 4, cod: "3006.0150", p: "1.500", ra: "1/8 (M)", rb: "1/8 (M)" },
                  { id: 5, cod: "3006.0145", p: "1.500", ra: "1/4 BSP (M)", rb: "1/4 BSP (M)" },
                  { id: 6, cod: "3006.0421", p: "1.500", ra: "1/4 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 7, cod: "3006.0096", p: "1.000", ra: "1/4 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 8, cod: "3006.0531", p: "1.500", ra: "1/4 BSP (M)", rb: "M22 PL (M)" },
                  { id: 9, cod: "3006.0321", p: "1.500", ra: "1/4 BSP (M)", rb: "M22 BOL (M)" },
                  { id: 10, cod: "3006.0251", p: "1.500", ra: "1/4 BSP (M)", rb: "M24 DKO (M)" },
                  { id: 11, cod: "3006.0552", p: "1.000", ra: "1/2 NPT (M)", rb: "1/2 NPT (M)" },
                  { id: 12, cod: "3006.0273", p: "1.500", ra: "1/2 BSP (M)", rb: "1/2 BSP (M)" },
                  { id: 13, cod: "3006.0152", p: "1.000", ra: "1/2 BSP (M)", rb: "1/2 NPT (M)" },
                  { id: 14, cod: "3006.0056", p: "1.500", ra: "1/2 BSP (M)", rb: "M22 PL (M)" },
                  { id: 15, cod: "3006.0046", p: "1.500", ra: "1/2 BSP (M)", rb: "M24 PL (M)" },
                  { id: 16, cod: "3006.0015", p: "1.500", ra: "M22 PL (M)", rb: "M22 PL (M)" },
                  { id: 17, cod: "3006.0067", p: "1.500", ra: "M22 PL (M)", rb: "M24 DKO (M)" },
                  { id: 18, cod: "3006.0016", p: "1.500", ra: "M22 PL (M)", rb: "M30 PL (M)" },
                  { id: 19, cod: "3006.0017", p: "1.500", ra: "M24 DKO (M)", rb: "M24 DKO (M)" },
                  { id: 20, cod: "3006.0168", p: "1.500", ra: "M24 DKO (M)", rb: "M30 PL (M)" },
                  { id: 21, cod: "3006.0098", p: "1.000", ra: "M24 DKO (M)", rb: "M35 PL (M)" },
                  { id: 22, cod: "3006.0193", p: "1.000", ra: "M30 PL (M)", rb: "M30 PL (M)" },
                  { id: 23, cod: "3006.0091", p: "1.000", ra: "M35 PL (M)", rb: "M35 PL (M)" },
                  { id: 24, cod: "3006.0024", p: "1.000", ra: "M30 PL (M)", rb: "M36 DKO (M)" },
                  { id: 25, cod: "3006.0032", p: "1.000", ra: "M36 DKO (M)", rb: "M36 DKO (M)" },
                ].map((niple) => (
                  <tr key={niple.id} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-[9px] sm:text-xs">
                    <td className="py-2 px-1 border-r border-gray-200 font-bold text-center">{niple.id}</td>
                    <td className="py-2 px-2 border-r border-gray-200">Niple</td>
                    <td className="py-2 px-2 border-r border-gray-200 tabular-nums">{niple.cod}</td>
                    <td className="py-2 px-1 border-r border-gray-200 text-center">{niple.p}</td>
                    <td className="py-2 px-2 border-r border-gray-200 text-[8px] sm:text-[11px] leading-tight">{niple.ra}</td>
                    <td className="py-2 px-2 border-r border-gray-200 font-bold text-orange-600 bg-orange-50/30 text-[8px] sm:text-[11px] leading-tight">
                      {niple.rb}
                    </td>
                    <td className="py-2 px-2 italic text-gray-500 text-[8px] sm:text-[10px]">Varetas, Bicos, etc.</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Niples M24DKO-1 </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  {/* ITEM 1 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong># 1</strong></p><p><strong>Código:</strong> 3006.0174</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M7 (M)</p><p><strong>Rosca B:</strong> M7 (M)</p>
                  </div>

                  {/* ITEM 2 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 2</strong></p><p><strong>Código:</strong> 3006.0208</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M7 (M)</p><p><strong>Rosca B:</strong> 1/8 BSP (M)</p>
                  </div>

                  {/* ITEM 3 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 3</strong></p><p><strong>Código:</strong> 3006.0201</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/8 BSP (M)</p><p><strong>Rosca B:</strong> 1/8 BSP (M)</p>
                  </div>

                  {/* ITEM 4 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 4</strong></p><p><strong>Código:</strong> 3006.0150</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/8 (M)</p><p><strong>Rosca B:</strong> 1/8 (M)</p>
                  </div>

                  {/* ITEM 5 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 5</strong></p><p><strong>Código:</strong> 3006.0145</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> 1/4 BSP (M)</p>
                  </div>

                  {/* ITEM 6 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 6</strong></p><p><strong>Código:</strong> 3006.0421</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> 1/2 BSP (M)</p>
                  </div>

                  {/* ITEM 7 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 7</strong></p><p><strong>Código:</strong> 3006.0096</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> 1/2 BSP (M)</p>
                  </div>

                  {/* ITEM 8 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 8</strong></p><p><strong>Código:</strong> 3006.0531</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> M22 PL (M)</p>
                  </div>

                  {/* ITEM 9 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 9</strong></p><p><strong>Código:</strong> 3006.0321</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> M22 BOL (M)</p>
                  </div>

                  {/* ITEM 10 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 10</strong></p><p><strong>Código:</strong> 3006.0251</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/4 BSP (M)</p><p><strong>Rosca B:</strong> M24 DKO (M)</p>
                  </div>

                  {/* ITEM 11 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 11</strong></p><p><strong>Código:</strong> 3006.0552</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/2 NPT (M)</p><p><strong>Rosca B:</strong> 1/2 NPT (M)</p>
                  </div>

                  {/* ITEM 12 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 12</strong></p><p><strong>Código:</strong> 3006.0273</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/2 BSP (M)</p><p><strong>Rosca B:</strong> 1/2 BSP (M)</p>
                  </div>

                  {/* ITEM 13 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 13</strong></p><p><strong>Código:</strong> 3006.0152</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/2 BSP (M)</p><p><strong>Rosca B:</strong> 1/2 NPT (M)</p>
                  </div>

                  {/* ITEM 14 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 14</strong></p><p><strong>Código:</strong> 3006.0056</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/2 BSP (M)</p><p><strong>Rosca B:</strong> M22 PL (M)</p>
                  </div>

                  {/* ITEM 15 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 15</strong></p><p><strong>Código:</strong> 3006.0046</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> 1/2 BSP (M)</p><p><strong>Rosca B:</strong> M24 PL (M)</p>
                  </div>

                  {/* ITEM 16 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 16</strong></p><p><strong>Código:</strong> 3006.0015</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M22 PL (M)</p><p><strong>Rosca B:</strong> M22 PL (M)</p>
                  </div>

                  {/* ITEM 17 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 17</strong></p><p><strong>Código:</strong> 3006.0067</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M22 PL (M)</p><p><strong>Rosca B:</strong> M24 DKO (M)</p>
                  </div>

                  {/* ITEM 18 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 18</strong></p><p><strong>Código:</strong> 3006.0016</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M22 PL (M)</p><p><strong>Rosca B:</strong> M30 PL (M)</p>
                  </div>

                  {/* ITEM 19 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 19</strong></p><p><strong>Código:</strong> 3006.0017</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M24 DKO (M)</p><p><strong>Rosca B:</strong> M24 DKO (M)</p>
                  </div>

                  {/* ITEM 20 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 20</strong></p><p><strong>Código:</strong> 3006.0168</p>
                    <p><strong>Pressão:</strong> 1.500 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M24 DKO (M)</p><p><strong>Rosca B:</strong> M30 PL (M)</p>
                  </div>

                  {/* ITEM 21 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 21</strong></p><p><strong>Código:</strong> 3006.0098</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M24 DKO (M)</p><p><strong>Rosca B:</strong> M35 PL (M)</p>
                  </div>

                  {/* ITEM 22 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 22</strong></p><p><strong>Código:</strong> 3006.0193</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M30 PL (M)</p><p><strong>Rosca B:</strong> M30 PL (M)</p>
                  </div>

                  {/* ITEM 23 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 23</strong></p><p><strong>Código:</strong> 3006.0091</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M35 PL (M)</p><p><strong>Rosca B:</strong> M35 PL (M)</p>
                  </div>

                  {/* ITEM 24 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 24</strong></p><p><strong>Código:</strong> 3006.0024</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M30 PL (M)</p><p><strong>Rosca B:</strong> M36 DKO (M)</p>
                  </div>

                  {/* ITEM 25 */}
                  <div className="grid grid-cols-2 gap-2 text-sm border-t mt-4 pt-4">
                    <p><strong># 25</strong></p><p><strong>Código:</strong> 3006.0032</p>
                    <p><strong>Pressão:</strong> 1.000 bar</p><p><strong>Aplicação:</strong> Varetas, Bicos...</p>
                    <p><strong>Rosca A:</strong> M36 DKO (M)</p><p><strong>Rosca B:</strong> M36 DKO (M)</p>
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

export default PoliamidaSAP1500;