import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Advertisement from "../../../../Assets/images/home/advertisement.png";
import singleBigAdd2 from "../../../../Assets/images/singleAdd/singleBigAdd2.gif";
import Loading from "../../../../components/Loading/Loading";
import { NewsProps } from "../../../../utility/Typs";
const IT = () => {
  const [cricketNews, setCricketNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/cricket`)
      .then((res) => res.json())
      .then((data) => setCricketNews(data));
  }, []);
  return (
    <>
      {cricketNews.length <= 0 ? (
        <Loading />
      ) : (
        <>
          {/* nested navbar section*/}
          <section className="">
            <div className="">
              <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
                <Link to="/tech">
                  <span className="border-b">Tech</span>
                </Link>
              </h1>
              <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
                <Link to="/tech/it">IT</Link>
              </h2>
              <ul className="flex space-x-3 font-bold">
                <li className="hover:text-primary transition-colors duration-500">
                  <Link to="/tech/gadgetandapps">
                    &bull;&nbsp;Gadget and Apps
                  </Link>
                </li>
                <li className="hover:text-primary transition-colors duration-500">
                  <Link to="/tech/it">&bull;&nbsp;IT</Link>
                </li>
                <li className="hover:text-primary transition-colors duration-500">
                  <Link to="/tech/socialmedia">&bull;&nbsp;SocialMedia</Link>
                </li>
              </ul>
            </div>
          </section>

          {/* start first content section design */}
          <section>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
              {/* first part */}
              <div className="xl:col-span-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2">
                    {cricketNews.slice(0, 4).map((news) => (
                      <>
                        <Link to={`/tech/it/${news.slug}`}>
                          <div className="border m-2 p-2" key={news.slug}>
                            <img className="w-full" src={news.image} alt="" />

                            <div className="">
                              <h1 className="news-sub-title-three-col m-2">
                                {news.title}
                              </h1>
                              <h2 className="text-lg pb-2 font-description font-semibold">
                                {news.reference}
                              </h2>
                              <p className="text-neutral text-sm">
                                Publish:{news.date}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </>
                    ))}
                  </div>
                  {/* second part */}
                  <div className="border">
                    {cricketNews.slice(8, 9).map((news) => (
                      <Link to={`/tech/it/${news.slug}`}>
                        <div className="p-2" key={news.slug}>
                          <img
                            className="w-full h-[400px]"
                            src={news.image}
                            alt=""
                          />
                          <div className="">
                            <h1 className="news-sub-title-three-col m-2">
                              {news.title}
                            </h1>
                            <h2 className="text-lg pb-2 font-description font-semibold">
                              {news.reference}
                            </h2>
                            <p className="text-neutral text-sm">
                              Publish:{news.date}
                            </p>
                            <p title={news.description} className="">
                              {news.description.slice(0, 150)}...
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              {/*third part*/}
              <div className="xl:col-span-4">
                {cricketNews.slice(5, 8).map((news) => (
                  <>
                    <Link to={`/tech/it/${news.slug}`}>
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
                        <img
                          className="w-full"
                          src={news.image}
                          alt={news.title}
                        />
                      </div>
                    </Link>
                  </>
                ))}
                <a
                  href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className=" md:h-20  w-full  mx-auto "
                    src={singleBigAdd2}
                    alt="single big"
                  />
                </a>
              </div>
            </div>
          </section>
          <hr className="mt-5" />
          {/* advertisement */}
          <a href="https://singerbd.com/" target="_blank" rel="noreferrer">
            <img
              src={Advertisement}
              alt="singer add"
              className="w-full md:h-52"
            />
          </a>
          <hr className="mt-5" />
          {/* end content section1 design */}

          {/* start second section design */}
          <section className="m-5">
            {cricketNews.slice(9, 13).map((news) => (
              <>
                <Link to={`/tech/it/${news.slug}`}>
                  <div
                    className="border m-2 grid md:grid-cols-1 lg:grid-cols-2"
                    key={news.slug}
                  >
                    <img className="w-full" src={news.image} alt={news.title} />
                    <div className="p-2">
                      <h1 className="news-sub-title-three-col">{news.title}</h1>
                      <h2 className="text-lg pb-2 font-description font-semibold">
                        {news.reference}
                      </h2>
                      <p className="text-neutral text-sm">
                        Publish:{news.date}
                      </p>
                      <p className="">{news.description}</p>
                    </div>
                  </div>
                </Link>
              </>
            ))}
            <a
              href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className=" md:h-20  w-full  mx-auto "
                src={singleBigAdd2}
                alt="single big"
              />
            </a>
          </section>
          {/* end second section design */}

          {/* start third content */}
          <section className="mt-5">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
              <div className="xl:col-span-8  border">
                {/* first part */}
                {cricketNews.slice(13, 14).map((news) => (
                  <>
                    <Link to={`/tech/it/${news.slug}`}>
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
                {cricketNews.slice(13, 16).map((news) => (
                  <>
                    <Link to={`/tech/it/${news.slug}`}>
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
          {/* end third content */}
        </>
      )}
    </>
  );
};

export default IT;
