import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SectionProps } from "../../utility/Typs";

const SecondSection: FC<SectionProps> = ({ news }) => {
  return (
    <>
      <section className="pt-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
          {/* left section */}
          <div className="xl:col-span-3 ">
            {news.slice(15, 19).map((item) => (
              <div
                key={item.id}
                className="md:border-b border-warning-content md:last:border-none pt-4 first:pt-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <h1 className=" news-live-title">{`${item.title.slice(
                    0,
                    120
                  )} `}</h1>
                  <p className="pt-2 news-live-details-2 pb-4 ">
                    {`${item.description.slice(0, 90)}..`}
                  </p>
                </Link>
              </div>
            ))}
          </div>
          {/* Middle  section */}
          <div className="xl:border-l xl:border-r border-warning-content xl:px-4 xl:col-span-6">
            {/* {news.slice(19, 20).map((item) => (
                  <div key={item.id} className="div">
                    <Link to={`singleNews/${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className=" w-full "
                      />
                    </Link>
                  </div>
                ))} */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 xl:gap-6 ">
              {news.slice(20, 24).map((item) => (
                <div key={item.id} className="">
                  <Link to={`singleNews/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full xl:h-32"
                    />
                    <h2 className="feature-news-title ">
                      {item.title.slice(0, 60)}
                    </h2>
                    <p className="news-live-details-2 pt-2 ">
                      {`${item.description.slice(0, 70)}..`}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="xl:col-span-3">
            {news?.slice(23, 28).map((item) => (
              <div
                key={item.id}
                className="xl:border-b xl:last:border-none xl:border-b-warning-content pb-4 last:pb-0 pt-4 first:pt-0 "
              >
                <Link
                  to={`singleNews/${item.slug}`}
                  className="grid grid-cols-2 gap-2"
                >
                  <h1 className="news-sub-title-three-col">
                    {item.title.slice(0, 50)}
                  </h1>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" xl:h-20  w-full "
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
