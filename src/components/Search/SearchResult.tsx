import React from "react";
interface Props2 {
  title?: string;
  _id?: string;
  description?: string;
  image?: string;
}
const SearchResult: React.FC<Props2> = (props) => {
  //   if (!props.image) {
  //     return <Loading />;
  //   }

  //   if (!props.title) {
  //     return <p className="text-red-500 font-bold text-2xl">No Result Found</p>;
  //   }
  return (
    <div className="my-12">
      <img src={props.image} alt="" />
      <h1 className="font-bold text-xl mt-5 my-2">{props.title}</h1>
      <p className="text-xl">{props.description}</p>
    </div>
  );
};

export default SearchResult;
