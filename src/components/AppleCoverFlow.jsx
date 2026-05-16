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

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const hasSlides = Array.isArray(slides);

  return (
    <div className="coverflow-container">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
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
            onClick={(e) => {
              if (swiperRef.current) {
                const isActive = e.currentTarget.classList.contains('swiper-slide-active');
                
                if (!isActive) {
                  e.preventDefault();
                  e.stopPropagation();
                  swiperRef.current.slideTo(index);
                }
              }
            }}
          >
            <div className="album-wrapper">
              
              {/* Agora o data-caption passa apenas o título do álbum/produto */}
              <a 
                href={album.cover} 
                data-fancybox="gallery" 
                data-caption={album.title}
                style={{ display: 'block', width: '100%', height: '100%' }}
              >
                <img 
                  src={album.cover} 
                  alt={album.title} 
                  className="album-image" 
                />
              </a>
              
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