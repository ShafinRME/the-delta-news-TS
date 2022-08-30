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
        <td>{role}</td>
        <td>Make Admin</td>
        <td className="text-red-600 font-medium text-sm  hover:underline capitalize ">
          <label
            onClick={() => setUser(user)}
            htmlFor="user-delete-confirm-modal"
            className=" btn btn-xs btn-link"
          >
            Delete
          </label>
        </td>
      </tr>
    </>
  );
};

export default UserRow;
