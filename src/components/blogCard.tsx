import { useNavigate } from "react-router-dom";
import { IBlogCard } from "../types";
import { Heading2 } from "./heading2";
import { TextRegular } from "./textRegular";

export function BlogCard({ author, title, content,id }: IBlogCard) {

  const navigate = useNavigate()

  const handleBlog = ()=>{
    navigate(`/blog/${id}`)
  }

  return (
    <div className=" cursor-pointer" onClick={handleBlog}>
      <div className=" flex gap-2 items-center mb-1">
        <p className=" text-sm font-medium">{author}</p>
        <p className=" text-sm text-stone-700"> Dec 4,2012</p>
      </div>
      <Heading2>{title}</Heading2>
      <div className=" mt-2">
        <TextRegular classname=" line-clamp-3">{content}</TextRegular>
      </div>
    </div>
  );
}
