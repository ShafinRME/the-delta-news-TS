import { FC } from "react";
import { Link } from "react-router-dom";
import { SectionProps } from "../../utility/Types";

const SecondSection: FC<SectionProps> = ({ news }) => {
  return (
    <>
      <section className="pt-6 xl:pt-14">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 border-b border-warning-content pb-4">
          {/* left section */}
          <div className="xl:col-span-3 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4  xl:block">
            {news.slice(15, 19).map((item) => (
              <div
                key={item.id}
                className="xl:border-b border-warning-content xl:last:border-none pt-4 xl:first:pt-0"
              >
                <Link to={`${item.category.toLocaleLowerCase()}/${item.slug}`}>
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
            <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-2  gap-4 xl:gap-6 ">
              {news.slice(20, 24).map((item) => (
                <div key={item.id} className="">
                  <Link
                    to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56  md:h-32 lg:h-44 xl:h-40"
                    />
                    <h2 className="feature-news-title ">
                      {item.title.slice(0, 60)}
                    </h2>
                    <p className="news-live-details-2 pt-2 ">
                      {`${item.description.slice(0, 60)}..`}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* right section */}
          <div className="xl:col-span-3 grid md:grid-cols-2 md:gap-4 xl:gap-0 xl:grid-cols-1">
            {news?.slice(23, 27).map((item) => (
              <div
                key={item.id}
                className="xl:border-b xl:last:border-none xl:border-b-warning-content pb-4 last:pb-0 xl:pt-4 first:pt-0 "
              >
                <Link
                  to={`${item.category.toLocaleLowerCase()}/${item.slug}`}
                  className="grid grid-cols-2 gap-2"
                >
                  <div className="div">
                    <h1 className="news-sub-title-three-col">
                      {`${item.title.slice(0, 40)}..`}
                    </h1>
                    <p className="news-live-details-2 hidden md:block xl:hidden ">
                      {`${item.description.slice(0, 90)}...`}
                    </p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="md:h-36 xl:h-20  w-full "
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
