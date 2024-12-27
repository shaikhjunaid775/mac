import shield from "./../../assets/shield.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../Footer";
// import darklogo from "../../assets/logo/logo-dark.png";
import whitelogo from "../../assets/logo/logo-white.png";

const Stake = () => {
  const [StakeActiveButton, setStakeActiveButton] = useState("off"); // State to track the active button
  const [Stake3activeButton, setStake3ActiveButton] = useState("off"); // Default active state
  return (
    <>
      {/* Staking Input */}
      <div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 mb-1 text-sm">You`&apos;`re staking</p>
          <div className="flex items-center text-gray-400 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="stroke-gray-400  size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            0
          </div>
        </div>
        <div className="flex items-center justify-between  p-1.5 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-trigger"
                type="button"
                className="hs-dropdown-toggle p-2.5 px-4 flex items-center gap-x-2  text-sm font-medium rounded-lg border border-gray-200  text-gray-50 shadow-sm "
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="SOL"
                  className="h-4 w-4 mr-2"
                />
                <span className="">SOL</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-8 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-trigger"
              >
                <div className="p-1 space-y-0.5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <input
            type="number"
            placeholder="0.0"
            className="bg-transparent text-right text-gray-300 outline-none w-full appearance-none"
          />
        </div>
      </div>

      {/* Receiving Input */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 mb-1 text-sm">To receive</p>
          <div className="flex items-center text-gray-400 gap-1">
            <span className="text-xs">0% Slippage</span>
          </div>
        </div>
        <div className="flex items-center justify-between  p-1.5 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-trigger"
                type="button"
                className="hs-dropdown-toggle p-2.5 px-4 flex items-center gap-x-2  text-sm font-medium rounded-lg border border-gray-200  text-gray-50 shadow-sm "
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="SOL"
                  className="h-4 w-4 mr-2"
                />
                <span className="">JitoSOL</span>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-trigger"
              >
                <div className="p-1 space-y-0.5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <input
            type="number"
            placeholder=""
            className="bg-transparent text-right text-gray-300 outline-none w-full appearance-none"
          />
        </div>
      </div>

      {/* Convert Button */}
      <button className="mt-6 w-full py-3 text-center text-white bg-purple rounded-full text-sm font-medium">
        Convert to JitoSOL
      </button>

      {/* Additional Info */}
      <div className="mt-4 text-sm">
        <div className="flex justify-between">
          <p className="text-gray-400">1 JitoSOL</p>
          <span className="">≈ 1.162 SOL</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-400">Priority fee active</span>
          <div className="flex border border-gray-600 rounded-full overflow-hidden divide-x-2 divide-slate-400/25">
            {/* Off Button */}
            <button
              onClick={() => setStakeActiveButton("off")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                StakeActiveButton === "off"
                  ? "bg-slate-700 shadow-none" // Active styling
                  : ""
              }`}
              type="button"
            >
              Off
            </button>

            {/* On Button */}
            <button
              onClick={() => setStakeActiveButton("on")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                StakeActiveButton === "on"
                  ? "bg-slate-700 shadow-none" // Active styling
                  : ""
              }`}
              type="button"
            >
              On
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-400">Tips active</span>
          <div className="flex border border-gray-600 rounded-full overflow-hidden divide-x-2 divide-slate-400/25">
            {/* Off Button */}
            <button
              onClick={() => setStake3ActiveButton("off")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "off" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              Off
            </button>

            {/* High Button */}
            <button
              onClick={() => setStake3ActiveButton("high")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "high" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              High
            </button>

            {/* Low Button */}
            <button
              onClick={() => setStake3ActiveButton("low")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "low" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              Low
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const UnStake = () => {
  const [StakeActiveButton, setStakeActiveButton] = useState("off"); // State to track the active button
  const [Stake3activeButton, setStake3ActiveButton] = useState("off"); // Default active state
  return (
    <>
      {/* Staking Input */}
      <div>
        <div className="flex justify-between items-center">
          <p className="text-gray-400 mb-1 text-sm">You`&apos;`re staking</p>
          <div className="flex items-center text-gray-400 gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke=""
              className="stroke-gray-400  size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
              />
            </svg>
            0
          </div>
        </div>
        <div className="flex items-center justify-between  p-1.5 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-trigger"
                type="button"
                className="hs-dropdown-toggle p-2.5 px-4 flex items-center gap-x-2  text-sm font-medium rounded-lg border border-gray-200  text-gray-50 shadow-sm "
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="SOL"
                  className="h-4 w-4 mr-2"
                />
                <span className="">SOL</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#fff"
                  className="w-8 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-trigger"
              >
                <div className="p-1 space-y-0.5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <input
            type="number"
            placeholder="0.0"
            className="bg-transparent text-right text-gray-300 outline-none w-full appearance-none"
          />
        </div>
      </div>

      {/* Receiving Input */}
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-400 mb-1 text-sm">To receive</p>
          <div className="flex items-center text-gray-400 gap-1">
            <span className="text-xs">0% Slippage</span>
          </div>
        </div>
        <div className="flex items-center justify-between  p-1.5 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="hs-dropdown relative inline-flex">
              <button
                id="hs-dropdown-custom-trigger"
                type="button"
                className="hs-dropdown-toggle p-2.5 px-4 flex items-center gap-x-2  text-sm font-medium rounded-lg border border-gray-200  text-gray-50 shadow-sm "
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <img
                  src="https://cryptologos.cc/logos/solana-sol-logo.png"
                  alt="SOL"
                  className="h-4 w-4 mr-2"
                />
                <span className="">JitoSOL</span>
              </button>

              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-custom-trigger"
              >
                <div className="p-1 space-y-0.5">
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Newsletter
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Purchases
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Downloads
                  </a>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                    href="#"
                  >
                    Team Account
                  </a>
                </div>
              </div>
            </div>
          </div>
          <input
            type="number"
            placeholder=""
            className="bg-transparent text-right text-gray-300 outline-none w-full appearance-none"
          />
        </div>
      </div>

      {/* Convert Button */}
      <button className="mt-6 w-full py-3 text-center text-white bg-purple rounded-full text-sm font-medium">
        Convert to JitoSOL
      </button>

      {/* Additional Info */}
      <div className="mt-4 text-sm">
        <div className="flex justify-between">
          <p className="text-gray-400">1 JitoSOL</p>
          <span className="">≈ 1.162 SOL</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-400">Priority fee active</span>
          <div className="flex border border-gray-600 rounded-full overflow-hidden divide-x-2 divide-slate-400/25">
            {/* Off Button */}
            <button
              onClick={() => setStakeActiveButton("off")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                StakeActiveButton === "off"
                  ? "bg-slate-700 shadow-none" // Active styling
                  : ""
              }`}
              type="button"
            >
              Off
            </button>

            {/* On Button */}
            <button
              onClick={() => setStakeActiveButton("on")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                StakeActiveButton === "on"
                  ? "bg-slate-700 shadow-none" // Active styling
                  : ""
              }`}
              type="button"
            >
              On
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-400">Tips active</span>
          <div className="flex border border-gray-600 rounded-full overflow-hidden divide-x-2 divide-slate-400/25">
            {/* Off Button */}
            <button
              onClick={() => setStake3ActiveButton("off")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "off" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              Off
            </button>

            {/* High Button */}
            <button
              onClick={() => setStake3ActiveButton("high")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "high" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              High
            </button>

            {/* Low Button */}
            <button
              onClick={() => setStake3ActiveButton("low")}
              className={`py-1 px-2.5 text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 hover:bg-slate-700 active:shadow-none ${
                Stake3activeButton === "low" ? "bg-slate-700 shadow-none" : ""
              }`}
              type="button"
            >
              Low
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const Stakebtn = () => {
  return (
    <>
      <div className="">
        <button className="flex-1 text-xs font-medium py-1.5 px-2 rounded-2xl whitespace-nowrap transition-colors duration-150 ease-in-out    bg-[#6fb153] text-slate-900">
          <span className="text-white">≈ 1.162 SOL</span>
        </button>
      </div>
    </>
  );
};
const Staking = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabs = [
    { id: 1, label: "Stake", content: <Stake />, button: <Stakebtn /> },
    { id: 2, label: "Unstake", content: <UnStake />, button: " " }
  ];

  const handleClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <>
      <div className=" text-white">
        <div className="px-4 w-full flex items-center justify-between bg-[#0000000d] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
          <div className="py-1.5 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={whitelogo} alt="img" className="w-12" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-2 py-1.5 px-4 items-center rounded-full bg-purple">
              <img src={shield} className="w-7" />
              <span>G10x...aaow</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            <div className="w-fit h-fit border p-2 border-[#B96BFC] rounded-full  flex justify-center items-center ">
              <Link to="/auth/login" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#B96BFC"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className=" w-[90%] h-auto overflow-visible   max-w-md py-4 px-4  rounded-3xl shadow-lg mx-auto mb-10 border border-gray-600">
          {/* Heading */}
          <h1 className="text-3xl font-semibold mb-4">Get JitoSOL</h1>

          {/* Stake/Unstake Tabs */}
          <div className="flex flex-wrap justify-center  rounded-[20px]   p-1.5 px-3   bg-box">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => handleClick(tab.id)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`flex-1 flex gap-1 items-center justify-center text-sm font-medium h-8 px-3 text-center rounded-2xl whitespace-nowrap focus-visible:outline-none focus-visible:ring ring-indigo-300 transition-colors duration-150 ease-in-out    ${
                  activeTab === tab.id
                    ? "bg-[#18181a] text-slate-50"
                    : "text-slate-200 hover:text-slate-50"
                }`}
              >
                {tab.label}
                {tab.button}
              </motion.button>
            ))}
          </div>
          {/* Animated Tab Content */}
          <div className="relative my-4">
            {tabs.map(
              (tab) =>
                activeTab === tab.id && (
                  <motion.div
                    key={tab.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                  >
                    {tab.content}
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Staking;
