import { Link, Outlet } from "react-router-dom";

const NestedNavbar = ({
  title,
  subTitle1,
  subTitle2,
  subTitle3,
}: {
  title: string;
  subTitle1: string;
  subTitle2: string;
  subTitle3: string;
}) => {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/international">
          <span className="border-b">{title}</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/asia">&bull;{subTitle1}</Link>
        </li>

        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/america">&bull;{subTitle2}</Link>
        </li>

        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/international/europe">&bull;{subTitle3}</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default NestedNavbar;
