// src/MahadevExchSrc/components/InPlay/RightSection.jsx
import React from "react";
import { FaHeart } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="w-full bg-[#e5e5e5] border border-[#cfcfcf]">
      {/* PLACE BET HEADER */}
      <div className="bg-[#7acb00] text-white text-[14px] font-semibold px-3 py-[6px]">
        Place Bet
      </div>

      {/* PLACE BET BODY */}
      <div className="bg-white px-4 py-6 text-center">
        <FaHeart className="mx-auto text-[#e26a00] text-[30px] mb-3" />
        <p className="text-[14px] text-black leading-[18px]">
          Click on the odds to add selections
          <br />
          to the betslip
        </p>
      </div>

      {/* OPEN BET HEADER */}
      <div className="bg-[#d65a0b] text-white text-[14px] font-semibold px-3 py-[6px]">
        Open Bet
      </div>

      {/* OPEN BET EMPTY */}
      <div className="bg-white px-4 py-5 text-[14px] text-[#444]">
        You have no bets in this time period.
      </div>
    </div>
  );
};

export default RightSection;
