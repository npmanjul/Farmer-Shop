import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './homecarousal.css';

// import required modules
import { Autoplay,EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay,EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9384b37a848c5e60.jpg?q=20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bdd9bb733f1c0b71.jpg?q=20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f6cb8b7cbeafbd38.jpg?q=20" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/9e9aa250dfecdbc3.jpg?q=20" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
