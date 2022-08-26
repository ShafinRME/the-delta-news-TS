import { Link } from "react-router-dom";
import VideosData from "../../data/VideosData";

const Videos = () => {
  return (
    <div className="grid lg:grid-cols-9 md:grid-cols-1 gap-x-6 gap-y-6  hover:cursor-pointer m-2">
      <div className="lg:col-span-6">
        {VideosData.map((singleNews) => (
          <Link
            to={`/videos/${singleNews.path}`}
            className="flex justify-center items-center border-warning -content bg-base shadow-3xl card-title mt-3 mb-8 p-3"
            key={singleNews.id}
          >
            <div className="flex justify-center hover:text-primary">
              <h1 className="p-4">{singleNews.text}</h1>
              <div className="p-4 hover:scale-105 transition delay-600 shadow-xl">
                <img src={singleNews.image} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:col-span-3  lg:border-l-2 pl-3 ">
        {VideosData.map((singleNews) => (
          <Link
            to={`/videos/${singleNews.path}`}
            className="flex justify-center items-center border-warning -content bg-base shadow-3xl card-title mt-3 mb-6 pt-4 pb-6"
            key={singleNews.id}
          >
            <div className="flex justify-center hover:text-primary ">
              <h1 className="p-4">{singleNews.text}</h1>
              <div className="p-4 hover:scale-105 transition delay-600 shadow-xl">
                <img src={singleNews.image} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Videos;
