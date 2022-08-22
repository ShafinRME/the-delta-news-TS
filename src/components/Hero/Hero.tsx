import React from "react";
interface Props {
  headerTextOne: string;
  headerSpanTextOne: string;
  headerTextTwo: string;
  headerSpanTextTwo: string;
  description: string;
  img: string;
  data: {
    id: number;
    icon: JSX.Element;
    title: string;
    details: string;
  }[];
}
const Hero: React.FC<Props> = ({
  headerTextOne,
  headerSpanTextOne,
  headerTextTwo,
  headerSpanTextTwo,
  description,
  img,
  data,
}) => {
  return (
    <>
      <div className="hero py-10 lg:py-20 bg-success-content -mt-4 md:-mt-10">
        <div className=" grid grid-cols-1 lg:grid-cols-6 gap-8 px-4 lg:px-14 ">
          <div className="lg:col-span-3 flex items-center ">
            <div className="div">
              <h1 className="text-xl md:text-5xl xl:leading-1 font-bold text-neutral-content">
                <span className="text-primary-content pr-2">
                  {headerSpanTextOne}
                </span>
                {headerTextOne} <br className="px-2" />
                {headerTextTwo}
                <span className="text-primary-content pl-2">
                  {headerSpanTextTwo}
                </span>
              </h1>
              <p className="py-6 text-secondary">{description}</p>
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 max-w-sm">
                {/* <Button buttonText='Our Price Plan' /> */}
                {data?.map((item) => (
                  <div key={item.id} className="flex items-center">
                    <span className="mt-2 bg-base-300 flex justify-center items-center text-4xl text-neutral-content border-warning w-14 h-14 border p-3.5 rounded-full">
                      {item.icon}
                    </span>
                    <div className="ml-4">
                      <h1 className="text-sm font-medium text-secondary">
                        {item.title}
                      </h1>
                      <p className="uppercase text-2xl leading-6 font-bold text-neutral-content ">
                        {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 hidden lg:flex justify-center ">
            <img src={img} alt="service" width={600} height={400} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
