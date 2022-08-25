import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import VideosData from "../../data/VideosData";

const Video = () => {
  const { path } = useParams();
  return (
    <div>
      {VideosData?.map((item) => {
        const pathData = item.path;

        if (pathData === path) {
          return (
            <div className="grid lg:grid-cols-7">
              <div className="col-span-5">
                <ReactPlayer
                  key={item.id}
                  playing={true}
                  controls={true}
                  width="100%"
                  url={item.link}
                />
              </div>
              <div className="col-span-2 p-4">
                <h1 className="font-bold text-xl">{item.text}</h1>
                <p className="">
                  {item.description?.slice(0, 200)}...
                  <Link to={"*"} className="link link-primary">
                    {" "}
                    see more
                  </Link>
                </p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Video;
