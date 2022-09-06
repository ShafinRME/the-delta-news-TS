import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryAdds from "../../../../Assets/images/singleAdd/categoryAdds.gif";
import CategoryAdds2 from "../../../../Assets/images/singleAdd/categoryadds2.png";
import CategorySmallAdds2 from "../../../../Assets/images/singleAdd/categorySmall.gif";
import CategorySmallAdds3 from "../../../../Assets/images/singleAdd/categorySmallAdds2.gif";
import Loading from "../../../../components/Loading/Loading";
import { NewsProps } from "../../../../utility/Types";
import { url } from "../../../../utility/Urls";
const AllTechNews = () => {
  const [techNews, setTechNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch(`${url}/Tech`)
      .then((res) => res.json())
      .then((data) => setTechNews(data));
  }, []);
  return (
    <>
      {/* nested navbar section*/}
      <section className="mb-8">
        <div className="">
          <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
            <Link to="/tech">
              <span className="border-b">Tech</span>
            </Link>
          </h1>
          <ul className="flex space-x-3 font-bold">
            <li className="hover:text-primary transition-colors duration-500">
              <Link to="/tech/gadgetandapps">&bull;&nbsp;Gadget and Apps</Link>
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
      {techNews.length <= 0 ? (
        <Loading />
      ) : (
        <>
          <hr className="mt-5" />
          {/* news advertisement */}
          <section className="pt-4 pb-6 border-b border-warning-content">
            <div className="max-w-4xl mx-auto">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={CategoryAdds}
                  alt="single big"
                  className=" h-full md:h-24 w-full "
                />
              </a>
            </div>
          </section>
          <hr className="mt-5" />
          {/* start content section design */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
              {/* left side*/}
              <div className="xl:col-span-9">
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-4 border-b border-warning-content">
                  <div className="xl:col-span-8">
                    {techNews.slice(0, 1).map((item) => (
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
                    {techNews.slice(1, 2).map((item) => (
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
                  {techNews.slice(3, 6).map((item) => (
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
              {/*right side*/}
              <div className="xl:col-span-3 xl:pl-4 xl:border-l xl:border-warning-content">
                <div className=" pb-4 border-b border-warning-content">
                  <a
                    href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={CategorySmallAdds2}
                      alt="single big"
                      className=" h-full  w-full   "
                    />
                  </a>
                </div>
                {techNews.slice(6, 10).map((item) => (
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
                  src={CategoryAdds2}
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
                {techNews.slice(10).map((item) => (
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
                      src={CategorySmallAdds3}
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

export default AllTechNews;
