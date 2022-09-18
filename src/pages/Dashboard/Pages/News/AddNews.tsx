import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../../../config/firebaseConfig.init";
import categoryData from "../../../../data/category";
import SubmitModal from "../../DashboardComponent/Modal/SubmitModal";
import { imageSchema } from "../../DashboardComponent/NewsComponents/ImageScema";

// use hooks from
interface IFormInputs {
  title: string;
  reference: string;
  category: string;
  subCategory: string;
  photo: string;
  breakingNews: string;
  date: string;
  description: string;
  descriptionOne: string;
  descriptionTwo: string;
  descriptionThree: string;
  descriptionFour: string;
  image: string;
  type: string;
}

interface UserData {
  _id?: string;
  email?: string;
  name?: string;
  role?: string;
  photoUrl?: string;
}

const AddNews = () => {
  // single user
  const [user] = useAuthState(auth);
  const userEmail = user?.email;
  const url = `https://the-delta-times-server.vercel.app/api/users/${userEmail}`;
  const { data: userData } = useQuery<UserData, Error>(["allNews"], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (!res.ok) {
        throw Error(" expire token Please login again and reload");
      }
      return res.json();
    })
  );
  // full date function
  const date = new Date();
  const fullDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  // add user
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<IFormInputs>({ mode: "onChange" });

  const ImgbbStorageApiKey = "1254e6cd237015e6bfe5c553361ebae0";
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    const title = data.title;
    const newSlug = title
      .split(/\s+|\W+/)
      .filter((word: string) => word.trim() !== "")
      .join("-");

    const slug = newSlug;
    const category = data.category;
    const subCategory = data.subCategory;
    const photo = data.photo;
    const breakingNews = data.breakingNews;
    const date = fullDate;
    const reference = userData?.name;
    const description = data.description;
    const descriptionOne = data.descriptionOne;
    const descriptionTwo = data.descriptionTwo;
    const descriptionThree = data.descriptionThree;
    const descriptionFour = data.descriptionFour;
    const image = data.image[0];
    const formDate = new FormData();
    formDate.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${ImgbbStorageApiKey}`;
    // this fetch for hosting image in imgbb
    fetch(url, {
      method: "POST",
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
            subCategory: subCategory,
            photo: photo,
            breakingNews: breakingNews,
            slug: slug,
            reference: reference,
            description: description,
            descriptionOne: descriptionOne,
            descriptionTwo: descriptionTwo,
            descriptionThree: descriptionThree,
            descriptionFour: descriptionFour,
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
      <div className="p-5 lg:max-w-4xl mx-auto w-full  rounded-lg">
        <h1 className=" font-semibold leading-3 sm:text-center text-2xl md:text-4xl mb-4 text-neutral-content">
          Add New News
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className=" select-none">
          {/* News Title */}
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text-modify">Title</span>
            </label>
            <input
              {...register("title", {
                required: {
                  value: true,
                  message: "News title is required",
                },
                minLength: {
                  value: 20,
                  message: "Must be 20 characters or longer",
                },
                maxLength: {
                  value: 90,
                  message: "Must be 90 characters or lower",
                },
              })}
              type="text"
              placeholder="News Title"
              className="input-modify"
            />
            <label className="label">
              {errors.title && (
                <small className=" text-red-600">{errors.title.message}</small>
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
                  Choose a category...
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

          {/* News subCategory's */}
          <div className="">
            <div className="form-control w-full ">
              <label className="label">
                <span className=" label-text-modify">Sub-Category</span>
              </label>
              <select
                defaultValue={"DEFAULT"}
                className="select input-modify   font-normal w-full"
                {...register("subCategory")}
              >
                <option value="DEFAULT" disabled>
                  Choose a Subcategory...
                </option>
                {categoryData.category.map((item) => (
                  <optgroup label={item.title} key={item.id}>
                    {categoryData.subCategory.map((item) => (
                      <option key={item.id}>{item.title}</option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </div>
          </div>

          {/* News Reference */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text-modify">Reference</span>
              </label>
              <input
                value={userData?.name}
                disabled
                {...register("reference", {

                  maxLength: {
                    value: 20,
                    message: "Must be 20 characters or longer",
                  },
                })}
                type="text"
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
                    imageSchema.validate({ image }).catch((e) => e.errors[0]),
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

          {/* News Photo */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text-modify">Photo</span>
              </label>
              <select
                {...register("photo")}
                defaultValue={"DEFAULT"}
                className="input-modify"
              >
                <option value={"DEFAULT"} disabled>
                  Choose
                </option>
                <option defaultValue="Yes">Yes</option>
                <option defaultValue="No">No</option>
              </select>
            </div>

            {/* Braking News */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text-modify">Braking News</span>
              </label>
              <select
                {...register("breakingNews")}
                defaultValue={"DEFAULT"}
                className="input-modify"
              >
                <option value={"DEFAULT"} disabled>
                  Choose
                </option>
                <option defaultValue="Yes">Yes</option>
                <option defaultValue="No">No</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text-modify"> Description</span>
            </label>
            <textarea
              {...register("description", {
                required: {
                  value: true,
                  message: "News description is required",
                },
                minLength: {
                  value: 280,
                  message: "Must be 280 characters or longer",
                },
                maxLength: {
                  value: 290,
                  message: "Must be 290 characters or lower",
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
          {/* Description One */}
          <div className="form-control">
            <label className="label">
              <span className="label-text-modify"> Description One</span>
            </label>
            <textarea
              {...register("descriptionOne", {
                required: {
                  value: true,
                  message: "News description One is required",
                },
                minLength: {
                  value: 282,
                  message: "Must be 280 characters or longer",
                },
                maxLength: {
                  value: 290,
                  message: "Must be 290 characters or lower",
                },
              })}
              // type="text"
              rows={3}
              placeholder="News Description"
              className=" focus:border-transparent focus:ring-[1px] focus:ring-primary-content textarea textarea-bordered w-full rounded-none focus:outline-none"
            ></textarea>
            <label className="label">
              {errors.descriptionOne && (
                <small className="text-red-500">
                  {errors.descriptionOne.message}
                </small>
              )}
            </label>
          </div>
          {/* Description two*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text-modify"> Description Two</span>
            </label>
            <textarea
              {...register("descriptionTwo", {
                required: {
                  value: true,
                  message: "News description is required",
                },
                minLength: {
                  value: 280,
                  message: "Must be 280 characters or longer",
                },
                maxLength: {
                  value: 290,
                  message: "Must be 290 characters or lower",
                },
              })}
              // type="text"
              rows={3}
              placeholder="News Description"
              className=" focus:border-transparent focus:ring-[1px] focus:ring-primary-content textarea textarea-bordered w-full rounded-none focus:outline-none"
            ></textarea>
            <label className="label">
              {errors.descriptionTwo && (
                <small className="text-red-500">
                  {errors.descriptionTwo.message}
                </small>
              )}
            </label>
          </div>
          {/* Description three*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text-modify"> Description Three</span>
            </label>
            <textarea
              {...register("descriptionThree", {
                required: {
                  value: false,
                  message: "News description is required",
                },
                minLength: {
                  value: 280,
                  message: "Must be 280 characters or longer",
                },
                maxLength: {
                  value: 290,
                  message: "Must be 290 characters or lower",
                },
              })}
              // type="text"
              rows={3}
              placeholder="News Description"
              className=" focus:border-transparent focus:ring-[1px] focus:ring-primary-content textarea textarea-bordered w-full rounded-none focus:outline-none"
            ></textarea>
            <label className="label">
              {errors.descriptionThree && (
                <small className="text-red-500">
                  {errors.descriptionThree.message}
                </small>
              )}
            </label>
          </div>
          {/* Description four*/}
          <div className="form-control">
            <label className="label">
              <span className="label-text-modify"> Description Four </span>
            </label>
            <textarea
              {...register("descriptionFour", {
                required: {
                  value: false,
                  message: "News description is required",
                },
                minLength: {
                  value: 280,
                  message: "Must be 280 characters or longer",
                },
                maxLength: {
                  value: 290,
                  message: "Must be 290 characters or lower",
                },
              })}
              // type="text"
              rows={3}
              placeholder="News Description"
              className=" focus:border-transparent focus:ring-[1px] focus:ring-primary-content textarea textarea-bordered w-full rounded-none focus:outline-none"
            ></textarea>
            <label className="label">
              {errors.descriptionFour && (
                <small className="text-red-500">
                  {errors.descriptionFour.message}
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
            <input type="checkbox" id="my-modal-6" className="modal-toggle " />
            <SubmitModal title="Are you sure you want to Add this News?" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNews;
