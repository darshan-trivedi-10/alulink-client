import React from "react";
import { Link } from "react-router-dom";
import alilinkLogo from "../../assest/logos/alulink_logo.png";
import { useSelector } from "react-redux";

export default function Navbar() {

  const organizationData = useSelector((state) => state.organizationReducer.organizationData);
  const userData = useSelector((state) => state.userReducer.userData);

  const isLogged = (organizationData?.success || userData?.success) === true;

  const [showModal, isShowModal] = React.useState(false);
  return (
    <div className="flex text-white navbar bg-gray-800 justify-between h-18">

      <Link to="/">
        <img src={alilinkLogo} className="h-16 sm:h-24 mt-2" alt="alulink logo" />
      </Link>

      {isLogged ? (
        <div className="font-bold flex mt-1">

          <div className="mt-6 w-12 mr-4 sm:mr-8 transition duration-300  hover:border-3">
            <Link to="/feed">
              <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M511.8 287.6L512.5 447.7C512.6 483.2 483.9 512 448.5 512H128.1C92.75 512 64.09 483.3 64.09 448V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6zM288 288C323.3 288 352 259.3 352 224C352 188.7 323.3 160 288 160C252.7 160 224 188.7 224 224C224 259.3 252.7 288 288 288zM192 416H384C392.8 416 400 408.8 400 400C400 355.8 364.2 320 320 320H256C211.8 320 176 355.8 176 400C176 408.8 183.2 416 192 416z"
                  fill="white"
                ></path>
              </svg>
            </Link>
          </div>

          <div className="mt-6 w-12 mr-4 sm:mr-8 transition duration-300  hover:border-3">
            <Link to="/user/profile">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z" fill="currentColor" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
                <path d="M4.27148 18.346C4.27148 18.346 6.50048 15.5 12.0005 15.5C17.5005 15.5 19.7305 18.346 19.7305 18.346M12.0005 12C12.7961 12 13.5592 11.6839 14.1218 11.1213C14.6844 10.5587 15.0005 9.79565 15.0005 9C15.0005 8.20435 14.6844 7.44129 14.1218 6.87868C13.5592 6.31607 12.7961 6 12.0005 6C11.2048 6 10.4418 6.31607 9.87916 6.87868C9.31655 7.44129 9.00048 8.20435 9.00048 9C9.00048 9.79565 9.31655 10.5587 9.87916 11.1213C10.4418 11.6839 11.2048 12 12.0005 12V12Z" stroke="#212121" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                </path>
              </svg>
            </Link>
          </div>

        </div>
      ) : (
        <div className="font-bold flex mt-1">
          <button
            onClick={() => isShowModal(true)}
            className="border-2 mt-6 border-white rounded-2xl w-24 sm:w-32 h-10 sm:h-12 mr-4 sm:mr-8 border-1 transition duration-300 hover:border-gray-600 hover:border-3"
          >
            Login
          </button>
          <Link to="/signup">
            <button className="border-2 mr-14 mt-6 border-white rounded-2xl w-24 sm:w-32 h-10 sm:h-12 border-1 transition duration-300 hover:border-gray-600 hover:border-3">
              Sign up free
            </button>
          </Link>
        </div>
      )}

      {showModal && (
        <div className=" bg-gray-800 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
            onClick={() => isShowModal(false)}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="/"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>

                  <div class="flex justify-center items-center">

                    <div class="relative inline-flex  group">
                      <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#808080] via-[#808080] to-[#808080] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                      <a
                        href="#"
                        title="Get quote now"
                        class="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-800 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        role="button"
                      >
                        <img
                          className="w-12 h-6"
                          src="https://www.svgrepo.com/show/475656/google-color.svg"
                          loading="lazy"
                          alt="google logo"
                        />
                        Continue With Google
                      </a>
                    </div>
                  </div>

                  {/* <div className="flex flex-row space-between">
                    <button className="border border-slate-200 rounded-lg text-white-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 flex justify-center items-center bg-gray">
                      <img
                        className="w-12 h-6"
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        loading="lazy"
                        alt="google logo"
                      />
                      <span>Login with Google</span>
                    </button>
                  </div> */}

                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don't have an account yet?{' '}
                    <Link
                      to="/signup"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
