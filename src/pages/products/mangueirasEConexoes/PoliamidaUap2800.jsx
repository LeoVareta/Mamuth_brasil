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
import poliamidaUap2800 from '@/assets/images/mangueiras-conexoes.jpg';
import poliamidaUap28002 from '@/assets/images/mangueira-8x8-uap-1.png';
import seloParker from "@/assets/images/selo-certificado-parker.png";

const PoliamidaSAP1500 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('mangueiras.poliamida2800.title'), cover: poliamidaUap28002, color: '#FF5101' },
        { id: 2, title: t('mangueiras.poliamida2800.title'), cover: poliamidaUap2800, color: '#FF5101' }
  ];

  // Garante que a página inicie no topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white w-full">
      <Helmet>
        <title>Poliamida UAP - Mamuth</title>
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
            {t('mangueiras.poliamida2800.title')}
            <img 
              src={seloParker}
              alt="Selo de Qualidade" 
              className="w-16 h-auto md:w-32 md:h-auto object-contain" 
            />
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed font-bold mb-10 text-left">
            {t('mangueiras.poliamida2800.texto1')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida2800.texto2')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida2800.texto3')}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-10 text-left">
            {t('mangueiras.poliamida2800.texto4')}
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
              {t('mangueiras.poliamida2800.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-xl shadow-md border border-gray-200">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-white text-xs md:text-sm" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.modelo')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.di')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.de')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.trabalho')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.trabalho2')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.rupt')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.rupt2')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.raio')}</th>
                  <th className="py-4 px-2 border-r border-orange-400 font-bold">{t('tabela.peso')}</th>
                  <th className="py-4 px-2 font-bold">{t('tabela.term')}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { mod: "4/6", di: "4,0", de: "12,0", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "120", w: "0,400", t: "15,0" },
                  { mod: "5/6", di: "5,0", de: "13,0", pb: "2.500", pp: "36.230", rb: "6.240", rp: "90.580", r: "175", w: "0,400", t: "18,0" },
                  { mod: "5/8", di: "5,0", de: "15,0", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "200", w: "0,630", t: "19,0" },
                  { mod: "8/8", di: "8,0", de: "17,3", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "200", w: "0,830", t: "24,0" },
                ].map((item, idx) => (
                  <tr key={idx} className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-[10px] sm:text-xs md:text-sm">
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center">{item.mod}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.pb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.pp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.rb}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.rp}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.r}</td>
                    <td className="py-3 px-2 border-r border-gray-200 text-center">{item.w}</td>
                    <td className="py-3 px-2 text-center font-semibold">{item.t}</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">Poliamida UAP 2800 </h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'}`}>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 4/6</p>
                    <p><strong>{t('tabela.di')}:</strong> 4,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 12,0 mm </p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 2800 bar / 40600 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 7000 bar / 101500 psi </p>
                    <p><strong>{t('tabela.raio')}:</strong> 120 (mm.r)</p>
                    <p><strong>{t('tabela.peso')}:</strong>0,400 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 15,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 5/6</p>
                    <p><strong>{t('tabela.di')}:</strong> 5,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 13,0 mm </p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 2500 bar/ 36230 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 6240 bar / 90580 psi </p>
                    <p><strong>{t('tabela.raio')}:</strong> 175 (mm.r)</p>
                    <p><strong>{t('tabela.peso')}:</strong>0,400 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 18,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 5/8</p>
                    <p><strong>{t('tabela.di')}:</strong> 5,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 15,0 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 2800 bar / 40600 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 7000 bar / 101500 bar </p>
                    <p><strong>{t('tabela.raio')}:</strong> 200 (mm.r)</p>
                    <p><strong>{t('tabela.peso')}:</strong>0,630 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 19,0 (kg/m)</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                    <p><strong>{t('tabela.modelo')}:</strong> 8/8</p>
                    <p><strong>{t('tabela.di')}:</strong> 8,0 mm</p>
                    <p><strong>{t('tabela.de')}:</strong> 17,3 mm</p>
                    <p><strong>{t('tabela.trabalho')}:</strong> 2800 bar / 40600 psi </p>
                    <p><strong>{t('tabela.rupt')}:</strong> 7000 bar / 101500 bar </p>
                    <p><strong>{t('tabela.raio')}:</strong> 200 (mm.r)</p>
                    <p><strong>{t('tabela.peso')}:</strong>0,830 (kg/m)</p>
                    <p><strong>{t('tabela.term')}:</strong> 24,0 (kg/m)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='pt-14'>
        <CTASection />
      </div>
    </div>
  );
};

export default PoliamidaSAP1500;