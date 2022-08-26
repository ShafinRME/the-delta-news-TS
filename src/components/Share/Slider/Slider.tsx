// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = ({ image }: { image: string }) => {
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
        modules={[Autoplay, EffectFade, Pagination]}
        className="bg-white"
      >
        <SwiperSlide className="m-10  ">
          <img
            className="w-full h-[300px] md:h-[400px] lg:h-[600px] bg-white"
            src={image}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
