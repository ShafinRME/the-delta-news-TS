import { Link } from "react-router-dom";
import LiveNewsData from "../../data/LiveNewsData";
import SingleLiveNews from "../LiveNews/SingleLiveNews";
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
      
      {LiveNewsData.map((singleNews: SingleNews) => (
        <SingleLiveNews
          key={singleNews.id}
          singleNews={singleNews}
        ></SingleLiveNews>
      ))}
    </div>
  );
};

export default LiveNews;
