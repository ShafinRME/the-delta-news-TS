import React from "react";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";

import LiveNewsData from "../../data/LiveNewsData";

const OneNews = () => {
  const { path } = useParams();

  return (
    <div className="mx-auto mt-6">
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

          return null;
        })}
        <div className="mt-6 font-bold text-xl text-center">
          <Link to={"/livenews"}>
            Wanna Grab All <span className="link-primary">Live News</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OneNews;
