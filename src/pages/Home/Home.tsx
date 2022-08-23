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
      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-9 gap-4 pt-3 xl:border-b xl:border-b-warning-content  pb-4">
        {/* first row  layout left */}
        <div className="xl:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-4 xl:border-b xl:border-b-warning-content pb-[.3rem]">
            {/* title and details news live news */}
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
                      {`${item.description.slice(0, 90)}..`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* title and details image live news*/}
            <div className="xl:col-span-6">
              {news.slice(16, 17).map((item) => (
                <div key={item.id} className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:h-[26.5rem]"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* middle three card title and details */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-4 gap-4 xl:gap-0 border-b border-b-warning-content pb-4">
            {news?.slice(9, 12).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:border-r-warning-content xl:last:border-none xl:pr-4 xl:last:pr-0 xl:pl-4 xl:first:pl-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <h1 className="news-sub-title-three-col">{item.title}</h1>
                  <p className="news-details pt-4">
                    {`${item.description.slice(0, 90)}...`}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {/* last six card title and details and picture */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-4 gap-4 xl:gap-0 ">
            {news?.slice(12, 15).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:border-r-warning-content xl:last:border-none xl:pr-4 xl:last:pr-0 xl:pl-4 xl:first:pl-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <h1 className="news-sub-title-three-col">{item.title}</h1>
                  <p className="news-details pt-4">
                    {`${item.description.slice(0, 90)}...`}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* first row  layout right*/}
        <div className="xl:col-span-3 xl:border-l xl:border-l-warning-content xl:pl-4 ">
          {/* advertisement start */}
          {news.slice(0, 1).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4 pb-4 xl:border-b-warning-content xl:border-b "
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
                    {`${item.description.slice(0, 160)}...`}
                  </p>
                </Link>
              </div>
            </div>
          ))}
          {/* advertisement end */}
          {/* first row  layout right last two parts*/}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 xl:gap-0  ">
            {news.slice(18, 20).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" xl:h-24"
                  />
                  <h2 className="feature-news-title ">{item.title}</h2>
                </Link>
              </div>
            ))}
            {/* {news.slice(14, 15).map((item) => (
              <div
                key={item.id}
                className="xl:border-l xl:border-l-warning-content xl:pl-4"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:w-[95%] xl:h-24"
                  />
                  <h2 className="feature-news-title ">{item.title}</h2>
                </Link>
              </div>
            ))} */}
          </div>
        </div>
      </section>
      {/* first row layout end */}
    </>
  );
};

export default Home;
