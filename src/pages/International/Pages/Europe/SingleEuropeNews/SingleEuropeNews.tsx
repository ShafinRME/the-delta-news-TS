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
const SingleEuropeNews = () => {
  const { slug } = useParams();
  const [europeNews, setEuropeNews] = useState<NewsProps[]>([]); // this state for all america news
  const [singleEuropeNews, setSingleEuropeNews] = useState<
    SingleNewsProps | undefined
  >(undefined); //this state for singleAsiaNews

  //this is for singleAsiaNews
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/europe/${slug}`)
      .then((res) => res.json())
      .then((data) => setSingleEuropeNews(data));
  }, [slug]);

  //this is for all america
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/europe`)
      .then((res) => res.json())
      .then((data) => setEuropeNews(data));
  }, []);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/international/europe">
          <span className="border-b">Europe</span>
        </Link>
      </h1>
      {europeNews.length <= 0 ? (
        <Loading />
      ) : (
        <section>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
            <div className="xl:col-span-8">
              {/* left side */}
              <div className="p-2 border">
                <h1 className="news-sub-title-three-col m-2">
                  {singleEuropeNews?.title}
                </h1>
                <img className="w-full" src={singleEuropeNews?.image} alt="" />
                <p className="">{singleEuropeNews?.description}</p>
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
              {/* asia data */}
              <p className="underline font-bold">More</p>
              {europeNews.slice(12, 16).map((news) => (
                <>
                  <Link to={`/international/asia/${news.slug}`}>
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
      )}
    </>
  );
};

export default SingleEuropeNews;
