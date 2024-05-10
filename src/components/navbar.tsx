import { Link } from "react-router-dom";
import { Avatar } from ".";
import { useBlogCreate } from "../context";
import { AvatarVariant } from "../types";
import { useUser } from "../context/user";

export function Navbar() {
  const { toggleBlogCreate } = useBlogCreate()!;
  const { user } = useUser()!;
  const userInitial = user?.username?.slice(0, 1);

  return (
    <div className=" w-full py-3 flex flex-row justify-between items-center">
      <h2 className=" text-xl font-medium">
        <Link to="/blogs">BART</Link>
      </h2>
      <div className=" flex flex-row gap-4 items-center">
        <button onClick={toggleBlogCreate}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,.5)" className="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <Avatar nameInitial={userInitial} variant={AvatarVariant.medium} />
      </div>
    </div>
  );
}
