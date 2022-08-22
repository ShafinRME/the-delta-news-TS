import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

import LiveNewsData from "../../data/LiveNewsData";

const OneNews = () => {
  const { path } = useParams();

  return (
    <div className="mx-auto">
      <div>
        {LiveNewsData?.map((item) => {
          const pathData = item.path;

          if (pathData === path) {
            return (
              <ReactPlayer
                key={item.id}
                playing={true}
                controls={true}
                width="100%"
                url={item.link}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default OneNews;
