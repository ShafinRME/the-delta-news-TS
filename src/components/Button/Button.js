import React from 'react';
import Link from 'next/link'

const Button = ({ buttonText ,ButtonIcon}) => {
  return (
    <>
      <Link href="/contact">
        <a className="px-8 flex items-center justify-center mt-6 lg:mt-0 py-3 bg-error-content font-medium rounded-full text-white hover:opacity-90 transition-opacity duration-300 max-w-[11rem] ">
          {buttonText}
          <span className=" ml-2 text-xl">
            {ButtonIcon}
          </span>
        </a>
      </Link>
    </>
  );
};

export default Button;