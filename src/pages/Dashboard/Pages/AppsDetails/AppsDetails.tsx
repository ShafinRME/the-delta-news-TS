// import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import Loadings from "../../../../components/Loading/Loadings";
import welcome from "../../../../Assets/images/dashboard/welcome.png"

import "../Moderator/Moderator.css";
import TotalCard from "../../DashboardComponent/Card/TotalCard";

const AppsDetails = () => {
  // interface UserData {
  //   _id?: string;
  //   email?: string;
  //   name?: string;
  //   role?: string;
  //   Index?: number;
  // }
  // const [user, setUser] = useState<any>(null);
  // const url = `https://the-delta-times-server.vercel.app/api/users`;
  // const { isLoading, isError, error,  data } = useQuery<
  //   UserData[],
  //   Error
  // >(["allNews"], () =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   }).then((res) => res.json())
  // );

  // if (isLoading) {
  //   return <Loadings />;
  // }

  // if (isError) {
  //   return <h1>{error.message}</h1>;
  // }
  return (
    <>
      <section className="max-w-5xl mx-auto pb-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <div className="hero bg-base-200 xl:px-8 shadow-sm rounded-lg xl:pt-3 pb-5">
              <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                  src={welcome}
                  className="max-w-xs w-40 lg:w-72 lg:h-56"
                  alt="welcome"
                />
                <div>
                  <h1 className="text-lg lg:text-2xl font-semibold text-secondary">
                    Welcome back! <br /> Delta Times
                  </h1>
                  <p className="pt-4 pb-6 text-neutral font-medium text-sm">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut
                    assumenda excepturi exercitationem quasi
                  </p>
                  <Link
                    to="/"
                    className="px-4 py-2.5 bg-primary-content text-sm font-medium text-white rounded-lg hover:opacity-90 hover:transition-opacity duration-500"
                  >
                    Go Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-4">
            <div className="card bg-base-200 rounded-lg  shadow-sm xl:py-4">
              <div className="card-body">
                <h2 className="card-title text-secondary text-lg lg:text-2xl font-semibold">
                  Our Advertisement Services
                </h2>
                <p className="py-3 text-neutral font-medium text-sm">
                  Our News two services premium Adds and live TV chancels. we
                  make your adds and you can enjoy add free tv chanel.
                </p>
                <div className="card-actions justify-end pt-1">
                  <div className="badge badge-outline">Adds</div>
                  <div className="badge badge-outline">Live TV</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="div">
            <TotalCard
              title="Total Active user"
              details="All user"
              total="15,000"
            />
          </div>
          <div className="div">
            <TotalCard
              title="Total Ads Sells"
              details="Only Ads"
              total="12,000"
            />
          </div>
          <div className="div">
            <TotalCard
              title="Total Payment"
              details="All Payment"
              total="$10,000"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AppsDetails;
