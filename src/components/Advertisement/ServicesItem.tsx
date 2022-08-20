import React from "react";
interface Props {
  icon?: JSX.Element;
  title?: string;
  description?: string;
}

const ServicesItem: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <>
      <div className="flex  items-start mb-6 ">
        <span className="  text-3xl mt-1"> {icon} </span>
        <div className="ml-4">
          <h1 className="text-lg font-medium text-neutral-content">{title}</h1>
          <p className="text-secondary text-sm pt-1"> {description} </p>
        </div>
      </div>
    </>
  );
};

export default ServicesItem;
