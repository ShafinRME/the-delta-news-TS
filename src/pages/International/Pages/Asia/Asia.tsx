import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Advertisement from "../../../../Assets/images/home/advertisement.png";
import categoryAdds from "../../../../Assets/images/singleAdd/categoryAdds.gif";
import singleBigAdd2 from "../../../../Assets/images/videoAdv/video.gif";
import Loading from "../../../../components/Loading/Loading";
import { NewsProps } from "../../../../utility/Types";

const Asia = () => {
  const [asia, setAsiaNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    // fetch(`${url}/america`)
    fetch(`https://the-delta-times-server.vercel.app/api/news/asia`)
      .then((res) => res.json())
      .then((data) => setAsiaNews(data));
  }, []);

  return (
    <>
      {asia.length <= 0 ? (
        <Loading />
      ) : (
        <>
          {/* nested navbar section*/}
          <div className="mb-8">
            <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
              <Link to="/international">
                <span className="border-b">International</span>
              </Link>
            </h1>
            <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
              <Link to="/international/asia">Asia</Link>
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

          <hr className="m-5" />
          {/* start first content section design */}
          <section>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-5">
              {/* first part */}
              <div className="xl:col-span-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="grid grid-cols-2">
                    {asia.slice(0, 4).map((news) => (
                      <>
                        <Link to={`/international/asia/${news.slug}`}>
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
                    {asia.slice(8, 9).map((news) => (
                      <Link to={`/international/asia/${news.slug}`}>
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
                {asia.slice(5, 8).map((news) => (
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
                        <img
                          className="w-full"
                          src={news.image}
                          alt={news.title}
                        />
                      </div>
                    </Link>
                  </>
                ))}
                {/* advertisement */}
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
            {asia.slice(9, 13).map((news) => (
              <>
                <Link to={`/international/asia/${news.slug}`}>
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
            {/* advertisement */}
            <a
              href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className=" md:h-20  w-full  mx-auto "
                src={categoryAdds}
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
                {asia.slice(13, 14).map((news) => (
                  <>
                    <Link to={`/international/asia/${news.slug}`}>
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
                {asia.slice(13, 16).map((news) => (
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
                {/* advertisement */}
                <a
                  href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className=" md:h-20  w-full  mx-auto "
                    src={categoryAdds}
                    alt="single big"
                  />
                </a>
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

export default Asia;
