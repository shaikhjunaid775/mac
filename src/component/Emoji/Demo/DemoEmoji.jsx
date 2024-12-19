import "../../../App.css";
import Nav from '../Nav'
import Alert from './DemoAlert'
import Wallet from'./DemoWallet'
import TabButtons from './DemoTabButtons'
import { useState, useEffect } from "react";


function DemoEmoji() {
  const [moodtab, setMoodtab] = useState(1);
  const [timeLeft, setTimeLeft] = useState(60); // Initial time for the first tab (1 minute)

  const [activeTab, setActiveTab] = useState(1);

 

  const handleMainTabClick = (tabNumber2) => {
    setActiveTab(tabNumber2);
    // Set the timer based on the tab selected
    if (tabNumber2 === 1) {
      setTimeLeft(60); // 1 minute
    } else if (tabNumber2 === 2) {
      setTimeLeft(180); // 3 minutes
    } else if (tabNumber2 === 3) {
      setTimeLeft(300); // 5 minutes
    }
  };

  // const tabData = ["1 Min Mood", "3 Min Mood", "5 Min Mood"];
 

  useEffect(() => {
    let timer;
    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timeLeft]);

  
  return (
    <>
      <div className="container mx-auto m-0 p-3 bg-gradient-to-br from-[#B3E2FD] to-[#ffffff]  lg:px-6">
        <Nav />
        <Alert />
        <Wallet />
          <TabButtons handleMainTabClick={handleMainTabClick} moodtab={moodtab} setMoodtab={setMoodtab} activeTab={activeTab} setActiveTab={setActiveTab} timeLeft={timeLeft} setTimeLeft={setTimeLeft}  />
         
      </div>
    </>
  );
}

export default DemoEmoji;
