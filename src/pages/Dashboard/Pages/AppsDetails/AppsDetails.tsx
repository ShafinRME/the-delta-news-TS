import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import Loadings from "../../../../components/Loading/Loadings";

import "../Moderator/Moderator.css";

const AppsDetails = () => {
  interface UserData {
    _id?: string;
    email?: string;
    name?: string;
    role?: string;
    Index?: number;
  }
  // const [user, setUser] = useState<any>(null);
  const url = `https://the-delta-times-server.vercel.app/api/users`;
  const { isLoading, isError, error,  data } = useQuery<
    UserData[],
    Error
  >(["allNews"], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loadings />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <>
      <div className="stats bg-base-100 text-primary-content">
        <div className="stat">
          <div className="stat-title">Total Users</div>
          <div className="stat-value">{data?.length}</div>
          <div className="stat-actions">
            <button className="btn btn-sm btn-success">Regular user</button>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title">Current balance</div>
          <div className="stat-value">$89,400</div>
          <div className="stat-actions">
            <button className="btn btn-sm">Withdrawal</button>
            <button className="btn btn-sm">deposit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppsDetails;
