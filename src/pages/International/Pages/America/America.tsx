import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NewsProps } from "../../../../utility/Typs";
// import { url } from "../../../../utility/Urls";

const America = () => {
  const [americaNews, setAmericaNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/america`)
      .then((res) => res.json())
      .then((data) => setAmericaNews(data));
  }, []);
  return (
    <>
      {/* nested navbar section*/}
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/international">
            <span className="border-b">International</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/international/america">America</Link>
        </h2>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/america">&bull;&nbsp;America</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/asia">&bull;&nbsp;Asia</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/europe">&bull;&nbsp;Europe</Link>
          </li>
        </ul>
      </div>
      {/* start content section design */}
      <section>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="xl:col-span-8  border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="grid grid-cols-2">
                {americaNews.slice(0, 4).map((news) => (
                  <div className="border m-2 p-2" key={news._id}>
                    <div className="relative">
                      <h1 className="news-sub-title-three-col">{news.title}</h1>
                      <h2 className="text-lg pb-2 font-description font-semibold">
                        {news.reference}
                      </h2>
                      <p className="text-neutral text-sm">
                        Publish:{news.date}
                      </p>
                    </div>
                    <div className="absolute hidden">
                      <img className="w-full" src={news.image} alt="" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="">
                {americaNews.slice(4, 5).map((news) => (
                  <div className="p-2" key={news._id}>
                    <h1 className="news-sub-title-three-col">{news.title}</h1>
                    <img className="w-full" src={news.image} alt="" />
                    <h1 className="" title={news.description}>
                      {news.description.slice(0, 400)}...
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="xl:col-span-4 border">two</div>
        </div>
      </section>
    </>
  );
};

export default America;
