import { Route, Routes } from "react-router-dom";
import { Blog, Blogs, Signin, Signup } from "./pages/index";
import { Create } from "./pages/create";
function App() {
  return (
    <div className="  min-h-screen w-full text-stone-900">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Create/>
    </div>
  );
}

export default App;
