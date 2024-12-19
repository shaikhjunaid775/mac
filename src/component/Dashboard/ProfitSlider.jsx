// import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ProfitSlider() {
  // Slider settings for vertical scrolling
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true, // Allows clicking on the slide to bring it into focus
  };

  const members = [
    {
      name: "Alice Johnson",
      profilePic:
        "https://flowbite.com/docs/images/people/profile-picture-1.jpg",
    },
    {
      name: "Michael Brown",
      profilePic:
        "https://flowbite.com/docs/images/people/profile-picture-2.jpg",
    },
    {
      name: "Emily Davis",
      profilePic:
        "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
    },
    {
      name: "Daniel Wilson",
      profilePic:
        "https://flowbite.com/docs/images/people/profile-picture-4.jpg",
    },
    {
      name: "Sophia Martinez",
      profilePic:
        "https://flowbite.com/docs/images/people/profile-picture-5.jpg",
    },
  ];

  const randomAmount = () => Math.floor(Math.random() * 100) + 1; // Generates a random amount between $1 and $100

  return (
    <>
      <Slider {...sliderSettings}>
          {members.map((member, index) => (
              <div key={index}>
              <div
              
              className="flex flex-row ProfitSlider my-2 justify-between items-center px-3 bg-[#1e293b] rounded-lg py-2"
            >
              <div className="column-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full me-2"
                  src={member.profilePic}
                  alt={`${member.name}'s Profile`}
                />
              </div>
              <div>
                <h6 className="text-slate-50">{member.name}</h6>
              </div>
              <div className="bg-gradient-to-l from-[#14edfe] to-[#0095b9] px-2 py-0.5 rounded-full">
                <span>${randomAmount()}</span>
              </div>
            </div>
        </div>
          ))}
      </Slider>
    </>
  );
}

export default ProfitSlider;
