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
          <div className="xl:border-r border-warning-content xl:pr-4 xl:col-span-4">
            {news.slice(13, 14).map((item) => (
              <div
                key={item.id}
                className="border-b border-warning-content pb-4"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <img src={item.image} alt={item.title} className=" w-full" />
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
              {news.slice(18, 20).map((item) => (
                <div key={item.id} className="">
                  <Link to={`singleNews/${item.slug}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full xl:h-24"
                    />
                    <h2 className="feature-news-title ">
                      {item.title.slice(0, 60)}
                    </h2>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* middle section */}
          <div className="xl:col-span-3 ">
            {news.slice(13, 15).map((item) => (
              <div
                key={item.id}
                className="md:border-b border-warning-content md:last:border-none pt-4 first:pt-0 pb-4 last:pb-0"
              >
                <Link to={`singleNews/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full xl:h-40"
                  />
                  <h2 className="feature-news-title ">
                    {item.title.slice(0, 60)}
                  </h2>
                  <p className="news-live-details-2 pt-2 ">
                    {`${item.description.slice(0, 90)}..`}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* right section */}
          <div className="xl:col-span-5 xl:pl-4 xl:border-l border-warning-content">
            {news.slice(17, 20).map((item) => (
              <div
                key={item.id}
                className="md:border-b border-warning-content md:last:border-none pt-4 first:pt-0 "
              >
                <Link
                  to={`singleNews/${item.slug}`}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="div">
                    <h1 className=" news-live-title">{`${item.title.slice(
                      0,
                      120
                    )} `}</h1>
                    <p className="pt-2 news-live-details-2 pb-4 ">
                      {`${item.description.slice(0, 90)}..`}
                    </p>
                  </div>
                  <div className="div">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-36"
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