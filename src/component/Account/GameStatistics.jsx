import React from "react";
import BackButton from "../../BackButton";

import { useState } from "react";

function GameStatistics() {
  // List of buttons/tabs
  const buttons = [
    { name: "Today", content: "₹0.00" },
    { name: "Yesterday", content: "₹0.00" },
    { name: "This Week", content: "₹0.00" },
    { name: "This month", content: "₹0.00" }
  ];

  // State to track the active tab (default is 0)
  const [activeTab, setActiveTab] = useState(0);

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
              Game statistics
            </span>
          </div>
        </div>
      </nav>
      <div className="p-3">
        {/* Tab Buttons */}
        <div className="flex gap-1 justify-between">
          {buttons.map((item, index) => (
            <span
              key={index}
              onClick={() => setActiveTab(index)} // Set active tab on click
              className={`cursor-pointer text-sm font-normal px-3.5 py-1.5 rounded-full ${
                activeTab === index
                  ? "bg-gradient-to-r from-orange-400 to-orange-500 text-white"
                  : "bg-white text-gray-600"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Content of the Active Tab */}
        <div className="mt-4 p-6 bg-white rounded-md">
          
          <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-xl text-[#FEAA57] font-bold">
              {buttons[activeTab].content}
            </h2>
            <h2 className="text-md text-gray-500 ">Total bet</h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameStatistics;
