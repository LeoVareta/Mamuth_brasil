import React from 'react';
import { useState } from 'react';
import i18n from 'i18next';
import { motion, AnimatePresence, color } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Droplet, Wrench, Settings, Zap, Shield, Award, Clock, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import WhatsappButton from '@/components/WhatsappButton';
import CTAButton from '@/components/CTAButton';
import CTASection from "@/components/CTASection";
import SectionTitle from '@/components/SectionTitle';
import ProductCard from '@/components/ProductCard';
import ServiceCard from '@/components/ServiceCard';
import Logo from '@/components/Logo';
import CertificacoesSection from "@/components/CertificadoSection";
import Hero from "@/components/Hero"
import { useToast } from '@/components/ui/use-toast';

import ProductCarousel from "@/components/ProductCarousel";


import mangueiraConexao from "@/assets/images/mangueiras-conexoes.jpg";
import lavadoraAltaPressao from "@/assets/images/typhoonjet-50cv-eletrica.png";
import vestimentaProtecao from "@/assets/images/macacao-hydro-shel-sap-3.png";
import robo from "@/assets/images/robo-magnetico-climb-rob.png";
import bombaAltaPressao from "@/assets/images/falch-pump-500-cp.png";
import bicoHidrojato from "@/assets/images/bico-rotativo-r-cp.png";
import acessoriosHidro from "@/assets/images/pistola-rotativa-viper-40k-cp.png";
import acessoriosLavadora from "@/assets/images/acessorios-lavadora.png";
import pecasBomba from "@/assets/images/peca-bomba-flow-cp.png";
import argentina from "@/assets/images/bandeira-da-argentina.png";
import bolivia from "@/assets/images/bandeira-da-bolivia.png";
import colombia from "@/assets/images/bandeira-da-colombia.png";
import guatemala from "@/assets/images/bandeira-da-guatemala.png";
import venezuela from "@/assets/images/bandeira-da-venezuela.png";
import brasil from "@/assets/images/bandeira-do-brasil.png";
import equador from "@/assets/images/bandeira-do-equador.svg";
import mexico from "@/assets/images/bandeira-do-mexico.png";
import paraguai from "@/assets/images/bandeira-do-paraguai.png";
import peru from "@/assets/images/bandeira-do-peru.png";
import americaDoSul from "@/assets/images/mapa_atuacao_mamuth_sem_fundo.png";
import bgMapa from "@/assets/images/bg-mapa.png";
import videobg from "@/assets/images/video-bghome.mp4";
import path from 'node:path';

