import React from "react";
import { useForm } from "react-hook-form";
import useAllNews from "../../hooks/allNews";
import { SearchData } from "../Share/Header/Header";

interface FormInput {
  search: string;
}
export interface Props {
  title?: string;
  _id?: string;
  description?: string;
  image?: string;
  onSearchData: (data: SearchData[]) => void;
}

const Search: React.FC<Props> = (props) => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInput>();
  const [newses] = useAllNews();

  const handleSearch = (event: any): void => {
    const searchText = event?.search?.toLowerCase();
    const match = newses.filter((news) =>
      news?.title?.toLowerCase().includes(searchText)
    );
    props.onSearchData(match);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleSearch)}
        className=""
      >
        <div className="relative">
          <input
            {...register("search", {
              required: {
                value: true,
                message: "Filed is required",
              },
              minLength: {
                value: 4,
                message: "Must be 4 characters or longer",
              },
            })}
            type="text"
            id="search"
            className="block py-2.5 w-60 pl-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none  dark:placeholder-gray-400 "
            placeholder="Search"
            required
          />

          <input
            type="submit"
            className="text-white absolute  right-1 bottom-[3px] bg-black hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            value="Search"
          />
        </div>
      </form>
      {/* <label className="label">
        {errors.search && (
          <small className=" text-red-600">{errors.search.message}</small>
        )}
      </label> */}
    </div>
  );
};

export default Search;
