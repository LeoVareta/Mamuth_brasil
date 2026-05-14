import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
  // Dados simulados para o "Produto 1"
  // Você pode repetir este objeto ou criar um array com variações
  const produtosDaCategoria = [
    {
      name: 'Pistola 660 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-660bar',
      description: 'Gatilhos e lanças indicadas para hidrolavadoras de alta pressão',
      image: pistola660bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola 350 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-350bar',
      description: 'Gatilhos e lanças indicadas para hidrolavadoras de alta pressão',
      image: pistola350bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Pistola 280 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/pistola-280bar',
      description: 'Gatilhos e lanças indicadas para hidrolavadoras de alta pressão',
      image: pistola280bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Bico Jato Abrasivo 500bar',
      path: '/acessorios-lavadoras-de-alta-pressao/bico-jato-abrasivo-500bar',
      description: 'Bico Jato Abrasivo 500bar',
      image: bicoJatoAbrasivo, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvula Reguladora 550 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-550bar',
      description: 'Válvula Reguladora de Pressão (By-Pass) com função de segurança.',
      image: valvulaReguladora550bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvula Reguladora 350 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-350bar',
      description: 'Válvula Reguladora de Pressão (By-Pass) com função de segurança.',
      image: valvulaReguladora350bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvula Reguladora 200 bar Alta Vazão',
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-reguladora-200bar-alta-vazao',
      description: 'Válvula Reguladora de Pressão (By-Pass) com função de segurança. Indicada para bombas de alta vazão.',
      image: valvulaReguladora200bar, 
      category: 'Categoria Principal'
    },
    {
      name: 'Válvula de Segurança 660 bar',
      path: '/acessorios-lavadoras-de-alta-pressao/valvula-de-seguranca-660bar',
      description: 'Válvula de Segurança que limita a pressão máxima do sistema de alta pressão. Quando for excedida a pressão a válvula abre liberando a pressão excessiva.',
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
              Acessórios para Lavadoras de Alta Pressão
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Soluções robustas e tecnologia de ponta para sua operação industrial.
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