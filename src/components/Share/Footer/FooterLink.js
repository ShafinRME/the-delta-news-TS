import Link from "next/link";
import React from "react";

const FooterLink = ({ title, href }) => {
  return (
    <>
      <li className=' my-1'>
        <Link href={href}>

          <a className="text-secondary text-sm hover:text-primary transition-colors duration-300 font-normal hover:ml-2 hover:transition-all hover:duration-700">{title}</a>

        </Link>
      </li>
    </>
  );
};

export default FooterLink;
