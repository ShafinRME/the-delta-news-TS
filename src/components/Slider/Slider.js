import React from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper";
import SliderTitle from './SliderTitle';
const Slider = ({img}) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='mb-11'>
                    <Image
                        src={img}
                        alt="name"
                        width={500}
                        height={300}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <SliderTitle title="News Title" />

                </SwiperSlide>
               
               
                
                
            </Swiper>
        </>
    );
};

export default Slider;
