import React from 'react';

export default function Hero() {
  <style>
    @import
    url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
  </style>;
  return (
    <div className="flex flex-col">
      {/* <picture className=""> */}
      <img src="/images/image-intro-mobile.jpg" alt="" />
      {/* </picture> */}
      {/* <div className="flex flex-col h-122 justify-center items-center"> */}
      <div className=" bg-[#2D2641] px-6 py-20 flex flex-col justify-center items-center">
        <h1 className="font-Display text-[#ffffff] text-center non-italic font-normal leading-10 text-5xl">
          Humanizing <br />
          your insurance.
        </h1>
        <p className="font-[karla] mt-4 mb-8 text-center not-italic px-7 py-3 font-normal text-base leading-4 text-center text-center text-[#ffffff] ">
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className="font-[karla] not-italic px-7 py-3 font-bold text-sm text-center text-[#ffffff] border border-[#ffffff]">
          VIEW PLANS
        </button>
      </div>
      {/* </div> */}
    </div>
  );
}
