import React, { FC, useState } from "react";
import ModeratorEditModal from "../Modal/ModeratorEditModal";
import ModeratorViewModal from "../Modal/ModeratorViewModal";
import { ModeratorRowProps } from "../../../../utility/Typs";



const ModeratorRow: FC<ModeratorRowProps> = ({ news, index }) => {
  const { slug, reference, title, date } = news;
  const [singleNews, setSingleNews] = useState<string | undefined>(undefined);

  const newsHandle = () => {
    return setSingleNews(slug);
  };

  return (
    <>
      <tr className="moderator-table hover ">
        <td>{index + 1}</td>
        <td>{date}</td>
        <td className=" flex flex-col">
          <span className="text-base">{`${title?.slice(0, 50)} ...`}</span>
          <span className="text-xs">Editor: {reference}</span>
        </td>

        <td>
          <label
            onClick={newsHandle}
            htmlFor="moderator-news-view-modal"
            className=" cursor-pointer modal-button font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline capitalize"
          >
            View
          </label>
        </td>

        <td className="font-medium  cursor-pointer  text-sm  text-blue-600 dark:text-blue-500 hover:underline capitalize">
          <label
            onClick={newsHandle}
            htmlFor="moderator-news-edit-modal"
            className=" cursor-pointer modal-button font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline capitalize"
          >
            Edit
          </label>
        </td>
        <td>Publish</td>
        <td className="text-red-600 font-medium text-sm  hover:underline capitalize ">
          Delete
        </td>
      </tr>
      {singleNews && (
        <ModeratorViewModal
          singleNews={singleNews}
          setSingleNews={setSingleNews}
        />
      )}
      {singleNews && (
        <ModeratorEditModal
          singleNews={singleNews}
          setSingleNews={setSingleNews}
        />
      )}
    </>
  );
};

export default ModeratorRow;
