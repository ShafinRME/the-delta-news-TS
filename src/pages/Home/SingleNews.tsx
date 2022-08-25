import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loadings from "../../components/Loading/Loadings";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import { Data } from "../../utility/Typs";
import SingleBigAdd from "../../Assets/images/singleAdd/singleBig.jpg";
import SingleSmallAdd from "../../Assets/images/singleAdd/singleSmall.gif";

const SingleNews = () => {
  const { slug } = useParams();

  const [categoryNews, setCategoryNews] = useState<undefined | Data[]>([]);
  const url = `https://team-delta001.herokuapp.com/api/news/${slug}`;
  const { isLoading, data } = useQuery<Data, Error>(["allNews"], () =>
    fetch(url).then((res) => res.json())
  );

  const category = data?.category;

  useEffect(() => {
    const baseUrl = `https://team-delta001.herokuapp.com/api/news/${category}`;
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
      <section className="pt-4">
        <h1 className="text-3xl pb-4 font-semibold ">
          <span className="border-b-2 border-warning-content pb-1">
            {data?.category}
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          {/* left site */}
          <div className="xl:col-span-8">
            <div className="border-b border-warning-content lg:mr-12">
              <h1 className="py-4 text-xl md:text-4xl max-w-2xl font-semibold font-title ">
                {data?.title}
              </h1>
            </div>

            <div className="max-w-2xl pt-6 ">
              <img src={data?.image} alt={data?.title} className="w-full" />
              <p className="news-live-details-4 pt-8 ">{data?.description}</p>
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

            {categoryNews?.map((item) => (
              <div
                key={item.id}
                className=" pb-4 last:pb-0 pt-2 first:pt-0  border-b border-warning-content last:border-none  "
              >
                <div>
                  <h1 className="news-sub-title-three-col pb-2">
                    {item?.title}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <p className="news-live-details-3">
                    {item?.description?.slice(0, 100)}
                  </p>
                  <img src={item?.image} alt={item?.title} className="w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleNews;
