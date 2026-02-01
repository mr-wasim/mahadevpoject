// src/components/InPlay/LeftNavExact.jsx
import React, { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

/* ===== ICONS ===== */
const ICONS = {
  home: (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10.5z" fill="#b88a3b"/>
    </svg>
  ),
  play: (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path d="M5 3v18l15-9L5 3z" fill="#efc100"/>
    </svg>
  ),
  redDot: (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" fill="#c43a2c" />
    </svg>
  ),
  football: (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z" fill="#fff" stroke="#222" strokeWidth="0.8"/>
    </svg>
  ),
  tennis: (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="8" fill="#d9d900"/>
    </svg>
  ),
  casino: (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="#d94b3a"/>
    </svg>
  ),
  card: (
    <svg width="14" height="14" viewBox="0 0 24 24">
      <rect x="2" y="5" width="20" height="14" rx="2" fill="#ededed" stroke="#ccc" strokeWidth="0.6"/>
    </svg>
  ),
  league: (
    <svg width="12" height="12" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="6" fill="#888"/>
    </svg>
  ),
};

/* ===== COMPONENT ===== */
export default function LeftNave() {
  const location = useLocation();
  const currentPath = location.pathname;

  const [openId, setOpenId] = useState(null);
  const [nestedOpen, setNestedOpen] = useState(null);

  const toggle = (id) => setOpenId(prev => (prev === id ? null : id));
  const toggleNested = (id) => setNestedOpen(prev => (prev === id ? null : id));

  /* ===== DEMO DATA ===== */
  const items = useMemo(() => [
    { id: "home", label: "Home", icon: ICONS.home, path: "/" },

    {
      id: "inplay",
      label: "Inplay",
      icon: ICONS.play,
      count: 5,
      children: [
        "Canberra United (W) v Melbourne Victory (W)",
        "Mas Imamura v Jess Delaney",
        "Isomura v Tom Papac",
        "Enz Aguiard v Ch Ferguson",
        "Simakin v Yi Zhou",
      ],
    },

    {
      id: "cricket",
      label: "Cricket",
      icon: ICONS.redDot,
      count: 4,
      children: [
        {
          id: "intl",
          label: "International Matches",
          icon: ICONS.league,
          children: [
            "Sri Lanka v England",
            "Pakistan v Australia",
            "India v South Africa",
          ],
        },
        "New Zealand v West Indies",
      ],
    },

    {
      id: "football",
      label: "Football",
      icon: ICONS.football,
      count: 20,
      children: [
        "Premier League",
        "La Liga",
        "Bundesliga",
        "Serie A",
      ],
    },

    {
      id: "tennis",
      label: "Tennis",
      icon: ICONS.tennis,
      count: 34,
      children: [
        "ATP Tour",
        "WTA Tour",
        "Challenger",
      ],
    },

    {
      id: "casino",
      label: "Live Casino",
      icon: ICONS.casino,
    },

    {
      id: "card",
      label: "Live Card",
      icon: ICONS.card,
    },
  ], []);

  return (
    <nav className="w-full max-w-[260px] bg-white border border-gray-200 rounded shadow-sm">
      <div style={{ borderBottom: "1px solid #f1c84e" }} />

      <ul>
        {items.map((it, idx) => {
          const isOpen = openId === it.id;

          return (
            <li key={it.id}>
              <div style={{ borderTop: idx === 0 ? "none" : "1px solid #f1c84e" }} />

              {/* ===== MAIN ROW ===== */}
              <div
                onClick={() => it.children && toggle(it.id)}
                className="flex items-center justify-between px-3 py-2 text-sm cursor-pointer
                  bg-white hover:bg-[#63b81a] hover:text-white transition"
                style={{ minHeight: 38 }}
              >
                <div className="flex items-center gap-3 truncate">
                  {it.icon}
                  <span className="truncate">{it.label}</span>
                </div>

                {typeof it.count === "number" && (
                  <span className="bg-black text-white text-xs px-2 rounded h-[22px] flex items-center">
                    {it.count}
                  </span>
                )}
              </div>

              {/* ===== LEVEL 1 DROPDOWN ===== */}
              {isOpen && it.children && (
                <div className="bg-white border-t border-gray-200">
                  {it.children.map((child, i) => {

                    // ===== NESTED DROPDOWN =====
                    if (typeof child === "object") {
                      const isNestedOpen = nestedOpen === child.id;

                      return (
                        <div key={child.id}>
                          <div
                            onClick={() => toggleNested(child.id)}
                            className="pl-9 pr-2 py-2 text-xs font-medium flex items-center gap-2
                              hover:bg-[#63b81a] hover:text-white cursor-pointer transition border-b"
                          >
                            {child.icon}
                            {child.label}
                          </div>

                          {isNestedOpen && (
                            <div className="bg-white">
                              {child.children.map((n, j) => (
                                <div
                                  key={j}
                                  className="pl-14 pr-2 py-2 text-xs border-b last:border-b-0
                                    hover:bg-[#63b81a] hover:text-white cursor-pointer transition"
                                >
                                  {n}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }

                    // ===== NORMAL CHILD =====
                    return (
                      <div
                        key={i}
                        className="pl-9 pr-2 py-2 text-xs border-b last:border-b-0
                          hover:bg-[#63b81a] hover:text-white cursor-pointer transition"
                      >
                        {child}
                      </div>
                    );
                  })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
