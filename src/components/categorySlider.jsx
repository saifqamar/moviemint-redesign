import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import './styles.css';

// import required modules
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import FCard from './FCard';
import CategoryCard from './categoryCard';

export default function CategorySlider() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        slidesPerView={'auto'}
        spaceBetween={20}
        breakpoints={
         {
          320:{
            slidesPerView:'auto',
            spaceBetween:10
          },
          640: {
            slidesPerView: 'auto',
            spaceBetween:15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          }

         }
        }
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        
        className="mySwiper"
      > 
        <SwiperSlide>
            <CategoryCard />
        </SwiperSlide>

        <SwiperSlide>
            <CategoryCard />
        </SwiperSlide>

        <SwiperSlide>
            <CategoryCard />
        </SwiperSlide>

        <SwiperSlide>
            <CategoryCard />
        </SwiperSlide>

        <SwiperSlide>
            <CategoryCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
