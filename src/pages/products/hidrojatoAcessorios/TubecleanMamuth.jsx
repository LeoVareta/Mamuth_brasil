import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import tubecleanMamuth from '@/assets/images/tubeclean-mamuth.jpeg';

const TubeClean = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Tubeclean Mamuth',  cover: tubecleanMamuth, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Tubeclean Mamuth - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundColor: 'var(--color-dark-blue)', zIndex: 1 }}
      >
        <div className="max-w-[1400px] mx-auto">
          <AppleCoverFlow slides={slides} />
        </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Tubeclean Mamuth
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-1 text-left">
            Ferramenta projetada para auxiliar o operador na limpeza eficiente de evaporadores e 
            diversas tubulações, especialmente em posições verticais. Ideal para remover resíduos 
            e obstruções, garantindo a manutenção adequada e o funcionamento contínuo dos
            sistemas. Proporciona maior segurança e precisão durante o processo de limpeza, 
            reduzindo o esforço físico e o tempo necessário para a execução da tarefa.
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

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[10%] uppercase">#</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[40%] uppercase">Modelo</th>
                  <th className="py-6 px-2 border-r border-orange-400 font-bold text-sm md:text-base text-center w-[30%] uppercase">Código</th>
                  <th className="py-6 px-4 font-bold text-sm md:text-base text-center w-[20%] uppercase">Peso (kg)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-bold">1</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-semibold">Tube Clean</td>
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">1001.0055</td>
                  <td className="py-8 px-4 text-sm md:text-lg text-center">2,5</td>
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

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default TubeClean;