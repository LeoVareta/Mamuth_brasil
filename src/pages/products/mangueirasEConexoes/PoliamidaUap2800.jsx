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
import seloParkerTabela from "@/assets/images/logo-parker-tabelas.png";
import logoMamuth from "@/assets/icons/logo-mamuth-h.svg";
import mangueira1 from "@/assets/images/mangueira1.png";
import mangueira2 from "@/assets/images/mangueira2.png";
import mangueira3 from "@/assets/images/mangueira3.png";
import mangueira4 from "@/assets/images/mangueira4.png";
import mangueira5 from "@/assets/images/mangueirateste.png";
import mangueira6 from "@/assets/images/mangueira6.png";

const PoliamidaSAP1500 = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [aberto, setAberto] = useState(null);
  const slides = [
        { id: 1, title: t('mangueiras.poliamida2800.title'), cover: poliamidaUap28002, color: '#FF5101' },
        { id: 2, title: t('mangueiras.poliamida2800.title'), cover: poliamidaUap2800, color: '#FF5101' }
  ];
  const mangueirasPoliamida2800 = [
  { mod: "4/4",   img: mangueira1, di: "4,0", de: "10,4", pb: "2.200", pp: "31.900", rb: "5.500", rp: "79.750",  r: "100", w: "0,210" },
  { mod: "4/6",   img: mangueira2, di: "4,0", de: "9,9",  pb: "2.500", pp: "36.250", rb: "6.250", rp: "90.625",  r: "100", w: "0,220" },
  { mod: "4/8",   img: mangueira3, di: "3,9", de: "12,0", pb: "2.800", pp: "40.600", rb: "7.000", rp: "101.500", r: "140", w: "0,290" },
  { mod: "5/4",   img: mangueira1, di: "4,8", de: "11,5", pb: "1.800", pp: "26.100", rb: "4.500", rp: "65.250",  r: "130", w: "0,280" },
  { mod: "5/4-W", img: mangueira4, di: "4,9", de: "11,6", pb: "2.100", pp: "30.450", rb: "5.250", rp: "76.125",  r: "130", w: "0,280" },
  { mod: "5/6",   img: mangueira2, di: "4,8", de: "12,9", pb: "2.500", pp: "36.250", rb: "6.250", rp: "90.625",  r: "175", w: "0,410" },
  { mod: "5/8",   img: mangueira5, di: "4,8", de: "13,3", pb: "3.010", pp: "43.645", rb: "7.525", rp: "109.110", r: "200", w: "0,470" },
  { mod: "8/6",   img: mangueira2, di: "7,8", de: "18,0", pb: "2.500", pp: "36.250", rb: "6.250", rp: "90.625",  r: "200", w: "0,850" },
  { mod: "8/8",   img: mangueira5, di: "7,9", de: "18,7", pb: "3.010", pp: "43.645", rb: "7.000", rp: "101.500", r: "230", w: "0,960" },
  { mod: "10/6",  img: mangueira6, di: "9,9", de: "22,7", pb: "3.010", pp: "43.645", rb: "6.250", rp: "90.625",  r: "250", w: "1,350" },
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
      <section className="py-4 px-4 bg-white">
        {/* ---------- Versão Desktop ---------- */}
        <div
          className="max-w-7xl hidden md:block mx-auto text-center p-10 md:p-12 rounded-[30px] shadow-sm"
          style={{ backgroundColor: '#d3d3d3' }}
        >
          {/* Seção das Logos (Aumentada) */}
          <div className="flex items-center justify-center gap-10 mb-10">
            {/* Logo Mamuth - Aumentada com h-16 ou md:h-20 */}
            <img 
              src={logoMamuth} 
              alt="Mamuth Brasil" 
              className="h-16 md:h-20 object-contain [filter:brightness(0)_saturate(100%)_invert(41%)_sepia(88%)_saturate(3082%)_hue-rotate(1deg)_brightness(102%)_contrast(106%)]" 
            />

            {/* Barra diagonal separadora - Aumentada */}
            <span className="text-gray-400 text-4xl md:text-5xl font-light">/</span>

            {/* Bloco do Distribuidor Autorizado + Logo Parker */}
            <div className="flex items-center gap-4">
              <div className="text-right text-sm md:text-base font-bold text-gray-800 leading-tight">
                <span>DISTRIBUIDOR</span>
                <br />
                <span>AUTORIZADO</span>
              </div>
              {/* Logo Parker - Aumentada com h-14 ou md:h-16 */}
              <img 
                src={seloParkerTabela} 
                alt="Parker Distributor" 
                className="h-14 md:h-16 object-contain" 
              />
            </div>
          </div>

          {/* Restante do conteúdo (Ícone e Título) */}
          <div className="flex flex-col items-center mb-10">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center mb-4 font-bold text-white shadow-lg"
              style={{ backgroundColor: '#FF6B0A' }}
            >
              i
            </div>
            <h2 className="text-gray-800 text-2xl md:text-4xl font-bold">
              {t('mangueiras.poliamida1500.textoCard')}
            </h2>
          </div>

          <div className="w-full overflow-hidden rounded-2xl shadow-md border border-gray-200">
            <table className="w-full table-fixed border-collapse">
              <thead>
                <tr className="text-white text-xs md:text-sm" style={{ backgroundColor: '#FF6B0A' }}>
                  <th className="py-5 px-3 border-r border-orange-400 font-bold" style={{ width: '28%' }}>{t('tabela.imagem')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.modelo')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.di')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.de')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.trabalho')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.trabalho2')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.rupt')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.rupt2')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.raio')}</th>
                  <th className="py-5 px-2 border-r border-orange-400 font-bold" style={{ width: '8%' }}>{t('tabela.peso')}</th>
                </tr>
              </thead>
              <tbody>
                {mangueirasPoliamida2800.map((item, idx) => (
                  <tr
                    key={idx}
                    className="bg-white text-gray-800 border-b border-gray-200 hover:bg-orange-50 transition-colors text-[10px] sm:text-xs md:text-sm"
                  >
                    {/* <td  className="py-5 px-3 border-r border-gray-200 text-center align-middle">
                      <div className="h-auto w-[100%] mx-auto flex items-center justify-center overflow-hidden">
                        <img
                          src={item.img}
                          alt={`Mangueira ${item.mod}`}
                          className="max-h-56 h-56 object-cover"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>
                    </td> */}
                    <td className="py-5 px-3 border-r border-gray-200 text-center align-middle">
                      <div className="w-[230px] h-[120px] mx-auto flex items-center justify-center overflow-hidden">
                        <img 
                          src={item.img}
                          alt={`Mangueira ${item.mod}`}
                          className="w-[230px] h-auto max-w-none object-contain flex-none block mix-blend-multiply" 
                        />
                      </div>
                    </td>
                    <td className="py-5 px-2 border-r border-gray-200 font-bold text-center">{item.mod}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.di}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.de}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.pb}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.pp}</td>
                    <td className="py-5 px-2 border-r border-gray-200 font-bold text-center text-orange-600 bg-orange-50/30">{item.rb}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.rp}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.r}</td>
                    <td className="py-5 px-2 border-r border-gray-200 text-center">{item.w}</td>
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
                  <h3 className="font-bold text-lg text-[#0E0E68]">{t('mangueiras.poliamida2800.title')}</h3>
                  <span className="text-2xl text-[#FF6B0A] font-light">
                    {aberto === 't1' ? '−' : '+'}
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    aberto === 't1' ? 'h-auto opacity-100 p-5 pt-0' : 'max-h-0 opacity-0'
                  }`}
                >
                  {mangueirasPoliamida2800.map((item, idx) => (
                    <div key={idx}>
                      <div className={`${idx === 0 ? '' : 'border-t'} pb-4 mb-4 pt-4 flex justify-center`}>
                        <img
                          src={item.img}
                          alt={`Poliamida ${item.mod}`}
                          className="h-56 w-56 object-contain mx-auto"
                          style={{ mixBlendMode: 'multiply' }}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm border-t py-4">
                        <p><strong>{t('tabela.modelo')}:</strong> {item.mod}</p>
                        <p><strong>{t('tabela.di')}:</strong> {item.di} mm</p>
                        <p><strong>{t('tabela.de')}:</strong> {item.de} mm</p>
                        <p><strong>{t('tabela.trabalho')}:</strong> {item.pb} bar / {item.pp} psi</p>
                        <p><strong>{t('tabela.rupt')}:</strong> {item.rb} bar / {item.rp} psi</p>
                        <p><strong>{t('tabela.raio')}:</strong> {item.r} (mm.r)</p>
                        <p><strong>{t('tabela.peso')}:</strong> {item.w} (kg/m)</p>
                      </div>
                    </div>
                  ))}
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