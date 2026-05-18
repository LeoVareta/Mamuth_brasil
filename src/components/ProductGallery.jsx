import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./ProductGallery.css";

import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { Fancybox } from "@fancyapps/ui";
import { useEffect } from "react";

// Adicionamos a prop 'galleryId' para diferenciar as galerias
export default function ProductGallery({ images, title = "Aplicações", galleryId = "default-gallery" }) {

  useEffect(() => {
    // Vincula o Fancybox especificamente para o ID desta galeria
    Fancybox.bind(`[data-fancybox="${galleryId}"]`, {});
    
    return () => {
      // É mais seguro fechar e limpar as instâncias ligadas a esse ID
      Fancybox.close();
    };
  }, [galleryId]); // Executa novamente se o galleryId mudar

  return (
    <div className="product-gallery">
      <h2 
        className="text-5xl md:text-6xl font-bold mb-10 text-center"
        style={{ color: 'var(--color-dark-blue)' }}
      >
        {title} {/* Deixamos o título dinâmico também para reaproveitar o componente se quiser */}
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
            {/* O data-fancybox agora usa o ID único */}
            <a
              href={img}
              data-fancybox={galleryId}
            >
              <img
                src={img}
                alt={`${title} ${index}`}
                className="gallery-image"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}