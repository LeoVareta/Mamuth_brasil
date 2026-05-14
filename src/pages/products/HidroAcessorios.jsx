import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import tubecleanMamuth from '@/assets/images/tubeclean-mamuth.jpeg';
import powerBoxMamuth from '@/assets/images/powerbox-mamuth-2800.jpeg';
import pistolaRotativaViper40k from '@/assets/images/pistola-rotativa-viper-40k-cp.png';
import pistolaPneumatica2G from '@/assets/images/pistola-pneumatica-2g.png';
import pistolaFluxoFechadoMTFF from '@/assets/images/pistola-fluxo-fechado-15k-cp.png';
import pistolaFluxoAbertoMTFA from '@/assets/images/pistola-fluxo-aberto-22k-cp.png';
import pedalFluxoAbertoMTPA from '@/assets/images/pedal-fluxo-aberto-mtpa.jpeg';
import malhaSeguranca from '@/assets/images/malha-de-seguranca.png';
import lancaTuboinox from '@/assets/images/lanca-tubo-inox.png';
import lacoSeguranca from '@/assets/images/laco-seguranca.png';
import distorcedorMangueiraUap from '@/assets/images/distorcedor-mangueira-uap.jpeg';
import cabecoteRotativo3D from '@/assets/images/cabecote-rotativo-3d-cp-produto.png';
import path from 'node:path';

const PaginaCategoria = () => {
  const {t} = useTranslation();
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: t('categorias.hidroacesso.titleViper40k'),
      path: '/hidrojatos-e-acessorios/pistola-rotativa-viper-40k',
      description: t('categorias.hidroacesso.subtitleViper40k'),
      image: pistolaRotativaViper40k, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titlePneumatica'),
      path: '/hidrojatos-e-acessorios/pistola-Pneumatica-2g-mtpt-2800',
      description: t('categorias.hidroacesso.subtitlePneumatica'),
      image: pistolaPneumatica2G, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titlePFechado'),
      path: '/hidrojatos-e-acessorios/pistola-fluxo-fechado-mtff-1200',
      description: t('categorias.hidroacesso.subtitlePFechado'),
      image: pistolaFluxoFechadoMTFF, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titlePAberto'),
      path: '/hidrojatos-e-acessorios/pistola-fluxo-aberto-mtfa-1400',
      description: t('categorias.hidroacesso.subtitlePAberto'),
      image: pistolaFluxoAbertoMTFA, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleTubeclean'),
      path: '/hidrojatos-e-acessorios/tubeclean-mamuth',
      description: t('categorias.hidroacesso.subtitleTubeclean'),
      image: tubecleanMamuth, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titlePowerBox'),
      path: '/hidrojatos-e-acessorios/powerbox-mamuth-2800',
      description: t('categorias.hidroacesso.subtitlePowerBox'),
      image: powerBoxMamuth, 
      category: 'Categoria Principal'
    },
    
    {
      name: t('categorias.hidroacesso.titlePedal'),
      path: '/hidrojatos-e-acessorios/pedal-fluxo-aberto-mtpa-1400',
      description: t('categorias.hidroacesso.subtitlePedal'),
      image: pedalFluxoAbertoMTPA, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleMalha'),
      path: '/hidrojatos-e-acessorios/malha-de-seguranca',
      description: t('categorias.hidroacesso.subtitleMalha'),
      image: malhaSeguranca, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleLanca'),
      path: '/hidrojatos-e-acessorios/lanca-e-tubo-inox',
      description: t('categorias.hidroacesso.subtitleLanca'),
      image: lancaTuboinox, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleLaco'),
      path: '/hidrojatos-e-acessorios/laco-de-seguranca',
      description: t('categorias.hidroacesso.subtitleLaco'),
      image: lacoSeguranca, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleDistorcedor'),
      path: '/hidrojatos-e-acessorios/distorcedor-de-mangueira-uap',
      description: t('categorias.hidroacesso.subtitleDistorcedor'),
      image: distorcedorMangueiraUap, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.hidroacesso.titleCabecote'),
      path: '/hidrojatos-e-acessorios/cabecote-rotativo-3d-torrent-nlb',
      description: t('categorias.hidroacesso.subtitleCabecote'),
      image: cabecoteRotativo3D, 
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
        <title>Hidrojato e Acessórios - Mamuth Mangueiras</title>
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
              {t('produtos.titleAcessorioHidro')}
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