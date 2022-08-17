import { data } from "autoprefixer";
import Link from "next/link";
import React from "react";
import { FaUser } from "react-icons/fa";
import dashboardData from "../../data/DashboardData";

const DashboardCollapseMenu = () => {
  return (
    <>
      <div className="px-2 ">
        {dashboardData.management.map((item) => (
          <div key={item.id} className="collapse collapse-arrow -mb-4">
            <input type="checkbox" />
            <div className="collapse-title flex items-center text-sm font-medium text-neutral capitalize ">
              <span className="text-sm mr-2">{item.icon}</span>
              {item.title}
            </div>
            <div className="collapse-content ">
              <ul className=" space-y-4  ">
                {item.menus.map((item) => (
                  <li key={item.id}>
                    <Link href={`/dashboard/${item.path}`}>
                      <a className="flex ml-4 items-center text-sm font-medium text-neutral">
                        <p className=" lg:flex">{item.text}</p>
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DashboardCollapseMenu;
