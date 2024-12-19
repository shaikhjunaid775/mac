import React from "react";
import { Link } from "react-router-dom";
import WithdrawWallet from "./WithdrawWallet";
import NoData from "../../NoData";
import upload from "../../assets/plus.png";
import BackButton from "../../BackButton";
import lottery from "../../assets/tab-images/lottery.png";

import { useState } from "react";

function Withdraw() {
  const [openTab, setOpenTab] = useState(1);

  const mainMenu = {
    menu: [
      {
        key: 1,
        name: "Bank Card"
      },
      {
        key: 2,
        name: "USDT"
      }
    ]
  };

  // Find the data corresponding to the active tab
  const activeTab =
    mainMenu.menu.find((menuItem) => menuItem.key === openTab) || {};
  const activeTabData = activeTab.data || [];
  const depositAmounts = activeTab.depositAmount || [];

  return (
    <div>
      <nav className="bg-white border-gray-200 ">
        <div className=" grid grid-cols-3 items-center justify-between mx-auto p-2">
          <BackButton />
          <div className="flex justify-center items-center ">
            <a
              href="#"
              className="block text-lg  md:p-0 text-dark  "
              aria-current="page"
            >
              Withdraw
            </a>
          </div>
          <div className="flex justify-end  items-center ">
            <Link
              to="/account/withdrawHistory"
              className="block text-xs  md:p-0 text-dark  "
              aria-current="page"
            >
              Withdraw History
            </Link>
          </div>
        </div>
      </nav>
      <div className="p-1.5 ">
        <WithdrawWallet />
      </div>
      <div className="p-1.5 mx-auto mt-3">
        <div className=" items-center justify-center maxW-xl">
          {/* Tab navigation */}
          <div className="grid grid-cols-3 ">
            {mainMenu.menu.map((menuItem) => (
              <div
                key={menuItem.key}
                onClick={() => setOpenTab(menuItem.key)}
                className={`text-center px-1 py-2 text-gray-600 rounded`}
              >
                <button
                  className={`flex-col w-full p-2 ${
                    openTab === menuItem.key
                      ? "bg-gradient-to-t from-orange-400 to-orange-500 rounded-lg text-white"
                      : "text-dark bg-white rounded-lg"
                  } flex items-center justify-center transition-opacity`}
                >
                  <img src={lottery} className="w-20" alt="icon" />
                  <span className="text-xs leading-none font-medium">
                    {menuItem.name}
                  </span>
                </button>
              </div>
            ))}
          </div>
          <div>
            {mainMenu.menu.map((menuItem) => (
              <div
                key={menuItem.key}
                className={`${
                  openTab === menuItem.key
                    ? "block animate-fade-up animate-ease-out"
                    : "hidden"
                }`}
              >
                <div>
                  <div>
                    <Link to="/Account/AddBankAccount">
                      <div className="bg-white rounded-lg p-3 flex flex-col gap-4">
                        <div className="flex justify-center">
                          <img src={upload} alt="" className="w-12" />
                        </div>
                        <div className="flex justify-center">
                          <h4 className="text-gray-400">
                            Add a bank account number
                          </h4>
                        </div>
                      </div>
                    </Link>
                    <div className="my-2">
                      <h4 className="text-red-500 text-xs text-center tracking-wider">
                        Need to add beneficiary information to be able to
                        withdraw money
                      </h4>
                    </div>
                  </div>

                  {openTab === 1 && menuItem.key === 1 ? (
                    <div className="  rounded-lg mb-4 ">
                      <div className="bg-white rounded-lg mb-4 p-3">
                        <div className="w-full  relative ">
                          <div className="relative mb-3">
                            <input
                              className="w-full pl-11 h-10 pr-3 py-2  bg-[#F7F8FF] placeholder:text-[#ED8A1F] text-slate-700 text-sm rounded-full"
                              placeholder="Please enter the amount"
                            />
                            <div className="absolute h-10 w-10 left-1 top-0 my-auto px-2 flex items-center font-extrabold">
                              <span className="text-lg text-orange-500">₹</span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                              <span className="text-xs text-[#768096]">
                                Withdrawable balance{" "}
                                <span className="text-[#ED8A1F]">₹ 0.00</span>
                              </span>
                              <button
                                type="button"
                                class="text-[#ED8A1F] hover:text-white border border-[#ED8A1F]  font-medium rounded-md text-xs px-8  text-center"
                              >
                                All
                              </button>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-xs text-[#768096]">
                                Withdrawable amount recieved
                              </span>
                              <span className="text-[#ED8A1F]">₹ 0.00</span>
                            </div>
                            <div className="">
                              <button
                                type="button"
                                className="text-white  bg-gradient-to-r from-orange-400 to-orange-500  font-normal rounded-full w-full text-lg px-5 py-2 text-center me-2 mb-2 "
                              >
                                Withdraw
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-white rounded-lg mb-4">
                      <div className="flex my-3">
                        <div className="flex-shrink-0">
                          <svg
                            height="25"
                            viewBox="0 0 64 64"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g
                              id="_14_wallet_download_download_wallet_money_purse_interest_business_and_finance"
                              data-name="14 wallet download, download, wallet, money, purse, interest, business and finance"
                            >
                              <path
                                d="m29.89 43.54a1 1 0 0 0 -.89-.54h-3v-6a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v6h-3a1 1 0 0 0 -.88.53 1 1 0 0 0 .05 1l6 9a1 1 0 0 0 .83.47 1 1 0 0 0 .83-.45l6-9a1 1 0 0 0 .06-1.01z"
                                fill="#3b2314"
                              />
                              <path
                                d="m4 12a1 1 0 0 1 -1-1v-3a5 5 0 0 1 5-5h47a1 1 0 0 1 0 2h-47a3 3 0 0 0 -3 3v3a1 1 0 0 1 -1 1z"
                                fill="#ec1c24"
                              />
                              <path
                                d="m58 8h-52a3 3 0 0 0 -3 3v36a3 3 0 0 0 3 3h1.81a16 16 0 0 0 30.38 0h19.81a3 3 0 0 0 3-3v-36a3 3 0 0 0 -3-3zm-35 50a13 13 0 1 1 13-13 13 13 0 0 1 -13 13z"
                                fill="#f6921e"
                              />
                              <path
                                d="m56 24h-11a5 5 0 0 0 0 10h11a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1z"
                                fill="#3b2314"
                              />
                              <g fill="#ec1c24">
                                <path d="m46 31a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                                <path d="m9 16a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                                <path d="m55 46a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                                <path d="m55 16a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 ms-2">
                          <p className="text-sm font-medium text-gray-900 truncate ">
                            Select Amount of USDT
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        {depositAmounts.map((amount, index) => (
                          <div
                            key={index}
                            className="gap-5 text-orange-400 text-lg font-medium inline-flex items-center px-2.5 py-0.5 rounded me-2 border border-gray-300"
                          >
                            <span className="text-gray-400">₹</span>
                            <span className="font-normal">{amount}</span>
                          </div>
                        ))}
                      </div>
                      <div className="w-full flex flex-col gap-3  relative ">
                        <div className="relative">
                          <input
                            className="w-full pl-11 h-10 pr-3 py-2 bg-[#f7f8ff] placeholder:text-[#ED8A1F] text-slate-700 text-sm rounded-md"
                            placeholder="Please enter withdrawal amount"
                          />
                          <div className="absolute h-10 w-10 left-1 top-0 my-auto px-2 flex items-center font-extrabold">
                            <span className="text-lg text-orange-500"> ₹ </span>
                          </div>
                        </div>
                        <div className="relative">
                          <input
                            className="w-full pl-11 h-10 pr-3 py-2 bg-[#f7f8ff] placeholder:text-[#ED8A1F] text-slate-700 text-sm rounded-md"
                            placeholder="Please enter UDST amount"
                          />
                          <div className="absolute h-10 w-10 left-1 top-0 my-auto px-2 flex items-center font-extrabold">
                            <span className="text-lg text-orange-500"> ₹ </span>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-xs text-[#ED8A1F] tracking-wider">
                            Withdrawable balance{" "}
                            <span className="text-[#ED8A1F]">₹ 0.00</span>
                          </span>
                          <button
                            type="button"
                            class="text-[#ED8A1F]  border border-[#ED8A1F]  font-medium rounded-md text-xs px-8  text-center"
                          >
                            All
                          </button>
                        </div>
                      </div>
                      <div className="my-6">
                        <button
                          type="button"
                          className="text-white  bg-gradient-to-r from-orange-400 to-orange-500  font-normal rounded-full w-full text-lg px-5 py-2.5 text-center me-2 mb-2 "
                        >
                          Withdraw
                        </button>
                      </div>
                    </div>
                  )}

                  <div className=" bg-white rounded-lg">
                    <div className="p-4 py-3.5 border border-gray-200 rounded-lg">
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            Need to bet{" "}
                            <span className="text-red-500">₹0.00</span> to be
                            able to withdraw
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            Withdraw time{" "}
                            <span className="text-red-500">00:00-23:50</span> to
                            be able to withdraw
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            Inday Remaining Withdrawal Times{" "}
                            <span className="text-red-500">3</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-ms">
                            Withdrawal amount range{" "}
                            <span className="text-red-500">
                              ₹110.00-₹100,000.00
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            Please confirm your beneficial account information
                            before withdrawing. If your information is
                            incorrect, our company will not be liable for the
                            amount of loss
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-2">
                        <div className="me-3">
                          <div className="w-1.5 h-1.5 rotate-45 mt-2  bg-[#ED8A1F]"></div>
                        </div>
                        <div>
                          <p className="text-gray-500 text-sm">
                            If your beneficial information is incorrect, please
                            contact customer service
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex my-3">
                      <div className="flex-shrink-0">
                        <svg
                          height="25"
                          viewBox="0 0 64 64"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g
                            id="_14_wallet_download_download_wallet_money_purse_interest_business_and_finance"
                            data-name="14 wallet download, download, wallet, money, purse, interest, business and finance"
                          >
                            <path
                              d="m29.89 43.54a1 1 0 0 0 -.89-.54h-3v-6a1 1 0 0 0 -1-1h-4a1 1 0 0 0 -1 1v6h-3a1 1 0 0 0 -.88.53 1 1 0 0 0 .05 1l6 9a1 1 0 0 0 .83.47 1 1 0 0 0 .83-.45l6-9a1 1 0 0 0 .06-1.01z"
                              fill="#3b2314"
                            />
                            <path
                              d="m4 12a1 1 0 0 1 -1-1v-3a5 5 0 0 1 5-5h47a1 1 0 0 1 0 2h-47a3 3 0 0 0 -3 3v3a1 1 0 0 1 -1 1z"
                              fill="#ec1c24"
                            />
                            <path
                              d="m58 8h-52a3 3 0 0 0 -3 3v36a3 3 0 0 0 3 3h1.81a16 16 0 0 0 30.38 0h19.81a3 3 0 0 0 3-3v-36a3 3 0 0 0 -3-3zm-35 50a13 13 0 1 1 13-13 13 13 0 0 1 -13 13z"
                              fill="#f6921e"
                            />
                            <path
                              d="m56 24h-11a5 5 0 0 0 0 10h11a1 1 0 0 0 1-1v-8a1 1 0 0 0 -1-1z"
                              fill="#3b2314"
                            />
                            <g fill="#ec1c24">
                              <path d="m46 31a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                              <path d="m9 16a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                              <path d="m55 46a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                              <path d="m55 16a2 2 0 1 1 2-2 2 2 0 0 1 -2 2z" />
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0 ms-2">
                        <p className="text-md font-medium text-gray-900 truncate ">
                          Withdrawal history
                        </p>
                      </div>
                    </div>
                    <NoData />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Withdraw;
