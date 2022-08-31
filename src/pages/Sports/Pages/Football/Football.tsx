import { Link } from "react-router-dom";

const Football = () => {
  return (
    <div>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/sports">
            <span className="border-b">Sports</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/sports/football">Football</Link>
        </h2>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/cricket">&bull;&nbsp;Cricket</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/football">&bull;&nbsp;Football</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/localsports">&bull;&nbsp;Local Sports</Link>
          </li>
        </ul>
      </div>
      <h1>Football</h1>
    </div>
  );
};

export default Football;
