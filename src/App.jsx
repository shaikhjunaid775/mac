import React, { Suspense } from "react";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sale from "./component/Sale.jsx/Sale";
import Dashboard from "./component/Dashboard/Dashboard";
import Login from "./component/Auth/Login";
import Register from "./component/Auth/Register";
import Profile from "./component/User/Profile";
import Signup from "./component/User/Signup";
import Front from "./Front";
// Lazy-loaded components
const CoinFlip = React.lazy(() =>
  import("./component/CoinflipComponent/CoinFlip")
);
const Home = React.lazy(() => import("./Home"));
const Emoji = React.lazy(() => import("./component/Emoji/Emoji"));
const Account = React.lazy(() => import("./component/Account/Account"));
const Deposit = React.lazy(() => import("./component/Deposit/Deposit"));
const FloatingButton = React.lazy(() => import("./FloatingButton"));
const DepositHistory = React.lazy(() =>
  import("./component/Deposit/DepositHistory")
);
const Withdraw = React.lazy(() => import("./component/Withdraw/Withdraw"));
const Withdrawal = React.lazy(() => import("./component/User/Withdrawal"));
const Stacking = React.lazy(() => import("./component/User/Stacking"));
const Footer = React.lazy(() => import("./component/Footer"));
const Wallet = React.lazy(() => import("./component/Wallet/Wallet"));
const WithdrawHistory = React.lazy(() =>
  import("./component/Withdraw/WithdrawHistory")
);
const AddBankAccount = React.lazy(() =>
  import("./component/Withdraw/AddBankAccount")
);
const GameHistory = React.lazy(() =>
  import("./component/Account/history/GameHistory")
);
const TransactionHistory = React.lazy(() =>
  import("./component/Account/history/TransactionHistory")
);
const VoultBox = React.lazy(() => import("./component/Account/VoultBox"));
const Notification = React.lazy(() => import("./Notification"));
const Gift = React.lazy(() => import("./component/Account/Gift"));
const GameStatistics = React.lazy(() =>
  import("./component/Account/GameStatistics")
);
const Language = React.lazy(() => import("./component/Account/Language"));
const Vip = React.lazy(() => import("./component/VIP/Vip"));
const DemoEmoji = React.lazy(() => import("./component/Emoji/Demo/DemoEmoji"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            
            <Route exact index  path="/" element={<Front />} />
            <Route exact path="/user/dashboard" element={<Dashboard />} />
            <Route exact path="/user/withdrawal" element={<Withdrawal />} />
            <Route exact path="/user/profile" element={<Profile />} />
            <Route exact path="/user/signup" element={<Signup />} />
            <Route exact path="/user/stacking" element={<Stacking />} />
            <Route exact path="/Auth/login" element={<Login />} />
            <Route exact path="/Auth/Register" element={<Register />} />
            <Route exact path="/notification" element={<Notification />} />
            <Route exact path="/coin" element={<CoinFlip />} />
            <Route exact path="/emoji" element={<Emoji />} />
            <Route exact path="/account" element={<Account />} />
            <Route
              exact
              path="/account/GameHistory"
              element={<GameHistory />}
            />
            <Route
              exact
              path="/account/TransactionHistory"
              element={<TransactionHistory />}
            />
            <Route exact path="/account/VoultBox" element={<VoultBox />} />
            <Route exact path="/account/gift" element={<Gift />} />
            <Route
              exact
              path="/account/GameStatistics"
              element={<GameStatistics />}
            />
            <Route exact path="/account/Language" element={<Language />} />

            <Route exact path="/deposit" element={<Deposit />} />
            <Route
              exact
              path="/account/depositHistory"
              element={<DepositHistory />}
            />
            <Route exact path="/withdraw" element={<Withdraw />} />
            <Route
              exact
              path="/account/withdrawHistory"
              element={<WithdrawHistory />}
            />
            <Route exact path="/wallet" element={<Wallet />} />
            <Route
              exact
              path="/account/AddBankAccount"
              element={<AddBankAccount />}
            />
            <Route exact path="/account/vip" element={<Vip />} />
            <Route exact path="/demo" element={<DemoEmoji />} />
            <Route exact path="/sale" element={<Sale />} />
          </Routes>
          {/* <FloatingButton /> */}
          
        </Suspense>
      </Router>
    </>
  );
}

export default App;
