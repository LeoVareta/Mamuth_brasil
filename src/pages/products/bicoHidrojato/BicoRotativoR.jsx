import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import bicoRotativoR from '@/assets/images/bico-rotativo-r.png';

const BicoRotativoR = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Rotativo R - Mamuth</title>
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
              src={bicoRotativoR} 
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Bico Rotativo R
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O bico rotativo modelo “R’’ foi especificamente desenvolvido para limpeza e remoção de incrustações nas paredes internas de tubulações de trocadores de calor, evaporadores e linhas de tubos em geral. Esses bicos estão disponíveis em diversos diâmetros e com insertos de variados orifícios dimensionados de acordo com a vazão.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Pressão Máxima de Trabalho 1.000 bar <br />
            Max. Working Pressure 14.500 psi <br />
            F/B: Furo na Bucha <br />
            Todos os bicos (com exceção do modelo R10) tem a opção de rosca no padrão NPT.
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
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Mod.</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Ø A</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">L</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Rosca</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Ins.</th>
                    <th className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center">Peso</th>
                    {['0.5', '0.6', '0.7', '0.8', '0.9', '1.0'].map(ori => (
                      <th key={ori} className="py-3 px-0.5 border-r border-orange-400 font-bold text-[7px] sm:text-[10px] md:text-xs text-center last:border-r-0">
                        {ori}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { m: "R10", a: "10", l: "35", r: "M7", i: "F/B", p: "X", o: ["X", "X", "", "-", "-", "-"] },
                    { m: "R12", a: "12", l: "39", r: "1/8", i: "F/B", p: "X", o: ["XC", "X", "X", "-", "-", "-"] },
                    { m: "R15", a: "15", l: "41", r: "1/8", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R18", a: "18", l: "46", r: "1/4", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R22", a: "22", l: "57", r: "1/4", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R25", a: "25", l: "59", r: "1/8", i: "F/B", p: "X", o: ["X", "X", "X", "-", "-", "-"] },
                    { m: "R28", a: "28", l: "65", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R31", a: "31", l: "65", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R33", a: "33", l: "69", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R35", a: "35", l: "69", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R40", a: "40", l: "70", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R45", a: "45", l: "73", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R55", a: "55", l: "88", r: "1/2", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                    { m: "R75", a: "75", l: "95", r: "3/4", i: "M4", p: "X", o: ["X", "X", "X", "X", "X", "X"] },
                  ].map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                      <td className="py-3 px-0.5 border-r border-gray-200 font-bold text-[8px] sm:text-[10px] md:text-sm text-center">{row.m}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.a}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.l}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center whitespace-nowrap">{row.r}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.i}</td>
                      <td className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center">{row.p}</td>
                      {row.o.map((val, i) => (
                        <td key={i} className="py-3 px-0.5 border-r border-gray-200 text-[8px] sm:text-[10px] md:text-sm text-center last:border-r-0">{val}</td>
                      ))}
                    </tr>
                  ))}
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

export default BicoRotativoR;