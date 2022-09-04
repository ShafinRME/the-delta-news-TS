import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import singleBigAdd2 from "../../../../../Assets/images/singleAdd/singleBigAdd2.gif";
import { NewsProps } from "../../../../../utility/Typs";

const SingleMoviesNews = () => {
  const { slug } = useParams();
  const [moviesNews, setMoviesNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/music`)
      .then((res) => res.json())
      .then((data) => setMoviesNews(data));
  }, []);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/entertainment/movies">
          <span className="border-b">Movies</span>
        </Link>
      </h1>
      {/* start left content */}
      <section className="mt-5">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
          <div className="xl:col-span-8  border">
            {/* first part */}
            {moviesNews.slice(13, 14).map((news) => (
              <>
                <Link to={`/entertainment/movies/${news.slug}`}>
                  <div className="p-2" key={news.slug}>
                    <img className="w-full" src={news.image} alt="" />
                    <h1 className="news-sub-title-three-col m-2">
                      {news.title}
                    </h1>
                    <p className="" title={news.description}>
                      {news.description}
                    </p>
                  </div>
                </Link>
              </>
            ))}
          </div>
          <div className="xl:col-span-4">
            <p className="underline font-bold">More</p>
            {moviesNews.slice(13, 16).map((news) => (
              <>
                <Link to={`/entertainment/movies/${news.slug}`}>
                  <div className="border m-2 grid grid-cols-2" key={news.slug}>
                    <div className="p-2">
                      <h1 className="news-sub-title-three-col">{news.title}</h1>
                      <h2 className="text-lg pb-2 font-description font-semibold">
                        {news.reference}
                      </h2>
                      <p className="text-neutral text-sm">
                        Publish:{news.date}
                      </p>
                    </div>
                    <img className="w-full" src={news.image} alt="" />
                  </div>
                </Link>
              </>
            ))}
          </div>
        </div>

        <hr className="m-5" />
        {/* advertisement */}
        <a
          href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className=" md:h-20  w-full h-[400px] mx-auto "
            src={singleBigAdd2}
            alt="single big"
          />
        </a>
      </section>
      {/* end left content */}
    </>
  );
};

export default SingleMoviesNews;
