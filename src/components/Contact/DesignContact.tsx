// import ContactImg from "../../Assets/images/contact/contact-1.png";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const DesignContact = () => {
  return (
    <div className="relative">
      {/* <div className="absolute z-0 w-40 h-40 bg-error-content rounded-full -right-36 -top-32"></div>
      <div className="absolute z-0 w-40 h-40 bg-error-content rounded-full -right-36 -bottom-32"></div> */}
      <div className="relative z-10 bg-primary rounded-xl shadow-lg p-6 text-info space-y-16">
        <div>
          <h1 className="font-bold text-3xl tracking-wide">
            Contact Information
          </h1>
          <p className="pt-2 text-opacity-20 text-sm">
            We will be with you 24/7 in your need. Feel Free to contact. <br></br> It will take little time to response back.
          </p>
        </div>
        <div className="flex flex-col space-y-4 pb-4">
          <div className="inline-flex space-x-2 items-center">
            <span className="text-error-content">
              <IoIosCall />
            </span>
            <span>+880 121 1211212</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <span className="text-error-content">
              <MdEmail />
            </span>
            <span>teamdelta@gmail.com</span>
          </div>
          <div className="inline-flex space-x-2 items-center">
            <span className="text-error-content">
              <ImLocation2 />
            </span>
            <span>We Work Remotely</span>
          </div>
        </div>
        <div className="flex space-x-4 text-2xl">
          <a href="/" className="hover:text-error-content">
            <BsFacebook />
          </a>
          <a href="/" className="hover:text-error-content">
            <AiFillTwitterCircle />
          </a>
          <a href="/" className="hover:text-error-content">
            <AiOutlineInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DesignContact;
