import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductGallery.css"

import "@fancyapps/ui/dist/fancybox/fancybox.css";

import { Fancybox } from "@fancyapps/ui";

import { useEffect } from "react";

export default function ProductGallery({ images }) {

  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {});
    
    return () => {
      Fancybox.destroy();
    };
  }, []);

  return (
    <div className="product-gallery">
      <h2 
        className="text-5xl md:text-6xl font-bold mb-10 text-center "
        style={{ color: 'var(--color-dark-blue)' }}
      >
      Aplicações
      </h2>   
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={2.2}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 6,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>

            <a
              href={img}
              data-fancybox="gallery"
            >
              <img
                src={img}
                alt={`Produto ${index}`}
                className="gallery-image"
              />
            </a>

          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}