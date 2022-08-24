import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import VideosData from "../../data/VideosData";


const Video = () => {
    const {path}=useParams()
    return (
        <div className="mx-auto">
      <div>
        {VideosData?.map((item) => {
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
      </div>
    </div>
    );
};

export default Video;