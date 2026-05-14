import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import bombaMTI600 from '@/assets/images/bomba-mti600.png';
import bombaMTI50FF from '@/assets/images/bomba-mti-50ff.png';
import bombaMTI500 from '@/assets/images/bomba-mti500.png';
import bombaMTI350 from '@/assets/images/bombas-altapressao.png';
import bombaMTI250 from '@/assets/images/bomba-mti-250.png';
import BombaFalch125 from '@/assets/images/falch-pump-150.png';
import BombaFalch250 from '@/assets/images/falch-pump-250.png';
import BombaFalch500 from '@/assets/images/falch-pump-500-cp-produtos.png';
import path from 'node:path';
import { t } from 'i18next';

const PaginaCategoria = () => {
  const {t} = useTranslation();
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: t('categorias.bombas.titlePump125'),
      path: '/bombas-de-alta-pressao/bomba-falch-pump-125kw',
      description: t('categorias.bombas.subtitlePump125'),
      image: BombaFalch125, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.titlePump250'),
      path: '/bombas-de-alta-pressao/bomba-falch-pump-250kw',
      description: t('categorias.bombas.subtitlePump250'),
      image: BombaFalch250, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.titlePump500'),
      path: '/bombas-de-alta-pressao/bomba-falch-pump-500kw',
      description: t('categorias.bombas.subtitlePump500'),
      image: BombaFalch500, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title600'),
      path: '/bombas-de-alta-pressao/bomba-mti-600',
      description: t('categorias.bombas.subtitle600'),
      image: bombaMTI600, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title500'),
      path: '/bombas-de-alta-pressao/bomba-mti-500',
      description: t('categorias.bombas.subtitle500'),
      image: bombaMTI500, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title350'),
      path: '/bombas-de-alta-pressao/bomba-mti-350',
      description: t('categorias.bombas.subtitle350'),
      image: bombaMTI350, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title250'),
      path: '/bombas-de-alta-pressao/bomba-mti-250',
      description: t('categorias.bombas.subtitle250'),
      image: bombaMTI250, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title200'),
      path: '/bombas-de-alta-pressao/bomba-mti-200',
      description: t('categorias.bombas.subtitle200'),
      image: bombaMTI350, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bombas.title50ff'),
      path: '/bombas-de-alta-pressao/bomba-mti-50ff',
      description: t('categorias.bombas.subtitle50ff'),
      image: bombaMTI50FF, 
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
        <title>Bombas de Alta Pressão - Mamuth Mangueiras</title>
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
              {t('produtos.titleBombas')}
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