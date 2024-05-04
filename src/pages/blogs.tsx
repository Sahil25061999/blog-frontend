import { BlogCard, Layout } from "../components";

export function Blogs() {
  return (
    <Layout>
      <div className=" w-full grid grid-cols-1 gap-9">
        <BlogCard/>
        <BlogCard/>
      </div>
    </Layout>
  )
}
