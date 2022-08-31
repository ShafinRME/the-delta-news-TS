import { Link, Outlet } from "react-router-dom";

const BanglaDesh = () => {
  return (
    <div>
      <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500 ">
        <Link to="/bangladesh">
          <span className="border-b">Bangladesh</span>
        </Link>
      </h1>
      <ul className="flex space-x-3 font-bold">
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/accident ">&bull;Accident</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/crime">&bull;Crime</Link>
        </li>
        <li className="hover:text-primary transition-colors duration-500">
          <Link to="/bangladesh/politics">&bull;Politics</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default BanglaDesh;
