import { Link } from "react-router-dom";

const Movies = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/entertainment">
            <span className="border-b">Entertainment</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/entertainment/movies">Movies</Link>
        </h2>
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
      </div>
      <h1>Movies</h1>
    </>
  );
};

export default Movies;
