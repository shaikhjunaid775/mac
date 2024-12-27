import React, { Suspense } from "react";
import "./App.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import {  Shimmer } from 'react-shimmer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Dashboard = React.lazy(() => import("./component/User/Dashboard"));
const Dashboard2 = React.lazy(() => import("./component/User/Dashboard2"));
const Signup = React.lazy(() => import("./component/Auth/Signup"));
const Signin = React.lazy(() => import("./component/Auth/Signin"));
const Front = React.lazy(() => import("./Front"));
const CoinAnimation = React.lazy(() => import("./CoinAnimation"));
// const FloatingButton = React.lazy(() => import("./FloatingButton"));
const Stacking = React.lazy(() => import("./component/User/Staking"));
// const Footer = React.lazy(() => import("./component/Footer"));
// const Notification = React.lazy(() => import("./Notification"));

function App() {
  return (
    <>
      <Router>
        {/* <Suspense fallback={<div className="h-screen text-white flex items-center justify-center">Loading...</div>}> */}
        <Suspense fallback={<div><span>Loading</span></div>}>
          <Routes>
            
            <Route exact index  path="/" element={<Front />} />
            <Route exact path="/user/dashboard" element={<Dashboard />} />
            <Route exact path="/user/dashboard2" element={<Dashboard2 />} />
            <Route exact path="/user/signup" element={<Signup />} />
            <Route exact path="/user/signin" element={<Signin />} />
            <Route exact path="/user/staking" element={<Stacking />} />
            {/* <Route exact path="/notification" element={<Notification />} /> */}
            <Route exact path="/animation" element={<CoinAnimation />} />
            
          </Routes>
          {/* <FloatingButton /> */}
          
        </Suspense>
      </Router>
    </>
  );
}

export default App;
