
import darklogo from "../../assets/logo/logo-dark.png";
import whitelogo from "../../assets/logo/logo-white.png";
import bgRectangle from "../../assets/background/Rectangle.png";
import coin from "../../../public/coinAnimation.png";
import owl from "../../assets/logo/blueowl1.png";
import treasure from "../../assets/dashboard/treasure.png";
import Footer from "../Footer";
import "../../CoinAnimation.css";
import lockcoin from "../../assets/dashboard/lockcoin.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Dashboard2() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-primary2 to-black text-white">
        {/* Header */}
        <div className="flex items-center justify-between py-1 ">
          <div className="flex gap-2 items-center pl-4">
            <div className="py-1.5 d-flex justify-content-center align-items-center">
              <div className="">
                <img
                  src={whitelogo}
                  alt="img"
                  className="w-9 block dark:hidden"
                />
                <img
                  src={darklogo}
                  alt="img"
                  className="w-9  hidden dark:block"
                />
              </div>
            </div>
            <div>
              <h1 className="text-xs font-bold">Mine AI Coin</h1>
              <p className="text-[9px] text-gray-400">Let’s start staking</p>
            </div>
          </div>
          <div className="relative">
            {/* Trigger Button */}
            <div
              onClick={toggleDropdown}
              className="flex justify-between items-center gap-4 bg-[#121C43] px-2 py-1 rounded-lg rounded-r-none cursor-pointer"
            >
              <span className="text-[9px]">0x00000...111</span>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#00EAD6"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>
              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute top-full right-0 bg-red-600 shadow-md rounded-md mt-1 w-full p-1 px-2">
                  <ul>
                    <Link to="/user/signup">
                    <li className="text-xs  cursor-pointer flex gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        className="size-4  stroke-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
                        />
                      </svg>
                      <span className=" font-semibold text-white">Disconnect</span>
                    </li>
                    </Link>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-col-2">
          <div className="grid grid-cols-2 px-1 ">
            <div className="relative px-2 pt-4">
              <img src={bgRectangle} className="w-full h-6" />
              <div className="w-full absolute top-0 h-7 bg-cover bg-center pt-4">
                <div className="grid grid-cols-2 justify-between ">
                  <div className="flex gap-1 p-1 items-center">
                    <img src={coin} className="w-4" alt="" srcSet="" />
                    <span className="text-[10px]">1 MAC</span>
                  </div>
                  <div className="flex gap-1 p-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 32 32"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx={16} cy={16} r={16} fill="#26a17b"></circle>
                        <path
                          fill="#fff"
                          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-[10px]">0.0001</span>
                  </div>
                </div>
              </div>
              {/* Total Staked and Earnings */}
              <div className="grid grid-cols-2 py-4 mt-3 w-full">
                <div className="">
                  <p className="text-[8px] text-white">Total Staked</p>
                  <p className="text-xl  font-medium">5000</p>
                </div>
                <div className="">
                  <p className="text-[8px] text-white">Total Earning</p>
                  <p className="text-xl font-medium">34</p>
                </div>
              </div>
            </div>
            <div>
              <img src={owl} alt="Owl" srcSet={owl} />
            </div>
          </div>
        </div>

        <div className=" pt-1.5 rounded-t-3xl -mt-3 z-10 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:-z-10 after:mx-auto after:bg-primary after:rounded-[2.1rem] ">
          <div className="bg-[#1C1F24] pt-3 rounded-t-[1.4rem] pb-16">
            {/* Referral Link */}
            <div className="flex justify-between items-center px-3 py-1.5 bg-dashboard-box rounded-2xl mx-4 mb-4  relative ">
              <span className="flex items-center text-xs font-bold  me-3">
                <span className="flex w-2.5 h-2.5 border border-green-200 bg-green-500 rounded-full me-1.5 flex-shrink-0"></span>
                My referral link
              </span>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <button className="bg-[#1C1F24] text-[11px] px-4 py-1.5 rounded-xl">
                    Copy
                  </button>
                  <button className="bg-primary2 text-[11px] px-4 py-1.5 rounded-xl">
                    Share
                  </button>
                </div>
              </div>
            </div>

            {/* Main Actions */}
            <div className="grid grid-cols-3 gap-4 px-4 py-2">
              <div className="bg-dashboard-box text-center p-2 rounded-2xl flex flex-col items-center justify-between">
                <img src={treasure} className="w-18" />
                <p className="text-[12px] mt-1">My Team</p>
              </div>
              <div className="bg-primary-gradient text-center p-2 rounded-2xl flex flex-col items-center justify-between">
                <div className="pl">
                  <div className="pl__coin">
                    <div className="pl__coin-flare"></div>
                    <div className="pl__coin-flare"></div>
                    <div className="pl__coin-flare"></div>
                    <div className="pl__coin-flare"></div>
                    <div className="pl__coin-layers">
                      <div className="pl__coin-layer">
                        {/* <div className="pl__coin-inscription"></div> */}
                      </div>
                      <div className="pl__coin-layer"></div>
                      {/* Uncomment these layers if needed */}
                      {/* <div className="pl__coin-layer"></div> */}
                      {/* <div className="pl__coin-layer"></div> */}
                      {/* <div className="pl__coin-layer"> */}
                      {/*   <div className="pl__coin-inscription"></div> */}
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="pl__shadow"></div>
                </div>
                <p className="text-[12px] mt-1">Start Staking</p>
              </div>
              <div className="bg-dashboard-box text-center p-2 rounded-2xl flex flex-col items-center justify-between">
                <img src={treasure} className="w-24" />
                <p className="text-[12px] mt-1">Withdraw</p>
              </div>
            </div>

            {/* Lockin Section */}
            <div className="bg-gradient-to-l from-primary2 to-55% to-dashboard-box p-2 px-3 mx-4 rounded-3xl relative">
              <div className="flex justify-between items-center ">
                <p className="font-semibold text-gray-300">200 Days Lockin</p>
                <img src={lockcoin} className="w-14 absolute -right-4 -top-3" />
              </div>
              <div className="grid grid-cols-2 items-end">
                <div className="flex items-end gap-1 mt-1">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5 mb-2"
                      viewBox="0 0 32 32"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx={16} cy={16} r={16} fill="#26a17b"></circle>
                        <path
                          fill="#fff"
                          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"
                        ></path>
                      </g>
                    </svg>
                  </div>
                  <div>
                    <div>
                      <p className="text-[10px]">Total Staking</p>
                      <p className="text-2xl font-semibold text-[#15A3F9]">
                        {" "}
                        5000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ml-6 grid grid-cols-2">
                <div className="mt-1">
                  <p className="text-[9px] text-gray-400">Time Remaining</p>
                  <p className="text-[13px] text-gray-400">184d 16h 23m 10s</p>
                </div>
                <div className="flex flex-col justify-center ">
                  <span className="text-[9px] text-gray-400">You will get</span>
                  <div className="flex gap-2 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-5"
                      viewBox="0 0 32 32"
                    >
                      <g fill="none" fillRule="evenodd">
                        <circle cx={16} cy={16} r={16} fill="#26a17b"></circle>
                        <path
                          fill="#fff"
                          d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042c-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658s2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061c1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658c0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118s3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116s-3.301-1.914-7.694-2.117"
                        ></path>
                      </g>
                    </svg>
                    <span className="text-xs text-gray-400">10,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trackers */}
            <div className="px-7 my-3 relative">
              <p className="font-semibold text-gray-300 text-sm">
                Affiliate Activity Tracker
              </p>
            </div>
            <div className="flex">
              <div className="grid grid-cols-2 gap-2 gap-x-4 px-4 py-4 pt-0 w-4/5 ">
                <div className="bg-dashboard-box text-center p-2 flex flex-col  rounded-2xl">
                  <p className="text-2xl font-medium">61</p>
                  <p className="text-[9px]">Total Team</p>
                </div>
                <div className="bg-dashboard-box text-center p-2 flex flex-col  rounded-2xl">
                  <p className="text-2xl font-medium">61</p>
                  <p className="text-[9px]">Team Business</p>
                </div>
                <div className="bg-dashboard-box text-center p-2 flex flex-col  rounded-2xl">
                  <p className="text-2xl font-medium">61</p>
                  <p className="text-[9px]">Total Directs</p>
                </div>
                <div className="bg-dashboard-box text-center p-2 flex flex-col  rounded-2xl">
                  <p className="text-2xl font-medium">61</p>
                  <p className="text-[9px]">Direct Business</p>
                </div>
              </div>
              <div className=" w-full h-44 overflow-hidden w-100 absolute">
                <img src={coin} className="w-32 absolute top-0 -right-12" />
              </div>
            </div>
            <div className="px-7 my-3">
              <p className="font-semibold text-gray-300 text-sm">
                Total Earning Tracker
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 px-4 py-4 pt-0 w-4/5">
              <div className="bg-dashboard-box text-center p-2 flex flex-col rounded-lg">
                <p className="text-2xl font-medium">61</p>
                <p className="text-[10px]">Direct Earning</p>
              </div>
              <div className="bg-dashboard-box text-center p-2 flex flex-col rounded-lg">
                <p className="text-2xl font-medium">61</p>
                <p className="text-[10px]">Level Earning</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Dashboard2;
