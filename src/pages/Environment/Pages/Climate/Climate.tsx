import { Link } from "react-router-dom";

const Climate = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/environment">
            <span className="border-b">Environment</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/environment/climate">Climate</Link>
        </h2>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/environment/climate">&bull;&nbsp;Climate</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/environment/pollution">&bull;&nbsp;Pollution</Link>
          </li>
        </ul>
      </div>
      <h1>Climate</h1>
    </>
  );
};

export default Climate;
