import React from "react";
import Link from 'next/link'
import { FaTelegramPlane } from "react-icons/fa";
import Button from "../Button/Button";

const ContactSection = ({title,buttonText}) => {
  return (
    <>
      <div className=" border border-warning-content grid grid-cols-1 lg:grid-cols-2 px-6 md:px-14 items-center justify-center  py-24 bg-success-content rounded-lg">
        <div className="text-center lg:text-start ">
          <h1 className="text-xl md:text-2xl font-semibold text-neutral-content ">
            {title}
          </h1>
        </div>
        <div className="flex justify-center">
          <Button buttonText='Contact Us' ButtonIcon={<FaTelegramPlane />} />
        </div>
      </div>
    </>
  );
};

export default ContactSection;
