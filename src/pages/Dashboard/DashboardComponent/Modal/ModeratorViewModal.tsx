import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Loadings from "../../../../components/Loading/Loadings";

interface Props {
  singleNews: string | undefined;
  setSingleNews: React.Dispatch<React.SetStateAction<string | undefined>>;
}

type slugNewsProps = {
  title: string;
  id: string;
  description: string;
  image: string;
  slug: string;
  reference: string;
  date: string;
};

const ModeratorViewModal: FC<Props> = ({ singleNews, setSingleNews }) => {
  const [slugPerNews, setSlugPerNews] = useState<slugNewsProps | null>(null);

  useEffect(() => {
    const url = `https://team-delta001.herokuapp.com/api/news/${singleNews}`;
    axios.get(url).then((res) => {
      setSlugPerNews(res.data);
    });
  }, [singleNews]);

  // console.log("modal view", slugPerNews);
  return (
    <>
      <input
        type="checkbox"
        id="moderator-news-view-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle rounded-none ">
        <div className="modal-box ">
          <label
            onClick={() => setSingleNews(undefined)}
            htmlFor="moderator-news-view-modal"
            className="btn btn-sm text-primary bg-transparent btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex flex-col justify-center">
            {slugPerNews === null ? (
              <Loadings />
            ) : (
              <div className="">
                <img
                  className="w-full  mx-auto  flex justify-center "
                  src={slugPerNews?.image}
                  alt={slugPerNews?.title}
                />
                <h1 className=" text-base  py-3 ">
                  <span className="text-primary pr-1">Title:</span>
                  {slugPerNews?.title}
                </h1>
                <h2 className="text-sm pb-2 ">
                  <span className="text-primary pr-1">Slug:</span> {singleNews}
                </h2>
                <p className="text-base ">
                  <span className="text-primary  pr-1">Description:</span>
                  {slugPerNews?.description}
                </p>
                <p className="text-sm py-2  ">
                  <span className="text-primary pr-1">Reference:</span>
                  {slugPerNews?.reference}
                </p>
                <p className="text-sm ">
                  <span className="text-primary pr-1">Date:</span>
                  {slugPerNews?.date}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorViewModal;
