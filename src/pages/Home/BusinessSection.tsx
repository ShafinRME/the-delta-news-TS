import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { SectionNewsProps } from '../../utility/Typs';
import HomeCurrency from '../Currency/HomeCureency';

const BusinessSection:FC<SectionNewsProps> = ({news,linkText,linkUrl}) => {
  return (
    <>
      <section>
        <h1 className="text-3xl pb-8 font-semibold pt-10 ">
          <span className="border-b-2 border-warning-content pb-1 text-primary hover:text-error-content transition-colors duration-500">
            <Link to={`/${linkUrl}`}>{linkText}</Link>
          </span>
        </h1>

        <div className="grid grid-cols-1 xl:grid-cols-3 pb-4 gap-4 border-b xl:border-warning-content ">
          {/* left side */}
          <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 pb-4 last:pb-0 pt-4 first:pt-0 ">
            {news.slice(0, 4).map((item) => (
              <Link
                key={item.id}
                className="grid grid-cols-2  gap-4  last:pb-0 first:pt-0 xl:border-b border-warning-content last:border-0"
                to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
              >
                <h1 className="news-live-title lg:pb-4">
                  {`${item.title.slice(0, 44)}..`}
                </h1>

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 md:h-24 lg:h-32 xl:h-28 w-full"
                />
              </Link>
            ))}
          </div>
          {/* middle with currency */}
          <div className="xl:border-r xl:border-l xl:px-4 border-warning-content xl:max-w-full xl:mx-0 md:max-w-2xl md:mx-auto">
            {news.slice(4, 5).map((item) => (
              <div
                key={item.id}
                className="pb-4 border-b border-warning-content"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="xl:h-44 w-full"
                />
                <h1 className="news-sub-title pt-2 ">
                  {`${item.title.slice(0, 44)}..`}
                </h1>
                <p className="news-live-details pt-2 ">
                  {`${item.description.slice(0, 150)}..`}
                </p>
              </div>
            ))}

            <HomeCurrency />
          </div>
          {/* right side */}
          <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-4 pb-4 last:pb-0 pt-4 first:pt-0 ">
            {news.slice(5, 9).map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-2 gap-4 pb-4 last:pb-0 xl:pt-4 first:pt-0 xl:border-b border-warning-content last:border-0"
              >
                <h1 className="news-live-title xl:pb-4">
                  {`${item.title.slice(0, 44)}..`}
                </h1>

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-32 md:h-24 lg:h-32 xl:h-28 w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BusinessSection;