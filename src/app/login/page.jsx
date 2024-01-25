import React from "react";
import { FcGoogle } from "react-icons/fc";
import { GrApple } from "react-icons/gr";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoDiscord } from "react-icons/bi";

const page = () => {
  return (
    <>
      <div
        className="h-screen w-full mx-auto bg-[#f8faff]
        flex flex-col sm:flex-row"
      >
        <div
          className="hidden sm:block w-full sm:w-[50%] py-4 
        border-red-600 bg-[url('/assets/background.svg')]  bg-cover"
        >
          <div className="py-2">
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="40.1102" cy="40.3929" r="40.0765" fill="#FCFCFF" />
            </svg>

            <Image
              src={"/assets/vector.png"}
              width={100}
              height={10}
              alt="ellipse"
              className=" border-black right-2 relative top-[-55px] 
                  "
            />
          </div>

          <h2 className="text-center font-bold relative top-[12%] text-6xl text-[#FFFFFF] ">
            {" "}
            BASE{" "}
          </h2>

          <div className="footer-icons relative top-[60%]  py-2  flex gap-5 justify-center mt-8">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
              <FaGithub className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="text-gray-500 mx-2"
            >
              <AiFillTwitterCircle className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
              <FaLinkedin className="text-4xl text-[#FFFFFF]" />
            </a>
            <a
              href="https://www.discord.com/"
              target="_blank"
              className="text-gray-500  mx-2"
            >
              <BiLogoDiscord className="text-4xl text-[#FFFFFF]" />
            </a>
          </div>
        </div>

        <div className="w-full sm:hidden sm:w-[50%] py-2  border-red-600 bg-[#605BFF] bg-cover relative">
          <div className="py-4 w-[90%] border-red-600 m-auto text-start">
            <Image
              src={"/assets/SigninIcon.svg"}
              width={30}
              height={30}
              alt="SignIcon"
              className="overflow-hidden inline-block"
            />
            <Image
              src={"/assets/vector.png"}
              width={40}
              height={10}
              alt="ellipse"
              className="border-black relative right-10 top-[-1px] inline-block"
            />
          </div>
          <div className="text-[#FFFFFF] absolute left-24 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h2>BASE</h2>
          </div>
        </div>

        <div className="w-full sm:w-[50%] flex justify-center items-center">
          <div className="lg:p-36 md:p-52 sm:20 p-8 w-full">
            <h1 className="font-bold text-[36px]">Sign In</h1>
            <p className="mb-5">Sign in to your account</p>
            <div class="mt-4 flex flex-col lg:flex-row items-center justify-between">
              <div class="w-full lg:w-1/2 mb-2 lg:mb-0">
                <button
                  type="button"
                  class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-4 rounded-md hover:bg-gray-50 borde focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1163_66)">
                      <path
                        d="M15.4001 8.116C15.4001 7.48636 15.3478 7.02688 15.2346 6.5504H7.87695V9.39229H12.1957C12.1087 10.0985 11.6385 11.1621 10.5936 11.8768L10.579 11.972L12.9053 13.7331L13.0665 13.7488C14.5467 12.4129 15.4001 10.4474 15.4001 8.116Z"
                        fill="#4285F4"
                      />
                      <path
                        d="M7.87696 15.6037C9.9928 15.6037 11.7691 14.923 13.0665 13.7488L10.5936 11.8768C9.93187 12.3278 9.04371 12.6426 7.87696 12.6426C5.80464 12.6426 4.04578 11.3068 3.4188 9.4604L3.32689 9.46803L0.907916 11.2974L0.876282 11.3834C2.16495 13.8849 4.81197 15.6037 7.87696 15.6037Z"
                        fill="#34A853"
                      />
                      <path
                        d="M3.41874 9.4604C3.2533 8.98391 3.15756 8.47335 3.15756 7.94583C3.15756 7.41825 3.2533 6.90775 3.41003 6.43126L3.40565 6.32978L0.95636 4.47101L0.876224 4.50826C0.345103 5.54634 0.0403442 6.71206 0.0403442 7.94583C0.0403442 9.1796 0.345103 10.3453 0.876224 11.3833L3.41874 9.4604Z"
                        fill="#FBBC05"
                      />
                      <path
                        d="M7.87696 3.24898C9.34847 3.24898 10.3411 3.87011 10.9071 4.38918L13.1187 2.279C11.7604 1.04523 9.9928 0.287949 7.87696 0.287949C4.81197 0.287949 2.16495 2.0067 0.876282 4.50826L3.41009 6.43127C4.04578 4.58487 5.80464 3.24898 7.87696 3.24898Z"
                        fill="#EB4335"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1163_66">
                        <rect
                          width="15.3686"
                          height="15.3686"
                          fill="white"
                          transform="translate(0.0396118 0.287949)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign in with Google{" "}
                </button>
              </div>
              <div class="w-full lg:w-1/2 ml-0 lg:ml-2">
                <button
                  type="button"
                  class="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 p-4 rounded-md hover:bg-gray-50 borde focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300"
                >
                  <svg
                    width="14"
                    height="16"
                    viewBox="0 0 14 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_1163_74)">
                      <path
                        d="M7.53348 1.52879C8.55093 0.197925 9.96544 0.191437 9.96544 0.191437C9.96544 0.191437 10.1758 1.44268 9.16505 2.64802C8.08578 3.93506 6.85904 3.72446 6.85904 3.72446C6.85904 3.72446 6.62869 2.71225 7.53348 1.52879ZM6.98845 4.60095C7.51188 4.60095 8.48334 3.8869 9.74783 3.8869C11.9244 3.8869 12.7807 5.42395 12.7807 5.42395C12.7807 5.42395 11.106 6.2737 11.106 8.33559C11.106 10.6616 13.1922 11.4632 13.1922 11.4632C13.1922 11.4632 11.7339 15.5368 9.76404 15.5368C8.8593 15.5368 8.15592 14.9317 7.20264 14.9317C6.23118 14.9317 5.26715 15.5594 4.63927 15.5594C2.84051 15.5594 0.568054 11.6952 0.568054 8.58896C0.568054 5.53288 2.49154 3.92971 4.29569 3.92971C5.46855 3.92971 6.3787 4.60095 6.98845 4.60095Z"
                        fill="#999999"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1163_74">
                        <rect
                          width="12.6242"
                          height="15.3686"
                          fill="white"
                          transform="translate(0.568054 0.190186)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                  Sign Up with Apple{" "}
                </button>
              </div>
            </div>
            <form
              action="#"
              method="POST"
              className="p-10 bg-white rounded-xl mt-5"
            >
              <div className="mb-4">
                <label
                  for="username"
                  className="block text-gray-900 font-semibold mb-2"
                >
                  Email address
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div className="mb-4">
                <label
                  for="password"
                  className="block text-gray-900 mb-2 font-semibold"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="w-full border border-gray-300 rounded-xl py-2 px-3 focus:outline-none focus:border-blue-500"
                  autocomplete="off"
                />
              </div>
              <div className="mb-6 text-blue-800">
                <a href="#" className="hover:underline font-semibold">
                  Forgot Password?
                </a>
              </div>
              <a
                href="/dashboard"
                className="bg-[#605bff] hover:bg-blue-600 text-white font-semibold rounded-xl py-3 px-4 w-full block text-center"
              >
                Sign In
              </a>
            </form>
            <div className="mt-6 text-gray-500 text-center font-semibold">
              Don’t have an account?
              <a href="#" className="hover:underline ml-2 text-blue-800">
                Register here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
