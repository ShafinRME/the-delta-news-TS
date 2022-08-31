import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Loadings from "../../../../components/Loading/Loadings";
import UserDeleteConfirmModal from "../../DashboardComponent/Modal/UserDeleteConfirmModal";
// import UserDeleteConfirmModal from "../../DashboardComponent/Modal/UserDeleteConfirmModal";
import UserRow from "../../DashboardComponent/TableRow/UserRow";

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
    return <h1>{error.message}</h1>;
  }

  console.log("user", user);
  return (
    <>
      <section className="p-5 text-lg font-semibold text-left text-accent">
        All Users
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
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
      </section>
    </>
  );
};

export default AllUsers;
