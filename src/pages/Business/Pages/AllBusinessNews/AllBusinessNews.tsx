import { Link } from "react-router-dom";

const AllBusinessNews = () => {
  return (
    <>
     
      <div>
        <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500 ">
          <Link to="/business">
            <span className="border-b">Business</span>
          </Link>
        </h1>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary hover:transition-colors hover:duration-500 ">
            <Link to="/business/global">&bull;Global</Link>
          </li>
          <li className="hover:text-primary hover:transition-colors hover:duration-500 ">
            <Link to="/business/local">&bull;Local</Link>
          </li>
        </ul>
      </div>
      <h1>AllBusinessNews</h1>
    </>
  );
};

export default AllBusinessNews;
