import { Link } from "react-router-dom";

const AllSportsNews = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/sports">
            <span className="border-b">Sports</span>
          </Link>
        </h1>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/cricket">&bull;Cricket</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/football">&bull;Football</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/sports/localsports">&bull;Local Sports</Link>
          </li>
        </ul>
      </div>
      <h1>AllSportsNews</h1>
    </>
  );
};

export default AllSportsNews;
