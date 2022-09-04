import { Link, useParams } from "react-router-dom";

const SingleCricketNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/sports/Cricket">
          <span className="border-b">Cricket</span>
        </Link>
      </h1>
      <h1>SingleAsiaNews :{slug}</h1>
    </>
  );
};

export default SingleCricketNews;
