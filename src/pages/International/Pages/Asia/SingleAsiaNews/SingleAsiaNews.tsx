import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { NewsProps } from "../../../../../utility/Typs";

const SingleAsiaNews = () => {
  const { slug } = useParams();
  const [singleAmericaNews, setSingleAmericaNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/america/${slug}`)
      .then((res) => res.json())
      .then((data) => setSingleAmericaNews(data));
  }, [slug]);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/international/asia">
          <span className="border-b">Asia</span>
        </Link>
      </h1>
      <h1>SingleAsiaNews :{slug}</h1>
    </>
  );
};

export default SingleAsiaNews;
