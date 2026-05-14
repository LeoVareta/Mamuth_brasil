import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";

// Import da imagem
import cabecoteRotativo3D from '@/assets/images/cabecote-rotativo-3d-3.png';
import cabecote2 from '@/assets/images/cabecote-rotativo-3d-1.png'
import cabecote3 from '@/assets/images/cabecote-rotativo-3d-2.png'

const CabecoteRotativo3d = () => {
  const navigate = useNavigate();
  const slides = [
    { id: 2, cover: cabecote2, color: '#FF5101' },
    { id: 3, cover: cabecote3, color: '#FF5101' },
    { id: 1, cover: cabecoteRotativo3D, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Cabeçote Rotativo 3D Torrent NLB - Mamuth</title>
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
            Cabeçote Rotativo 3D Torrent NLB
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Cabeçote 3D Torrent NLB é uma ferramenta avançada projetada especificamente para a limpeza eficiente de tanques. 
            Este dispositivo não apenas reduz drasticamente o tempo de limpeza, mas também proporciona total segurança na 
            operação, eliminando a necessidade de um operador em espaços confinados, o que é essencial para minimizar riscos.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Torrent opera com movimentos precisos nos eixos vertical e horizontal, além de um giro completo de 360°, 
            garantindo uma limpeza abrangente em todas as direções, alcançando até as áreas mais difíceis. 
            Com este acessório, é possível reduzir em até 80% o tempo de limpeza, aumentando a 
            produtividade e eficiência no processo. Ideal para aplicações industriais que exigem alta performance e segurança.
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[3%]">#</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">Modelo</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">Código</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[10%]">Pressão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">Rosca A (Par.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">Rosca A (An.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">Rosca B (Par.)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[14%]">Rosca B (An.)</th>
                  <th className="py-4 px-1 font-bold text-[10px] md:text-xs whitespace-nowrap text-center w-[11%]">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center font-bold">1</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">5/6 - 5/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">1001.0061</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/8 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/4 UNF</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">3/8 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-base text-center whitespace-nowrap">Mangueiras UAP</td>
                </tr>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center font-bold">2</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">8/6 - 8/8</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">1001.0067</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">2.800</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">9/16 UNF LH</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">M26</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] md:text-base text-center whitespace-nowrap">9/16 UNF LH</td>
                  <td className="py-6 px-1 text-[10px] md:text-base text-center whitespace-nowrap">Mangueiras UAP</td>
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

export default CabecoteRotativo3d;