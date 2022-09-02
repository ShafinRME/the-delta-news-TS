import { Link } from "react-router-dom";
import VideosData from "../../data/VideosData";
import videoSmall from "../../Assets/images/videoAdv/videoSmall.gif";
import video1 from "../../Assets/images/videoAdv/video.gif";
import video2 from "../../Assets/images/videoAdv/video2.jpg";
import small2 from "../../Assets/images/videoAdv/small2.gif";
import Comments from "../../components/Comments/Comments";

const Videos = () => {
  const handleClick = ()=>{
    console.log("clicked")
  }
  const handleOnChange = (e: any)=>{
    console.log("event chancges")
  }
  return (
    <>
      <section className="border-b border-warning-content">
        <div className="pb-4 max-w-3xl mx-auto  pt-2">
          <a href="https://www.retinabd.org/" target="_blank" rel="noreferrer">
            <img src={video1} alt="video adds" className="w-full xl:h-24" />
          </a>
        </div>
      </section>
      <section className="pb-4 border-b border-warning-content">
        <h1 className="pt-8 text-3xl font-bold ">
          <span className="border-b-2 border-warning-content pb-1">Video</span>
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pt-14">
          {/* left side  */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-4 border-b border-warning-content">
              {/* left */}
              <div className="xl:col-span-8">
                {VideosData.slice(0, 1).map((singleNews) => (
                  <div className="xl:border-r xl:border-warning-content xl:pr-4">
                    <Link
                      to={`/videos/${singleNews.path}`}
                      className=""
                      key={singleNews.id}
                    >
                      <img
                        src={singleNews.image}
                        alt={singleNews.text}
                        className="md:w-full md:h-[80%]"
                      />
                    </Link>
                  </div>
                ))}
              </div>
              {/* right */}
              <div className="xl:col-span-4 ">
                {VideosData.slice(2, 3).map((singleNews) => (
                  <div className="">
                    <Link
                      to={`/videos/${singleNews.path}`}
                      className=""
                      key={singleNews.id}
                    >
                      <img
                        src={singleNews.image}
                        alt={singleNews.text}
                        className="md:w-full"
                      />

                      <h1 className="pt-2 news-sub-title-three-col ">
                        {singleNews.text}
                      </h1>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 pt-4">
              {VideosData.slice(4,7).map((singleNews) => (
                <div className="xl:border-r xl:border-warning-content xl:last:border-0 xl:pr-4 xl:last:pr-0">
                  <Link
                    to={`/videos/${singleNews.path}`}
                    className=""
                    key={singleNews.id}
                  >
                    <img
                      src={singleNews.image}
                      alt={singleNews.text}
                      className=" w-full  md:h-40 "
                    />
                    <h1 className="pt-2 news-sub-title-three-col ">
                      {singleNews.text}
                    </h1>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/*right side  */}
          <div className="xl:col-span-3 xl:border-l xl:border-warning-content xl:pl-4">
            <div className="pb-4 border-b border-warning-content">
              <a
                href="https://www.retinabd.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={videoSmall} alt="video adds" className="w-full" />
              </a>
            </div>
            {VideosData.slice(8,12).map((singleNews) => (
              <div className="border-b border-warning-content last:border-0 pb-4 last:pb-0 pt-4 first:pt-0">
                <Link
                  to={`/videos/${singleNews.path}`}
                  className=""
                  key={singleNews.id}
                >
                  {/* <img
                    src={singleNews.image}
                    alt={singleNews.text}
                    className="md:w-full h-full "
                  /> */}
                  <h1 className="pt-2 news-sub-title-three-col ">
                    {singleNews.text}
                  </h1>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="border-b border-warning-content">
        <div className="pb-4 max-w-3xl mx-auto  pt-4">
          <a href="https://www.retinabd.org/" target="_blank" rel="noreferrer">
            <img src={video2} alt="video adds" className="w-full xl:h-40" />
          </a>
        </div>
      </section>

      <section>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 pt-10">
          <div className="xl:col-span-9">
            {VideosData.slice(0,12).map((singleNews) => (
              <div className="max-w-lg xl:ml-auto border-b border-warning-content last:border-0 pb-4 last:pb-0 pt-4 first:pt-0">
                <Link
                  to={`/videos/${singleNews.path}`}
                  className=""
                  key={singleNews.id}
                >
                  <div className="grid grid-cols-2">
                    <h1 className=" news-sub-title-three-col ">
                      {singleNews.text}
                    </h1>
                    <img
                      src={singleNews.image}
                      alt={singleNews.text}
                      className="md:w-full h-full "
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div className="xl:col-span-3">
            <div className="pb-4">
              <a
                href="https://www.retinabd.org/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={small2} alt="video adds" className="w-full" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Comments handleClick={handleClick}
        handleOnChange={handleOnChange}
        
        value=''
        ></Comments>
      </section>
    </>
  );
};

export default Videos;
