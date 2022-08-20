import { FC } from "react";
import ModeratorViewModal from "../Modal/ModeratorViewModal";

type Props = {
  news: {
    _id?: string;
    id?: string;
    title: string;
    description?: string;
    image?: string;
    date?: string;
    slug?: string;
    reference?: string;
  };
  index: number;
};

const ModeratorRow: FC<Props> = ({ news, index }) => {
  const { reference, title, date } = news;
  return (
    <>
      <tr className="moderator-table hover ">
        <th>{index + 1}</th>
        <td>{date}</td>
        <td>
          <div className="text-base">{title.slice(0, 50)}</div>
          <div className="text-xs">Editor: {reference}</div>
        </td>
        <td>
          <label
            htmlFor="my-modal-3"
            className=" modal-button font-medium text-sm text-blue-600 dark:text-blue-500 hover:underline capitalize"
          >
            View
          </label>
        </td>
        <td className="font-medium text-sm  text-blue-600 dark:text-blue-500 hover:underline capitalize">
          Edit
        </td>
        <td>Publish</td>
        <td className="text-red-600 font-medium text-sm  hover:underline capitalize ">
          Delete
        </td>
      </tr>

      <ModeratorViewModal />
    </>
  );
};

export default ModeratorRow;
