import { Link } from "react-router-dom";
import menuItems from "./FooterData";
import FooterNewTitle from "./FooterNewTitle";

const Subscribe = () => {
  return (
    <>
      <FooterNewTitle title="subscribe" />
      <div className="mt-4 lg:border-l  lg:pl-2">
        {/* main subscribes parts */}
        <div className="pb-4">
          <div className="div">
            {menuItems.subscribes.map((subscribe) => (
              <Link
                key={subscribe.text}
                to={subscribe.path}
                className="flex mb-1 items-center text-base font-bold text-secondary hover:text-primary transition-colors duration-500"
              >
                <span className="mr-2 text-secondary text-lg hover:text-primary">
                  {subscribe.icon}
                </span>
                {subscribe.text}
              </Link>
            ))}
          </div>
          {/* other subscriptions */}
          <div className="flex-col mt-2">
            <ul>
              {menuItems.otherSubscribes.map((subscribe) => (
                <li key={subscribe.text}>
                  <Link
                    to={subscribe.path}
                    className='className=" text-secondary text-sm hover:text-primary transition-colors duration-300 font-normal hover:ml-2 hover:transition-all hover:duration-700 "'
                  >
                    {subscribe.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* social media */}

        <div className="pt-4 border-t pb-2">
          <h1 className="pb-2 ml-2 text-secondary hover:text-primary hover:transition-colors hover:duration-500">
            Follow Us
          </h1>

          <div className="flex ">
            {menuItems.socials.map((social) => (
              <a
                key={social.title}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="mr-4 text-secondary hover:text-primary hover:transition-colors hover:duration-500 "
              >
                {social.img}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
