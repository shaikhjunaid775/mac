// import React from 'react'
import { Link } from "react-router-dom";

function Footer() {
  return (
      <section
        id="bottom-navigation"
        className=" fixed inset-x-0 bottom-0 z-10 bg-footer shadow"
      >
        <div id="tabs" className="flex justify-between">
          <Link
            to="/user/dashboard"
            className="w-full gap-2 focus:text-teal-500 hover:text-teal-500 justify-center  text-center pt-2 pb-1 flex flex-col items-center"
          >
            <lord-icon
                  src="https://cdn.lordicon.com/wmwqvixz.json"
                  trigger="loop"
                  stroke="light"
                  state="hover-pinch"
                  colors="primary:#ffffff"
                ></lord-icon>

            <span className="tab tab-home block text-xs text-white ">Home</span>
          </Link>
          <Link
            to="/"
            className="w-full gap-2 focus:text-teal-500 hover:text-teal-500 justify-center  flex flex-col items-center text-center pt-2 pb-1"
          >
            <lord-icon
                  src="https://cdn.lordicon.com/yxyampao.json"
                  trigger="loop"
                  stroke="light"
                  state="hover-pinch"
                  colors="primary:#ffffff"
                ></lord-icon>

            <span className="tab tab-kategori block text-xs text-white">Market</span>
          </Link>
          {/* <a
            href="#"
            className="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
          >
            <div>
              <svg
                width="25"
                height="25"
                viewBox="0 0 42 42"
                className="inline-block mb-1"
              >
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <path
                    d="M20.5890101,0.254646884 C12.8696785,5.50211755 8.0025785,14.258415 14.1941217,18.8708225 C23.16683,25.5550669 13.3362326,40.2698884 33.1021758,38.4149164 C29.6814884,40.8311956 25.5065164,42.2507054 21,42.2507054 C9.40202025,42.2507054 0,32.8486852 0,21.2507054 C0,9.79003409 9.18071714,0.473634138 20.5890101,0.254646884 Z"
                    fill="#ffffff"
                    opacity="0.1"
                  ></path>
                  <path
                    d="M25.9500282,20.3643496 L22.4308312,38.2677802 C22.3775703,38.5387376 22.1147395,38.7152155 21.8437821,38.6619546 C21.6570955,38.6252584 21.507413,38.4857901 21.4576354,38.3021581 L16.5951895,20.3643496 L20.099732,4.44663907 C20.1385204,4.27046145 20.2692032,4.12883813 20.4417012,4.07604096 C20.7057521,3.99522179 20.9853245,4.14376046 21.0661436,4.40781135 L25.9500282,20.3643496 Z M21.3022963,22.2852638 C22.4068658,22.2852638 23.3022963,21.3898333 23.3022963,20.2852638 C23.3022963,19.1806943 22.4068658,18.2852638 21.3022963,18.2852638 C20.1977268,18.2852638 19.3022963,19.1806943 19.3022963,20.2852638 C19.3022963,21.3898333 20.1977268,22.2852638 21.3022963,22.2852638 Z"
                    fill="#ffffff"
                    transform="translate(21.272609, 20.629524) rotate(-315.000000) translate(-21.272609, -20.629524) "
                  ></path>
                  <circle
                    stroke="#ffffff"
                    strokeWidth="2"
                    cx="21"
                    cy="21"
                    r="20"
                  ></circle>
                </g>
              </svg>
              <span className="tab tab-explore block text-xs text-white">Promotions</span>
            </div>
          </a> */}
          <Link
            to="/user/stacking"
            className="w-full gap-2 focus:text-teal-500 hover:text-teal-500 justify-center  flex flex-col items-center text-center pt-2 pb-1"
          >
            <lord-icon
                  src="https://cdn.lordicon.com/lyrrgrsl.json"
                  trigger="loop"
                  stroke="light"
                  state="hover-pinch"
                  colors="primary:#ffffff"
                ></lord-icon>

            <span className="tab tabWhishlist block text-xs text-white">Staking</span>
          </Link>
          <Link
            to="/user/dashboard"
            className="w-full gap-2 focus:text-teal-500 hover:text-teal-500 justify-center  flex flex-col items-center text-center pt-2 pb-1"
          >
            <lord-icon
                  src="https://cdn.lordicon.com/kthelypq.json"
                  trigger="loop"
                  stroke="light"
                  state="hover-pinch"
                  colors="primary:#ffffff"
                ></lord-icon>

            <span className="tab tab-account block text-xs text-white">Account</span>
          </Link>
        </div>
      </section>
  );
}

export default Footer;
