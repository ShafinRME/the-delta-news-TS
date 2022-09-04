import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionNewsProps } from '../../utility/Typs';

const BangladeshSection: FC<SectionNewsProps>  = ({news,  linkText,linkUrl }) => {
  return (
    <>
      <section className="pt-8">
        <h1 className="text-3xl pb-8 font-semibold  ">
          <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
            <Link to={`/${linkUrl}`}>{linkText}</Link>
          </span>
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-warning-content border-b pb-4">
          {/* left section */}
          <div className="xl:border-r border-warning-content xl:pr-4 xl:col-span-4 ">
            {news.slice(0, 1).map((item) => (
              <div
                key={item.id}
                className="border-b border-warning-content pb-4 md:max-w-xl md:mx-auto xl:mx-0 xl:w-full"
              >
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:h-56 xl:h-40 w-full"
                  />
                  <h1 className="news-sub-title pt-2 ">
                    {item.title.slice(0, 100)}
                  </h1>
                  <p className="news-live-details pt-2 ">
                    {`${item.description.slice(0, 150)}..`}
                  </p>
                </Link>
              </div>
            ))}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-4 gap-4 xl:gap-6 ">
              {news.slice(2, 4).map((item) => (
                <div key={item.id} className="">
                  <Link
                    to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-44 xl:h-24"
                    />
                    <h2 className="feature-news-title ">
                      {`${item.title.slice(0, 50)}..`}
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* middle section */}
          <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-1 xl:gap-0">
            {news.slice(5, 7).map((item) => (
              <div
                key={item.id}
                className="xl:border-b border-warning-content md:last:border-none  xl:pt-4 first:pt-0 pb-4 last:pb-0"
              >
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-52 xl:h-40"
                  />
                  <h2 className="feature-news-title ">
                    {`${item.title.slice(0, 50)}..`}
                  </h2>
                  <p className="news-live-details-2 pt-2 ">
                    {`${item.description.slice(0, 90)}..`}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* right section */}
          <div className="xl:col-span-5 grid md:grid-cols-3 md:gap-4 xl:gap-0 xl:grid-cols-1 xl:pl-4 xl:border-l border-warning-content">
            {news.slice(8, 11).map((item) => (
              <div
                key={item.id}
                className="xl:border-b border-warning-content xl:last:border-none xl:pt-4 first:pt-0 "
              >
                <Link
                  to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="div">
                    <h1 className="news-live-title md:feature-news-title md:-mt-3 lg:news-live-title">{`${item.title.slice(
                      0,
                      55
                    )}...`}</h1>
                    <p className="pt-2 news-live-details-2 pb-4 block md:hidden xl:block ">
                      {`${item.description.slice(0, 90)}..`}
                    </p>
                  </div>
                  <div className="div">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-36 md:h-28 lg:h-36"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BangladeshSection;