import { Route, Routes } from "react-router-dom";
import { Blog, Blogs, Protected, Signin, Signup, Public } from "./pages/index";
import { Create } from "./pages/create";
import { useAuth } from "./context/auth";
import { useEffect } from "react";
import { API } from "./api/config";
import { useUser } from "./context/user";
function App() {
  const { token, setToken } = useAuth()!;
  const { setUser } = useUser()!;

  const fetchUserDetails = async () => {
    try {
      const userRes = await API.get("/user/");
      if (userRes.data?.success) {
        setUser(userRes.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const localToken = localStorage.getItem("blogLoginToken");
    if (!token && localToken) {
      setToken(localToken);
    }
  }, []);

  useEffect(() => {
    fetchUserDetails();
  }, [token]);

  return (
    <div className="  min-h-screen w-full text-stone-900">
      <Routes>
        <Route
          path="/signup"
          element={
            <Public>
              <Signup />
            </Public>
          }
        />
        <Route
          path="/signin"
          element={
            <Public>
              <Signin />
            </Public>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Protected>
              <Blog />
            </Protected>
          }
        />
        <Route
          path="/blogs"
          element={
            <Protected>
              <Blogs />
            </Protected>
          }
        />
      </Routes>
      <Create />
    </div>
  );
}

export default App;
