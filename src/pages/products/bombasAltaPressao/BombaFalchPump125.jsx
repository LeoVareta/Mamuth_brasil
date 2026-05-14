import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import AppleCoverFlow from "@/components/AppleCoverFlow";
import VideoSection from "@/components/VideoSection";
import CTASection from "@/components/CTASection";

// Import da imagem
import BombaFalch125K from '@/assets/images/falch-pump-150.png';
import seloFalch from "@/assets/images/logo_falch_certificado.png";

const BombaFalch125 = () => {
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: 'Falch Pump 125 KW', cover: BombaFalch125K, color: '#FF5101' }
  ];
  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Falch PUMP 125KW - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left flex items-center gap-4"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Falch PUMP 125KW
            <img 
              src={seloFalch}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            A Falch FA 125 é uma bomba de pistão de alta performance desenvolvida para aplicações industriais que exigem potência, confiabilidade e eficiência operacional. Com potência de até 125 kW e capacidade de operar em pressões de até 3.000 bar, o equipamento entrega alto desempenho mesmo nas condições mais exigentes.         
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Projetada com a engenharia alemã da Falch, a FA 125 é indicada para operações como limpeza industrial pesada, hidrodemolição, setor naval, óleo e gás, mineração e demais aplicações que demandam alta pressão com estabilidade e durabilidade.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Seu projeto combina robustez mecânica com tecnologias que reduzem o tempo de parada e aumentam a eficiência energética, proporcionando menor custo operacional ao longo do tempo.
          </p>
          <h3 
            className="text-4xl md:text-4xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Diferenciais do Equipamento
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Manutenção Rápida (Quick Check Technology)
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            O sistema Quick Check foi desenvolvido para garantir intervenções rápidas e simples diretamente no local de operação, reduzindo significativamente o tempo de parada do equipamento.
          </p>
          <ul className="list-disc text-left mb-10 ml-5">
            <li className="marker:text-[#FF5101] text-gray-700">
              Troca de válvulas em aproximadamente 10 minutos
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              Troca de pistão (plunger) e vedação em cerca de 30 minutos
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              Não requer ferramentas especiais
            </li>
          </ul>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            Esse sistema permite maior disponibilidade da máquina e mais produtividade em campo.
          </p>
          <h3 
            className="text-4xl md:text-4xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            Eficiência Energética (Green Power Technology)
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            A tecnologia Green Power proporciona alto desempenho com menor consumo de energia, graças ao sistema de vedação otimizado e à eficiência mecânica do conjunto.
          </p>
          <ul className="list-disc text-left mb-10 ml-5">
            <li className="marker:text-[#FF5101] text-gray-700">
              Eficiência entre 91% e 94%
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              Operação entre 1.000 e 3.000 bar
            </li>
            <li className="marker:text-[#FF5101] text-gray-700">
              Não requer ferramentas especiais
            </li>
          </ul>
        </div>
      </section>
      <section className="py-1 px-4 bg-white">
        {/* Mantive o max-w-4xl conforme solicitado */}
        <div className="max-w-4xl hidden md:block  md:block mx-auto text-center p-4 md:p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>

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
            <h2 className="text-gray-800 mb-16 text-2xl md:text-3xl font-bold">
              Eficiência por Pressão
            </h2>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Pressão</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Eficiência</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">94%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">94%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">2500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">92%</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">91%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full my-12">
            <h2 className="text-gray-800 mb-4 text-2xl md:text-3xl font-bold">
              Configurações de operação
            </h2>
            <h3 className="text-gray-800 mb-16 text-2xl md:text-2xl font-bold">
              Velocidade e Desempenho (1800 rpm)
            </h3>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (kW)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Rotação Motor</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Rotação Virabrequim</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Potência (kw)</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Vazão (L/min)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1800 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">610 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">122</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">67</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">1500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1800 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">610 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">117</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">43</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">2500 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1800 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">610 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">124</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">26</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">3000 bar</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1800 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">610 rpm</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">124</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">22</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="w-full my-12">´
            <h2 className="text-gray-800 mb-16 text-2xl md:text-3xl font-bold">
              Dados Técnicos
            </h2>
            <table className="w-full border-collapse rounded-xl overflow-hidden shadow-md">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Especificação</th>
                  <th className="py-4 px-1 border-r border-orange-400 font-bold text-[10px] sm:text-xs md:text-sm uppercase">Detalhe</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Posição de instalação</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">Horizontal</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Sistema de vedação</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">PFS</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Quantidade de óleo</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">10,0 L</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Tipo de óleo</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">SAE 75W-90, GL4+, sintético</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Pressão de entrada de água</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1,8 – 8 bar</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Temperatura da água</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 a 40°C</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Filtragem</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">1000 bar: padrão Falch / 1000 bar: Falch Nano</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Peso (sem fluidos)</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">300 kg</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Temperatura de operação</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">0 a 40°C</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Sistema de lubrificação</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">Centrífugo</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Filtro de óleo</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">Não possui</td>
                </tr>
                <tr className="bg-white text-gray-800 border-b border-gray-200">
                  <td className="py-6 px-1 border-r border-gray-200 font-bold text-[10px] sm:text-xs md:text-base text-center italic">Material da carcaça</td>
                  <td className="py-6 px-1 border-r border-gray-200 text-[10px] sm:text-xs md:text-base text-center">Alumínio</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">Veja mais informações técnicas sobre este produto:</h2>
            </div>
              {/* ===== GRUPO 1: Trifásico ===== */}
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Eficiência por Pressão</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    
                    {/* Cabeçalho da Tabela */}
                    <div className="flex justify-between pb-2 border-b border-gray-100 mb-3">
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>Pressão</strong></span>
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>Eficiência</strong></span>
                    </div>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">1000 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">94% </span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">1500 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">94%</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">2500 bar</span>
                        <span className="text-gray-800 w-2/3 text-right ">92%</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">3000 bar</span>
                        <span className="text-gray-800 w-2/3 text-right">91%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't2' ? null : 't2')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-left text-[#0E0E68]">Configurações de operação <br/> Velocidade e Desempenho (1800 rpm)</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't2' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't2' ? 'h-auto opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>Rotação motor:</strong> 1800 rpm</p>
                      <p><strong>Rotação virabrequim:</strong> 610 rpm</p>
                      <p><strong>Pressão:</strong> 1000 bar </p>
                      <p><strong>Potência(KW):</strong>122</p>
                      <p><strong>Vazão (L/min):</strong> 67 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>Rotação motor:</strong> 1800 rpm</p>
                      <p><strong>Rotação virabrequim:</strong> 610 rpm</p>
                      <p><strong>Pressão:</strong> 1500 bar </p>
                      <p><strong>Potência(KW):</strong>117</p>
                      <p><strong>Vazão (L/min):</strong> 43 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>Rotação motor:</strong> 1800 rpm</p>
                      <p><strong>Rotação virabrequim:</strong> 610 rpm</p>
                      <p><strong>Pressão:</strong>2500 bar </p>
                      <p><strong>Potência(KW):</strong>124</p>
                      <p><strong>Vazão (L/min):</strong> 26 </p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm border-t pb-4 pt-4">
                      <p><strong>Rotação motor:</strong> 1800 rpm</p>
                      <p><strong>Rotação virabrequim:</strong> 610 rpm</p>
                      <p><strong>Pressão:</strong> 3000 bar </p>
                      <p><strong>Potência(KW):</strong>124</p>
                      <p><strong>Vazão (L/min):</strong> 22 </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't3' ? null : 't3')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Dados Técnicos</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't3' ? '−' : '+'}
                  </span>
                </button>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't3' ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                
                {/* Container com Margem Lateral (p-5) */}
                  <div className="p-5 px-12 pt-2"> 
                    
                    {/* Cabeçalho da Tabela */}
                    <div className="flex justify-between pb-2 border-b border-gray-100 mb-3">
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>Especificação</strong></span>
                      <span className="text-[12px] uppercase tracking-wider font-bold"><strong>Detalhe</strong></span>
                    </div>

                    {/* Lista de Itens */}
                    <div className="space-y-3">
                      
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Posição de instalação</span>
                        <span className="text-gray-800 w-2/3 text-right">Horizontal </span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Sistema de vedação</span>
                        <span className="text-gray-800 w-2/3 text-right">PFS</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Quantidade de óleo</span>
                        <span className="text-gray-800 w-2/3 text-right font-semibold text-blue-600">10,0 L</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Tipo de óleo</span>
                        <span className="text-gray-800 w-2/3 text-right">SAE 75W-90, GL4+, sintético</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Pressão de entrada de água</span>
                        <span className="text-gray-800 w-2/3 text-right">1,8 – 8 bar</span>
                      </div>

                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Temperatura da água</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">0 a 40°C</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Filtragem</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">1000 bar: padrão Falch / 1000 bar: Falch Nano</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Peso (sem fluidos)</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">300 kg</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Temperatura de operação</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">0 a 40°C</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Sistema de lubrificação</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">Centrífugo</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Filtro de óleo</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">Não possui</span>
                      </div>
                      <div className="flex justify-between items-start text-sm">
                        <span className="font-medium text-gray-500 w-1/3">Material da carcaça</span>
                        <span className="text-gray-800 w-2/3 text-right leading-tight">Alumínio</span>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <VideoSection videoUrl="https://www.youtube.com/watch?v=4fFecHq3hOM" />
        <CTASection />
      </div>
    </div>
  );
};

export default BombaFalch125;