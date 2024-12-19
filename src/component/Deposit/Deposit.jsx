import React from "react";
import { useState } from "react";
import lottery from "../../assets/tab-images/lottery.png";
import RechargeIns from "./RechargeIns";
import DepositWallet from "./DepositWallet";
import BackButton from '../../BackButton';
import { Link } from "react-router-dom";

function Deposit() {
  const [openTab, setOpenTab] = useState(1);

  const mainMenu = {
    menu: [
      {
        key: 1,
        name: "UPI x QR",
        data: [
          { name: "MahaPayINR", balance: "500 - 50k" },
          { name: "GaayPayINR QR", balance: "300 - 50k" },
          { name: "HPAY x QR", balance: "100 - 50k" },
          { name: "EPayINR", balance: "500 - 50k" },
          { name: "TBPay x QR", balance: "500 - 50k" },
          { name: "McgPayINR", balance: "500 - 50k" },
          { name: "NBPayINR", balance: "500 - 50k" },
          { name: "GreenPayINR", balance: "100 - 50k" },
          { name: "GLOBALPAY X QR", balance: "500 - 100k" },
          { name: "KKPay QR", balance: "500 - 50k" },
          { name: "InotcPayINR", balance: "500 - 50k" },
          { name: "CpuPayINR", balance: "500 - 50k" }
        ],
        depositAmount: ["500", "1k", "3k", "5k", "10k", "20k", "50k"]
      },
      {
        key: 2,
        name: "UPI x APPs",
        data: [
          { name: "PayZApp", balance: "200 - 30k" },
          { name: "PhonePe", balance: "500 - 50k" },
          { name: "Google Pay", balance: "100 - 40k" },
          { name: "Amazon Pay", balance: "300 - 20k" },
          { name: "Mobikwik", balance: "500 - 50k" },
          { name: "Freecharge", balance: "100 - 10k" },
          { name: "BHIM", balance: "500 - 50k" },
          { name: "TrueCaller Pay", balance: "100 - 25k" },
          { name: "WhatsApp Pay", balance: "500 - 15k" },
          { name: "Airtel Money", balance: "200 - 50k" }
        ],
        depositAmount: ["300", "500", "1k", "2k", "5k", "10k", "50k"]
      },
      {
        key: 3,
        name: "UPI x PAYTM",
        data: [
          { name: "Paytm Wallet", balance: "100 - 50k" },
          { name: "Paytm UPI", balance: "300 - 20k" },
          { name: "Paytm Bank", balance: "500 - 1L" },
          { name: "Paytm QR", balance: "100 - 75k" },
          { name: "Paytm Business", balance: "500 - 5L" }
        ],
        depositAmount: ["100", "500", "1k", "5k", "10k", "50k"]
      },
      {
        key: 4,
        name: "Bank Card",
        data: [
          { name: "HDFC Credit Card", balance: "1k - 5L" },
          { name: "ICICI Debit Card", balance: "500 - 1L" },
          { name: "SBI Credit Card", balance: "1k - 5L" },
          { name: "Axis Debit Card", balance: "500 - 1L" },
          { name: "Kotak Credit Card", balance: "1k - 5L" },
          { name: "RBL Debit Card", balance: "500 - 1L" }
        ],
        depositAmount: ["500", "1k", "5k", "10k", "50k", "100k"]
      },
      {
        key: 5,
        name: "USDT",
        data: [
          { name: "Binance USDT", balance: "50 - 10k" },
          { name: "Coinbase USDT", balance: "100 - 50k" },
          { name: "Kraken USDT", balance: "200 - 20k" },
          { name: "Gemini USDT", balance: "100 - 30k" },
          { name: "KuCoin USDT", balance: "50 - 25k" },
          { name: "Huobi USDT", balance: "100 - 10k" }
        ],
        depositAmount: ["10", "50", "100", "500", "1k", "5k"]
      },
      {
        key: 6,
        name: "TRX",
        data: [
          { name: "Binance TRX", balance: "50 - 10k" },
          { name: "Coinbase TRX", balance: "100 - 50k" },
          { name: "Kraken TRX", balance: "200 - 20k" },
          { name: "Gemini TRX", balance: "100 - 30k" },
          { name: "KuCoin TRX", balance: "50 - 25k" },
          { name: "Huobi TRX", balance: "100 - 10k" }
        ],
        depositAmount: ["50", "100", "200", "500", "1k", "5k"]
      }
    ]
  };

  // Find the data corresponding to the active tab
  const activeTab =
    mainMenu.menu.find((menuItem) => menuItem.key === openTab) || {};
  const activeTabData = activeTab.data || [];
  const depositAmounts = activeTab.depositAmount || [];

  return (
    <div className="pb-14">
      <nav className="bg-white border-gray-200 ">
        <div className=" grid grid-cols-3 items-center justify-between mx-auto p-2">
        <BackButton />
          <div className="flex justify-center items-center ">
            <a
              href="#"
              className="block text-lg  md:p-0 text-dark  "
              aria-current="page"
            >
              Deposit
            </a>
          </div>
          <div className="flex justify-end  items-center ">
            <Link
              to="/account/depositHistory"
              className="block text-xs  md:p-0 text-dark  "
              aria-current="page"
            >
              Deposit History
            </Link>
          </div>
        </div>
      </nav>
      <div className="p-1.5 ">
        <DepositWallet />
        <div className=" mx-auto mt-3">
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

            <div className="w-full p-1 mt-6 ">
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
                    <div className="p-3 bg-white rounded-lg mb-4">
                      <div className="flex items-center mb-2">
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
                          <p className="text-md font-normal text-gray-900 truncate ">
                            Select Channel
                          </p>
                        </div>
                      </div>
                      {/* Tab content */}
                      <div className="grid grid-cols-2 gap-6">
                        {activeTabData.map((item, index) => (
                          <div
                            key={index}
                            className="p-3 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-orange-400 to-orange-500"
                          >
                            <h4 className="text-sm text-white">{item.name}</h4>
                            <h4 className="text-sm text-white">
                              Balance: {item.balance}
                            </h4>
                          </div>
                        ))}
                      </div>
                    </div>
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
                            Deposit Amount
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
                      <div className="w-full  relative mt-4">
                        <div className="relative">
                          <input
                            className="w-full pl-11 h-10 pr-3 py-2 bg-transparent bg-[#f7f8ff] placeholder:text-slate-400 text-slate-700 text-sm rounded-full"
                            placeholder="Please enter the amount"
                          />
                          <div className="absolute h-10 w-10 left-1 top-0 my-auto px-2 flex items-center font-extrabold">
                            <span className="text-lg text-orange-500"> ₹ </span>
                          </div>
                          <div className="absolute right-1 top-2 my-auto px-2 flex items-center ">
                            <svg
                              viewBox="0 0 32 32"
                              fill="none"
                              aria-hidden="true"
                              className="size-6"
                            >
                              <path
                                d="m13 13 6 6m0-6-6 6m15-3c0 6.627-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4s12 5.373 12 12Z"
                                stroke="#CBD5E1"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="my-6">
                        <button
                          type="button"
                          className="text-[#7E869B] bg-[#CDCFDD] font-medium rounded-full w-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                        >
                          Deposit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <RechargeIns />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deposit;
