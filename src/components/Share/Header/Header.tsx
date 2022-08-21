import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { themeChange } from "theme-change";
// import ActiveLinks from "./ActiveLink";
import { signOut } from "firebase/auth";
import DarkMod from "./DarkMod";
import headerData from "./HeaderData";
import MobileNavbar from "./MobileNavbar";
import TodayDate from "./TodayDate";
import Weather from "./Weather";
// import {
//   BiLogInCircle,
//   BiLogOutCircle,
//   BiUserPlus,
//   BiCog,
//   BiEdit,
// } from "react-icons/bi";
import { useAuthState } from "react-firebase-hooks/auth";
import { BiCog, BiEdit, BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../config/firebaseConfig.init";

import Loading from "../../Loading/Loading";
import Search from "../../Search/Search";
import SearchResult from "../../Search/SearchResult";
import Clock from "./Clock";
export interface SearchData {
  _id?: string;
  title?: string;
  description?: string;
  image?: string;
}

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const [searchBarActive, setSearchBarActive] = useState<boolean>(false);
  // const [mobileMenu, setMobileMenu] = useState<boolean>(false);
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const [searchNews, setSearchNews] = useState<SearchData[]>([]);

  // for sidebar handle
  const handleSideBar = (): void => {
    setSideBar(!sideBar);
  };

  //  for searchbox active close
  const handleSearchBar = (): void => {
    setSearchBarActive(!searchBarActive);
  };

  // search result data
  const handleSearchNews = (data: SearchData[]) => {
    setSearchNews(data);
  };

  //  for Mobile menu active close
  // const handleMobileMenu = (): void => {
  //   setMobileMenu(!mobileMenu);
  // };

  // for scrolling navbar active and hidden

  // const windowHeight = 320;
  useEffect(() => {
    window.onscroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
    };
  });

  // useEffect(()=>{
  //   function windowScroll() {
  //     if (window.scrollY >= 300) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   }
  //   window.addEventListener("scroll", windowScroll);
  // })

  // theme change
  useEffect(() => {
    themeChange(false);
    // false parameter is required for react project
  }, []);

  const handleLogOut = (): void => {
    signOut(auth);
  };
  if (loading) {
    return <Loading></Loading>;
  }

  console.log(user);
  return (
    <>
      <div
        className={
          isScrolled ? "hidden " : "navbar border-b border-b-info pt-4"
        }
      >
        {/* starting Parts */}
        <div className="navbar-start">
          {/* mobile menu start */}

          <MobileNavbar sideBar={sideBar} handleSideBar={handleSideBar} />

          {/* mobile menu end */}

          {/* date and Archive section */}
          <div>
            <button onClick={handleSideBar} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-secondary h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <div className="hidden lg:block">
              {/* date import from components\Share\Header\TodayDate.js: */}
              <div className="  mt-1 text-secondary text-sm font-medium ">
                <TodayDate />
              </div>
              <div className="text-base font-bold mt-1 text-secondary">
                <Clock />
              </div>
              <div className="text-base mt-1 text-secondary">
                <Link to="/archives">Archive</Link>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden md:flex lg:hidden ml-3">
            <Link to="/" className=" text-xl">
              <h1 className="name-title text-secondary ml-1">
                The Delta Times
              </h1>
            </Link>
          </div>
        </div>

        {/* middle parts */}
        <div className="navbar-center flex md:hidden lg:flex">
          <Link to="/" className=" text-xl font-display">
            <h1 className=" name-title text-secondary">The Delta Times</h1>
          </Link>
        </div>
        {/* last parts of main navbar */}
        <div className="navbar-end ">
          <div className="div">
            <div className="flex justify-center  ">
              <div
                className={
                  searchBarActive
                    ? "flex mt-1 mr-2 transition-left duration-500 "
                    : "mr-2 mt-1 hidden"
                }
              >
                <Search onSearchData={handleSearchNews} />
              </div>
              <button
                onClick={() => handleSearchBar()}
                className="btn btn-ghost btn-circle hidden md:flex"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-secondary  h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              {/* user details */}
              <div className="dropdown dropdown-end">
                <label
                  tabIndex={1}
                  className="text-secondary  btn btn-ghost btn-circle mx-1 flex items-center  "
                >
                  {user ? (
                    <h5 className="btn btn-ghost btn-circle bg-primary">
                      {user?.displayName?.slice(0, 2)}
                    </h5>
                  ) : (
                    <FaUser className="text-lg" />
                  )}
                  {/* <FaUser className="text-lg" /> */}
                </label>

                <div
                  tabIndex={1}
                  className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box  w-40"
                >
                  <ul tabIndex={1} className="">
                    <li className="mb-2">
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary mr-3 py-3 font-medium text-sm"
                            : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                        }
                      >
                        <BiEdit /> <span>Edit</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary mr-3 py-3 font-medium text-sm"
                            : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                        }
                      >
                        <BiCog /> <span>Sign up</span>
                      </NavLink>
                    </li>
                    <li className="mb-2">
                      <NavLink
                        to="/signin"
                        className={({ isActive }) =>
                          isActive
                            ? "text-primary mr-3 py-3 font-medium text-sm"
                            : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                        }
                      >
                        <BiLogInCircle /> <span>Sign in</span>
                      </NavLink>
                    </li>
                    {user && (
                      <li className="mb-2">
                        <button
                          onClick={handleLogOut}
                          className="text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                        >
                          <BiLogOutCircle /> Logout
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              {/* dark mood active */}
              <DarkMod />
            </div>

            {/* Weather Section */}
            <div className="hidden md:flex text-secondary justify-end text-sm font-normal ">
              <Weather />
            </div>
          </div>
        </div>
      </div>

      {/* last parts of navbar */}
      <div
        className={
          isScrolled
            ? "hidden"
            : '"navbar-center hidden lg:block mt-1 mb-2 border-b border-b-secondary   "'
        }
      >
        <ul
          tabIndex={0}
          className="flex flex-row justify-center items-center border-b border-b-secondary mb-1 mt-2"
        >
          {headerData.menuItems.map((item) => (
            <li key={item.text} className="space-x-6 mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary mr-3 py-3 font-medium text-sm"
                    : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* scrolling navbar */}
      <div
        className={
          isScrolled
            ? "navbar-center  xl:px-12 md:px-8 sm:px-4 fixed inset-x-0 bg-base-100 top-0 backdrop-blur-4xl z-50 w-full hidden sm:block mb-2   max-w-7xl mx-auto "
            : "hidden"
        }
      >
        <ul
          tabIndex={0}
          className="flex flex-row justify-center items-center border-b border-b-secondary mb-1 mt-2"
        >
          {headerData.menuItems.map((item) => (
            <li key={item.text} className="space-x-6 mb-2">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-primary mr-3 py-3 font-medium text-sm"
                    : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                }
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* mobile scrolling navbar */}
      <div
        className={
          isScrolled
            ? "navbar-center flex justify-between items-center min-h-12  px-4 xl:px-12 md:px-8 sm:px-4 fixed inset-x-0 bg-base-100 top-0 backdrop-blur-4xl z-50 w-full sm:hidden mb-2   max-w-7xl mx-auto "
            : "hidden"
        }
      >
        <button onClick={handleSideBar} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-secondary h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <h1 className="text-lg font-medium text-neutral-content">
          The Delta Times
        </h1>
        <MobileNavbar sideBar={sideBar} handleSideBar={handleSideBar} />
      </div>
      {searchNews?.map((n) => (
        <SearchResult
          key={n._id}
          image={n.image}
          title={n.title}
          description={n.description}
        />
      ))}
    </>
  );
};

export default Header;
