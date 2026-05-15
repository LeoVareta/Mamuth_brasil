import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bicoSharkJet from '@/assets/images/bico-shark-jet-22k-40k.png';
import bicoSharkJet22k from '@/assets/images/bico-shark-jet.png';
import bicoSharkJet40k from '@/assets/images/bico-shark-jet-40k.png'

const BicoShark22K = () => {
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: 'Bico Shark-Jet 22K',  cover: bicoSharkJet22k, color: '#FF5101' },
          { id: 2, title: 'Bico Shark-Jet',  cover: bicoSharkJet, color: '#FF5101' },
          { id: 3, title: 'Bico Shark-Jet 40K',  cover: bicoSharkJet40k, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Shark-Jet 22K e 40K - Mamuth</title>
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
            Bico Shark-Jet 22K e 40K
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Shark-Jet 22K e 40K é uma ferramenta rotativa auto-propulsora indicada para jateamento, limpeza 
            e preparação de superfícies planas ou irregulares. Disponível em duas configurações, a primeira trabalha 
            com pressões de até 1.500 bar (22.000 psi) e vazão de até 40L/min, a segunda opção é configurada 
            para trabalhar com pressões de até 2.800 bar (40.000 psi) e vazão de até 30 L/min, esta 
            ferramenta é utilizada junto a pistola de hidrojato. Seus componentes internos tem o sistema de 
            lubrificação e refrigeração por óleo, além de um freio hidráulico para limitar as rotações. 
            Esta ferramenta utiliza 4 Bicos de Safira 7/16-20 UNF na configuração 2.800 bar, e 2 Bicos Attack 
            1/4 NPT na configuração 1.500 bar , todos com ângulos deslocados, isso proporciona um giro controlado 
            e um desempenho de limpeza mais elevado em uma maior área superficial de ataque.
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
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

          <div className="overflow-x-auto pb-4 custom-scrollbar">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Pressão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Vazão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Entrada</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Diâm.</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Compr.</th>
                  <th className="py-4 px-1 font-bold text-[9px] sm:text-xs md:text-sm text-center">Peso</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "Shark-Jet 22K", cod: "1001.0065", pre: "1.500 bar", vaz: "40 L/m", ent: "1/4 BSP", dia: "47 mm", com: "230 mm", pes: "1,3 kg" },
                  { mod: "Shark-Jet 40K", cod: "1001.0065", pre: "2.800 bar", vaz: "30 L/m", ent: "9/16-18 LH", dia: "47 mm", com: "230 mm", pes: "1,5 kg" },
                ].map((item, idx) => (
                  <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                    <td className="py-4 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.mod}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.cod}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.pre}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.vaz}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.ent}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.dia}</td>
                    <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.com}</td>
                    <td className="py-4 px-1 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.pes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default BicoShark22K;