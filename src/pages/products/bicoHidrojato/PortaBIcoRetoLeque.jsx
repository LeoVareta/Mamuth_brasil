import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import portaBicoRetoELeque from '@/assets/images/porta-bico-reto-e-leque.png';

const PortaBicoRetoELeque = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Porta Bico Reto e Leque - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundImage: `url(${bgImg})`, 
        zIndex: 1,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'  }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative inline-block bg-white p-2 rounded-[30px] shadow-2xl"
          >
            <img 
              src={portaBicoRetoELeque} 
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
            Porta Bico Reto e Leque
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           O suporte para Bico Reto Forma 4 e Bico Leque Forma 19 é principalmente utilizado nas operações de limpeza, 
           jateamento ou corte com pistolas de alta pressão. São recomendados para aplicações com até 1.500 bar / 21.750 psi.
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
            <table className="w-full border-collapse table-fixed">
    <thead>
      <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Modelo
        </th>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Código
        </th>
        <th className="py-6 px-2 border-r border-orange-400 font-bold text-base md:text-lg w-[25%]">
          Pressão MAX
        </th>
        <th className="py-6 px-2 font-bold text-base md:text-lg w-[25%]">
          Conexão
        </th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-white text-gray-800 border-b border-gray-200">
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1/4 BSP
        </td>
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1341.0050
        </td>
        <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-xl text-center">
          1.500 bar
        </td>
        <td className="py-8 px-2 text-sm md:text-xl text-center">
          1/4 BSP
        </td>
      </tr>
    </tbody>
  </table>
          </div>

          <style dangerouslySetInnerHTML={{ __html: `
            .custom-scrollbar::-webkit-scrollbar { height: 8px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #FF6B0A; border-radius: 10px; }
          `}} />
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PortaBicoRetoELeque;