import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import "../../styles/mySwiper.css"
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Keyboard, Mousewheel, Navigation } from "swiper";
import SmallLoading from "../../components/Loading/SmallLoading";
import { NewsProps } from "../../utility/Typs";

type Inputs = {
  example: string;
  exampleRequired: string;
  yesVote: string;
  noVote: string;
};

const Voting = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://the-delta-times-server.vercel.app/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  const { handleSubmit } = useForm<Inputs>({ mode: "onChange" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      {news.length <= 0 ? (
        <SmallLoading />
      ) : (
        <>
          <Swiper
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="bg-base-100 mySwiper"
            
          >
            {news.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id} className="mb-11 bg-base-100 z-10">
                <img src={item.image} alt={item.title} className="w-full md:h-56" />
                <h1 className="news-details md:px-4 pt-4">
                  {item.description.slice(0, 200)}
                </h1>
                <div className="px-4 md:px-4 pt-10">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-[8rem] mx-auto"
                  >
                    <div className="form-control   ">
                      <label className="label cursor-pointer">
                        <span className="news-live-details-4">Yes</span>
                        <input
                          type="radio"
                          name="radio-6"
                          className="radio checked:bg-blue-500"
                          checked
                        />
                      </label>
                    </div>
                    <div className="form-control  ">
                      <label className="label cursor-pointer">
                        <span className="news-live-details-4">No</span>
                        <input
                          type="radio"
                          name="radio-6"
                          className="radio checked:bg-red-500"
                          checked
                        />
                      </label>
                    </div>
                    <input
                      type="submit"
                      value="Vote"
                      className="px-4 py-0.5 bg-primary-content text-white mx-auto mt-4"
                    />
                  </form>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};

export default Voting;
