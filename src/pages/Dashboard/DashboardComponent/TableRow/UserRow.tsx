import React, { FC } from "react";

type UserRowProps = {
  user: {
    email?: string;
    id?: string;
    name?: string;
    role?: string;
  };
  index: number;
  setUser: React.Dispatch<React.SetStateAction<any>>;
};

const UserRow: FC<UserRowProps> = ({ user, index, setUser }) => {
  const { name, email, role } = user;
  return (
    <>
      <tr className="moderator-table hover ">
        <th>{index + 1}</th>
        <td>{name}</td>
        <td>
          <span className="text-base">{email}</span>
        </td>
        <td>
          {role === "admin" && <span className="text-primary ">{role}</span>}
          {role === "moderator" && (
            <span className="text-green-600">{role}</span>
          )}
          {role === "general" && <span className="text-neutral">{role}</span>}
        </td>
        {role === "moderator" ? (
          <>
            <td className="font-medium text-sm  hover:underline capitalize ">
              <label
                onClick={() => setUser(user)}
                htmlFor="user-general-confirm-modal"
                className=" text-red-500 btn btn-xs btn-link"
              >
                Remove
              </label>
            </td>
          </>
        ) : (
          <>
            <td className="font-medium text-sm  hover:underline capitalize ">
              <label
                onClick={() => setUser(user)}
                htmlFor="user-moderator-confirm-modal"
                className=" text-green-600  btn btn-xs btn-link"
              >
                Moderator
              </label>
            </td>
          </>
        )}

        {role === "admin" ? (
          <>
            <td className="font-medium text-sm  hover:underline capitalize ">
              <label
                onClick={() => setUser(user)}
                htmlFor="user-general-confirm-modal"
                className=" text-red-500 btn btn-xs btn-link"
              >
                Remove
              </label>
            </td>
          </>
        ) : (
          <>
            <td className=" font-medium text-sm  hover:underline capitalize ">
              <label
                onClick={() => setUser(user)}
                htmlFor="user-admin-confirm-modal"
                className=" text-primary btn btn-xs btn-link"
              >
                Admin
              </label>
            </td>
          </>
        )}
        <td className=" font-medium text-sm  hover:underline capitalize ">
          <label
            onClick={() => setUser(user)}
            htmlFor="user-delete-confirm-modal"
            className=" text-red-600 btn btn-xs btn-link"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
