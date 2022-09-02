import React from "react";

interface CommentsProps {
  value: string;

  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Comments: React.FC<CommentsProps> = ({ handleClick, handleOnChange }) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit clicked", e);
  };

  // const formRef = React.useRef();
  return (
    <>
      <form onSubmit={() => handleSubmit}>
        <h1 className="pt-8 text-3xl font-bold mb-6 ">
          <span className="border-b-2 border-warning-content pb-1">
            Comments
          </span>
        </h1>
        <div className="font-heading m-0">
          <label className="font-bold text-lg  " htmlFor="comments">
            Give your valuable opinions
          </label>
          <div className="mt-4  ">
            <textarea
              className="border"
              name="text"
              id="comments"
              cols={50}
              rows={5}
            ></textarea>
          </div>
          <button
            className="px-8 flex items-center justify-center mt-6 lg:mt-0 py-3 bg-error-content font-medium rounded-xl text-white hover:opacity-90 transition-opacity duration-300 max-w-[11rem] "
            onClick={handleClick}
          >
            Click
          </button>
        </div>
      </form>
    </>
  );
};
export default Comments;
