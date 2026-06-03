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
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const PoliamidaSAP1500 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('mangueiras.poliamida1500.title'), cover: poliamidaSap1500, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Poliamida SAP - Mamuth</title>
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
            {t('mangueiras.poliamida1500.title')}
            <img 
              src={seloParker}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-bold mb-10 text-left">
            {t('mangueiras.poliamida1500.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida1500.texto2')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida1500.texto3')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida1500.texto4')}
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
              {t('mangueiras.poliamida1500.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-white text-sm" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.modelo')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.int')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.ext')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.ptrab')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.ptrab2')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.prupt')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.prupt2')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.raiocurv')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.pesokg')}</th>
                  <th className="py-4 px-2 font-bold">{t('tabela.term')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "3/2", di: "3,0", de: "7,0", ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "60", p: "0,072", dt: "9,0" },
                  { mod: "4/2", di: "4,0", de: "7,7", ptb: "1.200", ptp: "17.400", prb: "3.000", prp: "43.511", rc: "75", p: "0,100", dt: "9,5" },
                  { mod: "4/2W", di: "4,0", de: "7,9", ptb: "1.500", ptp: "21.750", prb: "3.800", prp: "55.114", rc: "75", p: "0,110", dt: "10,0" },
                  { mod: "5/2", di: "5,0", de: "9,5", ptb: "1.000", ptp: "14.500", prb: "2.500", prp: "36.250", rc: "95", p: "0,140", dt: "12,0" },
                  { mod: "5/4", di: "5,0", de: "11,5", ptb: "1.800", ptp: "26.100", prb: "4.500", prp: "65.250", rc: "130", p: "0,290", dt: "15,0" },
                  { mod: "6/2", di: "6,0", de: "11,5", ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "110", p: "0,200", dt: "15,0" },
                  { mod: "8/2", di: "8,0", de: "15,8", ptb: "1.000", ptp: "14.500", prb: "2.500", prp: "36.250", rc: "90", p: "0,350", dt: "20,0" },
                  { mod: "8/4", di: "8,0", de: "15,2", ptb: "1.500", ptp: "21.750", prb: "3.800", prp: "54.375", rc: "175", p: "0,440", dt: "20,5" },
                ].map((item, index) => (
                  <tr key={index} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-xs md:text-sm">
                    <td className="py-3 px-2 border-r border-gray-200 font-bold">{item.mod}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.ptb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.ptp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.prb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.prp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.rc}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.p}</td>
                    <td className="py-3 px-2 text-center font-semibold">{item.dt}</td>
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
          <div>
            <div className="space-y-4">
              {/* CARD 1 */}
              <div className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300" style={{ borderColor: '#FF6B0A' }}>
                <button 
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Poliamida SAP 1500 </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 3/2</p>
                    <p><strong>{t('tabela.di')}:</strong> 3,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 7,0 mm </p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1100 bar / 15950 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 2750 bar / 39875 psi </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 60 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,072 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 9,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 4/2</p>
                    <p><strong>{t('tabela.di')}:</strong> 4,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 7,7 mm </p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1200 bar/ 17400 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 3000 bar / 43511 psi </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 75 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,100 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 9,5 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 4/2W</p>
                    <p><strong>{t('tabela.di')}:</strong> 4,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 7,9 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1500 bar / 21750 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 3800 bar / 55114 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 75 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,110 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 10,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 5/2</p>
                    <p><strong>{t('tabela.di')}:</strong> 5,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 9,5 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1000 bar / 14500 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 2500 bar / 36250 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 95 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,140 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 12,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 5/4</p>
                    <p><strong>{t('tabela.di')}:</strong> 5,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 11,5 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1800 bar / 26100 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 4500 bar / 65250 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 130 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,290 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 15,0(kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 6/2</p>
                    <p><strong>{t('tabela.di')}:</strong> 6,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 11,5 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1100 bar / 15950 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 2750bar / 39875 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 110 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,200 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 15,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 8/2</p>
                    <p><strong>{t('tabela.di')}:</strong> 8,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 15,8 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1000 bar / 14500 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 2500 bar / 36250 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 90 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,350 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 20,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 8/4</p>
                    <p><strong>{t('tabela.di')}:</strong> 8,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 15,2 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 1500 bar / 21750 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 3800 bar / 54375 bar </p>
                    <p><strong>{t('tabela.raiocurv')}:</strong> 175 (mm.r)</p>
                    <p><strong>{t('tabela.pesokg')}:</strong>0,440 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 20,5 (kg/m)</p>
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

export default PoliamidaSAP1500;