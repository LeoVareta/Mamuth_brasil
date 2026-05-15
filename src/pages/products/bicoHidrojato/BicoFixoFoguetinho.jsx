import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import bgImg from '@/assets/images/bg-carrousel.png';
import CTASection from "@/components/CTASection";

// Import da imagem
import bicoFixoFoguetinho from '@/assets/images/bico-fixo-foguetinho.png';

const BicoFixoFoguetinho = () => {
  const navigate = useNavigate();

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Bico Fixo Foguetinho - Mamuth</title>
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
              src={bicoFixoFoguetinho} 
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
            Bico Fixo Foguetinho
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O bico fixo tipo “ Foguetinho” é indicado para limpeza e desobstrução das paredes internas 
            de tubulações de trocadores de calor, evaporadores e linhas de tubos em geral. 
            Esses bicos estão disponíveis em diversos diâmetros variados e orifícios dimensionados 
            de acordo com a vazão, este modelo conta com 8 furos, sendo 2 frontais de ataque e 6 traseiros furos de limpeza e propulsão.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Pressão Máxima de Trabalho 1.000 bar

          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Max. Working Pressure 14.500 psi
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
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">L</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Rosca</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø A</th>
                <th className="py-4 px-1 border-r border-orange-400 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø B</th>
                <th className="py-4 px-1 font-bold text-[9px] sm:text-xs md:text-sm text-center">Ø C</th>
              </tr>
            </thead>
            <tbody>
              {[
                { mod: "D10", cod: "2000.0500", l: "31", r: "M7", a: "XB", b: "X", c: "X" },
                { mod: "D12", cod: "2000.0501", l: "40", r: "1/8 BSP", a: "x", b: "X", c: "XC" },
                { mod: "D16", cod: "2000.0502", l: "47", r: "1/4 BSP", a: "X", b: "X", c: "X" },
                { mod: "D22", cod: "2000.0503", l: "55", r: "1/4 BSP", a: "XB", b: "X", c: "X" },
                { mod: "D28", cod: "2000.0554", l: "65", r: "1/2 BSP", a: "X", b: "X", c: "X" },
                { mod: "D30", cod: "2000.0530", l: "76", r: "1/2 BSP", a: "X", b: "X", c: "X" },
                { mod: "D40", cod: "2000.0513", l: "87", r: "M22x1,5", a: "X", b: "X", c: "X" },
                { mod: "D50", cod: "2000.0514", l: "102", r: "M30x1,5", a: "X", b: "X", c: "X" },
                { mod: "D70", cod: "2000.0507", l: "120", r: "M50x1,5", a: "X", b: "X", c: "X" },
              ].map((item, idx) => (
                <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} text-gray-800 border-b border-gray-200`}>
                  <td className="py-4 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center">{item.mod}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.cod}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.l}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center whitespace-nowrap">{item.r}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.a}</td>
                  <td className="py-4 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">{item.b}</td>
                  <td className="py-4 px-1 text-[10px] sm:text-xs md:text-base text-center">{item.c}</td>
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

export default BicoFixoFoguetinho;