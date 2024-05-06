// import { useState } from "react";
import { FormFooter, FormInput, FormLabel, PrimaryBtn } from "../components";
import { FormHeading } from "../components/formHeading";
import { TSignInValidation } from "@sahil2506/blog-types";
import { API } from "../api/config";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export function Signin() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<TSignInValidation>();
  const navigate = useNavigate();
  const { setToken } = useAuth()!;
  const [loading, setLoading] = useState(false);

  const handleSignin: SubmitHandler<TSignInValidation> = async (
    data: TSignInValidation
  ) => {
    setLoading(true);
    try {
      const res = await API.post("/user/signin", data);
      if (res.data.success) {
        API.defaults.headers.common.Authorization =
          "Bearer " + res.data.data.token;
        localStorage.setItem("blogLoginToken", res.data.data.token);
        setToken(res.data.data.token);
        navigate("/blogs", { replace: true });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className=" h-screen w-full sm:flex flex-row">
      <div className=" w-full h-full flex justify-center items-center sm:flex-1">
        <div>
          <FormHeading heading="Blog in" />
          <form
            className=" flex flex-col gap-2 mt-4"
            onSubmit={handleSubmit(handleSignin)}
          >
            <div>
              <FormLabel htmlFor="email" label="Email" />
              <FormInput<TSignInValidation>
                rules={{ required: "Email is required" }}
                control={control}
                id="email"
                name="email"
                type="text"
                placeholder=""
                error={errors.email ? errors.email.message : null}
              />
            </div>
            <div>
              <FormLabel htmlFor="password" label="Password" />
              <FormInput<TSignInValidation>
                control={control}
                rules={{ required: "password is required" }}
                id="password"
                name="password"
                type="password"
                placeholder=""
                error={errors.password ? errors.password.message : null}
              />
            </div>
            <div className=" mt-4">
              <PrimaryBtn
                loading={loading}
                classname=" w-full"
                btnText="Sign In"
              />
            </div>
          </form>
          <div className=" mt-2">
            <FormFooter
              footerText={"Don't have an account?"}
              link={"/signup"}
              linkText={"Signup"}
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
