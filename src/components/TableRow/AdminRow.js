import React from 'react';

const AdminRow = ({ allNewNewsList }) => {
  return (
    <>
      {allNewNewsList.map((news, index) => (
        <tr key={index + 1} className=" font-medium ">
          <td>{index + 1}</td>
          <td>{news.title}</td>
          <td>{news.date}</td>
          <td className="text-primary-content">View</td>
          <td className="text-blue-600 dark:text-blue-500">Edit</td>
          <td className="text-error-content">Published</td>
          <td className="text-red-500">Delete</td>
        </tr>
      ))}
    </>
  );
};

export default AdminRow;