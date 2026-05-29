import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import portaBicoSafira from '@/assets/images/porta-bico-safira.png';
import { useTranslation } from 'react-i18next';
import portaBicoRetoELeque from '@/assets/images/porta-bico-reto-e-leque.png';
import bicoTurboRotativo600 from '@/assets/images/bico-turbo-rotativo-600.jpg';
import bicoSharkRadial from '@/assets/images/bico-shark-radial-40k.png';
import bicoSharkJet22K from '@/assets/images/bico-shark-jet-22k-40k.png';
import bicoSafiraM10 from '@/assets/images/bico-safira-m10.png';
import bicoSafira from '@/assets/images/bico-safira.png';
import bicoRotativoTitan from '@/assets/images/bico-rotativo-titan.jpg';
import bicoRotativoR from '@/assets/images/bico-rotativo-r-cp.png';
import bicoRetoLeque from '@/assets/images/bico-reto-e-leque.png';
import bicoFixoFoguetinho from '@/assets/images/bico-fixo-foguetinho.png';
import bicoFerret22k from '@/assets/images/bico-ferret-22k.png';
import bicoAttack14 from '@/assets/images/bico-attack-1-4.jpg';
import bicoTorpedo from '@/assets/images/bico-torpedo-cp.png'
import path from 'node:path';

const PaginaCategoria = () => {
  const {t} = useTranslation();
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: t('categorias.bicos.titleRotativo'),
      path: '/bicos-hidrojatos/bico-rotativo-r',
      description: t('categorias.bicos.subtitleRotativo'),
      image: bicoRotativoR, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleSafira'),
      path: '/bicos-hidrojatos/bico-safira-m10',
      description: t('categorias.bicos.subtitleSafira'),
      image: bicoSafiraM10, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titlePortaSafira'),
      path: '/bicos-hidrojatos/porta-bico-safira',
      description: t('categorias.bicos.subtitlePortaSafira'),
      image: portaBicoSafira, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleRetoLeque'),
      path: '/bicos-hidrojatos/porta-bico-reto-e-leque',
      description: t('categorias.bicos.subtitleRetoLeque'),
      image: portaBicoRetoELeque, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleRotativo600'),
      path:'/bicos-hidrojatos/bico-turbo-rotativo-600',
      description: t('categorias.bicos.subtitleRotativo600'),
      image: bicoTurboRotativo600, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleTorpedo12'),
      path: '/bicos-hidrojatos/bico-torpedo',
      description: t('categorias.bicos.subtitleTorpedo12'),
      image: bicoTorpedo, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleSharkJet'),
      path: '/bicos-hidrojatos/bico-shark-jet-22k',
      description: t('categorias.bicos.subtitleSharkJet'),
      image: bicoSharkJet22K, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleRotativoTitan'),
      path: '/bicos-hidrojatos/bico-rotativo-titan',
      description: t('categorias.bicos.subtitleRotativoTitan'),
      image: bicoRotativoTitan, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleBicoReto'),
      path: '/bicos-hidrojatos/bico-reto-e-leque',
      description: t('categorias.bicos.subtitleBicoReto'),
      image: bicoRetoLeque, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleFoguetinho'),
      path: '/bicos-hidrojatos/bico-fixo-foguetinho',
      description: t('categorias.bicos.subtitleFoguetinho'),
      image: bicoFixoFoguetinho, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleFerret'),
      path: '/bicos-hidrojatos/bico-ferret-22k',
      description: t('categorias.bicos.subtitleFerret'),
      image: bicoFerret22k, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.bicos.titleAttack'),
      path: '/bicos-hidrojatos/bico-attack-1-4',
      description: t('categorias.bicos.subtitleAttack'),
      image: bicoAttack14, 
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
        <title>Bicos para Hidrojato - Mamuth Mangueiras</title>
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
              {t('produtos.titleBicos')}
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