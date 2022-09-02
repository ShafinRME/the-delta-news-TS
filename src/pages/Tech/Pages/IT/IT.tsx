import { Link } from "react-router-dom";

const IT = () => {
  return (
    <div>
      <div className="">
        <h1 className="mb-2 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
          <Link to="/tech">
            <span className="border-b">Tech</span>
          </Link>
        </h1>
        <h2 className="text-3xl hover:text-error-content transition-colors duration-500 mb-3">
          <Link to="/tech/it">IT</Link>
        </h2>
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
      <h1>It</h1>
    </div>
  );
};

export default IT;
