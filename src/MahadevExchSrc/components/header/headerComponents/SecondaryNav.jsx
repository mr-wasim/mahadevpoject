import React, { useState, lazy, Suspense, memo } from "react";
import { useLocation } from "react-router-dom";

const MatchList = lazy(() => import("../../MatchList.jsx"));

const TABS = [
  { key: "cricket", label: "Cricket" },
  { key: "football", label: "Football" },
  { key: "tennis", label: "Tennis" },
  { key: "horse", label: "Horse Racing" },
  { key: "greyhound", label: "Greyhound Racing" },
];

// ✅ ONLY these routes will show SecondaryNav
const ALLOWED_ROUTES = ["/", "/lobby"];

function SecondaryNav() {
  const { pathname } = useLocation();

  // 🔥 HARD STOP — home & lobby ke alava kahin bhi render nahi hoga
  if (!ALLOWED_ROUTES.includes(pathname)) {
    return null;
  }

  const [active, setActive] = useState("cricket");

  return (
    <div className="w-full">
      {/* TOP ORANGE STRIP */}
      <div className="h-[3px] bg-[#ef823b]" />

      {/* NAV BAR */}
      <nav
        className="bg-[#4a4a4a] px-3 overflow-x-auto"
        aria-label="secondary navigation"
      >
        <ul role="tablist" className="flex gap-2">
          {TABS.map((t, i) => {
            const isActive = active === t.key;

            return (
              <li
                key={t.key}
                className={`h-[30px] flex items-center ${
                  i !== TABS.length - 1 ? "border-r border-black/40" : ""
                }`}
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(t.key)}
                  className={`px-3 py-1.5 text-[12px] whitespace-nowrap font-medium rounded-sm transition
                    ${
                      isActive
                        ? "bg-[#ef823b] text-white"
                        : "text-white hover:bg-[#ef823b]"
                    }`}
                >
                  {t.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* TAB CONTENT */}
      <div className="bg-white border-t border-[#e6e6e6]">
        <Suspense
          fallback={
            <div className="p-6">
              <div className="h-3 w-32 bg-[#f0f0f0] rounded mb-3 animate-pulse" />
              <div className="h-8 w-full bg-[#fafafa] rounded animate-pulse" />
            </div>
          }
        >
          <MatchList filterSport={active} isDemo />
        </Suspense>
      </div>
    </div>
  );
}

export default memo(SecondaryNav);
