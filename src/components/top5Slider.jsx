import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import productData from '../data/movieData.js'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

// import './styles.css';

// import required modules
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import FCard from './FCard';

export default function Top5Slider() {
  console.log('no of movies >>>', productData.length)
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

        {productData.map((movie, index) => (
          <SwiperSlide>
            <FCard user={movie.uploader} title={movie.title} price={movie.price} shares={movie.shares} image={movie.imageUrl} url={movie.url} />
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
            <FCard  />
        </SwiperSlide>

        <SwiperSlide>
            <FCard />
        </SwiperSlide>

        <SwiperSlide>
            <FCard />
        </SwiperSlide>

        <SwiperSlide>
            <FCard />
        </SwiperSlide>

        <SwiperSlide>
            <FCard />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
