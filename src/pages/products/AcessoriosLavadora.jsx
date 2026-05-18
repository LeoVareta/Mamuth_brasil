import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import valvulaReguladora550bar from '@/assets/images/valvula-reguladora-550bar.png';
import valvulaReguladora350bar from '@/assets/images/valvula-reguladora-350bar.png';
import valvulaReguladora200bar from '@/assets/images/valvula-reguladora-200bar.png';
import valvulaSeguranca660bar from '@/assets/images/valvula-seguranca-660bar.png'
import pistola660bar from '@/assets/images/acessorios-lavadora.png';
import pistola350bar from '@/assets/images/pistola-350bar.png';
import pistola280bar from '@/assets/images/pistola-280bar.png';
import bicoJatoAbrasivo from '@/assets/images/bico-jato-abrasivo-500bar.png';
import path from 'path';

const PaginaCategoria = () => {
  const { t } = useTranslation();
  const produtosDaCategoria = [
    {
      name: t('categorias.hidrolavadoras.title660bar'),
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-660bar',
      description: t('categorias.hidrolavadoras.subtitlePistolas'),
      image: pistola660bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.title660bar'),
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-350bar',
      description: t('categorias.hidrolavadoras.subtitlePistolas'),
      image: pistola350bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.title280bar'),
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-280bar',
      description: t('categorias.hidrolavadoras.subtitlePistolas'),
      image: pistola280bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.titleBicojato'),
      path: '/acessorios-lavadoras-de-alta-pressao/bico-jato-abrasivo-500bar',
      description: t('categorias.hidrolavadoras.subtitleBicojato'),
      image: bicoJatoAbrasivo, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.titleValvula550'),
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-550bar',
      description: t('categorias.hidrolavadoras.subtitleValvula550'),
      image: valvulaReguladora550bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.titleValvula350'),
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-350bar',
      description: t('categorias.hidrolavadoras.subtitleValvula350'),
      image: valvulaReguladora350bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.titleValvula200'),
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-200bar-alta-vazao',
      description: t('categorias.hidrolavadoras.subtitleValvula200'),
      image: valvulaReguladora200bar, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidrolavadoras.titleValvula660'),
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-de-seguranca-660bar',
      description: t('categorias.hidrolavadoras.subtitleValvula660'),
      image: valvulaSeguranca660bar, 
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
        <title>Acessórios para Hidrolavadoras de Alta Pressão - Mamuth Mangueiras</title>
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
              {t('produtos.titleAcessoriosLavadoras')}
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