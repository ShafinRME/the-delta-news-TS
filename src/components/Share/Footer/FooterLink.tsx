import { FC } from "react";
import { Link } from "react-router-dom";

interface footerLink {
  title: string;
  href: string;
}

const FooterLink: FC<footerLink> = ({ title, href }) => {
  return (
    <>
      <li className=" my-1">
        <Link
          to={href}
          className="text-secondary text-sm hover:text-primary transition-colors duration-300 font-normal hover:ml-2 hover:transition-all hover:duration-700"
        >
          {title}
        </Link>
      </li>
    </>
  );
};

export default FooterLink;
