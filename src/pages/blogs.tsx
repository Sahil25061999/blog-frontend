import { useEffect, useState } from "react";
import { BlogCard, Layout } from "../components";
import { API } from "../api/config";
import { TBlogCardList } from "../types";

export function Blogs() {
  const [blogList, setBlogList] = useState<TBlogCardList>([]);

  const fetchBlogList = async () => {
    try {
      const res = await API.get("/blog/bulk");
      if (res.data?.success) {
        setBlogList(res.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBlogList();
  }, []);
  return (
    <Layout>
      <div className=" w-full grid grid-cols-1 gap-9">
        {blogList.length > 0
          ? blogList.map((blog) => (
              <BlogCard
                id={blog.id}
                key={blog.id}
                author={blog.author.username}
                title={blog.title}
                content={blog.content}
              />
            ))
          : null}
      </div>
    </Layout>
  );
}
