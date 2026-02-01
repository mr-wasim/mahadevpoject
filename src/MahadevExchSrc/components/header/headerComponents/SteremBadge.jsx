// SteremBadge.jsx
export default function SteremBadge({ count }) {
  if (!count) return null;

  return (
    <span
      className="
        flex items-center gap-[4px]
        bg-[#ef3b2b] text-white
        text-[11px] font-bold
        px-[6px] py-[1px]
        rounded-[5px]
        leading-none shadow
      "
    >
      {/* small stream icon (use SVG if you prefer) */}
      <span className="w-[6px] h-[6px] rounded-full bg-white inline-block" />
      <span>{count}</span>
    </span>
  );
}
