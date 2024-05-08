import { Error, Layout, PrimaryBtn } from "../components";
import { width } from "../constants";
import { useBlogCreate } from "../context";
import { API } from "../api/config";
import { useForm } from "react-hook-form";

interface IBlogCreateForm {
  title: string;
  content: string;
}

export function Create() {
  const {
    handleSubmit,
    register,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<IBlogCreateForm>();

  const { showBlogCreate, toggleBlogCreate } = useBlogCreate()!;
  const backdropStyle = showBlogCreate ? " backdrop-brightness-50" : " pointer-events-none";
  const formTransition = showBlogCreate ? " transition-all duration-500  translate-y-0 " : "translate-y-full";

  const handleClose = () => {
    setValue("title", "");
    setValue("content", "");
    clearErrors(["title", "content"]);
    toggleBlogCreate();
  };

  const publishPost = async (data: IBlogCreateForm) => {
    try {
      const res = await API.post("/blog/", data);
      if (res.data.success) {
        setValue("title", "");
        setValue("content", "");
      }
      toggleBlogCreate();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className={` fixed top-0 h-screen w-full pt-12 transition duration-500  ${backdropStyle}`}>
      <div className={`  h-full w-full  ${formTransition}`}>
        <div className={` ${width} mx-auto mb-2 flex justify-end`}>
          <button className=" bg-stone-900 rounded-full p-4" onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
              <path
                fill-rule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className=" bg-white h-[calc(100vh-3rem)]">
          <Layout showNav={false}>
            <div className="w-full h-full ">
              <form className=" w-full h-full" onSubmit={handleSubmit(publishPost)}>
                <div>
                  <input
                    {...register("title", {
                      required: "Title is needed",
                    })}
                    placeholder="Title"
                    className={`w-full border-b text-3xl py-2 outline-none ${
                      errors.title ? "border-b-red-200" : "border-b-stone-200 "
                    }`}
                    type="text"
                    name="title"
                    id="title"
                  />
                  {errors.title ? <Error message={errors.title.message!} /> : null}
                </div>
                <div className=" h-3/5">
                  <textarea
                    {...register("content", {
                      required: "Content is required",
                    })}
                    className={` mt-4 w-full h-full outline-none text-lg resize-none ${
                      errors.content ? "border-b border-b-red-200" : ""
                    }`}
                    placeholder="Content"
                  ></textarea>
                  {errors.content ? <Error message={errors.content.message!} /> : null}
                </div>
                <div className=" mt-8">
                  <PrimaryBtn classname=" float-right" btnText="Publish" />
                </div>
              </form>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
}
