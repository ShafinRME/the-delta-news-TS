import React, { useEffect, useState } from "react";

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
  console.log(news);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {news.map((n) => {
          const { id, title, description, image } = n;
          return (
            <div key={id}>
              <h1 className="text-sm pb-4">{title.slice(0, 60)}</h1>
              <img src={image} alt={title} className='w-[100%] h-[60%]' />
              <p className="py-4">{description.slice(0, 150)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
