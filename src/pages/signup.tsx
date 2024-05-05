import { useState } from "react";
import { FormFooter, FormInput, FormLabel, PrimaryBtn } from "../components";
import { FormHeading } from "../components/formHeading";
import { TSignUpValidation } from "@sahil2506/blog-types";
import { API } from "../api/config";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const navigate = useNavigate();
  const { setToken } = useAuth()!;
  const [formField, setFormField] = useState<TSignUpValidation>({
    email: "",
    password: "",
    username: "",
  });

  const handleInput = (
    value: string,
    field: "email" | "password" | "username"
  ) => {
    setFormField((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await API.post("/user/signup", formField);
      if (res.data.success) {
        API.defaults.headers.common.Authorization =
          "Bearer " + res.data.data.token;
        localStorage.setItem("blogLoginToken", res.data.data.token);
        setToken(res.data.data.token);
        navigate("/blogs", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <main className=" h-screen w-full sm:flex flex-row">
      <div className=" w-full h-full flex justify-center items-center sm:flex-1">
        <div>
          <FormHeading heading="Create an account" />
          <form className=" flex flex-col gap-2 mt-4" onSubmit={handleSignup}>
            <div>
              <FormLabel htmlFor="username" label="Username" />
              <FormInput
                value={formField.username}
                id="username"
                name="username"
                type="text"
                placeholder=""
                onChange={(e) => handleInput(e.target.value, "username")}
              />
            </div>
            <div>
              <FormLabel htmlFor="email" label="Email" />
              <FormInput
                value={formField.email}
                id="email"
                name="email"
                type="text"
                placeholder=""
                onChange={(e) => handleInput(e.target.value, "email")}
              />
            </div>
            <div>
              <FormLabel htmlFor="password" label="Password" />
              <FormInput
                value={formField.password}
                id="password"
                name="password"
                type="password"
                placeholder=""
                onChange={(e) => handleInput(e.target.value, "password")}
              />
            </div>
            <div className=" mt-4">
              <PrimaryBtn classname=" w-full" btnText="Sign up" />
            </div>
          </form>
          <div className=" mt-2">
            <FormFooter
              footerText={"Already have an account?"}
              link={"/signin"}
              linkText={"Login"}
            />
          </div>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-center items-center bg-stone-900 text-stone-200">
        <div className=" sm:p-2 md:p-4">
          <h1 className="  md:text-xl font-bold leading-snug">
            Words have power.
            <br />
            They can uplift, inspire, and ignite change.
            <br />
            Let your voice be heard in the vast ocean of ideas.
          </h1>
          <p className=" mt-2">Sun tzu</p>
        </div>
      </div>
    </main>
  );
}
