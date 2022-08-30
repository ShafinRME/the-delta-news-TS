import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import categoryData from "../../../../data/category";
import SubmitModal from "../../DashboardComponent/Modal/SubmitModal";
import { imageSchema } from "../../DashboardComponent/NewsComponents/ImageScema";

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
  category: string;
};

// use hooks from
interface IFormInputs {
  title: string;
  reference: string;
  category: string;
  date: string;
  description: string;
  image: string;
  type: string;
}

const ModeratorEditModal: FC<Props> = ({ singleNews, setSingleNews }) => {
  const [slugPerNews, setSlugPerNews] = useState<slugNewsProps | null>(null);

  useEffect(() => {
    const url = `https://the-delta-times-server.vercel.app/api/news/${singleNews}`;
    axios.get(url).then((res) => {
      setSlugPerNews(res.data);
    });
  }, [singleNews]);

  const date = new Date();
  const fullDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  
  } = useForm<IFormInputs>();

  const ImgbbStorageApiKey = "1254e6cd237015e6bfe5c553361ebae0";
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const title = data.title;
    const newSlug = title
      .split(/\s+|\W+/)
      .filter((word: string) => word.trim() !== "")
      .join("-");

    const slug = newSlug;
    const category = data.category;
    console.log("first dat", category);
    const date = fullDate;
    const reference = data.reference;
    const description = data.description;
    const image = data.image[0];
    const formDate = new FormData();
    formDate.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImgbbStorageApiKey}`;
    // this fetch for hosting image in imgbb
    fetch(url, {
      method: "patch",
      body: formDate,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const image = result.data.url;
          const newNews = {
            date: date,
            title: title,
            category: category,
            slug: slug,
            reference: reference,
            description: description,
            image: image,
          };
          // this fetch for save from data in mongodb
          fetch(`https://the-delta-times-server.vercel.app/api/news`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newNews),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.id) {
                toast.success(`News ${data.title} add successfully`);
                reset();
              } else toast.error(`News ${data.title} add to failed`);
            });
        }
      });
  };

  return (
    <>
      {/* <!-- Put this part before </body> tag --> */}
      <input
        type="checkbox"
        id="moderator-news-edit-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="moderator-news-edit-modal"
            onClick={() => setSingleNews(undefined)}
            className="btn btn-sm text-primary bg-transparent btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="div">
            <div className="p-5 lg:max-w-4xl mx-auto w-full  rounded-lg">
              <h1 className=" font-semibold leading-3 sm:text-center text-2xl md:text-4xl mb-4 text-neutral-content">
                Update News
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className=" select-none">
                {/* News Title */}
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text-modify">Title</span>
                  </label>
                  <input
                    value={slugPerNews?.title}
                    // onChange={onChange}
                    {...register("title", {
                      required: {
                        value: true,
                        message: "News title is required",
                      },
                      minLength: {
                        value: 20,
                        message: "Must be 20 characters or longer",
                      },
                      onChange:(e)=>{
                        console.log(e.target.value);
                      }
                    })}
                    type="text"
                    placeholder="News Title"
                    className="input-modify"
                  />
                  {/* <Controller
                 
                    render={({ field }) => (
                      <input
                        value={field.value}
                        onChange={field.onChange}
                        // inputRef={field.ref}
                        placeholder="News Title"
                        className="input-modify"
                      />
                    )}
                    name="title"
                    control={control}
                    rules={{ required: true }}
                  
                  /> */}
                  <label className="label">
                    {errors.title && (
                      <small className=" text-red-600">
                        {errors.title.message}
                      </small>
                    )}
                  </label>
                </div>
                {/* News category's */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className=" label-text-modify">Category</span>
                    </label>
                    <select
                      defaultValue={"DEFAULT"}
                      className="select input-modify   font-normal w-full max-w-xs"
                      {...register("category")}
                    >
                      <option value="DEFAULT" disabled>
                        {slugPerNews?.category}
                      </option>
                      {categoryData.category.map((item) => (
                        <option key={item.id}>{item.title}</option>
                      ))}
                    </select>

                    <label className="label">
                      {errors.category?.type === "required" && (
                        <small className="text-red-500">
                          {errors.category.message}
                        </small>
                      )}
                    </label>
                  </div>
                  {/* News Date */}
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text-modify">Date</span>
                    </label>
                    <input
                      value={fullDate || ""}
                      disabled
                      {...register("date")}
                      type="text"
                      placeholder="News Date"
                      className="input-modify "
                    />
                  </div>
                </div>

                {/* News Reference */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text-modify">Reference</span>
                    </label>
                    <input
                      value={slugPerNews?.reference}
                      disabled
                      {...register("reference", {
                        required: {
                          value: true,
                          message: "News reference is required",
                        },
                        minLength: {
                          value: 4,
                          message: "Must be 4 characters or longer",
                        },
                      })}
                      type="text"
                      placeholder="News Reference"
                      className="input-modify "
                    />
                    <label className="label">
                      {errors.reference && (
                        <small className="text-red-500">
                          {errors.reference.message}
                        </small>
                      )}
                    </label>
                  </div>
                  {/* images */}
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text-modify">Image</span>
                    </label>
                    <input
                      {...register("image", {
                        validate: (image) =>
                          imageSchema
                            .validate({ image })
                            .catch((e) => e.errors[0]),
                      })}
                      type="file"
                      placeholder="New Image"
                      className="file:py-2 file:px-4   file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100  focus:outline-none max-w-[14rem] md:mt-1 mx-0 pl-1 pr-0 pt-1 pb-0 flex  items-center"
                    />
                    <label className="label">
                      {errors.image && (
                        <small className=" text-red-500">
                          {errors.image.message}
                        </small>
                      )}
                    </label>
                  </div>
                </div>
                {/* Description */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text-modify"> Description</span>
                  </label>
                  <textarea
                    value={slugPerNews?.description}
                    {...register("description", {
                      required: {
                        value: true,
                        message: "News description is required",
                      },
                      minLength: {
                        value: 40,
                        message: "Must be 40 characters or longer",
                      },
                    })}
                    // type="text"
                    rows={3}
                    placeholder="News Description"
                    className=" focus:border-transparent focus:ring-[1px] focus:ring-primary-content textarea textarea-bordered w-full rounded-none focus:outline-none"
                  ></textarea>
                  <label className="label">
                    {errors.description && (
                      <small className="text-red-500">
                        {errors.description.message}
                      </small>
                    )}
                  </label>
                </div>

                {/* confirm modal */}
                <div className="flex md:justify-end justify-center">
                  {/* <!-- The button to open modal --> */}
                  <label
                    htmlFor="my-modal-6"
                    // disabled={!formState.isValid}
                    className="modal-button py-2.5 px-5 border border-error-content bg-error-content text-white cursor-pointer hover:border-error-content hover:bg-transparent transition-colors duration-500 hover:text-neutral-content text-sm font-medium "
                  >
                    Confirm
                  </label>

                  {/* <!-- Put this part before </body> tag --> */}
                  <input
                    type="checkbox"
                    id="my-modal-6"
                    className="modal-toggle "
                  />
                  <SubmitModal title="Are you sure you want to Add this News?" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModeratorEditModal;
