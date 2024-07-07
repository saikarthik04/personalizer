import React from 'react'

const Login = () => {
  return (
<section >
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <p className="flex items-center mb-6 text-2xl font-semibold text-slate-200">
          Personalizer    
      </p>
      <div className="w-full  bg-white bg-opacity-10 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                  Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label className="block mb-2 text-sm font-medium">Your email</label>
                      <input type="email" name="email" id="email" className="bg-gray-50 border text-gray-900 rounded-lg 
                      block w-full p-2.5" placeholder="name@company.com" />
                  </div>
                  <div>
                      <label className="block mb-2 text-sm font-medium">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg 
                      focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                  </div>
                  <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border"/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label className="text-gray-50">Remember me</label>
                          </div>
                      </div>
                      <a href="#" className="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" className="w-full bg-violet-700 focus:ring-2 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign in</button>
                  <p className="text-sm font-light text-gray-500">
                      Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
  )
}

export default Login