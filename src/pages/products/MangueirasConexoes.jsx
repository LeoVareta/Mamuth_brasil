import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import poliamidaSap1500 from '@/assets/images/poliamida-sap-ate1500.png';
import poliamidaUap2800 from '@/assets/images/mangueiras-conexoes.jpg';
import niplesM24DKO from '@/assets/images/niples-m24dko-cp-produtos.png';
import niplesAdaptador from '@/assets/images/niples-adaptador-hp9-16.png';
import mangueiraWaterblast from '@/assets/images/mangueira-waterblast-cp.png';
import mangueira10kPsi from '@/assets/images/mangueira-10000psi.png';
import luvasUniao from '@/assets/images/luvas-de-uniao.png';
import luvasEmendaUap from '@/assets/images/luvas-emenda-uap.png';
import engatesRapidos from '@/assets/images/engates-rapidos.png';
import distribuidoresUap from '@/assets/images/distribuidores-uap-y-t-90-cp.png';
import distribuidorFluxo from '@/assets/images/distribuidores-fluxo-sap-cp.png'
import path from 'path';

const PaginaCategoria = () => {
  const {t} = useTranslation();
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: t('categorias.mangueiras.titlePoliamida2800'),
      path: '/mangueiras-conexoes/poliamida-uap-2800bar',
      description: t('categorias.mangueiras.subtitlePoliamida2800'),
      image: poliamidaUap2800, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titlePoliamida1500'),
      path: '/mangueiras-conexoes/poliamida-sap-1500bar',
      description: t('categorias.mangueiras.subtitlePoliamida1500'),
      image: poliamidaSap1500, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleWaterblast'),
      path:'/mangueiras-conexoes/mangueira-waterblast',
      description: t('categorias.mangueiras.subtitleWaterblast'),
      image: mangueiraWaterblast, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleMangueira10k'),
      path: '/mangueiras-conexoes/mangueira-ate-10000psi',
      description: t('categorias.mangueiras.subtitleMangueira10k'),
      image: mangueira10kPsi, 
      category: 'Categoria Principal'
    },
    {
      name: 'Niples M24DKO-1',
      path: '/mangueiras-conexoes/niples-m24dko1',
      description: t('categorias.mangueiras.subtitleNiples'),
      image: niplesM24DKO, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleNiplesAdap'),
      path: '/mangueiras-conexoes/niples-adaptador-hp-9-16',
      description: t('categorias.mangueiras.subtitleNiplesAdap'),
      image: niplesAdaptador, 
      category: 'Categoria Principal'
    },
    
    {
      name: t('categorias.mangueiras.titleLuvasUniao'),
      path: '/mangueiras-conexoes/luvas-de-uniao',
      description: t('categorias.mangueiras.subtitleLuvasUniao'),
      image: luvasUniao, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleLuvasEmenda'),
      path: '/mangueiras-conexoes/luvas-de-emenda-uap',
      description: t('categorias.mangueiras.subtitleLuvasEmenda'),
      image: luvasEmendaUap, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleEngates'),
      path: '/mangueiras-conexoes/engates-rapidos',
      description: t('categorias.mangueiras.subtitleEngates'),
      image: engatesRapidos, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleLuvasDistribuidorUAP'),
      path: '/mangueiras-conexoes/distribuidores-uap-y-t-90°',
      description: t('categorias.mangueiras.subtitleLuvasDistribuidorUAP'),
      image: distribuidoresUap, 
      category: 'Categoria Principal'
    },
    {
      name: t('categorias.mangueiras.titleDistribuidorSAP'),
      path: '/mangueiras-conexoes/distribuidores-fluxo-sap',
      description: t('categorias.mangueiras.subtitleDistribuidorSAP'),
      image: distribuidorFluxo, 
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
        <title>Mangueiras e Conexões - Mamuth Mangueiras</title>
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
              {t('produtos.titleMangueiras')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              {t('categorias.mangueiras.subtitle')}
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