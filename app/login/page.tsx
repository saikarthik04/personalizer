import { SigninButton } from "@/components/buttons";
export default function Login() {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-slate-200">
            Personalizer
          </p>
          <div className="w-full  bg-white bg-opacity-10 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
             <SigninButton/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
