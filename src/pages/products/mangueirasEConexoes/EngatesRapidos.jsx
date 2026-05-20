import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import AppleCoverFlow from "@/components/AppleCoverFlow";
import CTASection from "@/components/CTASection";
import ProductSection from '@/components/ProductSection';
import bgImg from '@/assets/images/bg-carrousel.png';
// Import da imagem
import engatesRapidos from '@/assets/images/engates-rapidos.png';

const EngatesRapidos = () => {
  const { t } = useTranslation(); 
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('mangueiras.Engates.title'),  cover: engatesRapidos, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Engates Rápidos - Mamuth</title>
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
            className="text-5xl md:text-6xl font-bold mb-10 text-left "
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {t('mangueiras.Engates.title')}
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
           {t('mangueiras.Engates.texto1')}
          </p>
        </div>
      </section>

      {/* SEÇÃO DE TABELA: CINZA CLARO COM CARD ARREDONDADO */}
      <section className="py-1 px-4 bg-white">
        <div className="max-w-4xl hidden md:block mx-auto text-center p-8 rounded-[30px] shadow-sm" style={{backgroundColor:'#d3d3d3'}}>
          
          <div className="flex flex-col items-center mb-10">
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center rounded-[30px] mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              {t('mangueiras.Engates.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md">
            <table className="w-full border-collapse table-fixed bg-white">
              <thead>
                <tr className="text-white" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[5%] uppercase">#</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[12%] uppercase">Modelo</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[15%] uppercase">Código</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[10%] uppercase">P. Max</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Lado Macho</th>
                  <th className="py-6 px-1 border-r border-orange-400 font-bold text-xs md:text-sm text-center w-[20%] uppercase">Lado Fêmea</th>
                  <th className="py-6 px-1 font-bold text-xs md:text-sm text-center w-[18%] uppercase">Aplicação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 1, mod: "ER12", cod: "3020.0019", pres: "1.500", m: "1/8 BSP (F)", f: "1/8 BSP (F)", app: "Mangueiras" },
                  { id: 2, mod: "ER12", cod: "3020.0027", pres: "1.500", m: "1/4 BSP (F)", f: "1/4 BSP (F)", app: "Mangueiras" },
                  { id: 3, mod: "ER12", cod: "3020.0003", pres: "1.500", m: "1/2 BSP (F)", f: "1/2 BSP (F)", app: "Mangueiras" },
                  { id: 4, mod: "ER12", cod: "3020.0023", pres: "1.000", m: "1/2 NPT (F)", f: "1/2 NPT (F)", app: "Mangueiras" },
                  { id: 5, mod: "ER12", cod: "3020.0021", pres: "1.500", m: "M22 PL (F)", f: "M22 PL (F)", app: "Mangueiras" },
                  { id: 6, mod: "ER20", cod: "3020.0024", pres: "1.000", m: "M35 PL (F)", f: "M35 PL (F)", app: "Mangueiras" },
                ].map((item) => (
                  <tr key={item.id} className="text-gray-800 border-b border-gray-200">
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center font-bold">{item.id}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center">{item.mod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-sm text-center font-semibold">{item.cod}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-sm md:text-base text-center">{item.pres}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center">{item.m}</td>
                    <td className="py-6 px-1 border-r border-gray-200 text-xs md:text-sm text-center font-bold text-[#FF6B0A]">{item.f}</td>
                    <td className="py-6 px-1 text-sm md:text-base text-center">{item.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
              <h2 className="text-2xl text-center font-bold text-[#000]">Veja mais informações técnicas sobre este produto:</h2>
            </div>
    {/* ===== GRUPO 1:===== */}
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">ER12</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3020.0019</p>
                    <p><strong>Pressão Máx:</strong> 1500</p>
                    <p><strong>Lado Macho:</strong> 1/8 BSP (F) </p>
                    <p><strong>Lado Fêmea:</strong> 1/8 BSP (F) </p>
                    <p><strong>Aplicação:</strong>Mangueiras</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3020.0027</p>
                    <p><strong>Pressão Máx:</strong> 1500</p>
                    <p><strong>Lado Macho:</strong> 1/4 BSP (F) </p>
                    <p><strong>Lado Fêmea:</strong> 1/4 BSP (F) </p>
                    <p><strong>Aplicação:</strong>Mangueiras</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3020.0003</p>
                    <p><strong>Pressão Máx:</strong> 1500</p>
                    <p><strong>Lado Macho:</strong> 1/2 BSP (F) </p>
                    <p><strong>Lado Fêmea:</strong> 1/2 BSP (F) </p>
                    <p><strong>Aplicação:</strong>Mangueiras</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3020.0023</p>
                    <p><strong>Pressão Máx:</strong> 1500</p>
                    <p><strong>Lado Macho:</strong> 1/2 NPT (F) </p>
                    <p><strong>lado Fêmea:</strong> 1/2 NPT (F) </p>
                    <p><strong>Aplicação:</strong>Mangueiras</p>
                    
                  </div>
                </div>
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código:</strong> 3020.0021</p>
                    <p><strong>Pressão Máx:</strong> 1500</p>
                    <p><strong>Lado Macho:</strong> M22 PL (F) </p>
                    <p><strong>lado Fêmea:</strong> M22 PL (F) </p>
                    <p><strong>Aplicação:</strong>Mangueiras</p>
                    
                  </div>
                </div>
              </div>
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">ER20</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'max-h-60 opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t pt-4">
                    <p><strong>Código</strong> 3020.0024</p>
                    <p><strong>Pressão Máx:</strong> 1000</p>
                    <p><strong>Lado Macho:</strong> M35 PL (F) </p>
                    <p><strong>Lado fêmea:</strong> M35 PL (F) </p>
                    <p><strong>Aplicação:</strong> Mangueiras</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL: ATENÇÃO (CINZA ESCURO E LARANJA #FF6B0A) */}
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default EngatesRapidos;