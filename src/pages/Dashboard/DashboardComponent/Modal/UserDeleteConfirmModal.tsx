import { FC } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import { toast } from "react-toastify";

interface User {
  user: {
    email?: string;
    _id?: string;
    name?: string;
    role?: string;
  };
}

interface UserRowProps{
  user: {
    email: string ;
    _id: string;
    name: string;
    role: string;
  };
  setUser: React.Dispatch<React.SetStateAction< User | {}>>;
};

const UserDeleteConfirmModal: FC<UserRowProps> = ({
  user,
  // refetch,
  setUser,
}) => {
  const { name, _id, email } = user;
  const handleDelete = () => {
    fetch(`https://auto-parts0.herokuapp.com/product/${_id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Product: ${name} is deleted`);
          setUser({});
          // refetch();
        }
      });
  };

  return (
    <>
      <input
        type="checkbox"
        id="user-delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal sm:modal-middle">
        <div className="modal-box py-3">
          <label
            htmlFor="user-delete-confirm-modal"
            onClick={() => setUser({})}
            className="btn btn-sm text-primary bg-transparent btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
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

          <h1 className="text-base text-center text-semibold text-primary-content">
            Are You Want to Delete User?
          </h1>

          {/* cancel btn */}
          <div className="modal-action  justify-center px-4">
            <label
              htmlFor="my-modal-6"
              className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600 "
            >
              No, Cancel
            </label>
            <button
              type="submit"
              className=" bg-primary-content text-white hover:opacity-90 transition-opacity duration-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
              onClick={() => handleDelete()}
            >
              Yes, I&lsquo;m sure <HiOutlineUpload className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDeleteConfirmModal;
