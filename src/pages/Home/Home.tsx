import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecondAdvertisement from "../../Assets/images/home/advertisement.png";
import HomeFirstAdds from "../../Assets/images/home/homeFirstAdds.gif";
import Loadings from "../../components/Loading/Loadings";
import { NewsProps } from "../../utility/Typs";
// import HomeFirstSmallAdds from "../../Assets/images/home/homeFirstSmallgif.gif";
import HomeFirstBigAdds2 from "../../Assets/images/home/homeBigAdds2.gif";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import BangladeshSection from "./BangladeshSection";
import BusinessSection from "./BusinessSection";
import FirstSection from "./FirstSection";
import HealthSection from "./HealthSection";
import InternationalSection from "./InternationalSection";
import SecondSection from "./SecondSection";
import Voting from "./Voting";
import { url } from "../../utility/Urls";

const Home = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [bdNews, setBdNews] = useState<NewsProps[]>([]);
  const [intNews, setIntNews] = useState<NewsProps[]>([]);
  const [hltNews, setHltNews] = useState<NewsProps[]>([]);
  const [bussNews, setBussNews] = useState<NewsProps[]>([]);
  // all news
  useEffect(() => {
    fetch("https://the-delta-times-server.vercel.app/api/news")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  // bangladesh news
  useEffect(() => {
    fetch(`${url}/Bangladesh`)
      .then((res) => res.json())
      .then((data) => setBdNews(data));
  }, []);
  // international news
  useEffect(() => {
    fetch(`${url}/International`)
      .then((res) => res.json())
      .then((data) => setIntNews(data));
  }, []);
  // health  news
  useEffect(() => {
    fetch(`${url}/Environment`)
      .then((res) => res.json())
      .then((data) => setHltNews(data));
  }, []);
  // business news
  useEffect(() => {
    fetch(`${url}/Business`)
      .then((res) => res.json())
      .then((data) => setBussNews(data));
  }, []);
  console.log(news);

  return (
    <>
      <PageTitle title="Home" description=" True news is our vision " />
      {/* first row  layout start */}
      {news.length <= 0 ? (
        <Loadings />
      ) : (
        <>
          {/* First Advertisement banner section */}
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
          {/* First news section */}
          <FirstSection news={news} />

          {/* Second  Advertisement banner section */}
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
          {/* reading and  section */}
          <SecondSection news={news} />
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
          <BangladeshSection
            news={bdNews}
            linkText="Bangladesh"
            linkUrl="bangladesh"
          />
          {/* international section */}
          <section className="pt-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-warning-content border-b pb-4">
              <InternationalSection
                news={intNews}
                linkText="International"
                linkUrl="international"
              />
              {/* voting system */}
              <div className="xl:col-span-4 md:max-w-xl md:mx-auto xl:mx-0 xl:w-full ">
                <h1 className="text-3xl pb-8 font-semibold  ">
                  <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
                    <Link to={`/international`}>Voting</Link>
                  </span>
                </h1>
                <div className="">
                  <Voting />
                </div>
              </div>
            </div>
          </section>
          {/* health section */}
          <HealthSection news={hltNews} linkText="Environment" linkUrl="environment" />
          {/* business*/}
          <BusinessSection
            news={bussNews}
            linkText="Business"
            linkUrl="business"
          />
          {/* extra Section */}
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 pt-4 pb-14">
              {news.slice(0, 4).map((item) => (
                <div key={item.id} className="div">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-44  xl:h-44 w-full"
                  />
                  <h1 className="news-sub-title pt-2 ">
                    {`${item.title.slice(0, 44)}..`}
                  </h1>
                  <p className="news-live-details pt-3 ">
                    {`${item.description.slice(0, 100)}..`}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Home;
