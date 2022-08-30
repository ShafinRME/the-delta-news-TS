import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loadings from "../../components/Loading/Loadings";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import { Data } from "../../utility/Typs";

const News = () => {
  const { slug } = useParams();

  const [categoryNews, setCategoryNews] = useState<undefined | Data[]>([]);
  const url = `https://the-delta-times-server.vercel.app/api/news/${slug}`;
  const { isLoading, data } = useQuery<Data, Error>(["allNews"], () =>
    fetch(url).then((res) => res.json())
  );

  const category = data?.category;

  useEffect(() => {
    const baseUrl = `https://the-delta-times-server.vercel.app/api/news/${category}`;
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
      <section>
        <h1 className="text-3xl">{data?.category}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
          {/* left site */}

          <div className="col-span-8 max-w-2xl ">
            <img src={data?.image} alt={data?.title} className="w-full" />
            <h1>{data?.title}</h1>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </div>
          {/* right side */}
          <div className="col-span-4">
            {categoryNews?.map((item) => (
              <div className=" pb-4 last:pb-0 pt-2 first:pt-0  border-b last:border-none ">
                <div className="div">
                  <h1 className="news-sub-title-three-col pb-2">
                    {item?.title}
                  </h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link to={`singleNews${item.slug}`}>
                    <p className="news-live-details-3">
                      {item?.description?.slice(0, 100)}
                    </p>
                    <img
                      src={item?.image}
                      alt={item?.title}
                      className="w-full"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
