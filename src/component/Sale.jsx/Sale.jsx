import React, { useState } from "react";

const Sale = () => {
  const [selectedOption, setSelectedOption] = useState("4 Pouches");

  const options = [
    { label: "4 Pouches", price: "$14.95/each", isBestDeal: true },
    { label: "3 Pouches", price: "$16.95/each" },
    { label: "2 Pouches", price: "$19.95/each" },
    { label: "1 Pouch", price: "$21.95/each" }
  ];

  const free = [
    {
      label: "Free",
      amount: 60.05
    },
    {
      label: "Free",
      amount: 60.05
    },
    {
      label: "Free",
      amount: 60.05
    },
    {
      label: "Free",
      amount: 60.05
    }
  ];

  return (
    <div className="max-w-md mx-auto bg-gray-100  rounded-lg shadow-md">
      <div className="bg-[#27796b] text-white text-xs font-medium text-center py-2">
        Save up to 46% WITH 4 FREE GIFTS
      </div>
      <div className="text-center text-black text-[10px] bg-[#ffd89a] font-bold py-1.5">
        LIMITED TIME - SUMMER KICK-OFF SALE
      </div>
      <div className="p-4 pt-0">
        <div className="text-center text-xl  mt-2">
          <span className="font-extrabold">Save up to 46% </span>{" "}
          <span className="text-green-600 font-bold">+4 FREE Gifts</span>
        </div>
        <p className="text-center text-sm text-gray-600">
          With today’s subscribe & save offer*
        </p>
        <div className="grid grid-cols-4 gap-2 text-center my-4 mb-2 divide-solid divide-x divide-slate-400">
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-[#27796b]">60</span>
            <span className="text-gray-500 text-xs font-medium">Servings</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-[#27796b]">75</span>
            <span className="text-gray-500 text-xs font-medium">Ingredients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-[#27796b]">50</span>
            <span className="text-gray-500 text-xs font-medium">Calories</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-bold text-[#27796b]">12</span>
            <span className="text-gray-500 text-xs font-medium">Vitamins</span>
          </div>
        </div>
        {/* Review Section */}
      <div className="flex items-center justify-center space-x-2 my-2">
        <span className="text-yellow-500 text-md">★★★★★</span>
        <span className="text-gray-700 font-semibold text-[12px]">Excellent <span className="text-extrabold text-black">4.8</span></span>
        <span className="text-gray-500 text-[11px]"> |</span>
        <span className="text-gray-500 text-[11px]"> 19,579+ trusted reviews</span>
      </div>
        <div className="flex justify-center text-xs bg-green-100 py-2 px-4 rounded-lg border-2 border-dotted border-green-700 my-4 mt-1">
          <ul className="list-disc marker:text-gray-500">
            <li>
              {" "}
              Order by Jun. 26th for guaranteed{" "}
              <span className="text-green-500 font-bold">FREE Gifts</span>
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-2 relative">
          {options.map((option) => (
            <div
              key={option.label}
              className={`border-2  p-2 rounded-lg flex flex-col justify-center  items-center ${
                selectedOption === option.label
                  ? "border-[#d2ba95] bg-[#fef5e2]"
                  : "border-gray-200"
              }`}
              onClick={() => setSelectedOption(option.label)}
            >
              {option.isBestDeal && (
                <span className="bg-[#bd2037] text-white text-[11px] px-3 font-medium rounded-md  absolute -top-2">
                  BEST DEAL
                </span>
              )}
              <div className="flex items-center">
                <span>{option.label}</span>
              </div>
              <span>{option.price}</span>
            </div>
          ))}
        </div>
        <div className="text-center my-3 text-xs text-[#bd2037] font-bold">
          EXCLUSIVE SALE!{" "}
          <span className="text-black"> FREE Gifts With Your Order</span>
        </div>
        <div className="flex justify-between items-center mt-2 relative  gap-2 ">
          {free.map((gift, index) => (
            <div
              key={index}
              className="relative flex-1 text-center text-xs border py-9 px-1 border-dashed border-gray-400 rounded-lg"
            >
              <span className="absolute -top-2 left-0 right-0 text-[10px] font-bold text-green-600 bg-[#fef5e2] rounded-full px-1 w-fit justify-self-center">
                {gift.label}
                <span className="text-black"> {gift.amount}</span>
              </span>
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-b from-green-500 to-green-700  text-white font-semibold py-3 w-full mt-4 rounded-lg hover:bg-green-700 flex justify-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          Get your ActiveGreens NOW!
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Sale;
