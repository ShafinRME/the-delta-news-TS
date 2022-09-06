import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import small2 from "../../../../../Assets/images/videoAdv/video2.jpg";
import Loading from "../../../../../components/Loading/Loading";
import { NewsProps } from "../../../../../utility/Types";
interface SingleNewsProps {
  title: string;
  image: string;
  description: string;
}
const SingleTelevisionNews = () => {
  const { slug } = useParams();
  const [televisionNews, setTelevisionNews] = useState<NewsProps[]>([]); // this state for all television news
  const [singleTelevisionNews, setSingTelevisionNews] = useState<
    SingleNewsProps | undefined
  >(undefined); //this state for singleTelevisionNews

  //this is for singleTelevisionNews
  useEffect(() => {
    // fetch(`${url}/television`)
    fetch(
      `https://the-delta-times-server.vercel.app/api/news/television/${slug}`
    )
      .then((res) => res.json())
      .then((data) => setSingTelevisionNews(data));
  }, [slug]);

  //this is for all television
  useEffect(() => {
    // fetch(`${url}/television`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/television`)
      .then((res) => res.json())
      .then((data) => setTelevisionNews(data));
  }, []);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/entertainment/television">
          <span className="border-b">Television</span>
        </Link>
      </h1>

      {televisionNews.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <section>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="xl:col-span-8">
                {/* left side */}
                <div className="p-2 border">
                  <h1 className="news-sub-title-three-col m-2">
                    {singleTelevisionNews?.title}
                  </h1>
                  <img
                    className="w-full"
                    src={singleTelevisionNews?.image}
                    alt=""
                  />
                  <p className="">{singleTelevisionNews?.description}</p>
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
                {/* television data */}
                <p className="underline font-bold">More</p>
                {televisionNews.slice(11, 16).map((news) => (
                  <>
                    <Link to={`/entertainment/television/${news.slug}`}>
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

export default SingleTelevisionNews;
