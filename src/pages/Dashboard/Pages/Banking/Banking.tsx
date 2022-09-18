import { useQuery } from "@tanstack/react-query";
import { BiDotsVerticalRounded, BiDownload, BiTrash } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Loadings from "../../../../components/Loading/Loadings";

interface UserData {
  _id?: string;
  email?: string;
  name?: string;
  role?: string;
  photoUrl?:string;
  Index?: number;
}

const Banking = () => {
  const url = `https://the-delta-times-server.vercel.app/api/users`;
  const { isLoading, isError, error, data } = useQuery<UserData[], Error>(
    ["allNews"],
    () =>
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }).then((res) => {
        if(!res.ok){
          throw Error("expire token Please login again and reload");
        }
        return res.json();
      })
  );
  if (isError) {
    return <h1> {error.message}</h1>;
  }
  if (isLoading) {
    return <Loadings />;
  }

  return (
    <>
      <div className=" lg:max-w-4xl mx-auto overflow-x-auto overflow-y-hidden">
        <h1 className="text-xl font-medium text-primary-content pb-4">
          Recent Transitions
        </h1>
        <table className="table table-compact w-full">
          <thead className=" w-full">
            <tr>
              <th>Description</th>
              <th>Date</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data)
              ? data.map((user) => (
                  <tr key={user._id} className="moderator-table hover">
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-12 h-12">
                            <img src={user?.photoUrl} alt={user?.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                          <div className="text-sm opacity-50">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      28/8/2022
                      <br />
                      <span className="">10.59 PM</span>
                    </td>
                    <td>$102</td>
                    <td>unpaid</td>
                    <td>
                      <div className="dropdown dropdown-end">
                        <label
                          tabIndex={0}
                          className="btn btn-circle btn-ghost btn-xs text-info"
                        >
                          <BiDotsVerticalRounded className="text-2xl text-primary" />
                        </label>
                        <div
                          tabIndex={0}
                          className="card compact dropdown-content shadow bg-base-100 rounded-box w-36"
                        >
                          <div className="card-body w-36">
                            <ul>
                              <li className="mb-2">
                                <NavLink
                                  to="/"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-primary mr-3  font-medium text-sm flex"
                                      : "text-secondary mr-3  font-medium text-sm hover:text-primary transition-colors duration-500 flex items-center "
                                  }
                                >
                                  <BiDownload />{" "}
                                  <span className="ml-4">Download</span>
                                </NavLink>
                              </li>
                              <li className="mb-2">
                                <NavLink
                                  to="/"
                                  className={({ isActive }) =>
                                    isActive
                                      ? "text-primary mr-3 font-medium text-sm flex"
                                      : "text-secondary mr-3 font-medium text-sm hover:text-primary transition-colors duration-500 flex items-center "
                                  }
                                >
                                  <BiTrash />{" "}
                                  <span className="ml-4">Delete</span>
                                </NavLink>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Banking;
