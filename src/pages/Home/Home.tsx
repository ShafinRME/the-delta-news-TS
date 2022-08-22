import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type NewsProps = {
  title: string;
  id: string;
  _id: string;
  description: string;
  image: string;
  slug: string;
};

const Home = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  console.log(news);
  return (
    <>
      {/* first row  layout start */}
      <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-9 gap-4 pt-3 border-b  border-b-error-content-1 pb-1">
        {/* first row  layout left */}
        <div className="xl:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-4">
            {/* title and details news */}
            <div className="xl:col-span-3">
              <span>live.</span>
              {news.slice(13, 16).map((item) => (
                <Link key={item.id} to={`singleNews/${item.slug}`}>
                  <div className=" pb-4 ">
                    <h1 className=" news-live-title">{`${item.title.slice(
                      0,
                      120
                    )} `}</h1>
                    <p className="pt-2 news-live-details ">
                      {item.description.slice(0, 100)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* title and details image*/}
            <div className="xl:col-span-6">
              {news.slice(16, 17).map((item) => (
                <div key={item.id} className="">
                  <img src={item.image} alt={item.title} className="h-[26.5rem]" />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* first row  layout right*/}
        <div className="xl:col-span-3  ">
          {news.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4 xl:border-l xl:border-l-warning-content xl:pl-4 "
            >
              <div className="">
                <Link key={item.id} to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} />
                </Link>
              </div>
              <div>
                <Link to={`singleNews/${item.slug}`}>
                  <h1 className=" news-sub-title  ">{item.title}</h1>
                  <p className=" news-details">
                    {item.description.slice(0, 190)}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* first row layout end */}
    </>
  );
};

export default Home;
