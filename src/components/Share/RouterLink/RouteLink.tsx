import { Link } from "react-router-dom";

const RouteLink = ({ title, to,description }:{title:string,to:string, description:string}) => {
  return (
    <>
      <div className="flex items-center">
        <p className="my-0 text-sm  font-semibold ">
          <span className="text-secondary">{description}</span>
          <Link
            to={`/${to}`}
            className="ml-1 text-primary-content hover:text-[#539bf5] font-semibold"
          >
            {title}
          </Link>
        </p>
      </div>
    </>
  );
};

export default RouteLink;
