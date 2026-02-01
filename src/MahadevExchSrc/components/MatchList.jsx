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
 * Pixel-perfect, compact MatchList
 * - Keeps all content identical (no text/content changes)
 * - Forces a single-line layout (left: team/info, middle: boxes grid, right: pin)
 * - Mobile + Tablet: two main sections visible on one line (compact), boxes show 3-per-row
 * - Desktop: retains previous wide-layout behavior (6 boxes in a row)
 * - Page-level scroller applied (full-height, vertical scroll)
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
          teamA: "Dubai Royals",
          teamB: "Pune Panthers",
          startTime: nowISO,
          inPlayLabel: "In-Play",
          icons: [{ href: "#", src: "/vid-1.jpg", alt: "video" }, { href: "#", src: "/icon--4.jpg", alt: "stats" }],
          odds: ["1.25", "3.60", "-", "-", "2.05", "4.10"],
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
          id: `cricket-3`,
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
          id: `cricket-4`,
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
        {
          id: `tennis-1`,
          sport: "tennis",
          status: "upcoming",
          teamA: "Player A",
          teamB: "Player B",
          startTime: laterISO,
          inPlayLabel: "Pre-match",
          icons: [],
          odds: ["1.80", "2.05", "-", "-", "0.00", "0.00"],
        },
      ];

      const t = setTimeout(() => setRows(demoRows), 120);
      return () => clearTimeout(t);
    }
  }, [isDemo]);

  const filtered = useMemo(() => rows.filter((r) => r.sport === filterSport), [rows, filterSport]);

  return (
    // full page scroller — ensures main page scrolls vertically (requirement 6)
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
                // NOTE: single-line layout for every viewport. Compact spacing + smaller fonts for pixel-perfect tight layout.
                <div
                  key={r.id}
                  className="flex items-center justify-between gap-2 hover:bg-[#fafafa] transition px-1 py-2 md:py-3"
                  style={{ alignItems: 'center' }}
                >
                  {/* LEFT — team + small meta (keeps content identical) */}
                  <div className="flex items-center gap-3 min-w-0 w-[55%] md:w-6/12">
                    <Suspense fallback={<span className="w-[8px] h-[8px] rounded-full bg-[#9e9e9e]" />}>
                      <Indicator status={r.status} />
                    </Suspense>

                    <div className="min-w-0 flex flex-col justify-center">
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="text-[#0066ff] font-semibold text-[13px] leading-4 hover:underline truncate"
                        title={`${r.teamA} v ${r.teamB}`}
                      >
                        {r.teamA} v {r.teamB}
                      </a>

                      <div className="mt-1 flex items-center gap-2 flex-wrap text-[12px] text-[#444]">
                        <span className={`font-medium ${r.status === "live" ? "text-[#27ae60]" : "text-[#999]"}`}>{r.inPlayLabel}</span>
                        <span className="text-[#444] truncate">{formatSchedule(r.startTime)}</span>

                        <ul className="flex items-center gap-2 ml-1">
                          {r.icons.map((ic, i) => (
                            <li key={i}>
                              <a href={ic.href} onClick={(e) => e.preventDefault()}>
                                <img src={ic.src} alt={ic.alt} loading="lazy" decoding="async" className="h-[14px] w-[14px] object-cover rounded-sm" />
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* MIDDLE — boxes (odds) */}
                  {/* Requirement: display boxes in a row but on mobile/tablet show 3 per row. Desktop (md+) show 6 in a row as before. */}
                  <div className="w-[42%] md:w-5/12 px-1">
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-2 justify-items-center items-center">
                      {r.odds.map((o, i) => (
                        <div key={i} className="h-9 w-full flex items-center justify-center text-[13px] select-none font-bold rounded-sm overflow-hidden"
                          aria-hidden>
                          <div className={`w-full h-full flex items-center justify-center text-[13px] font-bold select-none rounded-sm ${i % 2 === 0 ? "bg-[#7ec3ff] text-[#003049]" : "bg-[#ffb6c1] text-[#4b2a2a]"}`}>
                            {o}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* RIGHT — pin icon */}
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
