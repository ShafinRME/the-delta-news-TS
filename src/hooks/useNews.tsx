import { useContext, useEffect } from "react";
// import { NewsContext } from "../App";


export type news = {
  news: {
    _id: string;
    id: string;
    title: string;
    description: string;
    image: string;
    reference: string;
    slug: string;
  }[]
};
type UseContext = {
  news: {
    _id?: string;
    id?: string;
    title?: string;
    description?: string;
    image?: string;
    reference?: string;
    slug?: string;
  }[]
  setNews: React.Dispatch<React.SetStateAction< news | [] >>;
}

const useNews = () => {
  // const [news, setNews] = useContext< UseContext >(NewsContext);
  // useEffect(() => {
  //   fetch("https://team-delta001.herokuapp.com/api/news")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setNews(data);
  //     });
  // });
  // return [news, setNews];
 return <h1>h1</h1>
};

export default useNews;
