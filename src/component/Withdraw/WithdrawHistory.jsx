import React from "react";
import { useState } from "react";
import NoData from "../../NoData";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import BackButton from '../../BackButton';

function WithdrawHistory() {
  const [openTab, setOpenTab] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const buttons = [
    { id: 1, name: "All" },
    { id: 2, name: "UPI x QR" },
    { id: 3, name: "UPI x APPS" },
    { id: 4, name: "UPI x PAYTM" },
    { id: 5, name: "Bank Card" },
    { id: 6, name: "USDT" },
    { id: 7, name: "TRX" }
  ];
  return (
    <>
      <nav className="bg-white border-gray-200 ">
        <div className=" grid grid-cols-3 items-center justify-between mx-auto p-2">
        <BackButton />
          <div className="flex  items-center ">
            <a
              href="#"
              className="block text-lg whitespace-nowrap ms-4  md:p-0 text-dark "
              aria-current="page"
            >
              Withdraw History
            </a>
          </div>
          <div className="flex  items-center "></div>
        </div>
      </nav>
      <div className="px-2 py-2">
        <div className="flex overflow-x-scroll gap-2">
          {buttons.map((button) => (
            <button
              key={button.id}
              type="button"
              onClick={() => setOpenTab(button.id)}
              className="px-5 min-w-max  py-2 text-base font-medium text-center inline-flex items-center text-dark bg-white rounded-lg "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5 me-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 2.25-2.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v2.25A2.25 2.25 0 0 0 6 10.5Zm0 9.75h2.25A2.25 2.25 0 0 0 10.5 18v-2.25a2.25 2.25 0 0 0-2.25-2.25H6a2.25 2.25 0 0 0-2.25 2.25V18A2.25 2.25 0 0 0 6 20.25Zm9.75-9.75H18a2.25 2.25 0 0 0 2.25-2.25V6A2.25 2.25 0 0 0 18 3.75h-2.25A2.25 2.25 0 0 0 13.5 6v2.25a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
              {button.name}
            </button>
          ))}
        </div>
        {buttons.map((button) => (
          <div
            key={button.id}
            className={`${
              openTab === button.id
                ? "block animate-fade-up animate-ease-out"
                : "hidden"
            }`}
          >
            <div className="flex gap-2 my-3">
              <button
                type="button"
                onClick={toggleModal}
                className="text-dark justify-between w-full bg-white  font-semibold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                All
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-dark justify-between w-full bg-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Choose a date
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </div>
            <NoData />
          </div>
        ))}
        <Modal show={showModal} onClose={toggleModal} />
      </div>
    </>
  );
}

export default WithdrawHistory;
