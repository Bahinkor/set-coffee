"use client";
import React from "react";
import Image from "next/image";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation, Autoplay} from "swiper/modules";

function Banner() {
    return (
        <Swiper
            rewind={true}
            navigation={true}
            loop={true}
            autoplay={{delay: 1500}}
            modules={[Navigation, Autoplay]}
            className="mySwiper home-slider"
        >
            <SwiperSlide>
                <Image
                    src="/images/slider-image.jpg"
                    alt="Coffee Image"
                    width="1500"
                    height="700"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/slider-image2.jpg"
                    alt="Coffee Image"
                    width="1500"
                    height="700"
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    src="/images/slider-image3.jpg"
                    alt="Coffee Image"
                    width="1500"
                    height="700"
                />
            </SwiperSlide>
        </Swiper>
    );
}

export default Banner;
