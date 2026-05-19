import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import ProductCard from '@/components/ProductCard'; // Certifique-se de que o caminho está correto
import valvulaSuccaoUAP from '@/assets/images/valvula-succao-uap.png';
import valvulaPressaoSAP from '@/assets/images/valvula-pressao-sap.png';
import valvulaPressaoUAP from '@/assets/images/valvula-pressao-uap.png';
import sedeDuplaUAP from '@/assets/images/sede-dupla-uap.png';
import sedeDupla from '@/assets/images/sede-dupla.png';
import pistaoMetalUAP from '@/assets/images/pistao-metal-duro-uap.png';
import pistaoMetalSAP from '@/assets/images/pistao-metal-duro-sap.png';
import kitVedacaoUAP from '@/assets/images/pecas-para-bomba.png';
import kitVedacaoSAP from '@/assets/images/kit-vedacao-sap.png';
import intermediariaUAP from '@/assets/images/intermediaria-uap.png';
import intermediariaSAP from '@/assets/images/intermediaria-sap.png';
import flow from "@/assets/images/peca-bomba-flow-cp.png";
import falch from "@/assets/images/pecas-bomba-falch-cp.png"
import imgNlb from '@/assets/images/cabecote-rotativo-3d-cp-produto.png'
import path from 'node:path';

const PaginaCategoria = () => {
  const { t } = useTranslation();
  const produtosDaCategoria = [
    {
      name: t('categorias.pecasBombas.titleFlow'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image: flow, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    },
     {
      name: t('categorias.pecasBombas.titleFalch'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image: falch, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    },
    {
      name: t('categorias.pecasBombas.titleNlb'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image:  imgNlb, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    },
    {
      name: t('categorias.pecasBombas.titleKamat'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image: sedeDuplaUAP, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    },
    {
      name: t('categorias.pecasBombas.titleWoma'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image: pistaoMetalSAP, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    },
    {
      name: t('categorias.pecasBombas.titleNacionais'),
      path: '/contato',
      description: t('categorias.pecasBombas.subtitlePecas'),
      image: pistaoMetalUAP, 
      category: 'Categoria Principal',
      buttonText: 'Fale com um consultor'
    }
  ];

  const handleProductClick = (product) => {
    console.log("Produto selecionado:", product);
    // Aqui você pode abrir um WhatsApp ou modal de orçamento
  };

  return (
    <>
      <Helmet>
        <title>Peças para Bombas de Hidrojato - Mamuth Mangueiras</title>
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
              {t('produtos.titlePecas')}
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