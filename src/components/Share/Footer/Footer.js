import Link from "next/link";
import React from "react";
import menuItems from "./FooterData";
import FooterLink from "./FooterLink";
import FooterNewTitle from "./FooterNewTitle";
import MobileFooter from "./MobileFooter";
import newMenuItems from "./NewFooterData";
import Subscribe from "./Subscribe";

const NewFooter = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <div className="pb-10 ">
        {/* divider and border */}
        <div className="divider border-b border-secondary"></div>
        {/* main parts of footer  */}
        <div className="pt-8 pb-6">
          {/* footer title */}
          <h1 className="name-title text-secondary">The Delta News</h1>
        </div>
        {/* desktop footer */}
        <div className="lg:grid lg:grid-cols-12 pb-4 hidden">
          {newMenuItems.map((item) => (
            <div key={item.title} className="md:col-span-3 lg:col-span-2">
              <FooterNewTitle title={item.title} />
              <div key={item.id} className="mt-4">
                <ul key={item.id}>
                  {item.newsData.map((item) => (
                    <FooterLink
                      key={item.id}
                      href={item.path}
                      title={item.text}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* subscribe */}
          <div className="md:col-span-3 lg:col-span-2  ">
            <Subscribe />
          </div>
        </div>
        {/* mobile footer */}
        <MobileFooter />
        {/* last parts of footer */}
        <hr />
        <div className="pt-3 mx-auto  w-full ">
          <p className="text-center text-xs md:hidden pb-2 text-secondary hover:text-accent">
            Copyright &copy; {year} The Delta Times &copy;
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-9 lg:grid-cols-12   ">
            <p className="text-xs text-secondary hover:text-accent hover:transition-colors duration-500 py-1  col-span-3  hidden md:flex ">
              Copyright &copy; {year} The Delta Times
            </p>
            {menuItems.footerLast.map((item) => (
              <Link
                className=" text-center "
                key={item.text}
                href={`/${item.path}`}
              >

                <a className=" text-xs text-secondary hover:text-primary transition-colors duration-500 py-1  ">


                  {item.text}
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewFooter;
