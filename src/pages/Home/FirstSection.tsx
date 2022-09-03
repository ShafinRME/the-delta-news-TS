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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-8 xl:grid-cols-9  xl:gap-4 xl:border-b xl:border-b-warning-content pb-[.3rem]">
            {/* title and details news live news */}
            <div className="xl:col-span-3">
              {news?.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                >
                  <div className=" pb-4 ">
                    <h1 className=" news-live-title">{`${item.title.slice(
                      0,
                      50
                    )}.. `}</h1>
                    <p className="pt-2 news-live-details ">
                      {`${item.description.slice(0, 60)}..`}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            {/* title and details image live news*/}
            <div className="xl:col-span-6">
              {news.slice(4, 5).map((item) => (
                <div key={item.id} className="pb-2">
                  <Link
                    to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full md:h-[20rem] md:min-h-[20rem] lg:h-[14rem] lg:w-[80%] lg:min-h-[14rem] xl:h-[24rem] xl:min-h-[24rem] xl:w-full"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* middle three card title and details */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 pt-4 gap-4 xl:gap-0 border-b border-b-warning-content pb-4">
            {news?.slice(6, 9).map((item) => (
              <div
                key={item.id}
                className="xl:border-r xl:border-r-warning-content xl:last:border-none xl:pr-4 xl:last:pr-0 xl:pl-4 xl:first:pl-0"
              >
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
                  <h1 className="news-sub-title-three-col">
                    {`${item.title.slice(0, 40)}...`}
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
                  to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  className="grid md:grid-flow-row-dense grid-cols-1 lg:grid-cols-2 gap-2"
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
                    className="md:h-44 lg:h-36 xl:h-28 w-full"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* first row  layout right*/}
        <div className="xl:col-span-3 xl:border-l xl:border-l-warning-content xl:pl-4 ">
          {/* advertisement start */}
          {news.slice(24, 25).map((item) => (
            <div
              key={item.id}
              className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-1 gap-4 pb-3.5 xl:border-b-warning-content xl:border-b "
            >
              <Link
               
                to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full pb-0 xl:h-52 min-h-[13rem] "
                />
              </Link>
              <Link
               
                to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
              >
                <h1 className=" news-sub-title pt-4 ">
                  {`${item.title.slice(0, 50)}...`}
                </h1>
                <p className=" news-details">
                  {`${item.description.slice(0, 180)}...`}
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
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-full md:h-44 lg:h-56 xl:h-24"
                  />
                  <h2 className="feature-news-title ">{`${item.title.slice(
                    0,
                    40
                  )}...`}</h2>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstSection;
