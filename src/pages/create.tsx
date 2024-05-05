import { useState } from "react";
import { Layout, PrimaryBtn } from "../components";
import { width } from "../constants";
import { useBlogCreate } from "../context";
import { API } from "../api/config";

export function Create() {
  const [form, setForm] = useState({
    title: "",
    content: "",
  });
  const { showBlogCreate, toggleBlogCreate } = useBlogCreate()!;

  const handleInput = (value: string, field: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const publishPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post("/blog/", form);
      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className={` fixed top-0 h-screen w-full pt-12 transition duration-500  ${
        showBlogCreate ? " backdrop-brightness-50" : " pointer-events-none"
      }`}
    >
      <div
        className={`  h-full w-full  ${
          showBlogCreate
            ? " transition-all duration-500  translate-y-0 "
            : "translate-y-full"
        }`}
      >
        <div className={` ${width} mx-auto mb-2 flex justify-end`}>
          <button
            className=" bg-stone-900 rounded-full p-4"
            onClick={toggleBlogCreate}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-6 h-6"
            >
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
              <form className=" w-full h-full" onSubmit={publishPost}>
                <input
                  onChange={(e) => handleInput(e.target.value, "title")}
                  placeholder="Title"
                  className="w-full border-b border-b-stone-200 text-3xl py-2 outline-none"
                  type="text"
                  name="title"
                  id="title"
                  value={form.title}
                />
                <textarea
                  onChange={(e) => handleInput(e.target.value, "content")}
                  value={form.content}
                  className=" mt-4 w-full h-4/5 outline-none text-lg resize-none"
                  placeholder="Content"
                ></textarea>
                <div className=" bg-red-300">
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
