import { Link } from "react-router-dom";

const Politics = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh">
            <span className="border-b">Bangladesh</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/bangladesh/politics">Politics</Link>
        </h2>
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
      </div>
      <h1>Politics</h1>
    </>
  );
};

export default Politics;
