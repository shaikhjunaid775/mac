
import "./CoinAnimation2.css"; // Recommended to separate styles into an external file

const CoinAnimation = () => {
  return (
    <div className="pl">
      <div className="pl__coin">
        <div className="pl__coin-flare"></div>
        <div className="pl__coin-flare"></div>
        <div className="pl__coin-flare"></div>
        <div className="pl__coin-flare"></div>
        <div className="pl__coin-layers">
          <div className="pl__coin-layer">
            {/* <div className="pl__coin-inscription"></div> */}
          </div>
          <div className="pl__coin-layer"></div>
          {/* Uncomment these layers if needed */}
          {/* <div className="pl__coin-layer"></div> */}
          {/* <div className="pl__coin-layer"></div> */}
          {/* <div className="pl__coin-layer"> */}
          {/*   <div className="pl__coin-inscription"></div> */}
          {/* </div> */}
        </div>
      </div>
      <div className="pl__shadow"></div>
    </div>
  );
};

export default CoinAnimation;
 