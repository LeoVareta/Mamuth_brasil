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
import robo1 from "@/assets/images/robo-line-worker-250-2.png";
import robo2 from "@/assets/images/robo-line-worker-250-3.png";
import robo3 from "@/assets/images/robo-line-worker-250-4.png";
import robo4 from "@/assets/images/robo-line-worker-250-cp.png";
import seloFalch from "@/assets/images/logo_falch_certificado.png";


const RoboWorker250 = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Robo Line Worker 250', cover: robo1, color: '#FF5101' },
      { id: 2, title: 'Robo Line Worker 250', cover: robo2, color: '#FF5101' },
      { id: 3, title: 'Robo Line Worker 250', cover: robo3, color: '#FF5101' },
      { id: 4, title: 'Robo Line Worker 250', cover: robo4, color: '#FF5101' },
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Robo Line Worker 250 - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Robo Line Worker 250
            <img 
              src={seloFalch}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>  
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Robo Line Worker 250, desenvolvido pela alemã Falch, é um robô de hidrojato de alta performance projetado para limpeza e preparação de pisos e superfícies com ultra alta pressão. Desenvolvido para operações industriais exigentes, o equipamento combina robustez, precisão e tecnologia avançada para remover incrustações severas, resíduos industriais, revestimentos, depósitos minerais e outros contaminantes de alta aderência.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Capaz de operar com pressões de até 3.000 bar (4351 PSI), o Line Worker 250 proporciona um nível de limpeza extremamente eficiente, garantindo alto desempenho mesmo nas aplicações mais desafiadoras. Seu sistema de operação permite maior controle do processo, estabilidade durante o trabalho e redução da exposição do operador, tornando as operações mais seguras e produtivas.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Com estrutura robusta, proteção IP65/IP55 e construção voltada para ambientes industriais, o equipamento foi projetado para operação contínua, oferecendo alta confiabilidade e durabilidade. Seu design compacto e funcional facilita a mobilidade e a aplicação em diferentes tipos de superfícies e ambientes de trabalho.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Equipado com sistema elétrico 400 V / 50 Hz e desenvolvido para uso intensivo, o Robo Line Worker 250 mantém elevada eficiência operacional ao mesmo tempo em que garante precisão e consistência nos resultados de limpeza técnica.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Esse robô representa uma solução avançada para operações de hidrojateamento automatizado, proporcionando ganhos significativos em segurança, produtividade e qualidade do processo de limpeza industrial.
          </p>
          <p className="text-lg max-w-3xl text-gray-600 leading-relaxed mb-10 text-left">
            Pressão de trabalho de até 3.000 bar (4351 PSI) <br/>



            Tecnologia alemã Falch, referência mundial em hidrojato <br/><br/>



            Alta eficiência na remoção de incrustações e contaminantes severos <br/><br/>



            Estrutura robusta com proteção IP65 / IP55 <br/><br/>



            Operação estável com maior segurança para o operador <br/><br/>



            Equipamento projetado para aplicações industriais exigentes
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão máxima</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Força de tração</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Força máxima</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Alimentação elétrica</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Grau de proteção</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Intervalo de manutenção</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar/ 43500 psi</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">45 N mínima / 85 N Mínima</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">997 N / 97 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">230 V/ 50 Hz/ 16 A</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">IP 55</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 meses</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">120 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1510 x 577 x 1110 mm</td>
                </tr>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Capa de Mangueira </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>Pressão Máxima:</strong> 3000 bar/ 43500 psi</p>
                    <p><strong>Força de Tração:</strong> 45 N mínima / 85 N Mínima</p>
                    <p><strong>Força Máxima:</strong> 997 N / 97 kg</p>
                    <p><strong>Alimentação Elétrica:</strong> 230 V/ 50 Hz/ 16 A</p>
                    <p><strong>Grau de Proteção:</strong> IP 55</p>
                    <p><strong>Intervalo de Manutenção:</strong> 24 meses</p>
                    <p><strong>Peso:</strong> 120 kg</p>
                    <p><strong>Dimensões:</strong> 1510 x 577 x 1110 mm </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=okxLtFhilbw" />
        <CTASection />
      </div>
    </div>
  );
};

export default RoboWorker250;