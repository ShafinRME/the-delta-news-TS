import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import {
  Navigation,
  Mousewheel,
  Keyboard,
} from "swiper";
import { useEffect, useState } from "react";
import { NewsProps } from "../../utility/Typs";
import SmallLoading from "../../components/Loading/SmallLoading";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
  yesVote: string;
  noVote: string;
};

const Voting = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({mode:"onChange"});
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
            className="bg-base-100"
          >
            {news.slice(0, 4).map((item) => (
              <SwiperSlide key={item.id} className="mb-11 bg-base-100 z-10">
                <img src={item.image} alt={item.title} className="w-full" />
                <h1 className="news-details md:px-4">
                  {item.description.slice(0, 200)}
                </h1>
                <div className="px-4 md:px-8 pt-10">
                  {/* <form>
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-full"
                    />
                    <br />
                    <input
                      type="checkbox"
                      className="checkbox checkbox-sm rounded-full"
                    />
                    <br />
                    <input type="submit" value="Vote" />
                  </form> */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input type="checkbox" value='Yes' {...register("yesVote")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <input type="checkbox" value='no' {...register("noVote")} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <input type="submit" />
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
