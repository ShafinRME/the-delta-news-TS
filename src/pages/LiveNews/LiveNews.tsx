import LiveNewsData from "../../data/LiveNewsData";
import SingleLiveNews from "./SingleLiveNews";

const LiveNews = () => {
  return (
    <div>
      {LiveNewsData.map((singleNews) => {
        return (
          <SingleLiveNews key={singleNews.id} singleNews={singleNews}></SingleLiveNews>
        );
      })}
    </div>
  );
};

export default LiveNews;
