import { FormInput, FormLabel } from "../components";

export function Signup() {
  return (
    <main className=" h-screen w-full sm:flex flex-row">
      <div className=" w-full h-full flex justify-center items-center sm:flex-1">
        <div>
          <h1 className=" text-2xl font-bold">Create an account</h1>
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
              <button className=" bg-stone-900 px-4 py-3 w-full text-stone-50 rounded-full">
                Sign up
              </button>
            </div>
          </form>
          <p className=" text-center text-sm mt-2">
            Already have an account ? signin
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-1 justify-center items-center bg-stone-900 text-stone-200">
        <div className=" sm:p-2 md:p-4">
          <h1 className="  md:text-xl font-bold leading-snug">
            Words have power.<br/> 
            They can uplift, inspire, and ignite change.<br/> 
            Let your voice be heard in the vast ocean of ideas.
          </h1>
          <p className=" mt-2">Sun tzu</p>
        </div>
      </div>
    </main>
  );
}