import React from "react";

export interface Props {
  sectionPadding?: string;
  title?: string;
  subTitle?: string;
  textPosition?: string;
  titlePosition?: string;
}

const SectionTitle: React.FC<Props> = ({
  title,
  subTitle,
  sectionPadding,
  textPosition,
  titlePosition,
}) => {
  return (
    <>
      <div className={`${textPosition} ${sectionPadding}`}>
        <div
          className={`flex  items-center text-primary-content font-medium ${titlePosition}`}
        >
          <span className="w-8 h-[2px] bg-primary-content mr-1 "></span>
          <h1 className=" tracking-wide leading-6 text-lg ">
            <span>{title}</span>
          </h1>
        </div>
        <p className=" text-xl md:text-3xl text-neutral-content font-medium pt-1">
          {subTitle}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
