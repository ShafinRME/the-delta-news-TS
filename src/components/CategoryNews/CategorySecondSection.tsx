import { FC } from "react";
import CategorySmallAdds3 from "../../Assets/images/singleAdd/categorySmallAdds2.gif";
import { SectionProps } from "../../utility/Typs";


const CategorySecondSection: FC<SectionProps>   = ({news}) => {
  return (
    <>
      <section>
        {/* main layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 xl:grid-cols-12 gap-4  pb-4 pt-14">
          {/* left part */}
          <div className="xl:col-span-9">
            {news.slice(10).map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-1 grid-flow-dense gap-4 md:grid-cols-2 md:max-w-xl md:ml-auto pb-4 last:pb-0 pt-4 first:pt-0 border-b border-warning-content last:border-0"
              >
                <div className="div">
                  <h1 className="news-sub-title-three-col">{item.title}</h1>
                  <p className="news-live-details ">{`${item.description.slice(
                    0,
                    170
                  )} ...`}</p>
                </div>
                <div className="order-first md:order-last">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 "
                  />
                </div>
              </div>
            ))}
          </div>
          {/* right part */}
          <div className="xl:col-span-3 xl:pl-4 ">
            <div className=" pb-6 ">
              <a
                href="https://www.walcart.com/wa-wled-el-fc-12wb22.html"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={CategorySmallAdds3}
                  alt="single big"
                  className=" h-full  w-full   "
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CategorySecondSection;
