import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";

// Tab components
const Withdraw = () => (
  <div className="p-4  rounded-lg bg-box">
    <div className="flex flex-col mb-2">
      <label htmlhtmlhtmlFor="" className="text-white mb-1 text-sm">
        Choose USDT Address
      </label>

      <select
        name=""
        id=""
        className="bg-input text-white text-sm p-2 rounded-lg"
      >
        <option value="" selected disabled>
          Choose USDT Address
        </option>
        <option value="">BEP 20</option>
      </select>
    </div>
    <div className="flex flex-col relative mb-2">
      <label className="absolute end-2 top-1 text-xs text-white">
        Min: $20
      </label>
      <label htmlhtmlhtmlFor="" className="text-white mb-1 text-sm">
        Withdraw Amount
      </label>
      <input
        className="p-3 rounded-lg bg-input px-4 text-sm"
        placeholder="Enter your amount..."
        type="number"
      />
    </div>
    <div className="my-2">
      <label className="py-2 text-sm text-white" htmlFor="">
        Available Profit Amount:
        <span className="text-white text-lg"> $17020.21</span>
      </label>
    </div>
    <div className="bg-zinc-900 p-2 rounded-lg">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm">Withdraw amount:</span>
        <span className="text-gray-300">$1</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm">10% Fee:</span>
        <span className="text-gray-300">$1</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-300 text-sm">Amount you will recieve:</span>
        <span className="text-gray-300">$1</span>
      </div>
    </div>
    <div className="flex justify-center mt-2">
      <button className="my-2 px-10  p-1.5 bg-gradient-to-r from-gradient1  to-gradient2 rounded-full font-semibold text-dark ">
        Withdraw
      </button>
    </div>
  </div>
);

const WithdrawHistory = () => (
  <div className=" gap-4">
    <div className="bg-box  rounded-md overflow-hidden my-2">
      <div className="card-header bg-primary-gradient p-2">
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium me-2 text-white history-badge py-0.5 rounded">
            Withdrawal
          </span>
          <span>
            <span className="text-green-300 font-semibold">Paid ✅</span>
          </span>
        </div>
      </div>

      <div className="card-body bg-dark p-0">
        <div className="px-2 flex justify-between items-center">
          <div className="w-full hitory-content flex flex-col gap-1 py-2">
            <div className="flex justify-between items-center mt-0">
              <div className="flex items-center gap-2">
                <span className="px-0.5 h-card-bottom text-sm text-white ">
                  Withdrawal Amount(BEP20)
                </span>
              </div>
              <div className="flex items-center gap-2 ">
                <span className="px-0.5 h-card-bottom text-sm text-white">
                  $ 20.00
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-0">
              <div className="flex items-center gap-2">
                <span className="px-0.5 h-card-bottom text-sm text-white">
                  Withdrawal code
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-0.5 h-card-bottom flex gap-1 ">
                  <span className="text-sm text-white">qwertyuiop</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-0">
              <div className="flex items-center gap-2">
                <span className="px-0.5 h-card-bottom text-sm text-white">
                  DateTime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-0.5 h-card-bottom text-sm text-white">
                  2024-08-12 14:00:37{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

function Withdrawal() {
  const [activeTab, setActiveTab] = useState(1); // State htmlFor active tab

  const tabs = [
    { id: 1, label: "Withdraw", content: <Withdraw /> },
    { id: 2, label: "Withdraw History", content: <WithdrawHistory /> },
  ];

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="bg-black h-screen">
        <div className="grid grid-cols-3 py-3 bg-header text-center  w-full">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <span className="text-white">Withdrawal</span>
        </div>
        <div className=" m-2 rounded-lg">
          <div className="w-full">
            {/* Tab Buttons */}
            <div className="flex flex-wrap justify-center  rounded-[20px]   p-1.5 px-3   bg-box">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => handleClick(tab.id)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring ring-indigo-300 border-none transition-colors duration-150 ease-in-out    ${
                    activeTab === tab.id
                      ? "bg-white text-slate-900"
                      : "text-slate-200 hover:text-slate-50"
                  }`}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className="mx-2">
          {tabs.map(
            (tab) =>
              activeTab === tab.id && (
                <motion.div
                  key={tab.id}
                  className=""
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.5 }}
                >
                  {tab.content}
                </motion.div>
              )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Withdrawal;
