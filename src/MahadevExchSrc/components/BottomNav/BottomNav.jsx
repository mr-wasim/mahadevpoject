import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaTrophy, FaPlay, FaHome, FaCoins, FaCog } from "react-icons/fa";


const tabs = [
  { to: "/cricket", label: "SPORTS", icon: FaTrophy, key: "sports" },
  { to: "/in-play", label: "IN-PLAY", icon: FaPlay, key: "inplay" },
  { to: "/", label: "HOME", icon: FaHome, key: "home", center: true },
  { to: "/casino", label: "CASINO", icon: FaCoins, key: "casino" },
  { to: "/account", label: "ACCOUNT", icon: FaCog, key: "account" },
];

export default function BottomNav() {
  const location = useLocation();

  const activeIndex = tabs.findIndex(t =>
    t.to === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(t.to)
  );

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] md:hidden">
      <div className="relative h-[62px] bg-[#1c1c1c] border-t border-[#2a2a2a]">
        {/* ACTIVE ORANGE CIRCLE */}
        <div
          className="absolute top-[-22px] w-[56px] h-[56px] rounded-full bg-[#ff7a00] flex items-center justify-center shadow-xl transition-all duration-300"
          style={{
            left: `calc(${activeIndex} * 20% + 10%)`,
            transform: "translateX(-50%)",
          }}
        >
          {React.createElement(tabs[activeIndex]?.icon || FaHome, {
            className: "text-white text-[20px]",
          })}
        </div>

        {/* NAV ITEMS */}
        <div className="h-full grid grid-cols-5">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = i === activeIndex;

            return (
              <NavLink
                key={tab.key}
                to={tab.to}
                className="flex flex-col items-center justify-center gap-[2px] text-white"
              >
                {/* ICON PLACEHOLDER (keeps spacing exact) */}
                <div className="h-[22px] flex items-center justify-center">
                  {!tab.center && (
                    <Icon
                      className={`text-[18px] transition-opacity duration-200 ${
                        isActive ? "opacity-0" : "opacity-90"
                      }`}
                    />
                  )}
                </div>

                {/* LABEL */}
                <span
                  className={`text-[11px] font-semibold tracking-wide leading-none transition-opacity duration-200 ${
                    isActive ? "opacity-0" : "opacity-100"
                  }`}
                >
                  {tab.label}
                </span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
