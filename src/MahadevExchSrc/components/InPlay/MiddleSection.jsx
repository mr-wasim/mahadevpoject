import React from "react";
import Marquee from "react-fast-marquee";
import { FaBullhorn } from "react-icons/fa";

import HeadingsBar from "./HeadingsBar";
import MatchList from "../MatchList";
import { ScorebordTitleHeading } from "../ScorebordTitleHeading";

const MiddleSection = () => {
  return (
    /* MAIN SCROLL CONTAINER */
    <div className="h-[100vh] overflow-y-auto scrollbar-thin scrollbar-thumb-[#c1c1c1] scrollbar-track-transparent">

      {/* NEWS STRIP */}
      <div className="w-full h-[34px] flex items-center text-white text-[14px] bg-[#1f1f1f] sticky top-0 z-20">
        <div className="flex-shrink-0 w-[90px] h-full flex items-center justify-center gap-2 px-2">
          <FaBullhorn className="text-[14px]" />
          <span>News</span>
        </div>

        <div className="flex-1 overflow-hidden">
          <Marquee speed={45} gradient={false} pauseOnHover>
            <div className="flex items-center gap-2 mx-6 italic">
              <span
                className="inline-block"
                style={{
                  width: "14px",
                  height: "10px",
                  backgroundColor: "#ff7a1a",
                  borderRadius: "2px",
                }}
              />
              <span>
                For any Deposit and withdrawal please contact
                <span className="ml-1 font-semibold">+91 9015125250</span>
              </span>
            </div>
          </Marquee>
        </div>
      </div>

      {/* MID BANNER */}
      <div className="w-full">
        <img
          src="/Banners/cricket27.png"
          alt="Cricket Banner"
          className="w-full block"
        />
      </div>

      {/* ================= HIGHLIGHTS ================= */}
      {/* ❗ Sirf title — koi MatchList nahi */}
      <HeadingsBar title="Highlights" />
      <ScorebordTitleHeading />

      {/* ================= CRICKET ================= */}
      <HeadingsBar title="Cricket" />
      <MatchList filterSport="cricket" />

      {/* ================= FOOTBALL ================= */}
      <HeadingsBar title="Football" />
      <MatchList filterSport="football" />

      {/* ================= TENNIS ================= */}
      <HeadingsBar title="Tennis" />
      <MatchList filterSport="tennis" />
    </div>
  );
};

export default MiddleSection;
