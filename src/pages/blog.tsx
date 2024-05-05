import { useEffect, useState } from "react";
import { Heading1, Heading2, Layout, TextRegular } from "../components";
import { API } from "../api/config";
import { useParams } from "react-router-dom";

export function Blog() {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
    published: true,
    author: {
      username: "",
    },
  });
  const { id } = useParams();

  const fetchBlog = async () => {
    try {
      const res = await API.get(`/blog/${id}`);
      if (res.data?.success) {
        setBlog(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  
  return (
    <Layout>
      <div className=" w-full grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className=" col-span-8">
          <Heading1>{blog.title}</Heading1>
          <p className=" text-sm text-stone-700 mt-4">
            {" "}
            Published on August 24, 2013
          </p>
          <div className=" mt-8">
            <TextRegular>{blog.content}</TextRegular>
          </div>
        </div>
        <div className=" col-span-4 justify-self-center pl-4 border-l border-lime-400">
          <div className=" ">
            <p className="  text-stone-600">Author</p>
            <div className=" mt-1">
              <Heading2>{blog.author.username}</Heading2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
