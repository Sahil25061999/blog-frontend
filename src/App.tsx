import { Route, Routes } from "react-router-dom";
import { Signin, Signup } from "./pages/index";
function App() {
  return (
    <div className="  min-h-screen w-full text-stone-900">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
