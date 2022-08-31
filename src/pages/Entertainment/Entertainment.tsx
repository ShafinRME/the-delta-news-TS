import { Link, Outlet } from "react-router-dom";

const Entertainment = () => {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/entertainment">
          <span className="border-b">Entertainment</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/movies">&bull;Movies</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/music">&bull;Music</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/television">&bull;Television</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Entertainment;
