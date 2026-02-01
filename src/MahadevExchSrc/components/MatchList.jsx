import React, { useEffect, useMemo, useState, memo, Suspense } from "react";
import { FaThumbtack } from "react-icons/fa";
import { ScorebordTitleHeading } from "./ScorebordTitleHeading.jsx";

/* Optional Indicator component — if not present, fallback shown */
const Indicator = React.lazy(() => import("./Indicator.jsx"));

function formatSchedule(startISO) {
  if (!startISO) return "";
  const d = new Date(startISO);
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);

  const time = d.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", hour12: true });
  if (d.toDateString() === now.toDateString()) return `Today ${time}`;
  if (d.toDateString() === tomorrow.toDateString()) return `Tomorrow ${time}`;
  return `${d.toLocaleDateString("en-GB", { day: "2-digit", month: "short" })} ${time}`;
}

/**
 * MatchList — Pixel-tight layout for mobile/tablet (desktop unchanged)
 * - Left: team + meta
 * - Right: odds boxes (3x2 on mobile/tablet, 6 in-row on desktop)
 * - Keeps textual content identical
 */
function MatchList({ filterSport = "cricket", isDemo = true }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (isDemo) {
      const nowISO = new Date().toISOString();
      const laterISO = new Date(Date.now() + 1000 * 60 * 60).toISOString();

      const demoRows = [
        {
          id: `cricket-1`,
          sport: "cricket",
          status: "live",
          teamA: "India U19",
          teamB: "Pakistan U19",
          startTime: nowISO,
          inPlayLabel: "In-Play",
          icons: [{ href: "#", src: "/vid-1.jpg", alt: "video" }, { href: "#", src: "/icon--4.jpg", alt: "stats" }],
          odds: ["1.37", "-", "3.50", "1.42", "-", "3.80"],
        },
        // additional demo rows (same structure)
        {
          id: `cricket-2`,
          sport: "cricket",
          status: "upcoming",
          teamA: "Mumbai Kings",
          teamB: "Delhi Spartans",
          startTime: laterISO,
          inPlayLabel: "Pre-match",
          icons: [{ href: "#", src: "/vid-2.jpg", alt: "video" }],
          odds: ["0.00", "0.00", "-", "-", "0.00", "0.00"],
        },
         {
          id: `cricket-2`,
          sport: "cricket",
          status: "upcoming",
          teamA: "Mumbai Kings",
          teamB: "Delhi Spartans",
          startTime: laterISO,
          inPlayLabel: "Pre-match",
          icons: [{ href: "#", src: "/vid-2.jpg", alt: "video" }],
          odds: ["0.00", "0.00", "-", "-", "0.00", "0.00"],
        },
         {
          id: `cricket-2`,
          sport: "cricket",
          status: "upcoming",
          teamA: "Mumbai Kings",
          teamB: "Delhi Spartans",
          startTime: laterISO,
          inPlayLabel: "Pre-match",
          icons: [{ href: "#", src: "/vid-2.jpg", alt: "video" }],
          odds: ["0.00", "0.00", "-", "-", "0.00", "0.00"],
        },
        {
          id: `football-1`,
          sport: "football",
          status: "upcoming",
          teamA: "City FC",
          teamB: "United FC",
          startTime: laterISO,
          inPlayLabel: "Pre-match",
          icons: [{ href: "#", src: "/icon--4.jpg", alt: "stats" }],
          odds: ["2.10", "3.00", "-", "-", "2.90", "6.50"],
        },
      ];

      const t = setTimeout(() => setRows(demoRows), 120);
      return () => clearTimeout(t);
    } else {
      // replace with real fetch if needed
    }
  }, [isDemo]);

  const filtered = useMemo(() => rows.filter((r) => r.sport === filterSport), [rows, filterSport]);

  return (
    <div className="overflow-y-auto bg-white">
      <ScorebordTitleHeading />

      <div className="w-full bg-white overflow-x-auto border-b border-[rgb(126,151,167)]">
        <div className="max-w-full mx-auto px-2">
          {filtered.length === 0 ? (
            <div className="p-10 text-center text-sm text-[#555]">
              <div className="text-2xl mb-2">⏳</div>
              <div className="font-medium mb-1">Coming soon</div>
              <div className="text-xs text-[#777]">No {filterSport} matches available right now.</div>
            </div>
          ) : (
            <div className="divide-y divide-[#dcdcdc]">
              {filtered.map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between gap-2 hover:bg-[#fafafa] transition px-1 py-2 md:py-3"
                >
                  {/* LEFT: Team + meta */}
                  <div className="flex items-start gap-3 min-w-0 w-[56%] sm:w-[58%] md:w-6/12">
                    <Suspense fallback={<span className="w-[10px] h-[10px] rounded-full bg-[#9e9e9e]" />}>
                      <div className="pt-[2px]">
                        <Indicator status={r.status} />
                      </div>
                    </Suspense>

                    <div className="min-w-0 flex flex-col justify-center">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-[#0a4ea8] font-semibold text-[13px] leading-5 hover:underline truncate"
                        title={`${r.teamA} v ${r.teamB}`}
                      >
                        {r.teamA} v {r.teamB}
                      </a>

                      <div className="mt-1 flex items-center gap-2 flex-wrap text-[12px] text-[#444]">
                        {/* green dot + in-play label */}
                        <span className="inline-flex items-center gap-2">
                          <span
                            className={`inline-block w-[8px] h-[8px] rounded-full ${r.status === "live" ? "bg-[#2ecc71]" : "bg-[#999]"}`}
                          />
                          <span className={`font-medium ${r.status === "live" ? "text-[#27ae60]" : "text-[#999]"}`}>{r.inPlayLabel}</span>
                        </span>

                        {/* time */}
                        <span className="text-[#444] truncate">{formatSchedule(r.startTime)}</span>

                        {/* small icons */}
                        <ul className="flex items-center gap-2 ml-1">
                          {r.icons.map((ic, i) => (
                            <li key={i}>
                              <a href={ic.href} onClick={(e) => e.preventDefault()}>
                                <img
                                  src={ic.src}
                                  alt={ic.alt}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-[14px] w-[14px] object-cover rounded-sm"
                                />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Odds boxes */}
                  <div className="w-[42%] sm:w-[40%] md:w-5/12 px-1 min-w-0">
                    {/* Mobile/Tablet: 3 columns x 2 rows; Desktop md+: 6 columns single row */}
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 justify-items-center items-center">
                      {r.odds.map((o, i) => {
                        // First 3 -> blue top row, Next 3 -> pink bottom row (matches image)
                        const isTopRow = i < 3;
                        const boxBg = isTopRow ? "bg-[#72bbef] text-black font-bold" : "bg-[#faa9ba] text-black font-bold";
                        return (
                          <div
                            key={i}
                            className="h-[36px] w-full md:w-full flex items-center justify-center select-none font-bold text-[13px] rounded-sm overflow-hidden"
                            aria-hidden
                          >
                            <div className={`w-full h-full flex items-center justify-center text-[13px] font-bold select-none rounded-sm ${boxBg}`}>
                              {o}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* PIN BUTTON */}
                  <div className="w-auto flex items-center justify-center px-1">
                    <button
                      className="w-[28px] h-[28px] rounded-full border border-[#cfcfcf] flex items-center justify-center hover:bg-[#f1f1f1] transition"
                      aria-label="Pin"
                      title="Pin"
                      onClick={(e) => {
                        e.preventDefault();
                        if (isDemo) window.alert("Pinned (demo): " + r.teamA + " vs " + r.teamB);
                      }}
                    >
                      <FaThumbtack className="text-[#cfcfcf]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(MatchList);
