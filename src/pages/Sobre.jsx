import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import WhatsappButton from '@/components/WhatsappButton';
import { X } from "lucide-react";
import { useTranslation } from 'react-i18next';
import { Target, Eye, Award, Leaf, Lightbulb, Shield, Building2, Globe} from 'lucide-react';

import SectionTitle from '@/components/SectionTitle';
import CTASection from "@/components/CTASection";
import CertificacoesSection from "@/components/CertificadoSection";

import logoFalchTrajetoria from "@/assets/images/logo-falch-800x600.png";
import logoParkerTrajetoria from "@/assets/images/logo-parker-800x600.png";
import videoSobre from '@/assets/images/video-sobre.mp4';
import logoFalch from '@/assets/images/logo-falch-completo.svg'
import logoParker from '@/assets/images/logo-parker-800x600.svg'

const Sobre = () => {

  const [open, setOpen] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const {t} = useTranslation();

  const handleLearnMore = (brandName) => {
    toast({
      title: "Informações",
      description: `Em breve mais detalhes sobre ${brandName} estarão disponíveis.`,
    });
  };

   const brands = [
    {
      name: 'Parker Polyflex',
      image: logoParker,
      description: t('sobre.subtitleParker'),
      specialties: ['Alta Pressão', 'Controle Preciso', 'Confiabilidade Industrial']
    },
    {
      name: 'Falch',
      image: logoFalch,
      description: t('sobre.subtitleFalch'),
      specialties: ['Performance Extrema', 'Tecnologia Avançada', 'Engenharia Alemã']
    }
  ];

  const values = [
    {
      icon: Award,
      title: t('sobre.titleQualidade'),
      description: t('sobre.subtitleQualidade')
    },
    {
      icon: Lightbulb,
      title: t('sobre.titleInovacao'),
      description: t('sobre.subtitleInovacao')
    },
    {
      icon: Shield,
      title: t('sobre.titleConfiabilidade'),
      description: t('sobre.subtitleConfiabilidade')
    },
    {
      icon: Leaf,
      title: t('sobre.titleSustentabilidade'),
      description: t('sobre.subtitleSustentabilidade')
    },
    {
      icon: Target,
      title: t('sobre.titleExcelencia'),
      description: t('sobre.subtitleExcelencia')
    }
  ];

  const timeline = [
    { year: '2003', title: t('sobre.subtitle2003'), description: t('sobre.text2003') },
    { year: '2008', title: t('sobre.subtitle2008'), description: t('sobre.text2008') },
    { year: '2013', title: t('sobre.subtitle2013'), description: t('sobre.text2013') },
    { year: '2017', title: t('sobre.subtitle2017'), description: t('sobre.text2017') },
    { year: '2019', title: t('sobre.subtitle2019'), description: t('sobre.text2019'), image:logoParkerTrajetoria },
    { year: '2025', title: t('sobre.subtitle2025'), description: t('sobre.text2025'), image:logoFalchTrajetoria },
    { year: '2026', title: t('sobre.subtitle2026'), description: t('sobre.text2026') }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre a Mamuth - Nossa História e Valores | Equipamentos Industriais</title>
        <meta name="description" content="Conheça a história da Mamuth, nossa missão, visão e os valores que nos guiam há mais de 20 anos no mercado de equipamentos industriais." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('sobre.titleSobre')}</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              {t('sobre.textSobre')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="pt-16 pb-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: '#FF5101' }}>
                <Target className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
                {t('sobre.titleMissao')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('sobre.textMissao')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <div className="w-20 h-20 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
                <Eye className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
                {t('sobre.titleVisao')}
              </h2>
              <p className="text-lg text-gray-600">
                {t('sobre.textVisao')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Seção do Vídeo com Título */}
      {/* Video Section - Layout 40/60 */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 items-center">
      
      {/* Lado Esquerdo: Título e Texto (40% - 4 colunas de 10) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-6 w-full"
      >
        <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl bg-black aspect-video">
          <video
            autoPlay 
            controls
            muted
            loop 
            playsInline 
            className="w-full h-full object-cover block"
          >
            <source src={videoSobre} type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-4 flex flex-col text-center lg:text-left"
      >
        <h2 
          className="text-3xl md:text-4xl font-bold mb-6" 
          style={{ color: 'var(--color-dark-blue)' }}
        >
          {t('sobre.titleEstrutura')}
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed text-justify">
          {t('sobre.textEstrutura')}
        </p>
      </motion.div>

      {/* Lado Direito: Vídeo (60% - 6 colunas de 10) */}

    </div>
  </div>
</section>
      {/* Values Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
       {t('sobre.titleValores')}
      </h2>
      <p className="text-lg text-gray-300 max-w-2xl mx-auto">
        {t('sobre.subtitleValores')}
      </p>
    </div>

    {/* Cards */}
    <div className="flex flex-wrap justify-center gap-6">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="
            bg-white rounded-xl p-6 text-center
            w-full sm:w-[45%] lg:w-[30%]
            max-w-sm
          "
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
            style={{ backgroundColor: '#FF5101' }}
          >
            <value.icon className="w-8 h-8 text-white" />
          </div>

          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {value.title}
          </h3>

          <p className="text-gray-600">
            {value.description}
          </p>
        </motion.div>
      ))}
    </div>

  </div>
</section>
<section id="parceirosmamuth" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <SectionTitle
      title= {t('sobre.titleMarcas')}
      subtitle= {t('sobre.subtitleMarcas')}
    />

    <div className="flex flex-wrap justify-center gap-8">
      {brands.map((brand, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6, scale: 1.02 }}
          onClick={() => {
            setSelectedBrand(brand);
            setIsOpen(true);
          }}
          className="bg-white rounded-xl shadow-lg p-6 flex flex-col h-auto
          w-full md:w-[48%] lg:w-[32%] cursor-pointer"
        >
          {/* Container do Logo - Mantive a cor de fundo laranja original */}
          <div className="w-full h-16 flex items-center justify-start mb-4">
            <img 
              src={brand.image} 
              alt={`Logo da marca ${brand.name}`} 
              className="max-w-[140px] max-h-full object-contain object-left" 
            />
          </div>

          <h3
            className="text-xl font-bold mb-3"
            style={{ color: 'var(--color-dark-blue)' }}
          >
            {brand.name}
          </h3>

          <p className="text-gray-600 mb-4 flex-grow">
            {brand.description}
          </p>

          <div className="mb-4">
            <h4
              className="font-semibold text-sm mb-2"
              style={{ color: 'var(--color-dark-blue)' }}
            >
              Especialidades:
            </h4>

            <div className="flex flex-wrap gap-2">
              {brand.specialties.map((specialty, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 rounded-full text-white"
                  style={{ backgroundColor: '#FF5101' }}
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          <button
            className="font-semibold hover:underline inline-flex items-center"
            style={{ color: '#FF5101' }}
          >
            {t('sobre.btnMarcas')}
          </button>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Modal de Detalhes - Mantido sem alterações */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center 
        bg-black/40 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.92, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white/90 backdrop-blur-xl 
          rounded-3xl p-10 max-w-xl w-full 
          shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)]"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-gray-500 
            hover:text-black transition"
          >
            ✕
          </button>

          <h3 className="text-3xl font-bold mb-6 text-[#FF5101]">
            {selectedBrand?.name}
          </h3>

          {/* Opcional: Adicionar o logo também dentro do modal */}
          {/* {selectedBrand?.image && (
            <img src={selectedBrand.image} alt={selectedBrand.name} className="h-12 mb-6 object-contain block" />
          )} */}

          <p className="text-gray-700 mb-6 leading-relaxed">
            {selectedBrand?.description}
          </p>

          <div className="flex flex-wrap gap-3">
            {selectedBrand?.specialties.map((item, index) => (
              <span
                key={index}
                className="text-xs px-4 py-2 rounded-full 
                bg-[#FF5101] text-white font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
</section>


      {/* Timeline Section */}
     <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title={t('sobre.titleTrajetoria')}
          subtitle={t('sobre.subtitleTrajetoria')}
        />
        
        <div className="relative">
          {/* Linha Central Vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 hidden md:block" style={{ backgroundColor: '#FF5101' }}></div>
          
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* CARD BRANCO */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col sm:flex-row items-stretch min-h-[160px]">
                    
                    {/* 1. LADO DO TEXTO (Ocupa a maior parte: 3/4) */}
                    <div className="p-6 flex-[3] flex flex-col justify-center">
                      <span className="text-2xl font-bold" style={{ color: '#FF5101' }}>
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mt-1 mb-2" style={{ color: 'var(--color-dark-blue)' }}>
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {item.description}
                      </p>
                    </div>

                    {/* 2. LADO DA IMAGEM (Reduzida para 1/4 da largura do card) */}
                    {item.image && (
                      <div className="sm:w-1/4 h-40 sm:h-auto shrink-0 bg-gray-50 flex items-center justify-center">
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-24 h-auto object-cover"
                          onContextMenu={(e) => e.preventDefault()}
                          draggable="false"
                        />
                      </div>
                    )}

                  </div>
                </div>

                {/* Marcador da Linha (Bolinha) */}
                <div className="w-8 h-8 rounded-full border-4 border-white shadow-md z-10 flex-shrink-0 hidden md:block" style={{ backgroundColor: '#FF5101' }}></div>

                {/* Espaço vazio para manter o zigue-zague */}
                <div className="flex-1 hidden md:block"></div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <CTASection />      
    <CertificacoesSection />
    <WhatsappButton />
    </>
  );
};

export default Sobre;