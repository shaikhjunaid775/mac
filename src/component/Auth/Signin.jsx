
import { Link } from "react-router-dom";
// import Footer from "../Footer";
import logo from '../../assets/logo/logo-white.png'

function Signin() {
  return (
    <>
      <div className="bg-gray-200 min-h-screen relative overflow-hidden">
        {/* Card Container */}
        <div className="w-full h-96 bg-black bg-opacity-20 rounded-b-3xl  shadow-md overflow-hidden absolute z-0 after:absolute after:left-0 after:right-0 after:top-0 after:z-10 after:h-80 after:w-full after:bg-black after:rounded-2xl ">
          {/* Header Section */}
        </div>
        {/* Form Section */}
        <div className="p-3 mt-6  rounded-3xl  relative">
          <div className=" py-6 text-center relative">
            <div className="flex justify-center mb-4">
              <img
                src={logo}
                alt="img"
                className="w-40"
              />
            </div>
            <button
              type="button"
              className="text-white bg-[#ffa500] font-bold rounded-xl text-xs px-5 py-4 text-center me-2 mb-2 shadow-lg shadow-[#ffa500]"
            >
              CONNECT WALLET
            </button>
          </div>
          <div className="bg-white p-6 mx-0 rounded-3xl">
            <span className="text-2xl font-bold mb-4 text-gray-800">
              Sign In
            </span>

            {/* Wallet Address */}
            <div className="relative mb-4">
              <input
                type="text"
                id="wallet"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                placeholder=" "
              />
              <label
                htmlFor="wallet"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Wallet Address
              </label>
              <span className="absolute top-6 right-0 text-gray-500 text-xs">
                (require)
              </span>
            </div>

            {/* Sign Up Button */}
            <div className="flex justify-between">
              <button className="w-fit mt-4 px-10 bg-[#2493e5]  text-white font-black py-3.5 text-xs rounded-lg shadow-lg transition  shadow-[#28d8eb]">
                SIGN IN
              </button>
              <Link to="/user/signup">
                <button className="w-fit mt-4 px-10 bg-[#2493e5]  text-white font-black py-3.5 text-xs rounded-lg shadow-lg transition  shadow-[#28d8eb]">
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
