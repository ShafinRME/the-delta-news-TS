import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionNewsProps } from '../../utility/Types';

const HealthSection: FC<SectionNewsProps>  = ({news,linkUrl, linkText}) => {
  return (
    <>
      <section>
        <h1 className="text-3xl pb-8 font-semibold pt-10 w-full md:max-w-2xl md:mx-auto xl:mx-0 xl:w-full  ">
          <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
            <Link to={`/${linkUrl}`}>{linkText}</Link>
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-4 gap-4 border-b border-warning-content w-full md:max-w-2xl md:mx-auto xl:mx-0 xl:max-w-full ">
          {news.slice(0, 3).map((item) => (
            <Link
              key={item.id}
              to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className=" h-52 xl:h-44 w-full"
              />
              <h1 className="news-sub-title pt-2 ">
                {`${item.title.slice(0, 44)}..`}
              </h1>
              <p className="news-live-details pt-2 ">
                {`${item.description.slice(0, 150)}..`}
              </p>
            </Link>
          ))}
          <div className="max-h-[20.5rem] overflow-y-scroll">
            {news.slice(3, 13).map((item) => (
              <div
                key={item.id}
                className=" pt-4 first:pt-0 pb-4 last:pb-0 border-b border-warning-content last:border-0 "
              >
                <h1 className="news-live-title   ">
                  {`${item.title.slice(0, 44)}..`}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HealthSection;