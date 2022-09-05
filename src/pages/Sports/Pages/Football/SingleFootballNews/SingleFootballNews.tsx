import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import small2 from "../../../../../Assets/images/videoAdv/video2.jpg";
import Loading from "../../../../../components/Loading/Loading";
import { NewsProps } from "../../../../../utility/Typs";
interface SingleNewsProps {
  title: string;
  image: string;
  description: string;
}
const SingleFootballNews = () => {
  const { slug } = useParams();
  const [footballNews, setFootballNews] = useState<NewsProps[]>([]); // this state for all football news
  const [singleFootballNews, setSingleFootballNews] = useState<
    SingleNewsProps | undefined
  >(undefined); //this state for singleFootballNews

  //this is for singleFootballNews
  useEffect(() => {
    // fetch(`${url}/football`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/football/${slug}`)
      .then((res) => res.json())
      .then((data) => setSingleFootballNews(data));
  }, [slug]);

  //this is for all football
  useEffect(() => {
    // fetch(`${url}/football`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/football`)
      .then((res) => res.json())
      .then((data) => setFootballNews(data));
  }, []);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/sports/football">
          <span className="border-b">Football</span>
        </Link>
      </h1>

      {footballNews.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <section>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="xl:col-span-8">
                {/* left side */}
                <div className="p-2 border">
                  <h1 className="news-sub-title-three-col m-2">
                    {singleFootballNews?.title}
                  </h1>
                  <img
                    className="w-full"
                    src={singleFootballNews?.image}
                    alt=""
                  />
                  <p className="">{singleFootballNews?.description}</p>
                </div>
              </div>
              {/* right side */}
              <div className="xl:col-span-4">
                {/* advertisement */}
                <a
                  href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className=" md:h-20  w-full"
                    src={small2}
                    alt="single big"
                  />
                </a>
                {/* football data */}
                <p className="underline font-bold">More</p>
                {footballNews.slice(12, 16).map((news) => (
                  <>
                    <Link to={`/sports/football/${news.slug}`}>
                      <div
                        className="border m-2 grid grid-cols-2"
                        key={news.slug}
                      >
                        <div className="p-2">
                          <h1 className="news-sub-title-three-col">
                            {news.title}
                          </h1>
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
          </section>
        </>
      )}
    </>
  );
};

export default SingleFootballNews;
