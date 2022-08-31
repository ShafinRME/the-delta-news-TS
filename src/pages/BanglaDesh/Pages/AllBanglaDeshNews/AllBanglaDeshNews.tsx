import { Link } from "react-router-dom";

const AllBanglaDeshNews = () => {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500 ">
        <Link to="/bangladesh">
          <span className="border-b">Bangladesh</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/accident ">&bull;&nbsp;Accident</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/crime">&bull;&nbsp;Crime</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/politics">&bull;&nbsp;Politics</Link>
        </li>
      </ul>
      <h1>AllBanglaDeshNews</h1>
    </div>
  );
};

export default AllBanglaDeshNews;
