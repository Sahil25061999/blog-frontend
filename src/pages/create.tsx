import { Layout } from "../components";
import { useBlogCreate } from "../context";

export function Create() {
  const { showBlogCreate, toggleBlogCreate } = useBlogCreate()!;

  return (
    <div
      className={` fixed top-0 h-screen w-full pt-16 transition duration-500 pointer-events-none ${
        showBlogCreate ? " backdrop-brightness-50" : " "
      }`}
    >
      <div
        className={`  h-full w-full  pointer-events-auto ${
          showBlogCreate
            ? " transition-all duration-500  translate-y-0 "
            : "translate-y-full"
        }`}
      >
        <button onClick={toggleBlogCreate}>close</button>
        <div className=" bg-white h-[calc(100vh-4rem)]">
          <Layout showNav={false}>
            <div className="w-full h-full ">
              <form className=" w-full h-full">
                <input
                  placeholder="Title"
                  className="w-full border-b border-b-stone-200 text-3xl py-2 outline-none"
                  type="text"
                  name="title"
                  id="title"
                />
                <textarea
                // rows={10}
                  className=" mt-4 w-full h-4/5 outline-none text-lg resize-none"
                  placeholder="Content"
                ></textarea>
                <button className=" bg-stone-900 px-4 py-3 w-full text-stone-50 rounded-full">Publish</button>
              </form>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
}
