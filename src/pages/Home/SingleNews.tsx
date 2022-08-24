import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loadings from "../../components/Loading/Loadings";
import PageTitle from "../../components/Share/Pagetitle/PageTitle";
import {Data } from "../../utility/Typs";

// type detailsNews

const SingleNews = () => {
  const { slug } = useParams();
  // const [detailsNews, setDetailsNews] = useState<undefined | DetailsNews>(
  //   undefined
  // );

  // useEffect(() => {
  //   fetch(`https://team-delta001.herokuapp.com/api/news/${slug}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setDetailsNews(data);
  //     });
  // }, [slug]);
  // console.log(detailsNews);

  const url = `https://team-delta001.herokuapp.com/api/news/${slug}`;
  const { isLoading, data } = useQuery<Data, Error>(["allNews"], () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loadings />;
  }
  console.log("news data", data?.category);
  // const { id } = detailsNews;
  return (
    <>
      <PageTitle title={data?.title} description={data?.description} />
      <div className="grid">
        <img src={data?.image} alt={data?.title} className='w-80' />
        <h1>{data?.title}</h1>
      </div>
    </>
  );
};

export default SingleNews;
