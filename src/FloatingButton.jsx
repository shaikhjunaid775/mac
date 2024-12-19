import floatingIcon from "./assets/accounts/float-icon.png"

function FloatingButton() {
  return (
      <div className="group sticky bottom-20  start-3/4  flex items-end justify-end w-12 h-12 ">
        <div className="text-white shadow-xl flex items-center justify-center  rounded-full   ">
          <img src={floatingIcon} alt="" className="w-10" />
        </div>
      </div>
  );
}

export default FloatingButton;
