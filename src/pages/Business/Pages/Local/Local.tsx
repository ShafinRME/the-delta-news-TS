import { Link } from "react-router-dom";

const Local = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/business">
            <span className="border-b">Business</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/business/local">Local</Link>
        </h2>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary hover:transition-colors hover:duration-500 ">
            <Link to="/business/global">&bull;Global</Link>
          </li>
          <li className="hover:text-primary hover:transition-colors hover:duration-500 ">
            <Link to="/business/local">&bull;Local</Link>
          </li>
        </ul>
      </div>
      <h1>Local</h1>
    </>
  );
};

export default Local;
