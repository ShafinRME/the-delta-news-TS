import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loadings from "../../../../components/Loading/Loadings";
import UserDeleteConfirmModal from "../../DashboardComponent/Modal/UserDeleteConfirmModal";
import UserModeratorConfirmModal from "../../DashboardComponent/Modal/UserModeratorConfirmModal";
import UserAdminConfirmModal from '../../DashboardComponent/Modal/UserAdminConfirmModal' 
import UserRow from "../../DashboardComponent/TableRow/UserRow";
import UserGeneralConfirmModal from "../../DashboardComponent/Modal/UserGeneralConfirmModal";

interface UserData {
  _id?: string;
  email?: string;
  name?: string;
  role?: string;
  Index?: number;
}

const AllUsers = () => {
  const [user, setUser] = useState<any>(null);
  const url = `https://the-delta-times-server.vercel.app/api/users`;
  const { isLoading, isError, error, refetch, data } = useQuery<
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
    return <h1>  {error.message}</h1>;
  }
  return (
    <>

      {data?.length <= 0 && user !== null ? (
        <Loadings />
      ) : (
        <>
          <section className="p-5 text-lg lg:max-w-6xl mx-auto font-semibold text-left text-accent">
            <h1>Total Users {data?.length}</h1>
          </section>
          <section className="lg:max-w-6xl mx-auto overflow-x-auto">
            <table className="table rounded-0 w-full">
              {/* table title */}
              <thead className="static top-20 w-full rounded-0">
                <tr>
                  <th>SL</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Make Moderator</th>
                  <th>Make Admin</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* table data */}
              <tbody>
                {data?.map((user, index) => (
                  <UserRow
                    key={user._id}
                    index={index}
                    setUser={setUser}
                    user={user}
                  />
                ))}
              </tbody>
            </table>

            {user && (
              <UserDeleteConfirmModal
                setUser={setUser}
                refetch={refetch}
                user={user}
              />
            )}
            {user && (
              <UserModeratorConfirmModal
                setUser={setUser}
                refetch={refetch}
                user={user}
              />
            )}
            {user && (
              <UserAdminConfirmModal
                setUser={setUser}
                refetch={refetch}
                user={user}
              />
            )}
            {user && (
              <UserGeneralConfirmModal
                setUser={setUser}
                refetch={refetch}
                user={user}
              />
            )}
          </section>
        </>
      )}
    </>
  );
};

export default AllUsers;
