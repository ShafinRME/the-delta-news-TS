import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loadings from "../../components/Loading/Loadings";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import { Data } from "../../utility/Typs";
import SingleBigAdd from "../../Assets/images/singleAdd/singleBig.jpg";
import SingleSmallAdd from "../../Assets/images/singleAdd/singleSmall.gif";
import SingleBigAdd2 from "../../Assets/images/singleAdd/singleBigAdd2.gif";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share-rc-18";
import { url as urls } from "../../utility/Urls";

const SingleNews = () => {
  const { slug } = useParams();

  const [categoryNews, setCategoryNews] = useState<undefined | Data[]>([]);
  const url = `https://team-delta001.herokuapp.com/api/news/${slug}`;
  const { isLoading, data } = useQuery<Data, Error>(["allNews"], () =>
    fetch(url).then((res) => res.json())
  );

  const category = data?.category;
  const baseUrl = `https://delta-times.netlify.app/singleNews/${slug}`;

  useEffect(() => {
    const baseUrl = `${urls}/${category}`;
    fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setCategoryNews(data);
      });
  }, [category]);

  if (isLoading) {
    return <Loadings />;
  }

  return (
    <>
      <PageTitle title={data?.title} description={data?.description} />
      {/* big advertisement */}
      <section className="pt-4 pb-6 border-b border-warning-content">
        <div className="max-w-4xl mx-auto">
          <a
            href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={SingleBigAdd}
              alt="single big"
              className=" h-full md:h-24 w-full "
            />
          </a>
        </div>
      </section>

      {/* main news details */}
      <section className="pt-4 border-b border-warning-content pb-10">
        {/* news Category*/}
        <h1 className="text-3xl pb-4 font-semibold  ">
          <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
            <Link to={`/${data?.category}`}>{data?.category}</Link>
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6 pb-20">
          {/* left site */}
          <div className="xl:col-span-8">
            {/* main news title */}
            <div className="border-b border-warning-content lg:mr-12">
              <h1 className="py-4 text-xl md:text-4xl max-w-2xl font-semibold font-title ">
                {data?.title}
              </h1>
              <div className="pb-8">
                <div className="div">
                  <h2 className="text-lg pb-2 font-description font-semibold">
                    {data?.reference}
                  </h2>
                  <p className="text-neutral text-sm">Publish: {data?.date}</p>
                </div>
              </div>
            </div>

            <div className="max-w-2xl pt-6 ">
              <img src={data?.image} alt={data?.title} className="w-full" />
              <p className="news-live-details-4 pt-8 ">{data?.description}</p>
            </div>

            {/* share button */}
            <div className="pt-8 flex space-x-2">
              <FacebookShareButton
                url={baseUrl}
                quote={data?.title}
                hashtag={`#${data?.category}`}
              >
                <FacebookIcon size={30} round={true} />
              </FacebookShareButton>
              <TwitterShareButton
                url={baseUrl}
                title={data?.title}
                via={data?.category}
                hashtags={[`${data?.category}`]}
              >
                <TwitterIcon size={30} round={true} />
              </TwitterShareButton>
              <LinkedinShareButton
                url={baseUrl}
                summary={`${data?.category}`}
                source={data?.title}
              >
                <LinkedinIcon size={30} round={true} />
              </LinkedinShareButton>
              <WhatsappShareButton url={baseUrl}>
                <WhatsappIcon size={30} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
          {/* right side */}
          <div className="xl:col-span-4">
            <div className="max-w-2xl mx-auto pb-10 border-b border-warning-content">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={SingleSmallAdd}
                  alt="single big"
                  className=" h-full  w-full md:w-[90%]  mx-auto "
                />
              </a>
            </div>

            {categoryNews?.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className=" pb-4 last:pb-0 pt-2 first:pt-0  border-b border-warning-content last:border-none  "
              >
                <Link to={`${item.category}/${item.slug}`} >
                  <div>
                    <h1 className="news-sub-title-three-col pb-2">
                      {item?.title}
                    </h1>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <p className="news-live-details ">
                      {item?.description?.slice(0, 100)}
                    </p>
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* last big banner adds */}
        <div className="border-t border-warning-content">
          <div className="max-w-4xl mx-auto py-10">
            <a
              href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={SingleBigAdd2}
                alt="single big"
                className=" h-full md:h-44 w-full "
              />
            </a>
          </div>
        </div>
        {/* last 4 card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6 pt-6 border-t border-t-warning-content">
          {categoryNews?.slice(0, 4).map((item) => (
            <div className="div">
              <img src={item.image} alt={item.title} className="h-44 w-full" />
              <h1 className="news-sub-title-three-col pt-2">{item.title}</h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default SingleNews;
