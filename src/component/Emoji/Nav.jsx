import logo from "../../assets/assets2/logo.png";
import avatar from "../../assets/assets2/avatar.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      navigate("/demo");
    } else {
      navigate("/");
    }
  };


  // Check if the current path is '/demo'
  const isDemoRoute = location.pathname === "/demo";

  return (
    <div className="mb-2">
      <header className="bgWhite">
        <nav
          className="mx-auto flex items-center justify-between "
          aria-label="Global"
        >
          <div className="flex ">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </a>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              className="sr-only peer"
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
            />
            <div className="peer rounded-full duration-700 w-24 h-5 bg-white peer-focus:ring-2 peer-focus:ring-blue-500 after:content-['Live'] after:absolute after:rounded-full after:h-4 after:w-12 after:bg-[#21C004] after:top-0.5 after:left-1 after:flex after:justify-center after:items-center after:text-white after:font-medium text-[11px] peer-checked:after:translate-x-10 peer-checked:after:content-['Demo'] peer-checked:after:bg-[#000]  peer-checked:transition  peer-checked:duration-700  peer-checked:ease-in-out"></div>
          </label>
          <div className="flex ">
            <div className="relative">
              <img className="w-10 h-10 rounded-full" src={avatar} alt="" />
              <span
                className={`top-1 right-8 absolute w-2.5 h-2.5 bg-green-400 rounded-full ${
                  isDemoRoute ? "" : "animate-pulse"
                }`}
              ></span>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Nav;
