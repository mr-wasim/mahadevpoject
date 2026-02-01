// src/components/Indicator.jsx
import React from "react";

/**
 * Simple live/upcoming dot
 * status: "live" | "upcoming"
 */
export default function Indicator({ status = "upcoming" }) {
  const isLive = status === "live";
  const base = "inline-block rounded-full";
  return (
    <span
      aria-hidden="true"
      className={
        isLive
          ? `${base} w-[8px] h-[8px] bg-[#27ae60] shadow-[0_0_0_3px_rgba(39,174,96,0.12)]`
          : `${base} w-[8px] h-[8px] bg-[#9e9e9e]`
      }
    />
  );
}
