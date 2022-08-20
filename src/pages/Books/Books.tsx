import React, { useEffect, useState } from 'react';
type NewsProps = {
    title: string;
    id: string;
    description: string;
    image: string;
  };
const Books = () => {
    const [news, setNews] = useState<NewsProps[]>([]);
    useEffect(() => {
      fetch("https://team-delta001.herokuapp.com/api/news/international")
        .then((res) => res.json())
        .then((data) => setNews(data));
    }, []);
    return (
        <div>
        {news.map((n) => {
          const { id, title, description, image } = n;
          return (
            <div className="mt-4" key={id}>
              <div className="m-3 mb-6">
                <h1 className="font-bold text-lg">{title}</h1>
                <p>{description}</p>
                <img src={image} alt="" />
              </div>
              <hr />
            </div>
          );
        })}
  
        {/* {
            news.map(n=><HomePageNews key={n.id} ></HomePageNews>)
          } */}
      </div>
    );
};

export default Books;