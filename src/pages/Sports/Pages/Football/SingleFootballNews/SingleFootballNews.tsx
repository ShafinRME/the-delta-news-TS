import { Link, useParams } from "react-router-dom";

const SingleFootballNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/sports/football">
          <span className="border-b">Football</span>
        </Link>
      </h1>
      <h1>SingleAsiaNews :{slug}</h1>
    </>
  );
};

export default SingleFootballNews;
