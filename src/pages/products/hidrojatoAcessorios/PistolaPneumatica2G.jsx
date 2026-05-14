import React, { useEffect } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import pistolaPneumatica2G from '@/assets/images/pistola-pneumatica-2g.png';

const PistolaPneumatica2G = () => {
  const navigate = useNavigate();
  const slides = [
      { id: 1, title: 'Pistola Pneumática 2G MTPT',  cover: pistolaPneumatica2G, color: '#FF5101' }
    ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Pistola Pneumática 2G MTPT 2.800 Bar - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Pistola Pneumática 2G MTPT
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Dois punhos fabricados em plástico de alta resistência:
          Proporcionam maior robustez e durabilidade, garantindo que o equipamento suporte condições de trabalho exigentes sem comprometer a integridade estrutural. 
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Sistema de acionamento por 2 válvulas pneumáticas:
          Oferece controle preciso e confiável do fluxo, permitindo uma operação segura e eficiente em ambientes industriais.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
          Maior segurança ao operador:
          O fluxo de operação é acionado somente quando ambos os gatilhos são pressionados simultaneamente, minimizando o risco de acidentes e aumentando a segurança do operador.

          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Fácil manutenção:
           Projeto otimizado para simplificar processos de manutenção, reduzindo o tempo de inatividade e os custos operacionais ao longo da vida útil do equipamento.   
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Cor laranja padrão WJTA:
           Facilita a identificação visual do equipamento, atendendo aos padrões de segurança internacionais da WJTA e assegurando conformidade em ambientes de trabalho.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Pressão máxima de trabalho até 2.800 bar:
           Adequado para operações que exigem altíssima pressão, oferecendo desempenho excepcional em tarefas críticas.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           Compatível com o Power Box MAMUTH 40K:
           Deve ser utilizado em conjunto com o Power Box MAMUTH 40K para garantir desempenho e segurança máximos em aplicações de alta pressão.
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
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[25%] uppercase">Modelo</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[12%] uppercase">Código</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[13%] uppercase">P. MAX (bar)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">Peso (kg)</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[25%] uppercase">Entrada</th>
                  <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Comp. Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-gray-800 border-b border-gray-200">
                  <td className="py-8 px-2 border-r border-gray-200 text-sm md:text-lg text-center font-bold">Pistola MTPT 2800BAR - 2G</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center whitespace-nowrap">1001.4006</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">2.800</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-sm md:text-lg text-center">3,5</td>
                  <td className="py-8 px-1 border-r border-gray-200 text-xs md:text-base text-center">3/4 UNF - 3/8-24 LH</td>
                  <td className="py-8 px-1 text-sm md:text-lg text-center whitespace-nowrap">1200mm</td>
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

export default PistolaPneumatica2G;