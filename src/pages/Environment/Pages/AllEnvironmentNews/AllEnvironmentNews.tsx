import { Link } from "react-router-dom";

const AllEnvironmentNews = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/environment">
            <span className="border-b">Environment</span>
          </Link>
        </h1>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/environment/climate">&bull;&nbsp;Climate</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/environment/pollution">&bull;&nbsp;Pollution</Link>
          </li>
        </ul>
      </div>
      <h1>AllEnvironmentNews</h1>
    </>
  );
};

export default AllEnvironmentNews;
