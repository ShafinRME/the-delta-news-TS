import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionNewsProps } from '../../utility/Typs';

const InternationalSection: FC<SectionNewsProps> = ({news,linkText,linkUrl}) => {
  return (
    <>
      <div className="xl:col-span-8 ">
        <h1 className="text-3xl pb-8 font-semibold  ">
          <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
            <Link to={`/${linkUrl}`}>{linkText}</Link>
          </span>
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          {/* left section */}
          <div className="xl:col-span-1 grid md:grid-cols-2 md:gap-4 xl:gap-0 xl:grid-cols-1 xl:pr-4 xl:border-r border-warning-content">
            {news.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="xl:border-b border-warning-content md:last:border-none xl:pt-4 first:pt-0 "
              >
                <Link
                  to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  className="grid md:grid-cols-2 gap-4"
                >
                  <div className="div">
                    <h1 className=" news-live-title">{`${item.title.slice(
                      0,
                      40
                    )}... `}</h1>
                    <p className="pt-2 news-live-details-2 pb-3 ">
                      {`${item.description.slice(0, 60)}..`}
                    </p>
                  </div>
                  <div className="div">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-40 md:h-32"
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {/* middle  section */}
          <div className="xl:border-r border-warning-content xl:pr-4 xl:col-span-1">
            {news.slice(4, 5).map((item) => (
              <div
                key={item.id}
                className="border-b border-warning-content pb-4 md:max-w-xl md:mx-auto xl:mx-0 xl:w-full"
              >
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className=" w-full xl:h-56"
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
            {/* right section */}
            <div className="grid grid-cols-1 md:grid-cols-2 pt-6 gap-4 xl:gap-4 ">
              {news.slice(5, 7).map((item) => (
                <div key={item.id} className="">
                  <Link
                    to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full xl:h-24"
                    />
                    <h2 className="feature-news-title ">
                      {item.title.slice(0, 60)}
                    </h2>
                    <p className="news-live-details pt-2 ">
                      {`${item.description.slice(0, 60)}..`}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InternationalSection;