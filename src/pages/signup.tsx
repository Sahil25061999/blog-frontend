import { FormFooter, FormInput, FormLabel, PrimaryBtn } from "../components";
import { FormHeading } from "../components/formHeading";

export function Signup() {
  return (
    <main className=" h-screen w-full sm:flex flex-row">
      <div className=" w-full h-full flex justify-center items-center sm:flex-1">
        <div>
          <FormHeading heading="Create an account" />
          <form className=" flex flex-col gap-2 mt-4">
            <div>
              <FormLabel htmlFor="username" label="Username" />
              <FormInput
                id="username"
                name="username"
                type="text"
                placeholder=""
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div>
              <FormLabel htmlFor="email" label="Email" />
              <FormInput
                id="email"
                name="email"
                type="text"
                placeholder=""
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div>
              <FormLabel htmlFor="password" label="Password" />
              <FormInput
                id="password"
                name="password"
                type="password"
                placeholder=""
                onChange={(e) => console.log(e.target.value)}
              />
            </div>
            <div className=" mt-4">
              <PrimaryBtn btnText="Sign up" onClick={() => console.log()} />
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
