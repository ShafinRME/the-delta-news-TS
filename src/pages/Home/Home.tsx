import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondAdvertisement from "../../Assets/images/home/advertisement.png";
import Loadings from "../../components/Loading/Loadings";
import { NewsProps } from "../../utility/Typs";
import HomeFirstAdds from "../../Assets/images/home/homeFirstAdds.gif";
// import HomeFirstSmallAdds from "../../Assets/images/home/homeFirstSmallgif.gif";
import HomeFirstBigAdds2 from "../../Assets/images/home/homeBigAdds2.gif";
import HomeFirstSmallAdds2 from "../../Assets/images/singleAdd/singleBigAdd2.gif";

const Home = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  useEffect(() => {
    fetch("https://team-delta001.herokuapp.com/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  console.log(news);

  return (
    <>
      {/* first row  layout start */}
      {news.length <= 0 ? (
        <Loadings />
      ) : (
        <>
          <section className="pt-4 pb-6 border-b border-warning-content">
            <div className="max-w-4xl mx-auto">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={HomeFirstAdds}
                  alt="single big"
                  className=" h-full md:h-24 w-full "
                />
              </a>
            </div>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-9 gap-4 pt-3 xl:border-b xl:border-b-warning-content  pb-4">
            {/* first row  layout left */}
            <div className="xl:col-span-6">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-4 xl:border-b xl:border-b-warning-content pb-[.3rem]">
                {/* title and details news live news */}
                <div className="xl:col-span-3">
                  {news.slice(0, 3).map((item) => (
                    <Link key={item.id} to={`singleNews/${item.slug}`}>
                      <div className=" pb-4 ">
                        <h1 className=" news-live-title">{`${item.title.slice(
                          0,
                          50
                        )}.. `}</h1>
                        <p className="pt-2 news-live-details ">
                          {`${item.description.slice(0, 90)}..`}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
                {/* title and details image live news*/}
                <div className="xl:col-span-6">
                  {news.slice(4, 5).map((item) => (
                    <div key={item.id} className="">
                      <Link to={`singleNews/${item.slug}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="md:h-[26.5rem]"
                        />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* middle three card title and details */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-4 gap-4 xl:gap-0 border-b border-b-warning-content pb-4">
                {news?.slice(6, 9).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-r xl:border-r-warning-content xl:last:border-none xl:pr-4 xl:last:pr-0 xl:pl-4 xl:first:pl-0"
                  >
                    <Link to={`singleNews/${item.slug}`}>
                      <h1 className="news-sub-title-three-col">
                        {`${item.title.slice(0, 60)}...`}
                      </h1>
                      <p className="news-details pt-4">
                        {`${item.description.slice(0, 70)}...`}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              {/* last two card title and details and picture */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 pt-4 gap-4 xl:gap-0 ">
                {news?.slice(9, 11).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
                  >
                    <Link
                      to={`singleNews/${item.slug}`}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="div">
                        <h1 className="news-sub-title-three-col">
                          {`${item.title.slice(0, 50)}..`}
                        </h1>
                        <p className="news-details pt-4">
                          {`${item.description.slice(0, 30)}...`}
                        </p>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" xl:h-28 w-full"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* first row  layout right*/}
            <div className="xl:col-span-3 xl:border-l xl:border-l-warning-content xl:pl-4 ">
              {/* advertisement start */}
              {news.slice(11, 12).map((item) => (
                <div
                  key={item.id}
                  className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4 pb-4 xl:border-b-warning-content xl:border-b "
                >
                  <Link key={item.id} to={`singleNews/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full pb-0"
                    />
                    <h1 className=" news-sub-title pt-[9px] ">
                      {item.title.slice(0, 60)}
                    </h1>
                    <p className=" news-details">
                      {`${item.description.slice(0, 60)}...`}
                    </p>
                  </Link>
                </div>
              ))}

              <div className="max-w-2xl mx-auto pb-4 pt-4 border-b border-warning-content">
                <a
                  href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={HomeFirstSmallAdds2}
                    alt="single big"
                    className=" md:h-20  w-full  mx-auto "
                  />
                </a>
              </div>
              {/* advertisement end */}
              {/* first row  layout right last two parts*/}
              <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 xl:gap-0 border-b border-b-warning-content pb-4 ">
                {news.slice(13, 15).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
                  >
                    <Link to={`singleNews/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" w-full xl:h-24"
                      />
                      <h2 className="feature-news-title ">{item.title}</h2>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 pt-4 gap-4 xl:gap-0 ">
                {news?.slice(14, 15).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
                  >
                    <Link
                      to={`singleNews/${item.slug}`}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="div">
                        <h1 className="news-sub-title-three-col">
                          {item.title.slice(0, 60)}
                        </h1>
                        <p className="news-details pt-4">
                          {`${item.description.slice(0, 30)}...`}
                        </p>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" xl:h-28 w-full"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* first row layout end */}
          {/* first advertisement section */}
          <section className=" border-b border-b-warning-content">
            <div className="py-8 max-w-5xl mx-auto">
              <a href="https://singerbd.com/" target="_blank" rel="noreferrer">
                <img
                  src={SecondAdvertisement}
                  alt="singer add"
                  className="w-full md:h-52"
                />
              </a>
            </div>
          </section>
          {/* reading and others section */}
          <section className="pt-14">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
              {/* left section */}
              <div className="xl:col-span-3 ">
                {news.slice(15, 19).map((item) => (
                  <div
                    key={item.id}
                    className="md:border-b border-warning-content md:last:border-none pt-4 first:pt-0"
                  >
                    <Link to={`singleNews/${item.slug}`}>
                      <h1 className=" news-live-title">{`${item.title.slice(
                        0,
                        120
                      )} `}</h1>
                      <p className="pt-2 news-live-details-2 pb-4 ">
                        {`${item.description.slice(0, 90)}..`}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>
              {/* Middle  section */}
              <div className="xl:border-l xl:border-r border-warning-content xl:px-4 xl:col-span-6">
                {news.slice(19, 20).map((item) => (
                  <div key={item.id} className="div">
                    <Link to={`singleNews/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" w-full"
                      />
                    </Link>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 xl:gap-6 ">
                  {news.slice(20, 22).map((item) => (
                    <div key={item.id} className="">
                      <Link to={`singleNews/${item.slug}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full xl:h-40"
                        />
                        <h2 className="feature-news-title ">
                          {item.title.slice(0, 60)}
                        </h2>
                        <p className="news-live-details-2 pt-4 ">
                          {`${item.description.slice(0, 90)}..`}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* right section */}
              <div className="xl:col-span-3">
                {news?.slice(23, 28).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-b xl:last:border-none xl:border-b-warning-content pb-4 last:pb-0 pt-4 first:pt-0 "
                  >
                    <Link
                      to={`singleNews/${item.slug}`}
                      className="grid grid-cols-2 gap-2"
                    >
                      <h1 className="news-sub-title-three-col">
                        {item.title.slice(0, 50)}
                      </h1>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" xl:h-20  w-full "
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>{" "}
          {/* second advertisement section */}
          <section className=" border-b border-b-warning-content">
            <div className="py-8 max-w-5xl mx-auto">
              <a href="https://singerbd.com/" target="_blank" rel="noreferrer">
                <img
                  src={HomeFirstBigAdds2}
                  alt="singer add"
                  className="w-full md:h-40"
                />
              </a>
            </div>
          </section>
          {/* Bangladesh section */}
          <section className="pt-8">
            <h1 className="text-3xl pb-8 font-semibold  ">
              <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
                <Link to={`/bangladesh`}>Bangladesh</Link>
              </span>
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-warning-content border-b pb-4">
              {/* left section */}
              <div className="xl:border-r border-warning-content xl:pr-4 xl:col-span-6">
                {news.slice(13, 14).map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-warning-content pb-4"
                  >
                    <Link to={`singleNews/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" w-full"
                      />
                      <h1 className="news-sub-title pt-2 ">
                        {item.title.slice(0, 100)}
                      </h1>
                      <p className="news-live-details pt-2 ">
                        {`${item.description.slice(0, 150)}..`}
                      </p>
                    </Link>
                  </div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 xl:gap-6 ">
                  {news.slice(18, 20).map((item) => (
                    <div key={item.id} className="">
                      <Link to={`singleNews/${item.slug}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full xl:h-40"
                        />
                        <h2 className="feature-news-title ">
                          {item.title.slice(0, 60)}
                        </h2>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
              {/* middle section */}
              <div className="xl:col-span-3 ">
                {news.slice(13, 15).map((item) => (
                  <div
                    key={item.id}
                    className="md:border-b border-warning-content md:last:border-none pt-4 first:pt-0 pb-4 last:pb-0"
                  >
                    <Link to={`singleNews/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full xl:h-40"
                      />
                      <h2 className="feature-news-title ">
                        {item.title.slice(0, 60)}
                      </h2>
                      <p className="news-live-details-2 pt-2 ">
                        {`${item.description.slice(0, 90)}..`}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              {/* right section */}
              <div className="xl:col-span-3 xl:pl-4 xl:border-l border-warning-content">
                {news?.slice(17, 22).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-b xl:last:border-none xl:border-b-warning-content pb-4 last:pb-0 pt-4 first:pt-0  "
                  >
                    <Link
                      to={`singleNews/${item.slug}`}
                      className="grid grid-cols-2 gap-2"
                    >
                      <h1 className="news-sub-title-three-col">
                        {item.title.slice(0, 50)}
                      </h1>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" xl:h-20  w-full "
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
