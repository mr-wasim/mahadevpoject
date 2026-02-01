import React from "react";

const GameCards = ({
  title = "Teen Patti One Day",
  href = "#",
  desktopOnly = true,
}) => {
  return (
    <div className="
      relative 
      w-full 
      aspect-[16/9] 
      overflow-hidden 
      rounded-lg 
      shadow-lg 
      group
      bg-black
    ">
      {/* IMAGE */}
      <img
        src="/games/teen-patti.png"
        alt="Teen Patti"
        className="
          w-full 
          h-full 
          object-cover 
          transition-transform 
          duration-500 
          ease-in-out 
          group-hover:scale-110
        "
      />

      {/* BOTTOM BAR */}
      <div
        className={`
          ${desktopOnly ? "hidden md:block" : "block"}
          absolute 
          left-0 
          bottom-0 
          w-full
        `}
      >
        <div
          className="flex items-stretch justify-between h-[34px]"
          style={{
            backgroundImage:
              "linear-gradient(270deg, rgba(69,94,104,0) 4%, rgb(0,0,0) 97%)",
            borderBottom: "5px solid rgb(119,200,31)",
          }}
        >
          {/* TITLE */}
          <div className="
            flex 
            items-center 
            px-4 
            text-white 
            text-[15px] 
            font-semibold 
            truncate 
            w-[65%]
          ">
            {title}
          </div>

          {/* PLAY AREA */}
          <div className="relative flex items-center">
            {/* TRIANGLE */}
            <span
              className="absolute left-[-20px] bottom-0"
              style={{
                width: 0,
                height: 0,
                borderLeft: "20px solid transparent",
                borderBottom: "34px solid rgb(119,200,31)",
              }}
            />

            {/* BUTTON */}
            <a
              href={href}
              className="
                flex 
                items-center 
                gap-2 
                h-[34px] 
                px-4 
                text-[13px] 
                font-bold 
                text-white
              "
              style={{ background: "rgb(119,200,31)" }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 2v20l18-10L4 2z" />
              </svg>
              Play Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCards;
