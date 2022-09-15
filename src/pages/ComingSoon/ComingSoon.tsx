
import { Link } from 'react-router-dom';

const ComingSoon = () => {
  return (
    <>
      <div className="text-center pt-5 flex justify-center">
        <div className="div">
          <h2 className="text-accent text-2xl md:text-4xl font-extrabold my-2">
            Coming Soon
          </h2>
          <p className="text-neutral font-medium mb-3 pt-3">
            We working for this page
          </p>

          <div className="flex justify-center ">
            <Link
              className="bg-black text-white px-6 py-3 block rounded-full hover:bg-secondary transition-colors duration-500 font-semibold"
              to="/"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;