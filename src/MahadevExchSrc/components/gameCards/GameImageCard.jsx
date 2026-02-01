import React from "react";

const GameImageCard = () => {
  return (
    <div className="
      w-full 
      aspect-[16/9] 
      overflow-hidden 
      rounded-md
      bg-black
    ">
      <img
        src="/games/evo1.png"
        alt="Craps Evolution"
        className="
          w-full 
          h-full 
          object-cover 
          transition-transform 
          duration-500 
          ease-out 
          hover:scale-110
        "
      />
    </div>
  );
};

export default GameImageCard;
