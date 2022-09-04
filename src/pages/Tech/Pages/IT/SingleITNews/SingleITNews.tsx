import { Link, useParams } from "react-router-dom";

const SingleITNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/tech/it">
          <span className="border-b">It</span>
        </Link>
      </h1>
      <h1>SingleAsiaNews :{slug}</h1>
    </>
  );
};

export default SingleITNews;
