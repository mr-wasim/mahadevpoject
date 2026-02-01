import React, { lazy, Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Badge = lazy(() => import("./Badge"));
const SteremBadge = lazy(() => import("./SteremBadge"));

export default function TopNav() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const t = setInterval(updateTime, 1000);
    return () => clearInterval(t);
  }, []);

  const leftItems = [
    { id: "home", label: "Home", to: "/" },
    { id: "inplay", label: "In-Play", to: "/in-play", SteremBadge: "2" },
    { id: "cricket", label: "Cricket", to: "/cricket", SteremBadge: "9" },
    { id: "soccer", label: "Soccer", to: "/soccer" },
    { id: "tennis", label: "Tennis", to: "/tennis", badge: "6" },
    { id: "diamond", label: "Diamond And RS Tables", to: "/diamond" },
    { id: "world", label: "World Casino", to: "/world-casino", live: true },
    { id: "multi", label: "Multi Market", to: "/multi-market" },
    { id: "master", label: "Go To Master Link", to: "/master" },
  ];

  return (
    <nav
      className="w-full nav-inset-shadow"
      style={{
        backgroundImage:
          "linear-gradient(rgb(193,76,0) 0%, rgb(245,117,34) 100%)",
      }}
    >
      <div className="flex h-[44px] w-full overflow-x-auto hide-scrollbar px-2">

        {/* LEFT NAV */}
        <ul className="flex items-stretch whitespace-nowrap">
          {leftItems.map((it) => (
            <li
              key={it.id}
              className="relative h-[44px] border-r border-[#ff893c]"
            >
              <NavLink
                to={it.to}
                className={({ isActive }) =>
                  [
                    "flex items-center h-full",
                    "px-3 md:px-4",
                    "text-[13px] md:text-[14px]",
                    "font-bold leading-none whitespace-nowrap",
                    isActive
                      ? "bg-[#ef823b] text-white"
                      : "text-white/95 hover:bg-black/10",
                  ].join(" ")
                }
              >
                {it.label}
              </NavLink>

              {/* STREAM BADGE */}
              {it.SteremBadge && (
                <div className="absolute -top-[6px] right-[6px] pointer-events-none">
                  <Suspense fallback={null}>
                    <SteremBadge count={it.SteremBadge} />
                  </Suspense>
                </div>
              )}

              {/* LIVE / COUNT BADGE */}
              {(it.badge || it.live) && (
                <div className="absolute -top-[4px] right-[6px] pointer-events-none">
                  <Suspense fallback={null}>
                    {it.live ? (
                      <Badge label="Live" variant="pill" />
                    ) : (
                      <Badge label={it.badge} variant="count" />
                    )}
                  </Suspense>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* FLEX FILLER */}
        <div className="flex-1" />

        {/* RIGHT NAV */}
        <ul className="flex items-stretch whitespace-nowrap">

          {/* CLOCK */}
          <li className="h-[44px] flex items-center px-3 md:px-4">
            <span className="text-[13px] md:text-[14px] leading-none whitespace-nowrap text-white/95">
              Time&nbsp;:&nbsp;{time}
            </span>
          </li>

          {/* STAKE */}
          <li className="h-[44px]">
            <NavLink
              to="/stake-setting"
              className={({ isActive }) =>
                [
                  "flex items-center h-full",
                  "px-3 md:px-4",
                  "text-[13px] md:text-[14px]",
                  "font-bold leading-none whitespace-nowrap",
                  isActive
                    ? "bg-[#ef823b] text-white"
                    : "text-white/95 hover:bg-black/10",
                ].join(" ")
              }
            >
              Stake&nbsp;Setting ⚙
            </NavLink>
          </li>

        </ul>
      </div>
    </nav>
  );
}
