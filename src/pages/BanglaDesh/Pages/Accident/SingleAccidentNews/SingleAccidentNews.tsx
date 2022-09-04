import { Link, useParams } from "react-router-dom";

const SingleAccidentNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/bangladesh/accident">
          <span className="border-b">Accident</span>
        </Link>
      </h1>
      <h1>SingleAccidentNews {slug}</h1>
    </>
  );
};

export default SingleAccidentNews;
