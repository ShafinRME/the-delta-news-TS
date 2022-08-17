import React from "react";
import Link from "next/link";
const RouteLink = ({ title, href,description }) => {
  return (
    <>
      <div className="flex items-center">
        <p className="my-0 text-sm  font-semibold ">
          <span className="text-secondary">{description}</span>
          <Link href={`/${href}`}>
            <a className="ml-1 text-primary-content hover:text-[#539bf5] font-semibold">
              {title}
            </a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default RouteLink;
