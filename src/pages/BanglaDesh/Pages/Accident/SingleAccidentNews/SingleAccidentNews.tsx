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
const SingleAccidentNews = () => {
  const { slug } = useParams();
  const [accidentNews, setAccidentNews] = useState<NewsProps[]>([]); // this state for all accident news
  const [singleAccidentNews, setSingleAccidentNews] = useState<
    SingleNewsProps | undefined
  >(undefined); //this state for singleAccidentNews

  //this is for singleAccidentNews
  useEffect(() => {
    // fetch(`${url}/accident`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/accident/${slug}`)
      .then((res) => res.json())
      .then((data) => setSingleAccidentNews(data));
  }, [slug]);

  //this is for all accident
  useEffect(() => {
    // fetch(`${url}/accident`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/accident`)
      .then((res) => res.json())
      .then((data) => setAccidentNews(data));
  }, []);
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/bangladesh/accident">
          <span className="border-b">Accident</span>
        </Link>
      </h1>

      {accidentNews.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <section>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
              <div className="xl:col-span-8">
                {/* left side */}
                <div className="p-2 border">
                  <h1 className="news-sub-title-three-col m-2">
                    {singleAccidentNews?.title}
                  </h1>
                  <img
                    className="w-full"
                    src={singleAccidentNews?.image}
                    alt=""
                  />
                  <p className="">{singleAccidentNews?.description}</p>
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
                {/* accident data */}
                <p className="underline font-bold">More</p>
                {accidentNews.slice(11, 16).map((news) => (
                  <>
                    <Link to={`/bangladesh/accident/${news.slug}`}>
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

export default SingleAccidentNews;
