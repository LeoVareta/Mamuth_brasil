import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import robocp from "@/assets/images/robo-line-worker-250-2.png";
import robo from "@/assets/images/robo-magnetico-climb-rob.png";
import robo1 from "@/assets/images/robo-magnetico-climb-rob-2.png";
import robo2 from "@/assets/images/robo-magnetico-climb-rob-3.png";
import robo3 from "@/assets/images/robo-magnetico-climb-rob-4.png";
import robo4 from "@/assets/images/robo-magnetico-climb-rob-5.png";
import seloFalch from "@/assets/images/logo_falch_certificado.png";

const RoboMagnetico = () => {
  const navigate = useNavigate();
  const slides = [
          { id: 1, title: 'Robo Magnetico Climb Rob', cover: robo1, color: '#FF5101' },
          { id: 2, title: 'Robo Magnetico Climb Rob', cover: robo2, color: '#FF5101' },
          { id: 3, title: 'Robo Magnetico Climb Rob', cover: robo3, color: '#FF5101' },
          { id: 4, title: 'Robo Magnetico Climb Rob', cover: robo4, color: '#FF5101' },
          { id: 5, title: 'Robo Magnetico Climb Rob', cover: robo, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Robo Magnetico Climb Rob - Mamuth</title>
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
              className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
              style={{ color: 'var(--color-dark-blue)' }}
            >
              Robo Magnetico Climb Rob
              <img 
                src={seloFalch}
                alt="Selo de Qualidade" 
                className="w-16 h-auto md:w-32 md:h-auto object-contain" 
              />
            </h2>  
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Climb Rob 250 é um robô magnético desenvolvido para hidrojateamento de alta e ultra-alta pressão em superfícies metálicas verticais, horizontais e inclinadas. Sua fixação magnética garante estabilidade durante a operação, permitindo maior segurança, produtividade e precisão na limpeza, remoção de revestimentos e preparação de superfícies.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Projetado para aplicações industriais exigentes, o equipamento reduz a necessidade de trabalho manual em altura, melhora a ergonomia da operação e permite controle remoto do processo, proporcionando maior segurança ao operador e melhor desempenho em comparação à pistola manual.
          </p>
        </div>
      </section>
      <section className="py-1 px-4 bg-white">
        {/* Mantive o max-w-4xl conforme solicitado */}
        <div className="max-w-4xl hidden md:block mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>

          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
              > i
            </div>
          <h2 className="text-gray-800 text-2xl md:text-3xl font-bold">
            Veja mais informações técnicas sobre este produto:
          </h2>
          </div>

          {/* Removemos o overflow-x-auto e a largura mínima da tabela */}
          {/* Primeira Div: Espaço grande no topo e menor embaixo */}
          <div className="w-full my-12">
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão de trabalho</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Força de fixação</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Alimentação elétrica</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Jet cap</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Braço articulado</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Grau de proteção</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Manutenção/ vida útil</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso do transportador</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso com jet cap</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso com braço articulado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">500 a 3000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">600 Kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">400 V/ 50/60 Hz/ 16 A</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">360 mm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">260 a 1200 mm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">IP 65 / 55</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 meses /25 anos</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">70 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">106 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">94 kg</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=JTGLGNKVcAE&t=115s" />
        <CTASection />
      </div>
    </div>
  );
};

export default RoboMagnetico;