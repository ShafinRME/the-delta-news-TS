import React from "react";
import { useParams } from "react-router-dom";

type SingleProps={
    singleNews: {
        id: number;
        image: string;
        text: string;
        link: string;
        path: string;
    }
}

const SingleLiveNews = ({singleNews}:SingleProps) => {
  const { id } = useParams();
  return (
    <div>
      <h1>{singleNews.text}</h1>
    </div>
  );
};

export default SingleLiveNews;
