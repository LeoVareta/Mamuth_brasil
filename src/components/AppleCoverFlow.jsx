import React, { useRef } from 'react'; // 1. Importe o useRef
import Swiper from "swiper";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './CoverFlowStyles.css';

const AppleCoverFlow = ({ slides }) => {
  // 2. Crie a referência para controlar o Swiper
  const swiperRef = useRef(null);

  return (
    <div className="coverflow-container">
      <Swiper
        // 3. Atribua a instância do Swiper à nossa referência
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'} 
        initialSlide={Math.floor(slides.length / 2)}
        coverflowEffect={{
          rotate: 35,    
          stretch: -20,  
          depth: 120,    
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {slides.map((album, index) => ( // 4. Use o 'index' do map
          <SwiperSlide 
            key={album.id} 
            className="swiper-slide-custom"
            // 5. Adicione o evento de clique manual
            onClick={() => {
              if (swiperRef.current) {
                swiperRef.current.slideTo(index);
              }
            }}
          >
            <div className="album-wrapper">
              <img src={album.cover} alt={album.title} className="album-image" />
              <div className="reflection" />
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