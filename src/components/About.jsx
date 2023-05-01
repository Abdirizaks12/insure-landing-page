import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col py-24 justify-center align-center   px-6">
      <h1 className="m-auto mb-20 font-Display text-5xl non-italic font-normal text-[#2C2830] leading-10">
        We’re different
      </h1>
      <div className="flex flex-col gap-14">
        <div className="text-center ">
          <img className="m-auto" src="/images/icon-snappy-process.svg" />
          <h2>Snappy Process</h2>
          <p>
            Our application process can be completed in minutes, not hours.
            Don’t get stuck filling in tedious forms.
          </p>
        </div>
        <div className="text-center ">
          <img className="m-auto" src="/images/icon-affordable-prices.svg" />
          <h2>Affordable Prices</h2>
          <p>
            We don’t want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </div>
        <div className="text-center ">
          <img className="m-auto" src="/images/icon-people-first.svg" />
          <h2>People First</h2>
          <p>
            Our plans aren’t full of conditions and clauses to prevent payouts.
            We make sure you’re covered when you need it.
          </p>
        </div>
      </div>
    </div>
  );
}
