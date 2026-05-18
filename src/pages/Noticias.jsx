import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion } from "framer-motion";
import WhatsappButton from '@/components/WhatsappButton';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/SectionTitle';
import CertificacoesSection from "@/components/CertificadoSection";
import CTASection from "@/components/CTASection";
import NoticiaCard from "@/components/NoticiaCard"; // Agora este arquivo existe!
import imgFenasucro from '@/assets/images/feira-fenasucro.jpg';

const Noticias = () => {
  const { t } = useTranslation();

  const listaDeNoticias = [
    {
      id: 1,
      imagem: imgFenasucro,
      titulo: t('noticias.titleNoticia1'),
      subtitulo: 'E em 2026 não será diferente. A Mamuthidro espera por você na FENASUCRO.',
      resumo: t('noticias.textoNoticia1'),
      linkSaibaMais: '/noticias/feira-fenasucro',
      linkDownload: '/arquivos/catalogo-fecasucro.pdf'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notícias - Mamuthidro | Novidades e Atualizações do Setor Industrial</title>
        <meta name="description" content="Acompanhe as últimas notícias da Mamuthidro, novidades do setor industrial, lançamentos de produtos e atualizações sobre nossa empresa." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('noticias.titleNoticias')}</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              {t('noticias.subtitleNoticias')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('noticias.titleCards')}
            subtitle={t('noticias.subtitleCards')}
          />
          
          {/* Contêiner das fitas horizontais */}
          <div className="flex flex-col w-full gap-6 mt-10">
            {listaDeNoticias.map((noticia) => (
              <NoticiaCard
                key={noticia.id}
                imagem={noticia.imagem}
                titulo={noticia.titulo}
                subtitulo={noticia.subtitulo}
                resumo={noticia.resumo}
                linkSaibaMais={noticia.linkSaibaMais}
                linkDownload={noticia.linkDownload}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <CertificacoesSection />
      <WhatsappButton />
    </>
  );
};

export default Noticias;