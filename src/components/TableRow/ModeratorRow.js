import React from "react";

const ModeratorRow = ({ news, index }) => {
  const { id, title, date } = news;
  return (
    <>
      <tr >
        <th>{index + 1}</th>
        <td>{date}</td>
        <td>{title}</td>
        <td>
          <label htmlFor="my-modal-3" className=" modal-button">
            View
          </label>
        </td>
        <td>Edit</td>
        <td>Publish</td>
        <td>Delete</td>
      </tr>

      {/* view modal */}

      
    </>
  );
};

export default ModeratorRow;
