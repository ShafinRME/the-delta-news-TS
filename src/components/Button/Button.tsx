import React from "react";
import { Link } from "react-router-dom";

interface Props {
  buttonText: string;
  ButtonIcon: JSX.Element;
}
const Button: React.FC<Props> = ({ buttonText, ButtonIcon }) => {
  return (
    <>
      <Link to="/contact">
        <span className="px-8 flex items-center justify-center mt-6 lg:mt-0 py-3 bg-error-content font-medium rounded-full text-white hover:opacity-90 transition-opacity duration-300 max-w-[11rem] ">
          {buttonText}
          <span className=" ml-2 text-xl">{ButtonIcon}</span>
        </span>
      </Link>
    </>
  );
};

export default Button;
