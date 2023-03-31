import React from 'react';

export default function Navbar() {
  return (
    <div className=" ">
      <div className=" flex relative justify-between items-center h-20 px-6 top-0 left-0 bg-[#ffffff]">
        <div className=" top-8 left-6  ">
          <img src="/images/logo.svg" />
        </div>
        <div className="max-[640px]:hidden sm:block  sm:flex sm:justify-between sm:items-center sm:gap-6 sm:top-8 sm:w-86 sm:right-12 sm:mr-15 ">
          <a
            href="#"
            className="font-[karla] not-italic font-bold text-sm text-center text-[#837D88]"
          >
            HOW WE WORK
          </a>
          <a
            href="#"
            className="font-[karla] not-italic font-bold text-sm text-center text-[#837D88]"
          >
            BLOG
          </a>
          <a
            href="#"
            className="font-[karla] not-italic font-bold text-sm text-center text-[#837D88]"
          >
            ACCOUNT
          </a>
          <button className="font-[karla] not-italic px-7 py-3 font-bold text-sm text-center text-white bg-[#2C2830]">
            VIEW PLANS
          </button>
        </div>
        <button className=" sm:hidden top-8 h-8 w-8 right-6">
          <img src="/images/icon-hamburger.svg" alt="menu" />
        </button>
      </div>
    </div>
  );
}
