import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import hydroShellSAP from '@/assets/images/macacao-hydro-shel-sap.png';
import hydroShellSAP2 from '@/assets/images/macacao-hydro-shel-sap-1.png';
import hydroShellSAP3 from '@/assets/images/macacao-hydro-shel-sap-2.png';
import hydroShellSAP4 from '@/assets/images/macacao-hydro-shel-sap-3.png';


const HydroShellSAP = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Macacão Hydro-Shell SAP', cover: hydroShellSAP, color: '#FF5101' },
        { id: 2, title: 'Macacão Hydro-Shell SAP', cover: hydroShellSAP2, color: '#FF5101' },
        { id: 3, title: 'Macacão Hydro-Shell SAP', cover: hydroShellSAP3, color: '#FF5101' },
        { id: 4, title: 'Macacão Hydro-Shell SAP', cover: hydroShellSAP4, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Macacão Hydro-Shell SAP - Mamuth</title>
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
            Macacão Hydro-Shell SAP
          </h2>

          <p className="text-lg leading-relaxed mb-10 text-left">
         Macacão de proteção indicado para trabalhadores do setor sucroalcooleiro e/ou operações com bombas de 
         hidrojateamento modelo SAP. Confeccionado em dupla camada de tecido tramado sintético de 
         alta tenacidade impermeabilizado externamente com PVC, possui costuras impermeabilizadas. O fechamento 
         frontal é através de dois zíperes cobertos por lapela, o capuz fixo pode ser ajustado por cadarço com 
         regulador e ponteira. Punhos e barras das pernas são ajustados por velcro. Possui lapela protetora do 
         pescoço, com fechamento posterior com velcro. Para maior conforto, existe tirantes de sustentação 
         interna com ajustes de altura por fecho rápido, isso ajuda a sustentar do peso do traje.
          </p>
          
          <p className="text-lg leading-relaxed mb-10 text-left">
            Vestimenta composta por <br/> <br/>



            Jaqueta Hydro-Shell UAP; <br/> <br/>



            Calça Hydro-Shell UAP; <br/> <br/>



            Luvas de Proteção; <br/> <br/>



            Botas de Proteção UAP; <br/> <br/>



            Óculos + Protetor Facial.
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[6%] uppercase">#</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[18%] uppercase">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[20%] uppercase">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[16%] uppercase">Pressão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs text-center w-[15%] uppercase">Tam.</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs text-center w-[25%] uppercase">Construção</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, cod: "1320.0430", mod: "Hydro-Shell SAP", pres: "1.000 bar", tam: "P/M/G", const: "Sintético + PVC" },
                  { id: 2, cod: "1320.0431", mod: "Hydro-Shell SAP", pres: "1.000 bar", tam: "GG/EXG", const: "Sintético + PVC" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors">
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold">{item.id}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-mono">{item.cod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-semibold">{item.mod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-sm text-center font-bold text-orange-600 bg-orange-50/20">{item.pres}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center">{item.tam}</td>
                    <td className="py-6 px-1 text-[10px] md:text-sm text-center italic text-gray-500">{item.const}</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Hydro Shell SAP</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 1320.0430</p>
                    <p><strong>Modelo:</strong> Hydro-Shell SAP</p>
                    <p><strong>Pressão:</strong> 1.000 bar </p>
                    <p><strong>Tamanho:</strong> P/M/G </p>
                    <p><strong>Construção:</strong> Sintético + PVC</p>
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 1320.0431</p>
                    <p><strong>Modelo:</strong> Hydro-Shell SAP</p>
                    <p><strong>Pressão:</strong> 1.000 bar </p>
                    <p><strong>Tamanho:</strong> GG/EXG </p>
                    <p><strong>Construção:</strong> Sintético + PVC</p>
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

export default HydroShellSAP;