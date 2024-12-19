import PropTypes from "prop-types";
import { useState } from "react";

import starStuck from "../../assets/assets2/emojis/Star Struck.png";
import usdt from "../../assets/assets2/emojis/Tether-USDT-icon 1.png";
import bitcoin from "../../assets/assets2/emojis/Bitcoin.png";
import solana from "../../assets/assets2/emojis/solana.png";
import jito from "../../assets/assets2/emojis/jito.png";
import badge from "../../assets/assets2/Group.png";
import HowToEarn from "./HowToEarn";

function TabButtons({
  activeTab,
  handleMainTabClick,
  timeLeft
}) {

  const [isOpen, setIsOpen] = useState(false);
  const [moodtab, setMoodtab] = useState(1);
  const [activeButton, setActiveButton] = useState(null);

  const handleMoodTabClick = (id) => {
    setMoodtab(id);
  };

  const handleButtonClick = (value) => {
    setActiveButton(value);
    // console.log(value)
  };

  const tabs = [
    { id: 1, label: "1", icon: starStuck },
    { id: 2, label: "2", icon: starStuck },
    { id: 3, label: "3", icon: starStuck },
    { id: 4, label: "4", icon: starStuck },
    { id: 5, label: "5", icon: starStuck },
    { id: 6, label: "6", icon: starStuck },
    { id: 7, label: "7", icon: starStuck },
    { id: 8, label: "8", icon: starStuck }
  ];

  const tabData = ["1 Min Mood", "3 Min Mood", "5 Min Mood"];
  const buttonData = ["+10", "+25", "+50", "MAX"];

  return (
    <>
      <div>
        <ul
          className="flex flex-row justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[15px] bg-white p-1.5 py-1"
          aria-label="Tabs"
        >
          <li
            className={` rounded-[15px] w-full p-2 transition-colors duration-300 ${
              activeTab === 1 ? "bg-[#FF8936] text-white " : "text-[#888EA4]"
            }`}
          >
            <div
              className="flex  flex-col justify-center items-center "
              onClick={() => handleMainTabClick(1)}
            >
              <div className="flex gap-1.5 flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_140_740)">
                    <path
                      d="M13.4891 0.117249C12.5466 0.117249 11.6714 0.588491 11.1328 1.32902C10.2577 0.992414 9.38251 0.790453 8.44002 0.790453C7.49754 0.790453 6.62237 0.992414 5.74721 1.32902C5.20864 0.588491 4.33348 0.117249 3.39099 0.117249C1.70798 0.117249 0.361572 1.46366 0.361572 3.14667C0.361572 4.08915 0.832815 4.96432 1.57334 5.50288C1.23674 6.37805 1.03478 7.25321 1.03478 8.1957C1.03478 10.4173 2.04458 12.3696 3.52563 13.716L1.84262 15.399C1.70798 15.6009 1.70798 15.9375 1.90994 16.1395C1.97726 16.2068 2.1119 16.2741 2.24654 16.2741C2.38118 16.2741 2.51583 16.2068 2.58315 16.1395L4.33348 14.3892C5.54524 15.1297 6.95897 15.6009 8.44002 15.6009C9.92107 15.6009 11.3348 15.1297 12.5466 14.3892L14.2969 16.1395C14.3642 16.2068 14.4989 16.2741 14.6335 16.2741C14.7681 16.2741 14.9028 16.2068 14.9701 16.1395C15.1721 15.9375 15.1721 15.6009 14.9701 15.399L13.2871 13.716C14.8355 12.3696 15.7779 10.35 15.7779 8.1957C15.7779 7.25321 15.576 6.37805 15.2394 5.50288C16.0472 4.96432 16.5185 4.08915 16.5185 3.14667C16.5185 1.46366 15.1721 0.117249 13.4891 0.117249ZM1.37138 3.14667C1.37138 2.06954 2.24654 1.12705 3.39099 1.12705C3.92955 1.12705 4.46812 1.32902 4.80472 1.73294C3.59295 2.40614 2.65047 3.41595 1.97726 4.5604C1.57334 4.22379 1.37138 3.68523 1.37138 3.14667ZM8.44002 14.5911C4.93936 14.5911 2.04458 11.6964 2.04458 8.1957C2.04458 4.69504 4.93936 1.80026 8.44002 1.80026C11.9407 1.80026 14.8355 4.69504 14.8355 8.1957C14.8355 11.6964 11.9407 14.5911 8.44002 14.5911ZM14.9028 4.5604C14.2296 3.34863 13.2198 2.40614 12.0753 1.73294C12.4792 1.32902 12.9505 1.12705 13.4891 1.12705C14.5662 1.12705 15.5087 2.00222 15.5087 3.14667C15.5087 3.68523 15.3067 4.22379 14.9028 4.5604Z"
                      fill={`   ${activeTab === 1 ? "white" : "#888EA4"}`}
                    />
                    <path
                      d="M8.97874 7.99374V3.68523C8.97874 3.41595 8.77678 3.14667 8.44017 3.14667C8.10357 3.14667 7.90161 3.34863 7.90161 3.68523V8.1957C7.90161 8.33034 7.96893 8.46498 8.03625 8.5323L10.8637 11.3598C10.931 11.4271 11.0657 11.4944 11.2003 11.4944C11.335 11.4944 11.4696 11.4271 11.5369 11.3598C11.7389 11.1578 11.7389 10.8212 11.5369 10.6192L8.97874 7.99374Z"
                      fill={`   ${activeTab === 1 ? "white" : "#888EA4"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_740">
                      <rect
                        width="16.1569"
                        height="16.1569"
                        fill={`   ${activeTab === 1 ? "white" : "#888EA4"}`}
                        transform="translate(0.361572 0.117249)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  className={`text-[11px] font-medium leading-none ${
                    activeTab === 3 ? "white" : "#888EA4"
                  } `}
                >
                  1 Min Mood
                </span>
              </div>
            </div>
          </li>
          <li
            className={` rounded-[15px] w-full p-2 transition-colors duration-300 ${
              activeTab === 2 ? "bg-[#FF8936] text-white" : "text-[#888EA4]"
            }`}
          >
            <div
              className="flex flex-col justify-center items-center "
              onClick={() => handleMainTabClick(2)}
            >
              <div className="flex gap-1.5 flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_140_740)">
                    <path
                      d="M13.4891 0.117249C12.5466 0.117249 11.6714 0.588491 11.1328 1.32902C10.2577 0.992414 9.38251 0.790453 8.44002 0.790453C7.49754 0.790453 6.62237 0.992414 5.74721 1.32902C5.20864 0.588491 4.33348 0.117249 3.39099 0.117249C1.70798 0.117249 0.361572 1.46366 0.361572 3.14667C0.361572 4.08915 0.832815 4.96432 1.57334 5.50288C1.23674 6.37805 1.03478 7.25321 1.03478 8.1957C1.03478 10.4173 2.04458 12.3696 3.52563 13.716L1.84262 15.399C1.70798 15.6009 1.70798 15.9375 1.90994 16.1395C1.97726 16.2068 2.1119 16.2741 2.24654 16.2741C2.38118 16.2741 2.51583 16.2068 2.58315 16.1395L4.33348 14.3892C5.54524 15.1297 6.95897 15.6009 8.44002 15.6009C9.92107 15.6009 11.3348 15.1297 12.5466 14.3892L14.2969 16.1395C14.3642 16.2068 14.4989 16.2741 14.6335 16.2741C14.7681 16.2741 14.9028 16.2068 14.9701 16.1395C15.1721 15.9375 15.1721 15.6009 14.9701 15.399L13.2871 13.716C14.8355 12.3696 15.7779 10.35 15.7779 8.1957C15.7779 7.25321 15.576 6.37805 15.2394 5.50288C16.0472 4.96432 16.5185 4.08915 16.5185 3.14667C16.5185 1.46366 15.1721 0.117249 13.4891 0.117249ZM1.37138 3.14667C1.37138 2.06954 2.24654 1.12705 3.39099 1.12705C3.92955 1.12705 4.46812 1.32902 4.80472 1.73294C3.59295 2.40614 2.65047 3.41595 1.97726 4.5604C1.57334 4.22379 1.37138 3.68523 1.37138 3.14667ZM8.44002 14.5911C4.93936 14.5911 2.04458 11.6964 2.04458 8.1957C2.04458 4.69504 4.93936 1.80026 8.44002 1.80026C11.9407 1.80026 14.8355 4.69504 14.8355 8.1957C14.8355 11.6964 11.9407 14.5911 8.44002 14.5911ZM14.9028 4.5604C14.2296 3.34863 13.2198 2.40614 12.0753 1.73294C12.4792 1.32902 12.9505 1.12705 13.4891 1.12705C14.5662 1.12705 15.5087 2.00222 15.5087 3.14667C15.5087 3.68523 15.3067 4.22379 14.9028 4.5604Z"
                      fill={`   ${activeTab === 2 ? "white" : "#888EA4"}`}
                    />
                    <path
                      d="M8.97874 7.99374V3.68523C8.97874 3.41595 8.77678 3.14667 8.44017 3.14667C8.10357 3.14667 7.90161 3.34863 7.90161 3.68523V8.1957C7.90161 8.33034 7.96893 8.46498 8.03625 8.5323L10.8637 11.3598C10.931 11.4271 11.0657 11.4944 11.2003 11.4944C11.335 11.4944 11.4696 11.4271 11.5369 11.3598C11.7389 11.1578 11.7389 10.8212 11.5369 10.6192L8.97874 7.99374Z"
                      fill={`   ${activeTab === 2 ? "white" : "#888EA4"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_740">
                      <rect
                        width="16.1569"
                        height="16.1569"
                        fill={`   ${activeTab === 2 ? "white" : "#888EA4"}`}
                        transform="translate(0.361572 0.117249)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  className={`text-[11px] font-medium leading-none ${
                    activeTab === 3 ? "white" : "#888EA4"
                  } `}
                >
                  3 Min Mood
                </span>
              </div>
            </div>
          </li>
          <li
            className={` rounded-[15px] w-full p-2 transition-colors duration-500 ${
              activeTab === 3 ? "bg-[#FF8936] text-white" : "text-[#888EA4]"
            }`}
          >
            <div
              className="flex gap-1 flex-col justify-center items-center "
              onClick={() => handleMainTabClick(3)}
            >
              <div className="flex gap-1.5 flex-col items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_140_740)">
                    <path
                      d="M13.4891 0.117249C12.5466 0.117249 11.6714 0.588491 11.1328 1.32902C10.2577 0.992414 9.38251 0.790453 8.44002 0.790453C7.49754 0.790453 6.62237 0.992414 5.74721 1.32902C5.20864 0.588491 4.33348 0.117249 3.39099 0.117249C1.70798 0.117249 0.361572 1.46366 0.361572 3.14667C0.361572 4.08915 0.832815 4.96432 1.57334 5.50288C1.23674 6.37805 1.03478 7.25321 1.03478 8.1957C1.03478 10.4173 2.04458 12.3696 3.52563 13.716L1.84262 15.399C1.70798 15.6009 1.70798 15.9375 1.90994 16.1395C1.97726 16.2068 2.1119 16.2741 2.24654 16.2741C2.38118 16.2741 2.51583 16.2068 2.58315 16.1395L4.33348 14.3892C5.54524 15.1297 6.95897 15.6009 8.44002 15.6009C9.92107 15.6009 11.3348 15.1297 12.5466 14.3892L14.2969 16.1395C14.3642 16.2068 14.4989 16.2741 14.6335 16.2741C14.7681 16.2741 14.9028 16.2068 14.9701 16.1395C15.1721 15.9375 15.1721 15.6009 14.9701 15.399L13.2871 13.716C14.8355 12.3696 15.7779 10.35 15.7779 8.1957C15.7779 7.25321 15.576 6.37805 15.2394 5.50288C16.0472 4.96432 16.5185 4.08915 16.5185 3.14667C16.5185 1.46366 15.1721 0.117249 13.4891 0.117249ZM1.37138 3.14667C1.37138 2.06954 2.24654 1.12705 3.39099 1.12705C3.92955 1.12705 4.46812 1.32902 4.80472 1.73294C3.59295 2.40614 2.65047 3.41595 1.97726 4.5604C1.57334 4.22379 1.37138 3.68523 1.37138 3.14667ZM8.44002 14.5911C4.93936 14.5911 2.04458 11.6964 2.04458 8.1957C2.04458 4.69504 4.93936 1.80026 8.44002 1.80026C11.9407 1.80026 14.8355 4.69504 14.8355 8.1957C14.8355 11.6964 11.9407 14.5911 8.44002 14.5911ZM14.9028 4.5604C14.2296 3.34863 13.2198 2.40614 12.0753 1.73294C12.4792 1.32902 12.9505 1.12705 13.4891 1.12705C14.5662 1.12705 15.5087 2.00222 15.5087 3.14667C15.5087 3.68523 15.3067 4.22379 14.9028 4.5604Z"
                      fill={`   ${activeTab === 3 ? "white" : "#888EA4"}`}
                    />
                    <path
                      d="M8.97874 7.99374V3.68523C8.97874 3.41595 8.77678 3.14667 8.44017 3.14667C8.10357 3.14667 7.90161 3.34863 7.90161 3.68523V8.1957C7.90161 8.33034 7.96893 8.46498 8.03625 8.5323L10.8637 11.3598C10.931 11.4271 11.0657 11.4944 11.2003 11.4944C11.335 11.4944 11.4696 11.4271 11.5369 11.3598C11.7389 11.1578 11.7389 10.8212 11.5369 10.6192L8.97874 7.99374Z"
                      fill={`   ${activeTab === 3 ? "white" : "#888EA4"}`}
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_140_740">
                      <rect
                        width="16.1569"
                        height="16.1569"
                        fill={`   ${activeTab === 3 ? "white" : "#888EA4"}`}
                        transform="translate(0.361572 0.117249)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  className={`text-[11px] font-medium leading-none ${
                    activeTab === 3 ? "white" : "#888EA4"
                  } `}
                >
                  5 Min Mood
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-3">
        <div
          id="horizontal-alignment-1"
          className={`${activeTab === 1 ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-1"
        >
          <div className="px-3 flex justify-between gap-7">
            <div className="flex flex-col w-2/4">
              <div className="flex gap-5 mb-1 items-center">
                <span className="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-gradient-to-b from-[#2DA430] to-[#21C004] text-white  ">
                  <span className="size-2.5 inline-block rounded-full bg-white animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-sm font-medium text-gray-500 opacity-70">
                  2489756
                </span>
              </div>
              <span className="text-lg font-semibold text-black">
                Time remaining
              </span>
              <span className="text-[54px] font-semibold text-black leading-[45px]">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col w-2/4 justify-between gap-1">
              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full py-0.5 px-2.5 gap-x-1 inline-flex items-center  text-[10px] font-medium rounded-full border border-gray-200 bg-white text-gray-800 "
                  onClick={() => setIsOpen(true)}
                >
                  <img
                    className=" rounded-full w-5"
                    src={badge}
                    alt="Rounded avatar"
                  />
                  How to earn 1 Lakh?
                </button>
              </div>
              <div>
                <span className="text-sm font-normal text-black">
                  Winning History
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <ul
              className="px-2 grid grid-cols-4 gap-2 justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white py-3"
              aria-label="Tabs"
            >
              
                {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`rounded-full w-full transition-colors duration-300 flex flex-col items-center gap-1`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${
                        moodtab === tab.id ? "ring-1 ring-[#A5D4F8]" : ""
                      }`}
                      onClick={() => handleMoodTabClick(tab.id)}
                    >
                      <img
                        className="rounded-full bg-gradient-to-tl from-gradient1 via-gradient2 to-gradient3 p-1.5 w-10"
                        src={tab.icon}
                        alt={`Tab ${tab.label}`}
                      />
                    </div>
                    <span className="text-black leading-none">{tab.label}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="my-4">
            <div className="px-6  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white p-3 pb-0">
              <div>
                <form className="">
                  <div
                    className="
                 "
                  >
                    <div className="flex justify-between px-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                      >
                        Place Order
                      </label>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-[10px] font-medium text-gray-900 "
                      >
                        Balance 52,000 USDT
                      </label>
                    </div>
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                        <img
                          className="w-6 h-6 text-gray-500 "
                          src={usdt}
                          alt="Rounded avatar"
                        />
                      </div>
                      <input
                        type="text"
                        id="input-group-1"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-5">
                      {buttonData.map((label, index) => (
                        <div
                          key={index}
                          className={`rounded-full w-full cursor-pointer ${
                            activeButton === label ? "bg-[#5D41EC]" : "bg-white"
                          }`}
                          onClick={() => handleButtonClick(label)}
                        >
                          <div
                            className={`text-xs font-medium px-4 py-0.5 rounded-full border ${
                              activeButton === label
                                ? "text-white border-transparent"
                                : "text-gray-800 border-[#E4E5E9]"
                            }`}
                          >
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="w-full text-white bg-[#5D41EC]  font-normal rounded-full text-xl px-5 py-4 text-center mb-2 "
                    >
                      Order
                    </button>
                    <div>
                      <span className="text-[8.5px] text-[#9E9E9E]">
                        By clicking place order you agree platform
                        <span className="underline"> Terms and Conditions</span>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                History
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD] hover:bg-[#5D41EC] focus:outline-none   font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Winner
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none  font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Game History
              </button>
            </div>
          </div>
          <div className="my-4 pb-16">
            <div className="px-3  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[10px] bg-white p-3">
              <div className="flex justify-between px-2 gap-2 mb-3 items-center">
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium text-gray-900 "
                >
                  Recent Transaction
                </label>
                <div className="relative">
                  <select className="border text-[#888EA4] border-gray-200 h-7 w-28   cursor-default rounded-md bg-white ps-6 text-left  shadow-sm  text-[11px]">
                    <option value="Monthly" className="">
                      Monthly
                    </option>
                    <option value="Yearly" className="">
                      Yearly
                    </option>
                  </select>
                  <div className=" absolute top-1.5 left-1.5 grid h-4 w-4  place-items-center text-blue-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#888EA4"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 ">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Currency
                            </th>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start  text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 ">
                          <tr>
                            <td className=" py-4 whitespace-nowrap  text-sm font-medium text-gray-800 ">
                              <div className="flex  items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={bitcoin}
                                  alt="Rounded avatar"
                                />
                                <span>Bitcoin</span>
                                <small className="ms-1 text-neutral-200">
                                  BTC
                                </small>
                              </div>
                            </td>
                            <td className=" py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              25/6/2024, 13:40
                            </td>
                            <td className=" py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className=" py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={solana}
                                  alt="Rounded avatar"
                                />
                                <span>Solana</span>
                                <small className="ms-1 text-neutral-200">
                                  SOL
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 10:22
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#FEE4E6] text-[#E63946] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Sell
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={jito}
                                  alt="Rounded avatar"
                                />
                                <span>Jito</span>
                                <small className="ms-1 text-neutral-200">
                                  JTO
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 09:15
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="horizontal-alignment-2"
          className={`${activeTab === 2 ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-2"
        >
          <div className="px-3 flex justify-between gap-7">
            <div className="flex flex-col w-2/4">
              <div className="flex gap-5 mb-1 items-center">
                <span className="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-gradient-to-b from-[#2DA430] to-[#21C004] text-white  ">
                  <span className="size-2.5 inline-block rounded-full bg-white animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-sm font-medium text-gray-500 opacity-70">
                  2489756
                </span>
              </div>
              <span className="text-lg font-semibold text-black">
                Time remaining
              </span>
              <span className="text-[54px] font-semibold text-black leading-[45px]">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col w-2/4 justify-between gap-1">
              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full py-1 px-2.5 gap-x-1 inline-flex items-center  text-[10px] font-medium rounded-full border border-gray-200 bg-white text-gray-800 "
                  onClick={() => setIsOpen(true)}
                >
                  <img
                    className=" rounded-full w-5"
                    src={badge}
                    alt="Rounded avatar"
                  />
                  How to earn 1 Lakh?
                </button>
              </div>
              <div>
                <span className="text-sm font-normal text-black">
                  Winning History
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            <ul
              className="px-2 grid grid-cols-4 gap-2 justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white py-3"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`rounded-full w-full transition-colors duration-300 flex flex-col items-center gap-1`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${
                        moodtab === tab.id ? "ring-1 ring-[#A5D4F8]" : ""
                      }`}
                      onClick={() => handleMoodTabClick(tab.id)}
                    >
                      <img
                        className="rounded-full bg-gradient-to-tl from-gradient1 via-gradient2 to-gradient3 p-1.5 w-10"
                        src={tab.icon}
                        alt={`Tab ${tab.label}`}
                      />
                    </div>
                    <span className="text-black leading-none">{tab.label}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="my-4">
            <div className="px-6  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white p-3 pb-0">
              <div>
                <form className="">
                  <div
                    className="
                 "
                  >
                    <div className="flex justify-between px-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                      >
                        Place Order
                      </label>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-[10px] font-medium text-gray-900 "
                      >
                        Balance 52,000 USDT
                      </label>
                    </div>
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                        <img
                          className="w-6 h-6 text-gray-500 "
                          src={usdt}
                          alt="Rounded avatar"
                        />
                      </div>
                      <input
                        type="text"
                        id="input-group-1"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-5">
                      {buttonData.map((label, index) => (
                        <div
                          key={index}
                          className={`rounded-full w-full cursor-pointer ${
                            activeButton === label ? "bg-[#5D41EC]" : "bg-white"
                          }`}
                          onClick={() => handleButtonClick(label)}
                        >
                          <div
                            className={`text-xs font-medium px-4 py-0.5 rounded-full border ${
                              activeButton === label
                                ? "text-white border-transparent"
                                : "text-gray-800 border-[#E4E5E9]"
                            }`}
                          >
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="w-full text-white bg-[#5D41EC]  font-normal rounded-full text-xl px-5 py-4 text-center mb-2 "
                    >
                      Order
                    </button>
                    <div>
                      <span className="text-[8.5px] text-[#9E9E9E]">
                        By clicking place order you agree platform
                        <span className="underline"> Terms and Conditions</span>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                History
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD] hover:bg-[#5D41EC] focus:outline-none   font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Winner
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none  font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Game History
              </button>
            </div>
          </div>
          <div className="my-4 pb-16">
            <div className="px-3  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[10px] bg-white p-3">
              <div className="flex justify-between px-2 gap-2 mb-3 items-center">
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium text-gray-900 "
                >
                  Recent Transaction
                </label>
                <div className="relative">
                  <select className="border text-[#888EA4] border-gray-200 h-7 w-28   cursor-default rounded-md bg-white ps-6 text-left  shadow-sm  text-[11px]">
                    <option value="Monthly" className="">
                      Monthly
                    </option>
                    <option value="Yearly" className="">
                      Yearly
                    </option>
                  </select>
                  <div className=" absolute top-1.5 left-1.5 grid h-4 w-4  place-items-center text-blue-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#888EA4"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 ">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Currency
                            </th>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start  text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 ">
                          <tr>
                            <td className=" py-4 whitespace-nowrap  text-sm font-medium text-gray-800 ">
                              <div className="flex  items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={bitcoin}
                                  alt="Rounded avatar"
                                />
                                <span>Bitcoin</span>
                                <small className="ms-1 text-neutral-200">
                                  BTC
                                </small>
                              </div>
                            </td>
                            <td className=" py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              25/6/2024, 13:40
                            </td>
                            <td className=" py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className=" py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={solana}
                                  alt="Rounded avatar"
                                />
                                <span>Solana</span>
                                <small className="ms-1 text-neutral-200">
                                  SOL
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 10:22
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#FEE4E6] text-[#E63946] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Sell
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={jito}
                                  alt="Rounded avatar"
                                />
                                <span>Jito</span>
                                <small className="ms-1 text-neutral-200">
                                  JTO
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 09:15
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="horizontal-alignment-3"
          className={`${activeTab === 3 ? "" : "hidden"}`}
          role="tabpanel"
          aria-labelledby="horizontal-alignment-item-3"
        >
          <div className="px-3 flex justify-between gap-7">
            <div className="flex flex-col w-2/4">
              <div className="flex gap-5 mb-1 items-center">
                <span className="inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-gradient-to-b from-[#2DA430] to-[#21C004] text-white  ">
                  <span className="size-2.5 inline-block rounded-full bg-white animate-pulse"></span>
                  LIVE
                </span>
                <span className="text-sm font-medium text-gray-500 opacity-70">
                  2489756
                </span>
              </div>
              <span className="text-lg font-semibold text-black">
                Time remaining
              </span>
              <span className="text-[54px] font-semibold text-black leading-[45px]">
                {Math.floor(timeLeft / 60)
                  .toString()
                  .padStart(2, "0")}
                :{(timeLeft % 60).toString().padStart(2, "0")}
              </span>
            </div>
            <div className="flex flex-col w-2/4 justify-between gap-1">
              <div className="flex justify-between">
                <button
                  type="button"
                  className="w-full py-1 px-2.5 gap-x-1 inline-flex items-center  text-[10px] font-medium rounded-full border border-gray-200 bg-white text-gray-800 "
                  onClick={() => setIsOpen(true)}
                >
                  <img
                    className=" rounded-full w-5"
                    src={badge}
                    alt="Rounded avatar"
                  />
                  How to earn 1 Lakh?
                </button>
              </div>
              <div>
                <span className="text-sm font-normal text-black">
                  Winning History
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
                <div className="p-1 bg-white rounded-full">
                  <img
                    className=" rounded-full "
                    src={starStuck}
                    alt="Rounded avatar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="my-4">
            
            <ul
              className="px-2 grid grid-cols-4 gap-2 justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white py-3"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                  <li
                    key={tab.id}
                    className={`rounded-full w-full transition-colors duration-300 flex flex-col items-center gap-1`}
                  >
                    <div
                      className={`p-1.5 rounded-full ${
                        moodtab === tab.id ? "ring-1 ring-[#A5D4F8]" : ""
                      }`}
                      onClick={() => handleMoodTabClick(tab.id)}
                    >
                      <img
                        className="rounded-full bg-gradient-to-tl from-gradient1 via-gradient2 to-gradient3 p-1.5 w-10"
                        src={tab.icon}
                        alt={`Tab ${tab.label}`}
                      />
                    </div>
                    <span className="text-black leading-none">{tab.label}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="my-4">
            <div className="px-6  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[25px] bg-white p-3 pb-0">
              <div>
                <form className="">
                  <div
                    className="
                 "
                  >
                    <div className="flex justify-between px-2">
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-semibold text-gray-900 "
                      >
                        Place Order
                      </label>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-[10px] font-medium text-gray-900 "
                      >
                        Balance 52,000 USDT
                      </label>
                    </div>
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-2.5 pointer-events-none">
                        <img
                          className="w-6 h-6 text-gray-500 "
                          src={usdt}
                          alt="Rounded avatar"
                        />
                      </div>
                      <input
                        type="text"
                        id="input-group-1"
                        className="bg-white border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 "
                        placeholder="Enter amount"
                      />
                    </div>
                    <div className="grid grid-cols-4 gap-6 mb-5">
                      {buttonData.map((label, index) => (
                        <div
                          key={index}
                          className={`rounded-full w-full cursor-pointer ${
                            activeButton === label ? "bg-[#5D41EC]" : "bg-white"
                          }`}
                          onClick={() => handleButtonClick(label)}
                        >
                          <div
                            className={`text-xs font-medium px-4 py-0.5 rounded-full border ${
                              activeButton === label
                                ? "text-white border-transparent"
                                : "text-gray-800 border-[#E4E5E9]"
                            }`}
                          >
                            {label}
                          </div>
                        </div>
                      ))}
                    </div>
                    <button
                      type="button"
                      className="w-full text-white bg-[#5D41EC]  font-normal rounded-full text-xl px-5 py-4 text-center mb-2 "
                    >
                      Order
                    </button>
                    <div>
                      <span className="text-[8.5px] text-[#9E9E9E]">
                        By clicking place order you agree platform
                        <span className="underline"> Terms and Conditions</span>
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                History
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD] hover:bg-[#5D41EC] focus:outline-none   font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Winner
              </button>
              <button
                type="button"
                className="w-full text-white bg-[#B5CADD]  hover:bg-[#5D41EC] focus:outline-none  font-medium rounded-full text-sm px-1.5 py-2.5 text-center "
              >
                Game History
              </button>
            </div>
          </div>
          <div className="my-4 pb-16">
            <div className="px-3  justify-between items-center text-sm font-medium text-center text-gray-50 rounded-[10px] bg-white p-3">
              <div className="flex justify-between px-2 gap-2 mb-3 items-center">
                <label
                  htmlFor="email"
                  className="block  text-sm font-medium text-gray-900 "
                >
                  Recent Transaction
                </label>
                <div className="relative">
                  <select className="border text-[#888EA4] border-gray-200 h-7 w-28   cursor-default rounded-md bg-white ps-6 text-left  shadow-sm  text-[11px]">
                    <option value="Monthly" className="">
                      Monthly
                    </option>
                    <option value="Yearly" className="">
                      Yearly
                    </option>
                  </select>
                  <div className=" absolute top-1.5 left-1.5 grid h-4 w-4  place-items-center text-blue-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#888EA4"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                  <div className="p-1.5 min-w-full inline-block align-middle">
                    <div className="overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-200 ">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Currency
                            </th>
                            <th
                              scope="col"
                              className="px-1.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Date
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Price
                            </th>
                            <th
                              scope="col"
                              className="px-2.5 py-3 text-start  text-xs font-medium text-[#888EA4] uppercase "
                            >
                              Type
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 ">
                          <tr>
                            <td className=" py-4 whitespace-nowrap  text-sm font-medium text-gray-800 ">
                              <div className="flex  items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={bitcoin}
                                  alt="Rounded avatar"
                                />
                                <span>Bitcoin</span>
                                <small className="ms-1 text-neutral-200">
                                  BTC
                                </small>
                              </div>
                            </td>
                            <td className=" py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              25/6/2024, 13:40
                            </td>
                            <td className=" py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className=" py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={solana}
                                  alt="Rounded avatar"
                                />
                                <span>Solana</span>
                                <small className="ms-1 text-neutral-200">
                                  SOL
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 10:22
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#FEE4E6] text-[#E63946] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Sell
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-1 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                              <div className="flex items-center gap-1">
                                <img
                                  className=" rounded-full w-6 h-6"
                                  src={jito}
                                  alt="Rounded avatar"
                                />
                                <span>Jito</span>
                                <small className="ms-1 text-neutral-200">
                                  JTO
                                </small>
                              </div>
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-sm text-start text-gray-800 ">
                              24/6/2024, 09:15
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap text-xl text-center font-bold text-[#FF8700] ">
                              7
                            </td>
                            <td className="px-1 py-4 whitespace-nowrap  text-start text-sm font-medium">
                              <span className="bg-[#DEF8F1] text-[#07AB81] text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                                Buy
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HowToEarn  isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

TabButtons.propTypes = {
  activeTab: PropTypes.number.isRequired, // Adjust the type as needed (string, number, etc.)
  moodTab: PropTypes.number.isRequired, // Adjust the type as needed (string, number, etc.)
  timeLeft: PropTypes.number.isRequired, // Adjust the type as needed (string, number, etc.)
  setTimeLeft: PropTypes.func.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  setMoodtab: PropTypes.func.isRequired,
  handleMainTabClick: PropTypes.func.isRequired
};

export default TabButtons;
