import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { X } from "lucide-react";
import SectionTitle from '@/components/SectionTitle';
import WhatsappButton from '@/components/WhatsappButton';
import ProductCard from '@/components/ProductCard';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import CertificacoesSection from "@/components/CertificadoSection";
import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero"

// Imports de Imagens
import lavadoraAltaPressao from "@/assets/images/typhoonjet-50cv-eletrica.png";
import vestimentaProtecao from '@/assets/images/vestimenta-protecao-cp.png';
import mangueiraConexao from "@/assets/images/mangueiras-conexoes.jpg";
import bicoHidrojato from "@/assets/images/bico-rotativo-r-cp.png";
import bombaAltaPressao from "@/assets/images/falch-pump-500-cp-produtos.png";
import pecasBomba from "@/assets/images/peca-bomba-flow-cp.png";
import acessoriosHidro from "@/assets/images/pistola-rotativa-viper-40k-cp.png";
import acessoriosLavadora from "@/assets/images/acessorios-lavadora.png";
import robo from "@/assets/images/robo-magnetico-climb-rob.png";

const LinhasDeProdutos = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const {t} = useTranslation();

  const [open, setOpen] = useState(false);
  // Função de clique atualizada para tratar rotas internas e externas
  const handleProductClick = (path) => {
    if (path) {
      navigate(path);
      // Rola para o topo da página ao navegar
      window.scrollTo(0, 0);
    } else {
      toast({
        title: "Orçamento",
        description: "Redirecionando para a página de contato...",
      });
      setTimeout(() => navigate('/contato'), 1000);
    }
  };

  const products = [
    {
      name: t('produtos.titleMangueiras'),
      path: '/mangueiras-conexoes',
      description: t('produtos.textMangueiras'),
      image: mangueiraConexao,
      specs: [
        t('produtos.desc1Mangueiras'),
        t('produtos.desc2Mangueiras'),
        t('produtos.desc3Mangueiras'),
        t('produtos.desc4Mangueiras'),
        t('produtos.desc5Mangueiras')
      ]
    },
    {
      name: t('produtos.titleLavadoras'),
      path: '/lavadoras', // LINK PARA SUA NOVA PÁGINA
      description: t('produtos.textLavadoras'),
      image: lavadoraAltaPressao,
      specs: [
        t('produtos.desc1Lavadoras'),
        t('produtos.desc2Lavadoras'),
        t('produtos.desc3Lavadoras'),
        t('produtos.desc4Lavadoras'),
        t('produtos.desc5Lavadoras')
      ]
    },
    {
      name: t('produtos.titleVestimentas'),
      path: '/vestimentas',
      description: t('produtos.textVestimentas'),
      image: vestimentaProtecao,
      specs: [
        t('produtos.desc1Vestimentas'),
        t('produtos.desc2Vestimentas'),
        t('produtos.desc3Vestimentas'),
        t('produtos.desc4Vestimentas'),
        t('produtos.desc5Vestimentas')
      ]
    },
    {
      name: t('produtos.titleRobo'),
      path: '/robo',
      description: t('produtos.textRobo'),
      image: robo,
      specs: [
        t('produtos.desc1Robo'),
        t('produtos.desc2Robo'),
        t('produtos.desc3Robo'),
        t('produtos.desc4Robo'),
        t('produtos.desc5Robo')
      ]
    },
    {
      name: t('produtos.titleBombas'),
      path: '/bombas-alta-pressao',
      description: t('produtos.textBombas'),
      image: bombaAltaPressao,
      specs: [
        t('produtos.desc1Bombas'),
        t('produtos.desc2Bombas'),
        t('produtos.desc3Bombas'),
        t('produtos.desc4Bombas'),
        t('produtos.desc5Bombas')
      ]
    },
    {
      name: t('produtos.titleBicos'),
      path: '/bicos-hidrojatos',
      description: t('produtos.textBicos'),
      image: bicoHidrojato,
      specs: [
        t('produtos.desc1Bicos'),
        t('produtos.desc2Bicos'),
        t('produtos.desc3Bicos'),
        t('produtos.desc4Bicos'),
        t('produtos.desc5Bicos')
      ]
    },
    {
      name: t('produtos.titleAcessorioHidro'),
      path: '/hidrojato-acessorios',
      description: t('produtos.textAcessorioHidro'),
      image: acessoriosHidro,
      specs: [
        t('produtos.desc1AceHidro'),
        t('produtos.desc2AceHidro'),
        t('produtos.desc3AceHidro'),
        t('produtos.desc4AceHidro'),
        t('produtos.desc5AceHidro')
      ]
    },
    {
      name: t('produtos.titleAcessoriosLavadoras'),
      path: '/acessorios-lavadoras',
      description: t('produtos.textAcessoriosLavadoras'),
      image: acessoriosLavadora,
      specs: [
        t('produtos.desc1AceLava'),
        t('produtos.desc2AceLava'),
        t('produtos.desc3AceLava'),
        t('produtos.desc4AceLava'),
        t('produtos.desc5AceLava')
      ]
    },
    {
      name: t('produtos.titlePecas'),
      path: '/pecas-bombas',
      description: t('produtos.textPecas'),
      image: pecasBomba,
      specs: [
        t('produtos.desc1Pecas'),
        t('produtos.desc2Pecas'),
        t('produtos.desc3Pecas'),
        t('produtos.desc4Pecas'),
        t('produtos.desc5Pecas')
      ]
    }
    
    
  ];

  return (
    <>
      <Helmet>
        <title>Linhas de Produtos - Mamuth | Equipamentos de Alta Pressão</title>
        <meta name="description" content="Conheça nossa completa linha de produtos: bombas de alta pressão, sistemas de limpeza industrial e soluções customizadas." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 text-white" style={{ backgroundColor: 'var(--color-dark-blue)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('produtos.titleProdutos')}</h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto text-gray-200">
              {t('produtos.subtitleProdutos')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title= {t('produtos.titleCards')}
            subtitle={t('produtos.subtitleCards')}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                {...product}
                // Passamos o path do produto para a função de clique
                onCTAClick={() => handleProductClick(product.path)}
              />
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

export default LinhasDeProdutos;