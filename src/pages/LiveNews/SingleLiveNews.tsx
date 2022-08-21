import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import OneNews from "./OneNews";

type SingleProps = {
  singleNews: {
    id: number;
    image: string;
    text: string;
    link: string;
    path: string;
  }
};

const SingleLiveNews = ({ singleNews }: SingleProps) => {
  const { path } = singleNews;

  console.log(path);
  return (
    <Link
      to={`/livenews/${path}`}
      className="flex justify-center items-center card border border-warning -content bg-base shadow-3xl card-title mt-3 pt-4 pb-4 hover:text-primary hover:scale-110 transition delay-600"
      key={singleNews.id}
    >
      <h1>{singleNews.text}</h1>
      <img src={singleNews.image} alt="" />
      <OneNews singleNews={singleNews}/>
    </Link>
  );
};

export default SingleLiveNews;
