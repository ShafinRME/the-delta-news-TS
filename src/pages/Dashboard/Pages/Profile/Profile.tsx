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
      <div className="card w-96 bg-base-200 shadow-sm">
        <div className="card-body">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={data?.photoUrl} alt={data?.name} />
            </div>
          </div>
          <h2 className="card-title">{data?.name}</h2>
          <p>{data?.email}</p>
          <div className="card-actions">
            <div className="badge badge-outline">{data?.role}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
