import React, { FC, useState } from "react";
import ModeratorEditModal from "../Modal/ModeratorEditModal";
import ModeratorViewModal from "../Modal/ModeratorViewModal";
import { ModeratorRowProps } from "../../../../utility/Typs";
import { BiDotsVerticalRounded,  BiEditAlt,  BiShow,  BiTrash } from "react-icons/bi";


const ModeratorRow: FC<ModeratorRowProps> = ({ news, index }) => {
  const { slug, reference, title, date,image } = news;
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
          <span className="text-base">{`${title?.slice(0, 40)} ...`}</span>
          <span className="text-xs">Editor: {reference?.slice(0, 17)}</span>
        </td>
        <td>
          <img
            src={image}
            alt={`${title?.slice(0, 40)} ...`}
            className=" w-10 h-10"
          />
        </td>
        <td>Publish</td>
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
                    <label
                      onClick={newsHandle}
                      htmlFor="moderator-news-edit-modal"
                      className=" cursor-pointer modal-button font-medium text-base  text-blue-600 dark:text-blue-500 hover:underline capitalize flex items-center"
                    >
                      <BiEditAlt className="mr-2 text-lg" /> Edit
                    </label>
                  </li>
                  <li className="mb-2">
                    <label
                      onClick={newsHandle}
                      htmlFor="moderator-news-view-modal"
                      className=" cursor-pointer modal-button font-medium text-base text-blue-600 dark:text-blue-500 hover:underline capitalize flex items-center"
                    >
                      <BiShow className="mr-2 text-lg " /> View
                    </label>
                  </li>
                  <li className="mb-2">
                    <label
                      onClick={newsHandle}
                      htmlFor="moderator-news-view-modal"
                      className=" cursor-pointer modal-button font-medium text-base text-red-400 dark:text-red-400 hover:underline capitalize flex items-center  "
                    >
                      <BiTrash className="mr-2 text-lg" /> Delete
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
