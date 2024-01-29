"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Carousel = (props) => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={Autoplay}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="rounded-2xl object-fill w-full h-96" src="https://cdn.pixabay.com/photo/2022/03/20/15/40/nature-7081138__340.jpg" alt="image slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="object-fill w-full h-96" src={props.images} alt="image slide 2" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
