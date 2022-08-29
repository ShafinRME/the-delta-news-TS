import { FC } from "react";
import { Link } from "react-router-dom";
import { SectionProps } from "../../utility/Typs";
import HomeFirstSmallAdds2 from "../../Assets/images/singleAdd/singleBigAdd2.gif";

const FirstSection: FC<SectionProps> = ({ news }) => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-9 gap-4 pt-3 xl:border-b xl:border-b-warning-content  pb-4">
        {/* first row  layout left */}
        <div className="xl:col-span-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-4 xl:border-b xl:border-b-warning-content pb-[.3rem]">
            {/* title and details news live news */}
            <div className="xl:col-span-3">
              {news?.slice(0, 3).map((item) => (
                <Link key={item.id} to={`singleNews/${item.slug}`}>
                  <div className=" pb-4 ">
                    <h1 className=" news-live-title">{`${item.title.slice(
                      0,
                      50
                    )}.. `}</h1>
                    <p className="pt-2 news-live-details ">
                      {`${item.description.slice(0, 90)}..`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* title and details image live news*/}
            <div className="xl:col-span-6">
              {news.slice(4, 5).map((item) => (
                <div key={item.id} className="pb-2">
                  <Link to={`singleNews/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="md:h-[26rem]"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* middle three card title and details */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-4 gap-4 xl:gap-0 border-b border-b-warning-content pb-4">
            {news?.slice(6, 9).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:border-r-warning-content xl:last:border-none xl:pr-4 xl:last:pr-0 xl:pl-4 xl:first:pl-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <h1 className="news-sub-title-three-col">
                    {`${item.title.slice(0, 60)}...`}
                  </h1>
                  <p className="news-details pt-4">
                    {`${item.description.slice(0, 70)}...`}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {/* last two card title and details and picture */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 pt-4 gap-4 xl:gap-0 ">
            {news?.slice(9, 11).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
              >
                <Link
                  to={`singleNews/${item.slug}`}
                  className="grid grid-cols-2 gap-2"
                >
                  <div className="div">
                    <h1 className="news-sub-title-three-col">
                      {`${item.title.slice(0, 50)}..`}
                    </h1>
                    <p className="news-details pt-4">
                      {`${item.description.slice(0, 30)}...`}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" xl:h-28 w-full"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* first row  layout right*/}
        <div className="xl:col-span-3 xl:border-l xl:border-l-warning-content xl:pl-4 ">
          {/* advertisement start */}
          {news.slice(11, 12).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4 pb-4 xl:border-b-warning-content xl:border-b "
            >
              <Link key={item.id} to={`singleNews/${item.slug}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full pb-0"
                />
                <h1 className=" news-sub-title pt-[9px] ">
                  {item.title.slice(0, 60)}
                </h1>
                <p className=" news-details">
                  {`${item.description.slice(0, 60)}...`}
                </p>
              </Link>
            </div>
          ))}

          <div className="max-w-2xl mx-auto pb-4 pt-4 border-b border-warning-content">
            <a
              href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={HomeFirstSmallAdds2}
                alt="single big"
                className=" md:h-20  w-full  mx-auto "
              />
            </a>
          </div>
          {/* advertisement end */}
          {/* first row  layout right last two parts*/}
          <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 xl:gap-0 pb-4 ">
            {news.slice(13, 15).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-full xl:h-24"
                  />
                  <h2 className="feature-news-title ">{item.title}</h2>
                </Link>
              </div>
            ))}
          </div>
          {/* <div className="grid grid-cols-1 pt-4 gap-4 xl:gap-0 ">
                {news?.slice(14, 15).map((item) => (
                  <div
                    key={item.id}
                    className="xl:border-r xl:last:border-none xl:border-r-warning-content xl:pr-4 xl:pl-4 xl:first:pl-0 xl:last:pr-0"
                  >
                    <Link
                      to={`singleNews/${item.slug}`}
                      className="grid grid-cols-2 gap-2"
                    >
                      <div className="div">
                        <h1 className="news-sub-title-three-col">
                          {item.title.slice(0, 60)}
                        </h1>
                        <p className="news-details pt-4">
                          {`${item.description.slice(0, 30)}...`}
                        </p>
                      </div>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" xl:h-28 w-full"
                      />
                    </Link>
                  </div>
                ))}
              </div> */}
        </div>
      </section>
    </>
  );
};

export default FirstSection;
