import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import { yupResolver } from "@hookform/resolvers/yup";
import categoryData from "../../../../data/category";
import SubmitModal from "../../DashboardComponent/Modal/SubmitModal";
import { imageSchema } from "../../DashboardComponent/NewsComponents/ImageScema";

const AddNews = () => {
  // const [slugValue, setSlugValue] = useState(null);
  // full date function
  const date = new Date();
  const fullDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  // use hooks from
  interface IFormInputs {
    title: string;
    reference: string;
    category: string;
    subCategory: string;
    date: string;
    photo: string;
    breakingNews: string;
    description: string;
    image: string;
    type: string;
  }
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
    console.log("first dat", category);
    const date = fullDate;
    const reference = data.reference;
    const photo = data.photo;
    const breakingNews = data.breakingNews;
    const description = data.description;
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
            slug: slug,
            reference: reference,
            photo: photo,
            breakingNews: breakingNews,
            description: description,
            image: image,
          };
          // this fetch for save from data in mongodb
          fetch(`https://team-delta001.herokuapp.com/api/news`, {
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

          {/* News Slug */}
          {/* <div className="form-control w-full ">
            <label className="label">
              <span className="label-text-modify">Slug</span>
            </label>
            <input
              value={newSlug || ""}
              {...register("slug", {
                required: {
                  value: true,
                  message: "News slug is required",
                },
              })}
              type="text"
              placeholder="News Slug"
              className="input-modify "
            />
            <label className="label">
              {errors.slug?.type === "required" && (
                <small className="text-red-500">{errors.slug.message}</small>
              )}
            </label>
          </div> */}

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
                {categoryData.subCategory.map((item) => (
                  <option key={item.id}>{item.title}</option>
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
            <input type="checkbox" id="my-modal-6" className="modal-toggle " />
            <SubmitModal title="Are you sure you want to Add this News?" />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddNews;
