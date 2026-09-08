import React from 'react';
import AppleCoverFlow from '@/components/AppleCoverFlow';

const ProductSection = ({ slides, bgImg, stretched = false }) => { 
  return (
    <section 
      /* Adicionamos min-h-[500px] e flex para alinhar o conteúdo */
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
      <div className="max-w-[1400px] mx-auto w-full">
        {slides && <AppleCoverFlow slides={slides} />}
      </div>
    </section>
  );
};

export default ProductSection;