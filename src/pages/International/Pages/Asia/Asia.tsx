import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loadings from "../../../../components/Loading/Loadings";
import { NewsProps } from "../../../../utility/Typs";

const Asia = () => {
  const [asiaNews, setAsiaNews] = useState<NewsProps[]>([]);

  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news/")
      .then((res) => res.json())
      .then((data) => setAsiaNews(data));
  }, []);

  return (
    <>
      {asiaNews.length <= 0 ? (
        <Loadings />
      ) : (
        <>
          <div className="">
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

          {/* second section */}
          <section>
            {/* category title */}
            <h1 className="text-3xl pt-8 pb-12 font-semibold  ">
              {asiaNews?.slice(0, 1).map((item) => (
                <span
                  key={item.id}
                  className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500"
                >
                  {item.category}
                </span>
              ))}
            </h1>
            {/* main layout */}
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
              {/* first part */}
              <div className="xl:col-span-9">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-4 border-b border-warning-content">
                  <div className="xl:col-span-8">
                    {asiaNews?.slice(0, 1).map((item) => (
                      <div key={item.id}>
                        <Link to={`${item.slug}`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full "
                          />
                        </Link>
                      </div>
                    ))}
                  </div>
                  {/* middle parts */}
                  <div className="xl:col-span-4 xl:border-l   border-warning-content xl:pl-4">
                    {asiaNews?.slice(1, 2).map((item) => (
                      <div key={item.id}>
                        <Link to={`${item.slug}`}>
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full "
                          />
                          <h1 className="news-sub-title-three-col pt-2">
                            {item.title}
                          </h1>
                          <p className="news-live-details ">{`${item.description.slice(
                            0,
                            120
                          )} ...`}</p>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
                {/* last three cards */}
                <div className="grid grid-cols-1 xl:grid-cols-3 pt-4 gap-4 ">
                  {asiaNews?.slice(3, 6).map((item) => (
                    <div
                      key={item.id}
                      className="xl:border-r xl:border-warning-content xl:last:border-0 xl:pr-4 xl:last:pr-0 "
                    >
                      <Link to={`${item.slug}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="lg:h-36 w-full"
                        />
                        <h1 className="news-sub-title-three-col pt-2">
                          {item.title}
                        </h1>
                        <p className="news-live-details ">{`${item.description.slice(
                          0,
                          120
                        )} ...`}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* right part */}
              <div className="xl:col-span-3 xl:pl-4 xl:border-l xl:border-warning-content">
                <div className=" pb-4 border-b border-warning-content">
                  <a
                    href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src=""
                      alt="single big"
                      className=" h-full  w-full   "
                    />
                  </a>
                </div>
                {asiaNews?.slice(6, 10).map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-warning-content last:border-0 pb-4 last:pb-0 pt-2"
                  >
                    <h1 className="news-sub-title-three-col pt-2">
                      {item.title}
                    </h1>
                    <p className="news-live-details ">{`${item.description.slice(
                      0,
                      60
                    )} ...`}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* three adds section */}
          <section className="pt-4 pb-4 border-b border-warning-content">
            <div className="max-w-4xl mx-auto">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src=""
                  alt="single big"
                  className=" h-full md:h-48 w-full "
                />
              </a>
            </div>
          </section>
          {/* third section */}
          <section>
            {/* main layout */}
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-4  pb-4 pt-14">
              {/* left part */}
              <div className="xl:col-span-9">
                {asiaNews?.slice(10).map((item) => (
                  <div
                    key={item.id}
                    className="grid grid-cols-1 grid-flow-dense gap-4 md:grid-cols-2 md:max-w-xl md:ml-auto pb-4 last:pb-0 pt-4 first:pt-0 border-b border-warning-content last:border-0"
                  >
                    <div className="div">
                      <h1 className="news-sub-title-three-col">{item.title}</h1>
                      <p className="news-live-details ">{`${item.description.slice(
                        0,
                        170
                      )} ...`}</p>
                    </div>
                    <div className="order-first md:order-last">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-44 "
                      />
                    </div>
                  </div>
                ))}
              </div>
              {/* right part */}
              <div className="xl:col-span-3 xl:pl-4 ">
                <div className=" pb-6 ">
                  <a
                    href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src=""
                      alt="single big"
                      className=" h-full  w-full   "
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Asia;
