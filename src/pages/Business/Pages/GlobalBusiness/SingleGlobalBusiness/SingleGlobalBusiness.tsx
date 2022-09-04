import { Link, useParams } from "react-router-dom";

const SingleGlobalBusiness = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/business/globalbusiness">
          <span className="border-b">Global Business</span>
        </Link>
      </h1>
      <h1>SingleLocalBusiness :{slug}</h1>
    </>
  );
};

export default SingleGlobalBusiness;
