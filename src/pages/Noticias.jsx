import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import WhatsappButton from '@/components/WhatsappButton';
import { useTranslation } from 'react-i18next';
import SectionTitle from '@/components/SectionTitle';
import NewsCard from '@/components/NewsCard';
import CertificacoesSection from "@/components/CertificadoSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero"
import imgFenasucro from '@/assets/images/feira-fenasucro.jpg'
import imgNavalshore from '@/assets/images/feira-navalshore.jpg'
import certificacaoIso from "@/assets/images/certificacao-iso.jpg";

const Noticias = () => {
  const [open, setOpen] = useState(false);
  const {t} = useTranslation();

  const newsArticles = [
    {
      id: '1',
      title: t('noticias.titleNoticia1'),
      subtitle: 'E em 2026 não será diferente. A Mamuth Hydro espera por você na FENASUCRO.',
      excerpt: t("noticias.textoNoticia1"),
      buttonText: t('noticias.btnNoticia1'),
      link: '/noticias/feira-fenasucro',
      image: imgFenasucro
    }
  ];

  return (
    <>
      <Helmet>
        <title>Notícias - Mamuth | Novidades e Atualizações do Setor Industrial</title>
        <meta name="description" content="Acompanhe as últimas notícias da Mamuth, novidades do setor industrial, lançamentos de produtos e atualizações sobre nossa empresa." />
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

      {/* News Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title={t('noticias.titleCards')}
            subtitle={t('noticias.subtitleCards')}
          />
          
          {/* Alterado de grid para flex com justify-center */}
          <div className="flex flex-wrap justify-center gap-8">
            {newsArticles.map((article) => (
              <div 
                key={article.id} 
                className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-[380px] md:max-w-none"
              >
                <NewsCard {...article} />
              </div>
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