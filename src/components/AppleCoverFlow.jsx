import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CoverFlowStyles.css';

const AppleCoverFlow = ({ slides }) => {
  const swiperRef = useRef(null);

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
          slideShadows: false, // Remove as sombras automáticas do Swiper
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
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          >
            <div className="album-wrapper">
              <img src={album.cover} alt={album.title} className="album-image" />
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