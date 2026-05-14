import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import typhoonJet500 from '@/assets/images/typhoon-jet-todas-combustao-cp.png';
import typhoon200 from '@/assets/images/typhoon-jet-200-trifasico-cp.png'
import typhoonHot from '@/assets/images/typhoon-hot-eletrica-cp.png';
import typhoonJet170Monofasico from '@/assets/images/typhoon-jet-170cv-eletrica-2-cp.png';
import typhoonJetEletrica from '@/assets/images/typhoonjet-50cv-eletrica.png'
import path from 'node:path';
import { t } from 'i18next';

const PaginaCategoria = () => {
  const {t} = useTranslation();
  const produtosDaCategoria = [
    {
      name: t('categorias.lavadoras.title50cv'),
      path: '/lavadoras/typhoon-jet-50cv-eletrica',
      description: t('categorias.lavadoras.subtitle50cv'),
      image: typhoonJetEletrica, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.lavadoras.title500'),
      path: '/lavadoras/typhoon-jet-500-trifasico',
      description: t('categorias.lavadoras.subtitle500'),
      image: typhoonJet500, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.lavadoras.title350'),
      path: '/lavadoras/typhoon-jet-350-trifasico',
      description: t('categorias.lavadoras.subtitle350'),
      image: typhoon200, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.lavadoras.title200'),
      path: '/lavadoras/typhoon-jet-200-trifasico',
      description: t('categorias.lavadoras.subtitle200'),
      image: typhoonJet500, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.lavadoras.title170'),
      path: '/lavadoras/typhoon-jet-170-monofasico',
      description: t('categorias.lavadoras.subtitle170'),
      image: typhoonJet170Monofasico, 
      category: 'Categoria Principal'
    },
    
    {
      name: t('categorias.lavadoras.titleHot'),
      path: '/lavadoras/typhoon-hot',
      description: t('categorias.lavadoras.subtitleHot'),
      image: typhoonHot, 
      category: 'Categoria Principal'
    },
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Hidrolavadoras de Alta Pressão - Mamuth Mangueiras</title>
      </Helmet>

      {/* Hero Section - Mesmo estilo da página de Linhas de Produtos */}
      <section className="pb-20 pt-20" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold mb-6 text-white tracking-tight"
            >
              {t('produtos.titleLavadoras')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
             {t('categorias.lavadoras.subtitle')}
            </motion.p>
          </div>

          {/* Grid de Produtos - Mantendo o layout de 4 colunas ou 3 dependendo do destaque */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {produtosDaCategoria.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ProductCard
                  {...product}
                  onCTAClick={handleProductClick}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PaginaCategoria;