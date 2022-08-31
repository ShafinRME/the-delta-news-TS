import { Link } from "react-router-dom";

const AllTechNews = () => {
  return (
    <>
      <div className="">
        <h1 className="mb-2 text-4xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/tech">
            <span className="border-b">Tech</span>
          </Link>
        </h1>
        <ul className="flex space-x-3 font-bold">
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/tech/gadgetandapps">&bull;&nbsp;Gadget and Apps</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/tech/it">&bull;&nbsp;IT</Link>
          </li>
          <li className="hover:text-primary transition-colors duration-500">
            <Link to="/tech/socialmedia">&bull;&nbsp;SocialMedia</Link>
          </li>
        </ul>
      </div>
      <h1>AllTechNews</h1>
    </>
  );
};

export default AllTechNews;
