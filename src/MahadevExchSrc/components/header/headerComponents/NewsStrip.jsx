import Marquee from "react-fast-marquee";
import { FaBullhorn } from "react-icons/fa";

export default function NewsStrip() {
  return (
    <div
      className="
        w-full 
        h-[32px] sm:h-[34px]
        flex items-center
        bg-[#4a4a4a] text-white
        text-[12px] sm:text-[14px]
        overflow-hidden
      "
      style={{ minWidth: 0 }} // marquee fix
    >
      {/* LEFT : FIXED NEWS LABEL */}
      <div
        className="
          flex-shrink-0
          w-[70px] sm:w-[90px]
          h-full
          bg-[#1f1f1f]
          flex items-center justify-center
          gap-1 sm:gap-2
          px-2
        "
      >
        <FaBullhorn className="text-[12px] sm:text-[14px]" />
        <span className="whitespace-nowrap leading-none">
          News
        </span>
      </div>

      {/* CENTER : MARQUEE */}
      <div className="flex-1 h-full min-w-0 flex items-center overflow-hidden">
        <Marquee
          speed={45}
          gradient={false}
          pauseOnHover
        >
          <div className="flex items-center gap-2 mx-4 sm:mx-6 italic whitespace-nowrap leading-none">
            <span
              className="inline-block flex-shrink-0"
              style={{
                width: "14px",
                height: "10px",
                backgroundColor: "#ff7a1a",
                borderRadius: "2px",
              }}
            />
            <span className="whitespace-nowrap">
              For any Deposit and withdrawal please contact on this number
              <span className="ml-1 font-semibold">
                +91 9015125250
              </span>
            </span>
          </div>
        </Marquee>
      </div>

      {/* RIGHT : EMPTY BLOCK (DESKTOP ONLY) */}
      <div
        className="
          mpt
          hidden lg:block
          flex-shrink-0
          w-[90px]
          h-full
          bg-[#1f1f1f]
        "
      />
    </div>
  );
}
