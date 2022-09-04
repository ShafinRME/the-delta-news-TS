import { Link, useParams } from "react-router-dom";

const SingleClimateNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/environment/climate">
          <span className="border-b">Climate</span>
        </Link>
      </h1>
      <h1>hello{slug}</h1>
    </>
  );
};

export default SingleClimateNews;
