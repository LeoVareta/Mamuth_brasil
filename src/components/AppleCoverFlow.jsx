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
  const downPos = useRef({ x: 0, y: 0 });
  const hasSlides = Array.isArray(slides);

  useEffect(() => {
    return () => {
      Fancybox.destroy();
    };
  }, []);

  const openGallery = (index) => {
    if (!hasSlides || !slides[index]) return;

    const galleryItems = slides.map((slide) => ({
      src: slide.cover,
      type: "image",
      caption: slide.artist ? `${slide.title} - ${slide.artist}` : slide.title,
    }));

    Fancybox.show(galleryItems, { startIndex: index });
  };

  const handlePointerDown = (e) => {
    downPos.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = (e) => {
    // Ignora cliques nas setas e na paginação
    if (e.target.closest?.('.swiper-button-next, .swiper-button-prev, .swiper-pagination')) return;

    // Se o mouse se moveu, foi arraste e não clique
    const dx = Math.abs(e.clientX - downPos.current.x);
    const dy = Math.abs(e.clientY - downPos.current.y);
    if (dx > 5 || dy > 5) return;

    const swiper = swiperRef.current;
    if (!swiper || !swiper.slides) return;

    // Descobre quais slides contêm o ponto clicado
    const hits = [];
    swiper.slides.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      if (
        e.clientX >= r.left && e.clientX <= r.right &&
        e.clientY >= r.top && e.clientY <= r.bottom
      ) {
        hits.push(i);
      }
    });

    if (hits.length === 0) return;

    // Em caso de sobreposição, vence o mais próximo do slide central
    hits.sort(
      (a, b) => Math.abs(a - swiper.activeIndex) - Math.abs(b - swiper.activeIndex)
    );

    openGallery(hits[0]);
  };

  return (
    <div
      className="coverflow-container"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        effect="coverflow"
        centeredSlides={true}
        slidesPerView="auto"
        grabCursor={true}
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
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Navigation, Pagination]}
        className="mySwiper"
      >
        {hasSlides && slides.map((album, index) => (
          <SwiperSlide key={album.id || index} className="swiper-slide-custom">
            <div className="album-wrapper">
              <div className="album-link" style={{ display: 'block', width: '100%', height: '100%' }}>
                <img
                  src={album.cover}
                  alt={album.title}
                  className="album-image"
                  draggable={false}
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