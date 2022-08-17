import React from "react";
import Link from "next/link";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const CardButton = ({ btn, plan }) => {
  return (
    <>
      <Link href="/">
        <a
          className={`PackageBtn w-full flex opacity-80 hover:opacity-100  transition-opacity duration-300 border-0 mt-8   justify-center px-6 py-4 text-sm uppercase text-white  font-semibold leading-4 text-center rounded-full${
            plan.mostPopular ? " bg-primary-content  " : " bg-error-content   "
          }`}
        >
          <span className="mr-1.5">{btn}</span>
          <span className=" PackageBtn-Icon">
            <HiOutlineArrowNarrowRight />
          </span>
        </a>
      </Link>
    </>
  );
};

export default CardButton;
