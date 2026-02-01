import React from "react";

const HeadingsBar = ({title}) => {
  return (
    <div className="w-full bg-[#1f1f1f] border-t border-b border-[#2b3642]">
      <div className="h-[36px] flex items-center justify-center">
        <span className="text-white text-[14px] font-semibold tracking-wide">
          {title}
        </span>
      </div>
    </div>
  );
};

export default HeadingsBar;
