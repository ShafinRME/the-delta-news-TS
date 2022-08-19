import LiveNewsData from "../../data/LiveNewsData";


const LiveNews = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-x-6 gap-y-6  hover:cursor-pointer m-2 ">
      {LiveNewsData.map((singleNews) => {
        return (
          <div
            className="flex justify-center items-center card border border-warning -content bg-base shadow-3xl card-title mt-3 pt-4 pb-4 hover:text-primary hover:scale-110 transition delay-600"
            key={singleNews.id}
          >
            <h1>{singleNews.text}</h1>
            <img src={singleNews.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default LiveNews;


