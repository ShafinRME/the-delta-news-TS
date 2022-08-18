import { useState } from "react";
import {Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardComponent/DashboardNavbar";
import DashboardSidebar from "./DashboardComponent/DashboardSidebar";

const Dashboard = () => {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const handleSidebar = (): void => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className=" bg-base-100 pb-10 flex lg:-px-4rem">
        {/* sidebar parts */}
        <div className="hidden xl:flex xl:fixed w-72 ">
          <DashboardSidebar handleSidebar={handleSidebar} />
        </div>

        <div className="z-50 fixed flex   xl:hidden overflow-auto w-72">
          <div
            className={
              sidebar
                ? " transition-left duration-500 backdrop-blur-xl fixed inset-y-0 left-0 w-72   "
                : " transition-left duration-500 backdrop-blur-2xl fixed inset-y-0 -left-full w-72 "
            }
          >
            <DashboardSidebar handleSidebar={handleSidebar} />
          </div>
        </div>

        {/* main parts */}
        <div className=" w-full  xl:ml-64 xl:px-6">
          <div className=" z-30 flex justify-center sticky top-0 lg:ml-2">
            <DashboardNavbar handleSidebar={handleSidebar} />
     
          </div>
          <div className="  pt-10  mx-auto px-4 md:px-8  xl:px-4    xl:overflow-y-hidden ">
            {/* {children} */}
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
