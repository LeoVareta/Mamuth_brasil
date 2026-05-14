import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import robocp from "@/assets/images/robo-line-worker-250-cp-produto.png";
import robocp2 from "@/assets/images/robo-magnetico-climb-cp-produtos.png";
import robocp3 from "@/assets/images/robo-falch-lift-worker-250-beam-cp.png";
import path from 'node:path';

const PaginaRobo = () => {
  const {t} = useTranslation();
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: t('categorias.Robo.titleWorker'),
      path: '/robo/robo-line-worker-250',
      description: t('categorias.Robo.subtitleWorker'),
      image: robocp, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.Robo.titleLift250'),
      path: '/robo/robo-lift-worker-250-beam',
      description: t('categorias.Robo.subtitleLift250'),
      image: robocp3, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.Robo.titleMagnetico'),
      path: '/robo/robo-magnetico-climb-rob',
      description: t('categorias.Robo.subtitleMagnetico'),
      image: robocp2, 
      category: 'Categoria Principal'
    }
   
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Robo - Mamuth Mangueiras</title>
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
              {t('produtos.titleRobo')}
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

export default PaginaRobo;