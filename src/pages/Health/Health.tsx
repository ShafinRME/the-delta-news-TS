import { useEffect, useState } from 'react';
type NewsProps = {
    title: string;
    id: string;
    description: string;
    image: string;
  };
const Health = () => {
    const [news, setNews] = useState<NewsProps[]>([]);
    useEffect(() => {
      fetch("https://the-delta-times-server.vercel.app/api/news/health")
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

export default Health;