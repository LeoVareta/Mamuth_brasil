import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowLeft } from 'lucide-react';
import CTAButton from '@/components/CTAButton';
import NewsCard from '@/components/NewsCard';

const NoticiaDetalhe = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  // News data (in a real app, this would come from an API or state management)
  const newsData = {
    '1': {
      title: 'Mamuth expande operações em São Paulo',
      date: '15 de Dezembro, 2023',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200',
      content: `
        <p>A Mamuth anuncia a expansão de suas operações com a inauguração de uma nova unidade em São Paulo, prevista para o segundo semestre de 2024. Esta é mais uma etapa importante na consolidação da empresa como líder em soluções de alta pressão no mercado brasileiro.</p>
        
        <p>A nova instalação contará com infraestrutura de última geração, incluindo oficinas técnicas especializadas, centro de treinamento e área de estoque ampliada para peças e equipamentos. Com mais de 3.000m² de área construída, a unidade terá capacidade para atender um volume 50% maior de clientes.</p>
        
        <p>"Esta expansão reflete o crescimento consistente da Mamuth e nossa confiança no mercado brasileiro", afirma o diretor executivo. "Estamos investindo fortemente em infraestrutura e capital humano para continuar oferecendo o melhor serviço aos nossos clientes."</p>
        
        <p>A nova unidade também abrigará um centro de inovação, onde serão desenvolvidas e testadas novas soluções em parceria com universidades e institutos de pesquisa. O investimento total no projeto ultrapassa R$ 15 milhões.</p>
        
        <p>A expansão criará cerca de 80 novos postos de trabalho diretos na região, reforçando o compromisso da Mamuth com o desenvolvimento econômico local e a geração de empregos qualificados no setor industrial.</p>
      `
    },
    '2': {
      title: 'Novo sistema de limpeza com IA',
      date: '10 de Dezembro, 2023',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
      content: `
        <p>A Mamuth apresenta ao mercado brasileiro uma revolução tecnológica: o primeiro sistema de limpeza industrial integrado com inteligência artificial. A solução promete aumentar a eficiência operacional em até 40% e reduzir significativamente o consumo de recursos.</p>
        
        <p>O sistema utiliza algoritmos avançados de machine learning para otimizar pressão, vazão e tempo de operação em tempo real, adaptando-se automaticamente às condições das superfícies e tipo de incrustação. Os sensores integrados monitoram constantemente a eficácia da limpeza, ajustando parâmetros para resultados superiores.</p>
        
        <p>"Esta é uma mudança de paradigma na indústria de limpeza", explica o gerente de inovação da Mamuth. "A IA não apenas melhora os resultados, mas também reduz o desperdício de água em até 35% e otimiza o uso de energia em 25%."</p>
        
        <p>O sistema também oferece capacidade preditiva, identificando padrões de desgaste e recomendando manutenção preventiva antes que problemas ocorram. Todos os dados operacionais são registrados e disponibilizados através de uma plataforma cloud, permitindo análises detalhadas e relatórios personalizados.</p>
        
        <p>A tecnologia já está em fase de testes piloto em clientes selecionados, com previsão de lançamento comercial para o primeiro trimestre de 2024.</p>
      `
    },
    '3': {
      title: 'Certificação ISO 9001 renovada',
      date: '5 de Dezembro, 2023',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200',
      content: `
        <p>A Mamuth renova com distinção sua certificação ISO 9001:2015, reafirmando o compromisso com os mais altos padrões de qualidade e gestão. A auditoria de renovação, realizada por organismo certificador internacional, não identificou não-conformidades, reconhecendo a excelência dos processos implementados.</p>
        
        <p>A certificação ISO 9001 é o padrão internacional para sistemas de gestão da qualidade, utilizado por mais de um milhão de empresas em todo o mundo. Para a Mamuth, manter esta certificação representa não apenas conformidade com normas, mas um compromisso genuíno com melhoria contínua.</p>
        
        <p>"A renovação da ISO 9001 é resultado do trabalho dedicado de toda nossa equipe", destaca a gerente de qualidade. "Implementamos melhorias significativas em nossos processos nos últimos anos, com foco em eficiência, rastreabilidade e satisfação do cliente."</p>
        
        <p>Durante o ciclo de certificação, a Mamuth implementou novos indicadores de desempenho, modernizou seus sistemas de gestão e intensificou programas de treinamento para colaboradores. O índice de satisfação dos clientes atingiu 98%, um dos mais altos da indústria.</p>
        
        <p>A empresa também está em processo de obtenção de certificações adicionais, incluindo ISO 14001 (Gestão Ambiental) e ISO 45001 (Saúde e Segurança Ocupacional), demonstrando compromisso com sustentabilidade e bem-estar.</p>
      `
    }
  };

  const currentNews = newsData[id] || newsData['1'];

  const relatedNews = [
    {
      id: '4',
      title: 'Parceria com líder em hidrojateamento',
      excerpt: 'Nova parceria estratégica traz tecnologia de ponta em hidrojateamento para o mercado brasileiro.',
      date: '1 de Dezembro, 2023',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800'
    },
    {
      id: '5',
      title: 'Inovação em equipamentos de alta pressão',
      excerpt: 'Lançamento de nova linha de bombas de alta pressão com tecnologia sustentável.',
      date: '25 de Novembro, 2023',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800'
    },
    {
      id: '6',
      title: 'Mamuth completa 20 anos de excelência',
      excerpt: 'Celebramos duas décadas de história, crescimento e compromisso com nossos clientes.',
      date: '20 de Novembro, 2023',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800'
    }
  ].filter(news => news.id !== id);

  return (
    <>
      <Helmet>
        <title>{currentNews.title} - Mamuth</title>
        <meta name="description" content={currentNews.content.substring(0, 160)} />
      </Helmet>

      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/noticias"
            className="inline-flex items-center font-medium hover:underline"
            style={{ color: 'var(--color-orange)' }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para Notícias
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center text-sm mb-4" style={{ color: 'var(--color-gray)' }}>
              <Calendar className="w-4 h-4 mr-2" />
              {currentNews.date}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--color-dark-blue)' }}>
              {currentNews.title}
            </h1>
            <div className="mb-8 rounded-xl overflow-hidden">
              <img
                src={currentNews.image}
                alt={currentNews.title}
                className="w-full h-auto"
              />
            </div>
            <div
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: currentNews.content }}
              style={{
                lineHeight: '1.8',
              }}
            />
          </motion.div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: 'var(--color-dark-blue)' }}>
            Interessado em nossas soluções?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Entre em contato com nossa equipe e descubra como podemos ajudar sua empresa
          </p>
          <CTAButton onClick={() => navigate('/contato')}>
            Fale Conosco
          </CTAButton>
        </div>
      </section>

      {/* Related News */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: 'var(--color-dark-blue)' }}>
            Notícias Relacionadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedNews.map((news) => (
              <NewsCard key={news.id} {...news} />
            ))}
          </div>
        </div>
      </section>
        <section
            className="py-24 text-white relative"
            style={{ backgroundColor: 'var(--color-dark-blue)' }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      
                  {/* COLUNA 1 */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-8">
                      <img
                        src={seloParker}
                        alt="Certificação Parker"
                        className="w-28 md:w-36 mx-auto"
                      />
                    </div>
      
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Mangueira Polyflex
                    </h2>
      
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                      Certificado de Montador e Distribuidor
                    </p>
      
                    <p className="text-base md:text-xl font-semibold text-[#FF5101] mb-10">
                      Mamuth Mangueiras e Conexões <br className="hidden md:block" />
                      Vila Maria – São Paulo
                    </p>
      
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                                bg-[#FF5101] hover:bg-[#e54800] transition
                                text-white font-semibold"
                    >
                      CONFIRA
                    </button>
                  </motion.div>
      
      
                  {/* COLUNA 2 (CÓPIA) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="mb-8">
                      <img
                        src={seloFalch}
                        alt="Certificação Parker"
                        className="w-28 md:w-36 mx-auto"
                      />
                    </div>
      
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                      Máquinas de Hidrojato
                    </h2>
      
                    <p className="text-xl md:text-2xl text-gray-300 mb-6">
                      Certificado de Montador e Distribuidor
                    </p>
      
                    <p className="text-base md:text-xl font-semibold text-[#FF5101] mb-10">
                      Mamuth Mangueiras e Conexões <br className="hidden md:block" />
                      Vila Maria – São Paulo
                    </p>
      
                    <button
                      onClick={() => setOpen(true)}
                      className="inline-flex items-center gap-2 px-10 py-4 rounded-full
                                bg-[#FF5101] hover:bg-[#e54800] transition
                                text-white font-semibold"
                    >
                      CONFIRA
                    </button>
                  </motion.div>
      
                </div>
              </div>
              <AnimatePresence>
                {open && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
                    onClick={() => setOpen(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      onClick={(e) => e.stopPropagation()}
                      className="relative bg-white rounded-xl p-4 max-w-4xl w-full mx-4"
                    >
                      {/* Botão fechar */}
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute top-3 right-3 text-gray-700 hover:text-black"
                      >
                        <X size={28} />
                      </button>
      
                      {/* IMAGEM DO CERTIFICADO */}
                      <img
                        src={imagemCertificado}
                        alt="Certificado"
                        className="w-full h-auto rounded-lg"
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
                  </section>
    </>
  );
};

export default NoticiaDetalhe;