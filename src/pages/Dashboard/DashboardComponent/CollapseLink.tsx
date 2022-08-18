import React from "react";
import { Link } from "react-router-dom";

type collLink = {
  linkPath: string;
  linkIcon: string;
  linkText: string;
};

const CollapseLink = ({ linkPath, linkIcon, linkText }: collLink) => {
  return (
    <>
      <li>
        <Link
          className="flex items-center text-sm font-medium text-neutral"
          to={`dashboard/${linkPath}`}
        >
          <span className="mr-3">{linkIcon}</span>
          <p className="md:hidden lg:flex">{linkText}</p>
        </Link>
      </li>
    </>
  );
};

export default CollapseLink;
