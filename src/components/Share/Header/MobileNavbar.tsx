import React from 'react';
import TodayDate from './TodayDate';
import Weather from './Weather';
import ActiveLinks from './ActiveLink';
import headerData from './HeaderData';
import { Link } from 'react-router-dom';

const MobileNavbar = ({
  handleSideBar,
  sideBar,
}: {
  handleSideBar: boolean;
  sideBar: boolean
}) => {
  return (
    <>
      <div className="z-30">
        <div
          onClick={handleSideBar}
          className={
            sideBar
              ? "bg-secondary cursor-pointer fixed inset-0 opacity-0 visible "
              : "hidden"
          }
        ></div>
        <div
          className={
            sideBar
              ? "bg-base-100 shadow-md transition-right duration-500 backdrop-blur-xl fixed inset-y-0 py-4 right-0 w-72 "
              : "bg-base-100 shadow-md transition-right duration-500 backdrop-blur-2xl fixed inset-y-0 py-4 -right-full w-64 "
          }
        >
          <button
            onClick ={handleSideBar}
            className="absolute -left-8 p-1 rounded-full text-primary transition "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="px-4">
            {/* mobile menu search field */}
            <div className="my-4 md:hidden">
              <div>
                <form className="flex justify-center">
                  <div className="relative">
                    <input
                      type="search"
                      id="mobile-search"
                      className="block py-2.5 w-60 pl-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-secondary  focus:outline-none  dark:placeholder-gray-400 "
                      placeholder="Search"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-1 bottom-[3px] bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <div className="mt-4 flex justify-around">
                <div className="text-base font-bold text-secondary">
                  {/* <TodayDate /> */}
                </div>
                <div className="text-base text-secondary">
                  <Link to="/archives">Archive</Link>
                </div>
              </div>
            </div>
            <hr className="md:hidden border-secondary" />
            <ul tabIndex="0" className=" grid grid-cols-2 md:block mt-4 mb-2">
              {headerData.menuItems.map((item) => (
                <li key={item.text} className="space-x-6 mb-2">
                  <ActiveLinks to={item.path}>{item.text}</ActiveLinks>
                </li>
              ))}
            </ul>
            <hr className="md:hidden border-secondary" />
            <div className=" flex justify-center mb-2 mt-2 md:hidden ">
              <Weather />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;