import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import CTASection from "@/components/CTASection";
import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";

// Import da imagem
import robo1 from "@/assets/images/robo-falch-lift-worker-250-beam-1.png";
import robo2 from "@/assets/images/robo-falch-lift-worker-250-beam-2.png";
import robo3 from "@/assets/images/robo-falch-lift-worker-250-beam-3.png";
import robo4 from "@/assets/images/robo-falch-lift-worker-250-beam-4.png";
import robo5 from "@/assets/images/robo-falch-lift-worker-250-beam-5.png";
import seloFalch from "@/assets/images/logo_falch_certificado.png";
import bgImg from "@/assets/images/bg-produtos.png";


const RoboLift250 = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Lift Worker 250 Beam', cover: robo1, color: '#FF5101' },
      { id: 2, title: 'Lift Worker 250 Beam', cover: robo2, color: '#FF5101' },
      { id: 5, title: 'Lift Worker 250 Beam', cover: robo5, color: '#FF5101' },
      { id: 3, title: 'Lift Worker 250 Beam', cover: robo3, color: '#FF5101' },
      { id: 4, title: 'Lift Worker 250 Beam', cover: robo4, color: '#FF5101' },
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Lift Worker 250 Beam - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <section 
        className="relative pt-10 pb-20 px-4 w-full" 
        style={{ backgroundImage: `url(${bgImg})`, zIndex: 1 }}
      >
        <div className="max-w-[1400px] mx-auto">
                  <AppleCoverFlow slides={slides} />
                </div>
      </section>

      {/* SEÇÃO DE TEXTOS: BRANCA - SEUS TEXTOS ORIGINAIS AQUI */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Lift Worker 250 Beam
            <img 
              src={seloFalch}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O Lift Worker 250 Beam é um equipamento desenvolvido para operações profissionais de hidrojato em alta e ultra-alta pressão, oferecendo elevada produtividade, segurança operacional e controle preciso durante a remoção de revestimentos, incrustações e preparação de superfícies.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Projetado para aplicações industriais, o sistema permite maior eficiência no jateamento, redução de ruído com capa de proteção do jato, melhor controle da distância entre o bico e a superfície e extração eficiente da água residual, contribuindo para uma secagem mais rápida e menor formação de oxidação superficial.
          </p>
          {/* <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
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
          </p> */}
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
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão Máxima</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Alimentação elétrica</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">operação</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Intervalo de manutenção</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Dimensões</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar/ 43500 psi</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">60 kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">230 V/ 50 Hz/ 16 A/ 5 m</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 horas por dia</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">24 meses</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">155kg</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">4178 x 1168 x 1758 mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=yMmRPzDhgAU" />
        <CTASection />
      </div>
    </div>
  );
};

export default RoboLift250;