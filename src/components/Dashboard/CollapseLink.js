import Link from 'next/link';
import React from 'react';

const CollapseLink = ({linkPath,linkIcon,linkText}) => {
  return (
    <>
      <li>
        <Link href={`/dashboard/${linkPath}`}>
          <a className="flex items-center text-sm font-medium text-neutral">
            <span className="mr-3">{linkIcon}</span>
            <p className="md:hidden lg:flex">{linkText}</p>
          </a>
        </Link>
      </li>
    </>
  );
};

export default CollapseLink;