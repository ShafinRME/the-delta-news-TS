import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionProps } from '../../utility/Types';
import CategorySmallAdds2 from "../../Assets/images/singleAdd/categorySmall.gif";

const CategoryFirstSection:FC<SectionProps> = ({news}) => {
  return (
    <>
      <section>
        {/* category title */}
        <h1 className="text-3xl pt-8 pb-12 font-semibold  ">
          {news?.slice(0, 1).map((item) => (
            <span
              key={item.id}
              className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500"
            >
              {item.category}
            </span>
          ))}
        </h1>
        {/* main layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
          {/* first part */}
          <div className="xl:col-span-9">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 pb-4 border-b border-warning-content">
              <div className="xl:col-span-8">
                {news.slice(0, 1).map((item) => (
                  <div key={item.id}>
                    <Link to={`${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full "
                      />
                    </Link>
                  </div>
                ))}
              </div>
              {/* middle parts */}
              <div className="xl:col-span-4 xl:border-l   border-warning-content xl:pl-4">
                {news.slice(1, 2).map((item) => (
                  <div key={item.id}>
                    <Link to={`${item.slug}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full "
                      />
                      <h1 className="news-sub-title-three-col pt-2">
                        {item.title}
                      </h1>
                      <p className="news-live-details ">{`${item.description.slice(
                        0,
                        120
                      )} ...`}</p>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            {/* last three cards */}
            <div className="grid grid-cols-1 xl:grid-cols-3 pt-4 gap-4 ">
              {news.slice(3, 6).map((item) => (
                <div
                  key={item.id}
                  className="xl:border-r xl:border-warning-content xl:last:border-0 xl:pr-4 xl:last:pr-0 "
                >
                  <Link to={`${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="lg:h-36 w-full"
                    />
                    <h1 className="news-sub-title-three-col pt-2">
                      {item.title}
                    </h1>
                    <p className="news-live-details ">{`${item.description.slice(
                      0,
                      120
                    )} ...`}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* right part */}
          <div className="xl:col-span-3 xl:pl-4 xl:border-l xl:border-warning-content">
            <div className=" pb-4 border-b border-warning-content">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={CategorySmallAdds2}
                  alt="single big"
                  className=" h-full  w-full   "
                />
              </a>
            </div>
            {news.slice(6, 10).map((item) => (
              <div
                key={item.id}
                className="border-b border-warning-content last:border-0 pb-4 last:pb-0 pt-2"
              >
                <h1 className="news-sub-title-three-col pt-2">{item.title}</h1>
                <p className="news-live-details ">{`${item.description.slice(
                  0,
                  60
                )} ...`}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CategoryFirstSection;