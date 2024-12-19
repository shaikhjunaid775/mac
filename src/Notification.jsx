import React from "react";
import BackButton from "./BackButton";

function Notification() {
  return (
    <>
      <nav className="bg-white text-dark ">
        <div className=" grid grid-cols-3 items-center justify-between mx-auto p-2">
          <BackButton />
          <div className="flex justify-center items-center ">
            <span
              className="block text-lg whitespace-nowrap  md:p-0 text-dark "
              aria-current="page"
            >
              Notification
            </span>
          </div>
        </div>
      </nav>
      <div className="m-3">
        <div className="bg-white p-2 my-2 rounded-sm relative">
          <div className="flex flex-col gap-2">
            <div className="">
              <div className="flex items-center gap-1">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </div>
                <div>
                  <span className="uppercase font-medium">
                    Login Notification
                  </span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">2024-09-05 17:18:19</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">
                Your account is logged in 2024-09-05 17:18:19
              </p>
            </div>
          </div>
          <div className="absolute top-2 right-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-4 stroke-[#EE8A20]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
        <div className="bg-white p-2 my-2 rounded-sm relative">
          <div className="flex flex-col gap-2">
            <div className="">
              <div className="flex items-center gap-1">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                    />
                  </svg>
                </div>
                <div>
                  <span className="uppercase font-medium">NEW MEMBER</span>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-400">2024-09-05 17:18:19</p>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500">
                Thank you for becoming a beloved member of this platform. We
                provide many industry leading games. This is the world's leading
                gaming platform. Try the lottery game developed by us. While
                enjoying the best gaming experience, you can also join unlimited
                agents and stay at home to earn money.
              </p>
            </div>
          </div>
          <div className="absolute top-2 right-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              className="size-4 stroke-[#EE8A20]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
