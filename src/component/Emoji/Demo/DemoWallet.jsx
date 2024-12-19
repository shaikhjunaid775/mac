import deposit from "../../../assets/assets2/deposit.png";
import withdraw from "../../../assets/assets2/withdraw.png";

function DemoWallet() {
  return (
    <div className="mb-4 w-full px-3.5 py-3 rounded-[20px] bg-[#FF8936] ring-1 ring-gray-900"> 
      <div className="flex justify-between">
        <div className=" flex flex-col gap-2">
          <div className="leading-6">
            <h4 className="text-lg sm:text-2xl leading-none font-normal text-white">
              Total Balance
            </h4>
            <h2 className="text-2xl md:text-4xl leading-9 font-semibold text-white drop-shadow-2xl">
              $ 5,897.00
            </h2>
          </div>
          <div className="flex gap-1">
            <div>
              <div className="flex px-1 pe-5 items-center bg-white  rounded-full w-full">
                <img
                  className="me-0.5 inline-block size-4 rounded-full"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <div className="leading-[12px]">
                  <div className="whitespace-nowrap text-[10px] md-text-xs font-normal text-gray-800 ">
                    MM Coin
                  </div>
                  <div className="whitespace-nowrap text-[10px] md:text-xs font-extrabold text-gray-800 ">
                    588
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex px-1 pe-5  items-center bg-white  rounded-full w-full">
                <img
                  className="me-0.5 inline-block size-4 rounded-full"
                  src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                  alt="Avatar"
                />
                <div className="leading-[12px]">
                  <div className="whitespace-nowrap text-[10px] md-text-xs font-normal text-gray-800 ">
                    Attendence Points
                  </div>
                  <div className="whitespace-nowrap text-[10px] md:text-xs font-extrabold text-gray-800 ">
                    588
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-1 justify-evenly items-center w-1/2">
          <div className="flex flex-col">
            <div>
              <img
                className=" rounded-full w-14"
                src={deposit}
                alt="Rounded avatar"
              />
            </div>
            <span className="text-center capitalize text-xs text-white leading-4">
              deposit
            </span>
          </div>
          <div className="flex flex-col">
            <div>
              <img
                className=" rounded-full w-14"
                src={withdraw}
                alt="Rounded avatar"
              />
            </div>

            <span className="text-xs text-white capitalize leading-4">withdraw</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DemoWallet;
