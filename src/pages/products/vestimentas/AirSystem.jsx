import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import Air from '@/assets/images/airsystem-cp.png';

const AirSystem = () => {
  const navigate = useNavigate();
  const slides = [
        { id: 1, title: 'Air System', cover: Air, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Air System 200 - Mamuth</title>
      </Helmet>

      {/* SEÇÃO SUPERIOR: AZUL ESCURO - TUDO CENTRALIZADO */}
      <ProductSection 
        productSlides={slides} 
        backgroundImage={bgImg} 
      />
            <section className="py-20 px-4 bg-white">
              <div className="max-w-4xl mx-auto text-center">
                <h2 
                  className="text-5xl md:text-6xl font-bold mb-10 text-left "
                  style={{ color: 'var(--color-dark-blue)' }}
                >
                  Air System 200
                </h2>   
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                    Sistema de Refrigeração de Ar para Operadores de Hidrojato
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  O Air System 200 Mamuth foi desenvolvido para proporcionar maior conforto térmico e segurança aos trabalhadores que atuam em operações de limpeza industrial e hidrojato, especialmente em ambientes de alta temperatura ou espaços confinados.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  O equipamento fornece ar refrigerado e purificado ao interior do traje de proteção, contribuindo para a redução da fadiga térmica, melhora do desempenho operacional e aumento da produtividade durante atividades prolongadas.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  Com controle de temperatura regulável, o sistema permite reduzir a temperatura interna do traje para até 18°C, oferecendo uma condição de trabalho mais confortável e eficiente. O ajuste de temperatura pode variar de -5°C a +20°C, permitindo adaptação conforme a necessidade da operação e as condições do ambiente.
      
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  Principais características:
                </p>
                <ul className="list-disc text-left mb-10 ml-5">
                  <li className="marker:text-[#FF5101] text-gray-700">
                    Capacidade para atender até 03 operadores simultaneamente em operações de hidrojato;
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    Sistema integrado de purificação de ar, proporcionando maior qualidade no fornecimento ao operador;
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    03 mangueiras em PU de 10 mm, com 12 metros de comprimento, cobertura protetiva e isolamento térmico;
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    Chassi sobre rodas, facilitando o transporte e a movimentação do equipamento em campo;
                  </li>
                  <li className="marker:text-[#FF5101] text-gray-700">
                    Solução ideal para operações industriais que exigem segurança, conforto térmico e alta performance operacional.
                  </li>
                </ul>
                <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
                  <strong>Air System 200 Mamuth</strong>: mais conforto, segurança e produtividade para operações de hidrojato em ambientes severos.
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
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Modelo</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Código</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Alimentação</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Capacidade</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Fluxo de Entrada Mínimo</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Conexão</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Medidas</th>
                      <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Peso</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white text-gray-800 border-b border-gray-200">
                      <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Air System 200</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1001.0080</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">220V / 60HZ <br/> Monofásico</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">204 Nm3/h</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">60 pcm @ 5,0 bar (75 psi/)</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">1" NPT</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">825 x 805 x 760 mm</td>
                      <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base font-semibold text-center">45 Kg</td>
                      </tr>
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

export default AirSystem;