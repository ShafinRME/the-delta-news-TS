import React, { useEffect, useState } from "react";
import HomePageNews from "./HomePageNews";

type NewsProps = {
  title: string;
  id: string;
  description: string;
  image: string;
};

const Home = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);
  return (
    <>
      <div>
        {news.map((n) => {
          const { id, title, description, image } = n;
          return (
            <div key={id}>
              <h1>{title}</h1>
              <p>{description}</p>
              <img src={image} alt="" />
            </div>
          );
        })}

        {/* {
          news.map(n=><HomePageNews key={n.id} ></HomePageNews>)
        } */}
      </div>
    </>
  );
};

export default Home;
