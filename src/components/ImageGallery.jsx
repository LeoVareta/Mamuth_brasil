import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Fancybox } from "@fancyapps/ui";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageGallery = ({ images }) => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      compact: false,
      idle: false,
    });
    return () => Fancybox.destroy();
  }, []);

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0} // Imagens coladas
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1536: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <a 
              href={src} 
              data-fancybox="gallery" 
              className="block overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-500 cursor-zoom-in"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;