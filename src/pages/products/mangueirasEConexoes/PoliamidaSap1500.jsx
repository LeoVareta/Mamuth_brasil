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
import mangueiraazul from "@/assets/images/mangueira7.png";
import mangueiraazul2 from "@/assets/images/mangueira1.png";
import mangueirapreta from "@/assets/images/mangueira8.png";

const PoliamidaSAP1500 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('mangueiras.poliamida1500.title'), cover: poliamidaSap1500, color: '#FF5101' }
  ];
const mangueirasPoliamida1500 = [
  { mod: "3/2",  img: mangueiraazul,  di: "3,0", de: "7,0",  ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "60",  p: "0,070",  },
  { mod: "4/2",  img: mangueiraazul,  di: "4,0", de: "7,7",  ptb: "1.200", ptp: "17.400", prb: "3.000", prp: "43.500", rc: "75",  p: "0,100",  },
  { mod: "4/2-W", img: mangueiraazul,  di: "4,0", de: "7,9",  ptb: "1.500", ptp: "21.750", prb: "3.750", prp: "54.375", rc: "75",  p: "0,110",  },
  { mod: "5/2",  img: mangueiraazul,  di: "4,8", de: "9,5",  ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "95",  p: "0,130",  },
  { mod: "6/2",  img: mangueiraazul,  di: "6,4", de: "11,6", ptb: "1.100", ptp: "15.950", prb: "2.750", prp: "39.875", rc: "110", p: "0,200",  },
  { mod: "8/2",  img: mangueirapreta, di: "7,9", de: "15,8", ptb: "1.000", ptp: "14.500", prb: "2.500", prp: "36.250", rc: "90",  p: "0,350",  },
  { mod: "8/4",  img: mangueiraazul2, di: "7,9", de: "15,1", ptb: "1.500", ptp: "21.750", prb: "3.750", prp: "54.375", rc: "175", p: "0,440",  },
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
        {/* ---------- Versão Desktop ---------- */}
        <div
          className="max-w-7xl hidden md:block mx-auto text-center p-10 md:p-12 rounded-[30px] shadow-sm"
          style={{ backgroundColor: '#d3d3d3' }}
        >
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
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="text-white text-sm md:text-base" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-5 px-3 border-r border-orange-400 font-bold" style={{ width: '20%' }}>{t('tabela.imagem')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.modelo')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '7%' }}>{t('tabela.di')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '7%' }}>{t('tabela.de')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.ptrab')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.ptrab2')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.prupt')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.prupt2')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.raiocurv')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '9%' }}>{t('tabela.pesokg')}</th>
                </tr>
              </thead>
              <tbody>
                {mangueirasPoliamida1500.map((item, index) => (
                  <tr
                    key={index}
                    className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-sm md:text-base"
                  >
                    <td className="py-4 px-3 border-r border-gray-200 text-center align-middle">
                      <img
                        src={item.img}
                        alt={`Mangueira ${item.mod}`}
                        className="max-h-32 w-full object-contain mx-auto scale-125"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </td>
                    <td className="py-4 px-2 border-r border-gray-200 font-bold">{item.mod}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.ptb}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.ptp}</td>
                    <td className="py-4 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.prb}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.prp}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.rc}</td>
                    <td className="py-4 px-2 border-r border-gray-200 text-center">{item.p}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ---------- Versão Mobile ---------- */}
        <div className="md:hidden space-y-10">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-2xl text-center font-bold text-[#000]">
              {t('mangueiras.DistribuidoresUAP.textoCard')}
            </h2>
          </div>

          <div>
            <div className="space-y-4">
              <div
                className="rounded-xl shadow-lg border-2 overflow-hidden transition-all duration-300"
                style={{ borderColor: '#FF6B0A' }}
              >
                <button
                  onClick={() => setAberto(aberto === 't1' ? null : 't1')}
                  className="w-full flex justify-between items-center p-5 bg-white"
                >
                  <h3 className="font-bold text-lg text-[#0E0E68]">Poliamida SAP 1500</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'
                  }`}
                >
                  {mangueirasPoliamida1500.map((item, idx) => (
                    <div key={idx}>
                      <div className={`${idx === 0 ? '' : 'border-t'} pb-4 mb-4 pt-4 flex justify-center`}>
                        <img
                          src={item.img}
                          alt={`Poliamida SAP 1500 ${item.mod}`}
                          className="h-56 w-56 object-contain mx-auto"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                        <p><strong>{t('tabela.modelo')}:</strong> {item.mod}</p>
                        <p><strong>{t('tabela.di')}:</strong> {item.di} mm</p>
                        <p><strong>{t('tabela.de')}:</strong> {item.de} mm</p>
                        <p><strong>{t('tabela.trabalho')}:</strong> {item.ptb} bar / {item.ptp} psi</p>
                        <p><strong>{t('tabela.rupt')}:</strong> {item.prb} bar / {item.prp} psi</p>
                        <p><strong>{t('tabela.raiocurv')}:</strong> {item.rc} (mm.r)</p>
                        <p><strong>{t('tabela.pesokg')}:</strong> {item.p} (kg/m)</p>
                        <p><strong>{t('tabela.term')}:</strong> {item.dt} mm</p>
                      </div>
                    </div>
                  ))}
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