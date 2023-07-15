import React from 'react';

export default function About() {
  return (
    <div className="flex  flex-col py-24 justify-center  align-center   px-6">
      <h1 className="m-auto mb-20 sm:mx-0 sm:self-start font-Display text-5xl  non-italic font-normal text-[#2C2830] leading-10">
        We’re different
      </h1>
      <div className="flex flex-col sm:flex-row  gap-14">
        <div className="text-center sm:text-left ">
          <img
            className="m-auto sm:mx-0"
            src="/images/icon-snappy-process.svg"
          />
          <h2 className="text-2xl font-normal font-Display text-[#2C2830] break-words mt-8 mb-4">
            Snappy Process
          </h2>
          <p className="font-normal text-base font-[karla] text-[#837D88] leading-6 break-words">
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <img
            className="m-auto sm:mx-0"
            src="/images/icon-affordable-prices.svg"
          />
          <h2 className="text-2xl font-normal font-Display text-[#2C2830] break-words mt-8 mb-4">
            Affordable Prices
          </h2>
          <p className="font-normal text-base font-[karla] text-[#837D88] leading-6 break-words">
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="text-center sm:text-left">
          <img className="m-auto sm:mx-0" src="/images/icon-people-first.svg" />
          <h2 className="text-2xl font-normal font-Display text-[#2C2830] break-words mt-8 mb-4">
            People First
          </h2>
          <p className="font-normal text-base font-[karla] text-[#837D88] leading-6 break-words">
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}
