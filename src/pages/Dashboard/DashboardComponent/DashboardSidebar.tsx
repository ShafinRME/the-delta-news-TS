import dashboardData from "../../../data/DashboardData";
import DashboardCollapseMenu from "./DashboardCollapseMenu";
import DashboardSectionTitle from "./DashboardSectionTitle";
import Logo from "../../../Assets/images/logo/icon.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FC } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../config/firebaseConfig.init";



interface dashboardSidebarProps {
  handleSidebar: () => void;
  
}

// type Props = {
//   src?: string | undefined;
// };
const DashboardSidebar: FC<dashboardSidebarProps> = ({ handleSidebar }) => {
  
  const [user ] = useAuthState(auth)
  console.log(user);

  return (
    <>
      <aside>
        <div className="shadow-3xl lg:col-span-2  pl-8 pr-4 py-2 bg-base-100 h-screen lg:overflow-x-hidden overflow-scroll  ">
          {/* website name  */}
          <div className="my-4 flex justify-between items-center ">
            <img src={Logo} alt="log" width="60" height="60" />
            <span className="hidden xl:flex">
              <BsArrowRight className="text-lg" />
            </span>
            <span onClick={handleSidebar} className="flex xl:hidden">
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
            </span>
          </div>
          {/* user details */}
          <div className="mt-4 mb-8 flex  bg-warning shadow-sm rounded-md py-2 px-4 w-56 ">
            {/* user image */}
            <div className="avatar">
              <div className="w-12 rounded-full ">
                {/* <img
                  src="https://placeimg.com/192/192/people"
               
                  alt="user name"
                  width="100"
                  height="100"
                /> */}
                <p className=" btn bt-ghost btn-circle text-primary-content">
                  {user?.displayName?.slice(0, 2)}
                </p>
              </div>
            </div>
            <div className="ml-3">
              {/* user name */}
              <h6 className="text-base text-neutral capitalize font-semibold">
                {user?.displayName}
              </h6>
              {/* user role */}
              <p className="text-sm font-semibold text-into-content ">
                {user?.displayName}
              </p>
            </div>
          </div>
          {/* user end */}
          {/* apps sections */}
          <div className="mb-6">
            <DashboardSectionTitle title="General" />
            <ul className=" space-y-4 px-2 ">
              {dashboardData.app.map((item) => (
                <li key={item.id}>
                  <Link
                    className="flex items-center text-sm font-medium text-neutral"
                    to={`${item.path}`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    <p className=" lg:flex">{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* management sections */}
          <div className="mb-6">
            <DashboardSectionTitle title="Management" />
            {/* dashboard sidebar from DashboardCollapseMenu component */}
            <DashboardCollapseMenu />
          </div>
          {/* mail sections */}
          <div className="mb-6">
            <DashboardSectionTitle title="Mail " />
            <ul className=" space-y-4 px-2 ">
              {dashboardData.mails.map((item) => (
                <li key={item.id}>
                  <Link
                    to={`${item.path}`}
                    className="flex items-center text-sm font-medium text-neutral"
                  >
                    <span className="mr-3">{item.icon}</span>
                    <p className=" lg:flex">{item.text}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="flex justify-center ">
              <button className="btn ">Logout</button>
            </div> */}
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
