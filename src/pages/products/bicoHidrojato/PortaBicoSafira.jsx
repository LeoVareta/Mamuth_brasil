import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";

// Import da imagem
import portaBicoSafira from '@/assets/images/porta-bico-safira.png';

const PortaBicoSafira = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Porta Bico Safira - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={portaBicoSafira} 
              alt="Typhoon Jet 500" 
              className="mx-auto max-w-full h-auto md:max-h-[400px] rounded-[25px] block"
            />
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 md:text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Porta Bico Safira
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           O suporte para fixação de Bico de Safira 3/8” é um componente essencial em operações de limpeza, 
           jateamento ou corte utilizando pistolas de Ultra Alta Pressão. Este suporte foi projetado para 
           garantir uma fixação segura e estável do bico, proporcionando precisão e eficiência durante o uso.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Recomendado para aplicações que envolvem pressões de até 2.800 bar (40.600 psi), o suporte é ideal para 
          trabalhos que exigem alta performance e confiabilidade, assegurando a durabilidade e a integridade do equipamento mesmo sob condições extremas.
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
        <div className="w-full overflow-hidden rounded-xl shadow-md">
        <table className="w-full border-collapse table-fixed bg-white">
          <thead>
            <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Modelo
              </th>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Código
              </th>
              <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%] text-center">
                Pressão MAX(bar)
              </th>
              <th className="py-6 px-2 font-bold text-base md:text-lg w-[25%] text-center">
                Conexão Entrada
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-gray-800 border-b border-gray-200">
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                3/8-24 UNF
              </td>
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                1341.0092
              </td>
              <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
                2.800
              </td>
              <td className="py-8 px-2 text-sm md:text-xl text-center">
                9/16-18 LH
              </td>
            </tr>
          </tbody>
        </table>
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

export default PortaBicoSafira;