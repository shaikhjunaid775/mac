import React from "react";
import wallet from "../../assets/accounts/wallet.png";
import deposit from "../../assets/accounts/deposit.png";
import FloatingButton from "../../FloatingButton";
import UserInfo from "./UserInfo";
import BankInfo from "./BankInfo";
import Voult from "./Voult";
import History from "./History";
import SettingOption from "./SettingOption";
import ServiceCenter from "./ServiceCenter";
import Logout from "./Logout";
import Footer from "../../component/Footer";
import { Link } from "react-router-dom";

function Account() {
  return (
    <>
      <div className="bg-[#F7F8FF]">
        <div className="overflow-x-hidden">
          <div className="absolute top-0 mb-[100px]  h-[190px] w-[100%] rounded-b-[15%] bg-gradient-to-r from-[#FF9A02] to-[#E67302]">
            <UserInfo />
            <BankInfo />
            <Link to="/account/VoultBox">
              <Voult />
            </Link>
            <History />
            <SettingOption />
            <ServiceCenter />
            <Logout />
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;
