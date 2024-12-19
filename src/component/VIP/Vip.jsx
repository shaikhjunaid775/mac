import React from "react";
import BackButton from "../../BackButton";
import achievementBadge from "../../assets/accounts/badge.png";
import cardBg from "../../assets/vip/card-bg.png";
import badge from "../../assets/vip/vip-badge.png";
import unlock from "../../assets/vip/unlocked.png";
import badge2 from "../../assets/vip/badge.png";
import "./vip.css";

function Vip() {
  const user = [
    {
      name: "MEMBERNNGRR9LO",
      UID: 10161223,
      achievementBadge: achievementBadge,
      profilePicture:
        "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
      LastLogin: " 2024-08-26 11:04:10"
    }
  ];
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="absolute top-0 mb-[100px] -z-10 h-[190px] w-[100%]  bg-gradient-to-r from-[#FF9A02] to-[#E67302]"></div>
        <nav className=" text-white ">
          <div className=" grid grid-cols-3 items-center justify-between mx-auto p-2">
            <BackButton />
            <div className="flex justify-center items-center ">
              <a
                href="#"
                className="block text-lg whitespace-nowrap  md:p-0 text-dark font-semibold"
                aria-current="page"
              >
                VIP
              </a>
            </div>
          </div>
        </nav>
        {user.map((items, index) => {
          return (
            <div
              key={index}
              className="px-3 mt-5 text-center text-2xl text-white "
            >
              <div className="flex  items-center gap-4">
                <img
                  className="w-20 rounded-full"
                  src={items.profilePicture}
                  alt=""
                />
                <div className="font-normal flex flex-col gap-3">
                  <div className="text-sm ">
                    <div className=" flex justify-between gap-2">
                      <img src={achievementBadge} alt="" className="w-16" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-start">{items.name}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        <div className="flex justify-between m-4 gap-7">
          <div className="p-2 w-full bg-white rounded-lg text-center flex flex-col gap-1">
            <h5 className="text-[#F28602] font-medium">0 EXP</h5>
            <p className="text-gray-500 text-sm">My Experience</p>
          </div>
          <div className="p-2 w-full bg-white rounded-lg text-center flex flex-col gap-1">
            <h5 className="text-gray-500">
              <big className="font-semibold text-xl text-black">25</big> Days
            </h5>
            <p className="text-gray-500 text-sm">Payout time</p>
          </div>
        </div>
        <div className="m-4 ">
          <div className=" w-full  font-medium text-[10.2px] leading-none px-3 py-1 rounded border border-gray-400">
            <span className="text-gray-500 ">
              VIP level rewards are settled at 2:00 am on the 1st of every month
            </span>
          </div>
        </div>

        <div class=" mx-3 flex justify-center items-center">
          <div class="">
            <div class="w-full m-auto  rounded-xl relative text-white shadow-2xl vipGradient ">
              <img
                class="relative object-cover w-full h-full rounded-xl"
                src={cardBg}
              />

              <div class="w-full px-2 absolute top-1 ">
                <div className="flex justify-between">
                  <div>
                    <div className="flex gap-3">
                      <div class="flex justify-between">
                        <div class="flex items-center gap-1">
                          <img class="w-7 h-7" src={badge} />
                          <p class="font-medium tracking-widest text-2xl">
                            VIP1
                          </p>
                        </div>
                      </div>
                      <div class="flex justify-between">
                        <div class="flex items-center gap-1">
                          <img class="w-4 h-4" src={unlock} />
                          <p class="font-medium tracking-widest text-[10px]">
                            Not open yet
                          </p>
                        </div>
                      </div>
                    </div>
                    <p class="font-medium tracking-widest text-[10px]">
                      Upgrading VIP1 requires
                    </p>
                    <p class="font-medium tracking-widest text-[10px]">
                      3000EXP
                    </p>
                    <p class="font-medium tracking-widest text-[10px]"></p>
                    <div class="pt-1">
                      <span className="text-white font-medium text-[11px] leading-none px-1 rounded border border-white">
                        Bet ₹1=1EXP
                      </span>
                    </div>
                  </div>
                  <div>
                    <img class="w-20" src={badge2} />
                  </div>
                </div>
                <div className="mt-4">
                  <div class="w-full progressGradient rounded-full h-2.5 ">
                    <div class="bg-blue-600 h-2.5 rounded-full w-1/2"></div>
                  </div>
                  <div class="flex justify-between my-1 items-center">
                    <span class="bg-gradient-to-r from-[#899fbf] to-[#6f85a5]  px-1.5 text-[10px] font-medium  rounded-full">
                      0/3000
                    </span>
                    <span className="text-[11px] font-medium">
                      3000 EXP can be leveled up
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Vip;
