import React, { useEffect } from 'react';
import AppleCoverFlow from '@/components/AppleCoverFlow';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

const ProductSection = ({ 
  slides, 
  bgImg, 
  contentImg, 
  caption = "Product content", // Prop nova para o nome/legenda (com valor padrão)
  altText = "Product content",  // Prop opcional para o atributo alt da tag img
  stretched = false 
}) => { 
  // Limpa instâncias do Fancybox ao desmontar o componente
  useEffect(() => {
    return () => {
      Fancybox.destroy();
    };
  }, []);

  // Função para abrir a imagem individual no Fancybox
  const handleImageClick = () => {
    if (!contentImg) return;

    Fancybox.show([
      {
        src: contentImg,
        type: "image",
        caption: caption, // Usa a legenda personalizada aqui
      },
    ]);
  };

  return (
    <section 
      className={`relative pt-10 pb-20 px-4 w-full flex items-center ${
        stretched ? 'min-h-[500px]' : ''
      }`} 
      style={{ 
        backgroundImage: `url(${bgImg})`, 
        zIndex: 1,
        backgroundPosition: 'center',
        backgroundSize: stretched ? '100% 100%' : 'cover', 
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-center items-center">
        {/* Prioriza o AppleCoverFlow se houver slides; caso contrário, exibe a imagem */}
        {slides && slides.length > 0 ? (
          <AppleCoverFlow slides={slides} />
        ) : contentImg ? (
          <img 
            src={contentImg} 
            alt={altText} 
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
            className="md:w-[45%] sm:w-[85%] h-auto object-contain rounded-[25px] mx-auto transition-transform hover:scale-[1.02]"
          />
        ) : null}
      </div>
    </section>
  );
};

export default ProductSection;