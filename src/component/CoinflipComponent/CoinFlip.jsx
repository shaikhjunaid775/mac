// import React from 'react'

import Navbar from "./Navbar";
import FlipButton from "./FlipButton";

// import "./component/CoinflipComponent/coin.css";
import Winners from "./Winners";

function CoinFlip() {
  return (
    <>
      <div className="bg-body">
        <Navbar />
        <Winners />
        <FlipButton />
      </div>
    </>
  );
}

export default CoinFlip;
