import React from "react";
import coin from "../../assets/coin.png";
import MemberSlider from "../Home/MemberSlider";
import ProfitSlider from "./ProfitSlider";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Draggable from "react-draggable";
import { useRef } from "react";
import darklogo from "../../assets/logo/logo-dark.png";
import whitelogo from "../../assets/logo/logo-white.png";

function Dashboard() {
  const [dark, setDark] = React.useState(false);
  const nodeRef = useRef(null);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  const data = [
    {
      title: "Total BOT Activation Amount",
      amount: "$7650",
      bgColor: "#0082FE",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Total ROI",
      amount: "$12000",
      bgColor: "#FF5722",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Total Level Income",
      amount: "$8500",
      bgColor: "#4CAF50",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Total Team",
      amount: "150",
      bgColor: "#9C27B0",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Total Direct Income",
      amount: "$5000",
      bgColor: "#FFC107",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          ></path>
        </svg>
      ),
    },
    {
      title: "Awards Rewards",
      amount: "10",
      bgColor: "#3F51B5",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <>
      <div className=" bg-cover min-h-fit  dark:bg-[url('./assets/background/bg-dark.jpg')] bg-[url('./assets/background/bg-white.jpg')]">
        <div className="px-4 w-full flex items-center bg-[#0000000d]  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
          <div className="py-1.5 d-flex justify-content-center align-items-center">
            <div className="">
              <img src={darklogo} alt="img" className="w-16 block dark:hidden" />
              <img src={whitelogo} alt="img" className="w-16  hidden dark:block" />
            </div>
          </div>
          <div className="mt-2 flex justify-center items-center gap-2 absolute top-4 end-3">
          <Draggable nodeRef={nodeRef}>
              <button
                ref={nodeRef}
                onClick={() => darkModeHandler()}
                className={`relative w-[90px] z-50 h-[35px] rounded-full shadow-sm duration-300 bg-white ${
                  dark ? "bg-zinc-500" : ""
                }`}
              >
                <div
                  className={`absolute w-[40px] h-[30px] rounded-full duration-300 shadow-md top-0.5 ${
                    dark
                      ? "left-[85px] translate-x-[-100%] bg-gradient-to-r from-zinc-900 to-zinc-900"
                      : "left-[5px] bg-gradient-to-r from-orange-500 to-yellow-400"
                  }`}
                ></div>
                <svg
                  
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`fill-white absolute w-5 left-[13px] top-1.5 ${
                    dark ? "opacity-60" : ""
                  }`}
                >
                  <path d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5ZM13,0h-2V5h2V0Zm0,19h-2v5h2v-5ZM5,11H0v2H5v-2Zm19,0h-5v2h5v-2Zm-2.81-6.78l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54ZM7.76,17.66l-1.41-1.41-3.54,3.54,1.41,1.41,3.54-3.54Zm0-11.31l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Zm13.44,13.44l-3.54-3.54-1.41,1.41,3.54,3.54,1.41-1.41Z"></path>
                </svg>
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`absolute w-5 right-[13px] top-1.5 ${
                    dark ? "opacity-70 fill-white" : "opacity-60 fill-black"
                  }`}
                >
                  <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                </svg>
              </button>
            </Draggable>
            <Link to="/auth/login" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="red"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"
                ></path>
              </svg>
            </Link>
            
          </div>
        </div>
        <div className="px-4">
          <div className="mt-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://helixfxai.online/assets/assets/images/logo/preloader.png"
                alt="img"
                className="h-10 "
              />
              <div className="">
                <span className="my-1 dark:text-slate-100 text-dark text-xs">
                  Welcome back, MAC
                </span>
                <p className="text-xs dark:text-slate-100 text-dark my-1">
                  User ID: MAC123
                </p>
              </div>
            </div>
            <span className=" relative">
              <span className=" inline-flex items-center bg-transparent ring-2 ring-[#272e21] text-[#7eff00] text-xs font-medium px-2.5 py-0.5 rounded-full ">
                <span className="animate-pulse w-2 h-2 me-1 bg-[#7eff00] rounded-full"></span>
                Active
              </span>
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 mt-3">
            <span className="text-xs whitespace-nowrap dark:text-slate-50 text-dark">
              Referral Link
            </span>
            <div className="w-full">
              <input
                type="text"
                defaultValue="https://helixfxai.online/registration?sponsorid=Helixfxai"
                className="w-full refferal bg-gray-900 px-2 rounded-full text-sm text-white border border-gray-600"
                id="referralLinkInput"
                placeholder=""
                readOnly=""
              />
            </div>
            <img
              className="w-5 h-5 rounded-full whatsapp-image "
              src="https://helixfxai.online/assets/assets/images/WhatsApp.png"
              alt="Rounded avatar"
            />
          </div>
        </div>
        {/* Wallet Details */}
        <div className="px-4 my-2 grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-[#08b9d5]">Total Deposit Wallet</span>
            <p className="text-2xl dark:text-white  font-semibold">$200.00</p>
          </div>
          <div>
            <span className="text-xs text-[#08b9d5]">Total Profit Wallet</span>
            <p className="text-2xl dark:text-white font-semibold">$16,492.25</p>
          </div>
        </div>
        <div className="px-4 gap-8 grid grid-cols-4 my-5 ">
          <Link to="/user/withdrawal">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-16 h-16 rotate-45 flex flex-col justify-center p-2  items-center rounded-2xl bg-gradient-to-r from-[#4380ba] to-[#80e4fe00] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm border border-white/34">
                <div className="-rotate-45">
                  <div className="flex justify-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ciawvzjk.json"
                      trigger="loop"
                      stroke="light"
                      state="hover-pinch"
                      colors="primary:#ffffff"
                    ></lord-icon>
                  </div>
                </div>
              </div>
              <div>
                <span className="dark:text-slate-50 text-sm">Withdrawal</span>
              </div>
            </div>
          </Link>
          <Link to="/user/dashboard">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-16 h-16 rotate-45 flex flex-col justify-center p-2  items-center rounded-2xl bg-gradient-to-r from-[#4380ba] to-[#80e4fe00] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm border border-white/34">
                <div className="-rotate-45">
                  <div className="flex justify-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/ppyvfomi.json"
                      trigger="loop"
                      stroke="light"
                      state="hover-pinch"
                      colors="primary:#ffffff"
                    ></lord-icon>
                  </div>
                </div>
              </div>
              <div>
                <span className="dark:text-slate-50 text-sm">Compansation</span>
              </div>
            </div>
          </Link>

          <div className="flex flex-col gap-3 items-center">
            <div className="w-16 h-16 rotate-45 flex flex-col justify-center p-2  items-center rounded-2xl bg-gradient-to-r from-[#4380ba] to-[#80e4fe00] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm border border-white/34">
              <div className="-rotate-45">
                <div className="flex justify-center">
                  <lord-icon
                    src="https://cdn.lordicon.com/yxyampao.json"
                    trigger="loop"
                    stroke="light"
                    state="hover-pinch"
                    colors="primary:#ffffff"
                  ></lord-icon>
                </div>
              </div>
            </div>
            <div>
              <span className="dark:text-slate-50 text-sm">Start Bot</span>
            </div>
          </div>
          <Link to="/user/deposit">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-16 h-16 rotate-45 flex flex-col justify-center p-2  items-center rounded-2xl bg-gradient-to-r from-[#4380ba] to-[#80e4fe00] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-sm border border-white/34">
                <div className="-rotate-45">
                  <div className="flex justify-center">
                    <lord-icon
                      src="https://cdn.lordicon.com/mdmniuqr.json"
                      trigger="loop"
                      stroke="light"
                      state="hover-pinch"
                      colors="primary:#ffffff"
                    ></lord-icon>
                  </div>
                </div>
              </div>
              <div>
                <span className="dark:text-slate-50 text-sm">Deposit</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="px-4 overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            <span className=" text-slate-50 text-sm">
              Use the Profit Wallet to activate the bot by transferring funds to
              the Deposit Wallet.
            </span>
          </div>
        </div>

        <div className="px-4 w-full my-4">
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl font-bold text-[#08b9d5] leading-none">
              <span className="animate-blink">FREE</span> Helix Airdrop
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#fff"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
          </div>

          <div className="flex relative items-center mt-8 bg-gradient-to-r from-[#4380ba] to-transparent border border-[#ffffff57] p-4 rounded-2xl">
            <div>
              <div className="text-3xl font-bold text-slate-50">7650</div>
              <div className="text-xs text-slate-50">Total Helix Coin</div>
            </div>
            <div className="absolute end-6 animate-bounce animate-ease-in">
              <img src={coin} alt="Helix Coin" className="w-24 h-24" />
            </div>
          </div>
        </div>
        <div className="px-4 w-full my-4">
          <div className="flex items-center justify-center gap-3">
            <div className="text-3xl font-bold text-[#08b9d5] leading-none">
              <span className="">My Portfolio</span>
            </div>
          </div>
        </div>
        <div className="px-4 grid grid-cols-2 py-4 gap-3">
          {data.map((box, index) => (
            <div
              key={index}
              className="bg-[#25263a] text-white p-2 rounded-lg shadow-md relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{box.amount}</div>
                <div>{box.icon}</div>
              </div>
              <div className="mt-2 text-[11px] text-gray-300">{box.title}</div>
              <div
                className={`absolute top-[19%] left-[17%] right-0 bottom-[15px] w-[64%]`}
                style={{
                  backgroundColor: box.bgColor,
                  opacity: 0.4,
                  borderRadius: "75%",
                  filter: "blur(20px)",
                }}
              ></div>
            </div>
          ))}
        </div>
        <ProfitSlider className="" />

        {/* <IconButton icon="" label="" />
      <IconButton icon="💼" label="Compensation" />
      <IconButton icon="📈" label="Start Bot" />
      <IconButton icon="💵" label="Deposit" /> */}
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
