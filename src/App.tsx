import { Route, Routes } from "react-router-dom";
import { Blog, Signin, Signup } from "./pages/index";
function App() {
  return (
    <div className="  min-h-screen w-full text-stone-900">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        <Route
          path="/blog/:id"
          element={
            <div className="  w-[min(1300px,calc(100%-2rem))] mx-auto">
              <div className=" w-full py-3 flex flex-row justify-between items-center">
                <h2 className=" text-xl font-medium">BART</h2>
                <div className=" flex flex-row gap-4 items-center">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgba(0,0,0,.5)"
                      className="w-6 h-6"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className=" h-10 aspect-square rounded-full bg-green-300 flex items-center justify-center"><button>A</button></div>
                </div>
              </div>
              <Blog />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
