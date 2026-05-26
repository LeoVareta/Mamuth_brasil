import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";

import './CoverFlowStyles.css';

const AppleCoverFlow = ({ slides }) => {
  const swiperRef = useRef(null);
  const hasSlides = Array.isArray(slides);

  useEffect(() => {
    return () => {
      Fancybox.destroy();
    };
  }, []);

  // 1. Mudamos a função para receber a instância do Swiper em vez do evento do React
  const handleSwiperClick = (swiper) => {
    const clickedIndex = swiper.clickedIndex;

    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
    if (!hasSlides || !slides[clickedIndex]) return;

    // Criamos a galeria tratando o campo artist caso ele seja undefined/null
    const galleryItems = slides.map(slide => ({
      src: slide.cover,
      type: "image",
      // SEGUNDO CORRIGIDO: Se houver artista, mostra "Titulo - Artista", senão mostra apenas o "Titulo"
      caption: slide.artist ? `${slide.title} - ${slide.artist}` : slide.title
    }));

    Fancybox.show(galleryItems, {
      startIndex: clickedIndex,
    });
  };

  return (
    <div className="coverflow-container">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        // 2. O SEGREDO ESTÁ AQUI: Passamos a função para o onClick nativo do Swiper
        onClick={handleSwiperClick}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        initialSlide={hasSlides ? Math.floor(slides.length / 2) : 0}
        coverflowEffect={{
          rotate: 35,    
          stretch: -20,  
          depth: 120,    
          modifier: 1,
          slideShadows: false, 
        }}
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {hasSlides && slides.map((album, index) => (
          <SwiperSlide 
            key={album.id || index} 
            className="swiper-slide-custom"
            // 3. Removemos o onClick do React daqui, o Swiper já está cuidando disso!
          >
            <div className="album-wrapper">
              <div 
                className="album-link"
                // Adicionado cursor pointer para manter o feedback visual do mouse
                style={{ display: 'block', width: '100%', height: '100%', cursor: 'pointer' }}
              >
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="album-image" 
                />
              </div>
              
              <div className="album-info">
                <h3>{album.title}</h3>
                <p>{album.artist}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppleCoverFlow;