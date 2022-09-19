import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "@tanstack/react-query";
import Loadings from "../../../../components/Loading/Loadings";
import auth from "../../../../config/firebaseConfig.init";

interface UserData {
  _id?: string;
  email?: string;
  name?: string;
  role?: string;
  photoUrl?: string;
}

const Profile = () => {
  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  const url = `https://the-delta-times-server.vercel.app/api/users/${userEmail}`;
  const { isLoading, isError, error, data } = useQuery<UserData, Error>(
    ["allNews"],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => {
        if (!res.ok) {
          throw Error(" expire token Please login again and reload");
        }
        return res.json();
      })
  );
  

  if (isLoading) {
    return <Loadings />;
  }
  if( isLoading || data === undefined){
    return <Loadings />;
  }
  if (isError) {
    return <h1> {error.message}</h1>;
  }
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4">
          <div className="card w-96 max-w-[100%] max-h-56 bg-base-200 shadow-sm">
            <div className="card-body ">
              <div className="avatar">
                <div className="w-20 rounded-full">
                  <img src={data?.photoUrl} alt={data?.name} />
                </div>
              </div>
              <h2 className="card-title capitalize -mb-2 text-secondary">
                Name: {data?.name}
              </h2>
              <p className="text-neutral-content -mb-2">Email: {data?.email}</p>
              <div className="card-actions">
                <div className="text-neutral-content">
                  Role:
                  <span className="badge badge-outline ml-2 text-primary">
                    {data?.role}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {data?.role === "general" && (
          <div className="lg:col-span-8">
            <div className="card  max-w-[100%] max-h-56 md:min-h-[14rem]  bg-base-200 shadow-sm">
              <div className="card-body">
                <h2 className="card-title capitalize  text-secondary ">
                  package:
                  <span className="text-primary">Advertisement</span>
                </h2>
                <h5 className="text-neutral-content ">Start: 12-9-2022</h5>
                <h6 className="text-neutral-content ">
                  Expire: <span className="text-red-400">18-9-2022</span>
                </h6>
                <p className="text-neutral-content">
                  Status:
                  <span className="badge badge-outline ml-2 text-primary">
                    Paid
                  </span>
                </p>
                
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
