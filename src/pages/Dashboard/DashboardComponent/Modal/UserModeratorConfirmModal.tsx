import { FC } from "react";
import { toast } from "react-toastify";

interface ModeratorUsersProps {
  user: {
    email: string;
    _id: string;
    name: string;
    role: string;
  };
  refetch: any;
  setUser: any;
}

const UserModeratorConfirmModal: FC<ModeratorUsersProps> = ({
  user,
  refetch,
  setUser,
}) => {
  const { name, email } = user;
  const mokeModerator = () => {
    const url = `https://the-delta-times-server.vercel.app/api/users/moderator/${email}`;
    fetch(url, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error(`Failed to make an Admin`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data)
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`successfully make an Admin`);
        }
      });
  };
  return (
    <>
      <input
        type="checkbox"
        id="user-moderator-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box py-3">
          <svg
            aria-hidden="true"
            className="mx-auto mb-4 w-10 h-10 text-green-500 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>

          <h1 className="text-base font-description text-center text-semibold text-primary-content">
            Are you want to make Moderator{" "}
            <span className="font-bold text-fuchsia-500 ">{name}</span>?
          </h1>

          {/* cancel btn */}
          <div className="modal-action  justify-center px-4">
            <label
              htmlFor="user-moderator-confirm-modal"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 "
              onClick={() => setUser(null)}
            >
              No, Cancel
            </label>
            <button
              type="submit"
              className=" bg-primary-content text-white hover:opacity-90 transition-opacity duration-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={() => mokeModerator()}
            >
              Yes, I&lsquo;m sure
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserModeratorConfirmModal;
