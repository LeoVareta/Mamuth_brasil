import React from 'react';
import AppleCoverFlow from '@/components/AppleCoverFlow';

const ProductSection = ({ slides, bgImg }) => { 
  return (
    <section 
      className="relative pt-10 pb-20 px-4 w-full" 
      style={{ 
        backgroundImage: `url(${bgImg})`, 
        zIndex: 1,
        backgroundPosition: 'center', // Centraliza horizontal e verticalmente
        backgroundSize: 'cover',      // Faz a imagem cobrir todo o espaço
        backgroundRepeat: 'no-repeat' // Impede que a imagem se repita
      }}
    >
      <div className="max-w-[1400px] mx-auto">
        {slides && <AppleCoverFlow slides={slides} />}
      </div>
    </section>
  );
};

export default ProductSection;