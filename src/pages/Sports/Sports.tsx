import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
type NewsProps = {
  title: string;
  id: string;
  description: string;
  image: string;
  slug: string;
};
const Sports = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news/Sports")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          <div className="xl:col-span-6">
            {news.slice(0, 1).map((item) => (
              <div key={item.id}>
                <Link to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} className="w-full " />
                </Link>
              </div>
            ))}
          </div>
          <div className="xl:col-span-3">
            {news.slice(1, 2).map((item) => (
              <div key={item.id}>
                <Link to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} className="w-full " />
                  <h1 className="news-sub-title-three-col pt-2">{item.title}</h1>
                  <p className="news-sub-title-three-col pt-2">{item.title}</p>

                </Link>
              </div>
            ))}
          </div>
          <div className="xl:col-span-3">ghg</div>
        </div>
      </section>
    </>
  );
};

export default Sports;
