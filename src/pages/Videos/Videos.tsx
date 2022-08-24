import { Link } from "react-router-dom";
import VideosData from "../../data/VideosData";

const Videos = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-6  hover:cursor-pointer m-2 ">
      {VideosData.map((singleNews) => (
        <Link
          to={`/videos/${singleNews.path}`}
          className="flex justify-center items-center card border border-warning -content bg-base shadow-3xl card-title mt-3 pt-4 pb-4 hover:text-primary hover:scale-105 transition delay-600"
          key={singleNews.id}
        >
          <h1>{singleNews.text}</h1>
          <img src={singleNews.image} alt="" />
        </Link>
      ))}
      
    </div>
  );
};

export default Videos;
