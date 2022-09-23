import { signOut } from "firebase/auth";
import React, { FC} from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  BiCog,
  BiEdit,
  BiLogInCircle,
  BiLogOutCircle,
  BiUserCircle,
} from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
// import { themeChange } from "theme-change";
// import DarkMod from "../../../components/Share/Header/DarkMod";
import auth from "../../../config/firebaseConfig.init";

interface dashboardNavbarProps {
  handleSidebar: () => void;
}

const DashboardNavbar: FC<dashboardNavbarProps> = ({ handleSidebar }) => {
  const [user] = useAuthState(auth);
  // theme change
  // useEffect(() => {
  //   themeChange(false);
  //   // false parameter is required for react project
  // });
  const handleLogOut = (): void => {
    signOut(auth);
  };
  return (
    <>
      <div className=" navbar bg-base-100  lg:px-6   top-0  w-[100%] shadow-3xl  rounded-b-md">
        <div className="flex-1 items-center">
          <button onClick={handleSidebar} className=" flex xl:hidden  ">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <Link className=" ml-2 xl:ml-0 normal-case text-xl" to="/">
            Home
          </Link>
        </div>
        <div className="flex-none">
          {/* <DarkMod /> */}
          {/* notification */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle mx-3">
              <div className="indicator">
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-72 bg-base-100 shadow"
            >
              <div className="card-body">
                <ul>
                  <li className="mb-2 pb-2 border-b border-warning-content">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary mr-3 py-3 font-medium text-sm"
                          : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                      }
                    >
                      <span>
                        ‘Mindhunter’ writer Dominic Orlando dies at 57..
                      </span>
                    </NavLink>
                  </li>
                  <li className="mb-2 pb-2 border-b border-warning-content">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary mr-3 py-3 font-medium text-sm"
                          : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                      }
                    >
                      <span>
                        ‘Squid Game’ characters drawn from director’s life..
                      </span>
                    </NavLink>
                  </li>
                  <li className="mb-2 pb-2 border-b border-warning-content">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary mr-3 py-3 font-medium text-sm"
                          : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                      }
                    >
                      <span>Netflix renews ‘Arcane’ for season 2..</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* user details */}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <p className=" btn bg-base-200 border-0 btn-circle text-primary-content">
                  {user.displayName?.slice(0, 2)}
                </p>
              ) : (
                <>
                  <div className="w-10 rounded-full">
                    <img
                      src="https://placeimg.com/80/80/people"
                      alt="user "
                      width="100"
                      height="100"
                    />
                  </div>
                </>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {user ? (
                <>
                  <li className="mb-2">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-primary mr-3 py-3 font-medium text-sm"
                          : "text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                      }
                    >
                      <BiUserCircle /> <span>Profile</span>
                      <span className="badge">New</span>
                    </NavLink>
                  </li>
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
                    <button
                      className="text-secondary mr-3 py-3 font-medium text-sm hover:text-primary transition-colors duration-500"
                      onClick={handleLogOut}
                    >
                      <BiLogOutCircle /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
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
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavbar;
