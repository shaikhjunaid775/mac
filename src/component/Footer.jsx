// import React from 'react'
import { Link, useLocation  } from "react-router-dom";

function Footer() {
  const location = useLocation();
  return (
    <section
      id="bottom-navigation"
      className=" fixed inset-x-0 bottom-0 z-10 bg-footer rounded-2xl  p-1 mx-3"
    >
      <div id="tabs" className="flex justify-between">
        <Link
          to="/user/dashboard2"
          className={`${location.pathname == '/user/dashboard2' ? "bg-footerMenu rounded-2xl transition-all duration-300" : ""}  rounded-2xl w-full    justify-center  text-center   flex flex-col items-center py-1`}
        >
          <lord-icon
            src="https://cdn.lordicon.com/wmwqvixz.json"
            trigger="loop"
            stroke="light"
            state="hover-pinch"
            colors="primary:#ffffff"
            style={{ height: "25px" }}
          ></lord-icon>

          <span className="tab tab-home block text-[12px]  text-white">
            Home
          </span>
        </Link>
        <Link
          to="/animation"
          className={`w-full   justify-center  flex flex-col items-center text-center py-1 ${location.pathname == "/user/animation" ? "bg-footerMenu  rounded-2xl transition-all duration-300" : ""} rounded-2xl`}
        >
          <lord-icon
            src="https://cdn.lordicon.com/yxyampao.json"
            trigger="loop"
            stroke="light"
            state="hover-pinch"
            colors="primary:#ffffff"
            style={{ height: "25px" }}
          ></lord-icon>

          <span className="tab tab-kategori block text-[12px] text-white">
            My Coin
          </span>
        </Link>
        
        <Link
          to="/user/staking"
          className={`w-full    justify-center  flex flex-col items-center text-center py-1 ${location.pathname === "/user/staking" ? "bg-footerMenu rounded-2xl transition-all duration-300" : ""} rounded-2xl`}
        >
          <lord-icon
            src="https://cdn.lordicon.com/lyrrgrsl.json"
            trigger="loop"
            stroke="light"
            state="hover-pinch"
            colors="primary:#ffffff"
            style={{ height: "25px" }}
          ></lord-icon>

          <span className="tab tabWhishlist block text-[12px] text-white">
            Staking
          </span>
        </Link>
        <Link
          to="/"
          className={`w-full    justify-center rounded-2xl flex flex-col items-center text-center py-1 ${location.pathname === "/" ? "bg-footerMenu rounded-2xl transition-all duration-300" : ""} `}
        >
          <lord-icon
            src="https://cdn.lordicon.com/kthelypq.json"
            trigger="loop"
            stroke="light"
            state="hover-pinch"
            colors="primary:#ffffff"
            style={{ height: "25px" }}
          ></lord-icon>

          <span className="tab tab-account block text-[12px] text-white">
            Profile
          </span>
        </Link>
      </div>
    </section>
  );
}

export default Footer;
