import React from "react";
import Link from "next/link";
import newMenuItems from "./NewFooterData";
import menuItems from "./FooterData";

const MobileFooter = () => {
  return (
    <>
      {/* mobile footer */}
      <div className="lg:hidden">
        {newMenuItems.map((item) => (
          <div key={item.title} className="border-t">
            <div className="collapse  ">
              <input type="checkbox" className="peer" />
              <div className="collapse-title  uppercase text-sm font-semibold text-secondary peer-checked:text-accent">
                {item.title}
              </div>
              <div className="collapse-content  grid grid-cols-2">
                {item.newsData.map((item) => (
                  <Link key={item.id} href={item.path} className="">
                    <a className="text-secondary text-sm hover:text-accent transition-colors duration-300 font-normal hover:ml-2 hover:transition-all hover:duration-700">
                      {item.text}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* subscribe */}

        <div className="collapse border-t">
          <input type="checkbox" className="peer" />
          <div className="collapse-title  uppercase text-sm font-semibold text-secondary peer-checked:text-accent">
            subscribe
          </div>
          <div className="collapse-content">
            <div className="">
              {/* main subscribes parts */}
              <div className="pb-4">
                <div className="div">
                  {menuItems.subscribes.map((subscribe) => (
                    <Link key={subscribe.text} href={subscribe.path}>
                      <a className="flex mb-1 items-center text-base font-bold text-secondary hover:text-accent">
                        {subscribe.text}
                      </a>
                    </Link>
                  ))}
                </div>
                {/* other subscriptions */}
                <div className="flex-col mt-2">
                  <ul>
                    {menuItems.otherSubscribes.map((subscribe) => (
                      <li key={subscribe.text}>
                        <Link href={subscribe.path}>
                          <a className=" text-secondary text-sm hover:text-accent transition-colors duration-300 font-normal hover:ml-2 hover:transition-all hover:duration-700 ">
                            {subscribe.text}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* social media */}

              <div className="pt-4 border-t pb-2">
                <h1 className="pb-2 ml-2 text-secondary hover:text-accent hover:transition-colors hover:duration-500 ">Follow Us</h1>
                <div className="flex ">
                  {menuItems.socials.map((social) => (
                    <a
                      key={social.title}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mr-4 text-secondary hover:text-accent hover:transition-colors hover:duration-500 "
                    >
                      {social.img}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileFooter;
