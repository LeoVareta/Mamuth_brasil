import React from 'react';
import AppleCoverFlow from '@/components/AppleCoverFlow';

const ProductSection = ({ slides, bgImg, contentImg, stretched = false }) => { 
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
            alt="Product content" 
            className="md:w-[45%] sm:w-[85%] h-auto object-contain rounded-[25px] mx-auto"
          />
        ) : null}
      </div>
    </section>
  );
};

export default ProductSection;