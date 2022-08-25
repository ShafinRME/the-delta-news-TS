import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loadings from "../../components/Loading/Loadings";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import { Data} from "../../utility/Typs";



const SingleNews = () => {
  const { slug } = useParams();

  const [categoryNews, setCategoryNews] = useState< undefined | Data[]>([]);
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
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6">
        <div className="col-span-8 ">
          <img src={data?.image} alt={data?.title} className="w-full" />
          <h1>{data?.title}</h1>
        </div>
        <div className="col-span-4">
          {categoryNews?.map((item) => (
            <div className="div">
              <h1>{item?.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleNews;
