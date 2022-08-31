import { Link } from "react-router-dom";

const AllEntertainmentNews = () => {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/entertainment">
          <span className="border-b">Entertainment</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/movies">&bull;&nbsp;Movies</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/music">&bull;&nbsp;Music</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/entertainment/television">&bull;&nbsp;Television</Link>
        </li>
      </ul>
      <h1>AllEntertainmentNews</h1>
    </div>
  );
};

export default AllEntertainmentNews;
