import React from "react";

interface CommentsProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Comments: React.FC<CommentsProps> = ({ handleClick }) => {
  return (
    <>
      <h1 className="pt-8 text-3xl font-bold ">
        <span className="border-b-2 border-warning-content pb-1">Comments</span>
      </h1>
      <textarea name="comment" id=""></textarea>
      <button onClick={handleClick}>Click</button>
    </>
  );
};
export default Comments;