const Home = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();

  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleCTAClick = () => {
    navigate('/contato');
  };

  const handleProductClick = () => {
    toast({
      title: "Orçamento",
      description: "Redirecionando para a página de contato...",
    });
    setTimeout(() => navigate('/contato'), 1000);
  };

  const handleServiceClick = () => {
    toast({
      title: "Serviço",
      description: "Redirecionando para a página de contato...",
    });
    setTimeout(() => navigate('/contato'), 1000);
  };

  const products = [
    {
      name: t('produtos.titleMangueiras'),
      description: t('produtos.textMangueiras'),
      image: mangueiraConexao,
      specs: [
        t('produtos.specs1Mangueiras'), 
        t('produtos.specs2Mangueiras'), 
        t('produtos.specs3Mangueiras')

      ],
      path: '/mangueiras-conexoes'
    },
    {
      name: t('produtos.titleLavadoras'),
      description: t('produtos.textLavadoras'),
      image: lavadoraAltaPressao,
      specs: [
        t('produtos.specs1Lavadoras'), 
        t('produtos.specs2Lavadoras'), 
        t('produtos.specs3Lavadoras')
      ],
      path: '/lavadoras'
    },
    {
      name: t('produtos.titleVestimentas'),
      description: t('produtos.textVestimentas'),
      image: vestimentaProtecao,
      specs: [
        t('produtos.specs1Vestimentas'), 
        t('produtos.specs2Vestimentas'), 
        t('produtos.specs3Vestimentas')
      ],
      path: '/vestimentas'
    },
    {
      name: t('produtos.titleRobo'),
      description: t('produtos.textRobo'),
      image: robo,
      specs: [
        t('produtos.specs1Robo'), 
        t('produtos.specs2Robo'), 
        t('produtos.specs3Robo')
      ],
      path :'/robo'
    },
    {
      name: t('produtos.titleBombas'),
      description: t('produtos.textBombas'),
      image: bombaAltaPressao,
      specs: [
        t('produtos.specs1Bombas'), 
        t('produtos.specs2Bombas'), 
        t('produtos.specs3Bombas')
      ],
      path :'/bombas-alta-pressao'
    },
    {
      name: t('produtos.titleBicos'),
      description: t('produtos.textBicos'),
      image: bicoHidrojato,
      specs: [
        t('produtos.specs1Bicos'), 
        t('produtos.specs2Bicos'), 
        t('produtos.specs3Bicos')
      ],
      path: '/bicos-hidrojatos'
    },
    {
      name: t('produtos.titleAcessorioHidro'),
      description: t('produtos.textAcessorioHidro'),
      image: acessoriosHidro,
      specs: [
        t('produtos.specs1AcessorioHidro'), 
        t('produtos.specs2AcessorioHidro'), 
        t('produtos.specs3AcessorioHidro')
      ],
      path: '/hidrojato-acessorios'
    },
    {
      name: t('produtos.titleAcessoriosLavadoras'),
      description: t('produtos.textAcessoriosLavadoras'),
      image: acessoriosLavadora,
      specs: [
        t('produtos.specs1AcessoriosLavadoras'), 
        t('produtos.specs2AcessoriosLavadoras'), 
        t('produtos.specs3AcessoriosLavadoras')
      ],
      path: '/acessorios-lavadoras'
    },
    {
      name: t('produtos.titlePecas'),
      description: t('produtos.textPecas'),
      image: pecasBomba,
      specs: [
        t('produtos.specs1Pecas'), 
        t('produtos.specs2Pecas'), 
        t('produtos.specs3Pecas')
      ],
      path: '/pecas-bombas'
    },
    
  ];

  const services = [
    {
      icon: Droplet,
      title: t('home.titlePortifolio'),
      description: t('home.subtitlePortifolio'),
      benefits: [
        t('home.texto1Portifolio'),
        t('home.texto2Portifolio'), 
        t('home.texto3Portifolio'), 
        t('home.texto4Portifolio')
      ],
      buttonText: t('home.btnPortifolio')
    },
    {
      icon: Wrench,
      title:  t('home.titleConhecer'),
      description: t('home.subtitleConhecer'),
      benefits: [
        t('home.texto1Conhecer'), 
        t('home.texto2Conhecer'), 
        t('home.texto3Conhecer'), 
        t('home.texto4Conhecer')
      ],
      buttonText: t('home.btnConhecer')
    },
    {
      icon: Settings,
      title: t('home.titleSuporte'),
      description: t('home.subtitleSuporte'),
      benefits: [
        t('home.texto1Suporte'), 
        t('home.texto2Suporte'), 
        t('home.texto3Suporte'), 
        t('home.texto4Suporte')
      ],
      buttonText: t('home.btnSuporte')

    },
    {
      icon: Zap,
      title: t('home.titleParcerias'),
      description: t('home.subtitleParcerias'),
      benefits: [
        t('home.texto1Parcerias'), 
        t('home.texto2Parcerias'), 
        t('home.texto3Parcerias'), 
        t('home.texto4Parcerias')
      ],
      buttonText: t('home.btnParcerias'),
      link: "/sobre#parceirosmamuth"
    },
  ];

  const differentials = [
    { icon: Shield, title: t('home.titleQualidade'), description: t('home.textoQualidade') },
    { icon: Award, title: t('home.titleExperiencia'), description: t('home.textoExperiencia') },
    { icon: Clock, title: t('home.titleAtendimento'), description: t('home.textoAtendimento') },
    { icon: Users, title: t('home.titleEquipe'), description: t('home.textoEquipe') },
  ];

  return (
    <>
      <Helmet>
        <title>Mamuth - Qualidade de peso, Garantia de força</title>
        <meta name="description" content="Mamuth oferece soluções completas em equipamentos de alta pressão, hidrojateamento e limpeza industrial. Qualidade e eficiência para sua empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videobg} />
            Seu navegador não suporta a tag de vídeo.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl !leading-normal font-bold mb-6">
              {t('home.title1')} <br/> {t('home.title2')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              {t('home.subtitle')}
            </p>
            <CTAButton onClick={handleCTAClick}>
              {t('home.cta')}
            </CTAButton>
          </motion.div>
          <div>
    </div>
        </div>
      </section>
      {/* Latin America Presence Section */}

      {/* 1. Adicionamos 'relative' obrigatoriamente aqui */}
    <section 
      className="relative bg-white bg-no-repeat bg-center" 
      style={{ 
        backgroundImage: `url(${bgMapa})`, 
        backgroundSize: 'contain'
      }}
    >
      {/* CAMADA DE OPACIDADE: Ela fica por cima do fundo, mas atrás de tudo */}
      <div className="absolute inset-0 bg-white/30 z-0" />

      {/* CONTEÚDO: O 'relative z-10' garante que nada aqui ganhe opacidade */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">

        {/* TÍTULO CENTRALIZADO NO TOPO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-[#FF5101]">
            {t('home.titleMapa')}
          </h2>
        </motion.div>

        {/* GRID CONTEÚDO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

          {/* COLUNA ESQUERDA - FLAGS + SETORES */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            {/* Flags */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start">
              <img src={peru} alt="Peru" className="h-10 object-contain" />
              <img src={brasil} alt="Brasil" className="h-10 object-contain" />
              <img src={argentina} alt="Argentina" className="h-10 object-contain" />
              <img src={mexico} alt="México" className="h-10 object-contain" />
              <img src={colombia} alt="Colômbia" className="h-10 object-contain" />
            </div>

            <div className="flex flex-wrap gap-3 mb-12 justify-center md:justify-start">
              <img src={guatemala} alt="Guatemala" className="h-10 object-contain" />
              <img src={venezuela} alt="Venezuela" className="h-10 object-contain" />
              <img src={bolivia} alt="Bolívia" className="h-10 object-contain" />
              <img src={equador} alt="Equador" className="h-10 object-contain" />
              <img src={paraguai} alt="Paraguai" className="h-10 object-contain" />
            </div>

            <h3 className="text-3xl font-bold mb-6 text-[var(--color-dark-blue)]">
              {t('home.subtitleMapa')}
            </h3>
            <h4 className="text-2xl font-bold mb-6 text-[var(--color-dark-blue)]">
              {t('home.descriptionMapa')}
            </h4>

            {/* Início da UL com Efeito Sanfona (RESTAURADA) */}
            <ul className="space-y-4 text-gray-800">
              {[
                { title: t('home.sucroEnergetica'), text: t('home.textoSucro') },
                { title: t('home.offshore'), text: t('home.textoOffshore') },
                { title: t('home.industriaNaval'), text: t('home.textoNaval') },
                { title: t('home.construcaoCivil'), text: t('home.textoConstrucao') },
                { title: t('home.petroquimica'), text: t('home.textoPetroquimica') },
                { title: t('home.papelCelulose'), text: t('home.textoPapel') },
                { title: t('home.mineracao'), text: t('home.textoMineracao') },
                { title: t('home.geracaoEnergia'), text: t('home.textoEnergia') },
              ].map((item, index) => (
                <li key={index} className="border-b border-gray-100 pb-2">
                  <div 
                    className="flex items-center justify-between cursor-pointer group"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="w-3 h-3 mt-2 rounded-full bg-[#FF5101] shrink-0" />
                      <span className="text-lg font-bold text-[#FF5101]">
                        {item.title}
                      </span>
                    </div>
                    
                    <motion.span 
                      className="text-2xl font-bold text-[#FF5101] ml-4"
                      animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    >
                      +
                    </motion.span>
                  </div>

                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pl-6 pt-2 pb-4 text-lg text-gray-700">
                          {item.text}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUNA DIREITA - MAPA AMÉRICA DO SUL */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={americaDoSul}
              alt="Presença da Mamuth na América Latina"
              className="w-[400px] md:w-[800px] lg:w-[1000px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
      <section className="pb-20 pt-20" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {t('home.titleProdutos')}
            </h2>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto text-white">
              {t('home.subtitleProdutos')}
            </p>
          </div>
            <ProductCarousel products={products} />
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <Logo size="lg" />
            </motion.div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-dark-blue)' }}>
                {t('home.titleExcelencia')}
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                {t('home.subtitleExcelencia1')}
              </p>
              <p className="text-lg text-gray-600">
                {t('home.subtitleExcelencia2')}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1.0 }}
              className="grid grid-cols-2 gap-4"
            >
              {differentials.map((diff, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <diff.icon className="w-12 h-12 mx-auto mb-3" style={{ color: '#FF5101' }} />
                  <h3 className="font-bold mb-2" style={{ color: 'var(--color-dark-blue)' }}>
                    {diff.title}
                  </h3>
                  <p className="text-sm text-gray-600">{diff.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--color-dark-blue)' }} >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-white lg:px-8">
          <SectionTitle
            title={t('home.titleEscolher')}    
            subtitle={t('home.subtitleEscolher')}
            titleColor="text-white"
            subtitleColor="text-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                {...service}
                onCTAClick={handleServiceClick}
              />
            ))}
          </div>
        </div>
      </section>
       <CTASection />
      <CertificacoesSection />
    <>

    </>
            </>
          );
        };

export default Home;