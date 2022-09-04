import { Link, useParams } from "react-router-dom";

const SingleSocialMediaNews = () => {
  const { slug } = useParams();
  return (
    <>
      <h1 className="mb-5 text-xl font-bold text-error-content hover:text-primary transition-colors duration-500">
        <Link to="/tech/socialmedia">
          <span className="border-b">Social Media</span>
        </Link>
      </h1>
      <h1>SingleAsiaNews :{slug}</h1>
    </>
  );
};

export default SingleSocialMediaNews;
