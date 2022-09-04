import { Link, useParams } from "react-router-dom";

const SingleTelevisionNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/entertainment/television">
          <span className="border-b">Television</span>
        </Link>
      </h1>
      <h1>hello{slug}</h1>
    </>
  );
};

export default SingleTelevisionNews;
