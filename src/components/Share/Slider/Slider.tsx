// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";
// Import Swiper styles
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
interface PhotosProps {
  image: string;
}
const Slider = () => {
  const [photos, setPhotos] = useState<PhotosProps[]>([]);

  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((result) => {
        setPhotos(result);
      });
  }, []);
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
        className="mySwiper"
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index} className="m-10  ">
            <img
              className="w-full h-[300px] md:h-[400px] lg:h-[600px]"
              src={photo.image}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
