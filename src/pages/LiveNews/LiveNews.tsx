import { Link } from "react-router-dom";
import LiveNewsData from "../../data/LiveNewsData";

interface SingleNews {
  id: number;
  image: string;
  text: string;
  link: string;
  path: string;
}

const LiveNews = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-6  hover:cursor-pointer m-2 ">
      {LiveNewsData.map((singleNews) => (
        <Link 
          to={`/livenews/${singleNews.path}`}
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

export default LiveNews;
