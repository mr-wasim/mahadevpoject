// src/components/Badge.jsx
import React from "react";

export default function Badge({ label = "", variant = "count" }) {
  if (!label) return null;

  if (variant === "pill") {
    return (
      <span
        className="nav-badge nav-badge-pill text-white select-none"
        aria-hidden="true"
      >
        {label}
      </span>
    );
  }

  // default count badge
  return (
    <span
      className="nav-badge nav-badge-count text-white select-none flex items-center justify-center"
      aria-hidden="true"
    >
      {label}
    </span>
  );
}
