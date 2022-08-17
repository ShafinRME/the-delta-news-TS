import React from "react";
import Image from "next/image";
import SectionTitle from "../Share/SectionTitle/SectionTitle";
import ServicesItem from "./ServicesItem";


const Services = ({ img, title, subTitle, description, data }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="flex justify-center items-center ">
          <Image
            src={img}
            width="500"
            height="400"
            priority={true}
            alt="Marketing"
          />
        </div>
        <div className="">
          <div className="max-w-md">
            <SectionTitle title={title} subTitle={subTitle} />
          </div>
          <p className="pt-4 text-secondary lg:pr-5">{description}</p>
          <div className="grid lg:grid-cols-2 pt-6 gap-x-6 ">
            {data.map((item) => (
              <ServicesItem
                key={item.id}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
