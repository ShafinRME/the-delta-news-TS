import { Link } from "react-router-dom";

const Europe = () => {
  return (
    <div>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/international">
            <span className="border-b">International</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/international/europe">Europe</Link>
        </h2>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/america">&bull;&nbsp;America</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/asia">&bull;&nbsp;Asia</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/international/europe">&bull;&nbsp;Europe</Link>
          </li>
        </ul>
      </div>
      <h1>Europe</h1>
    </div>
  );
};

export default Europe;
