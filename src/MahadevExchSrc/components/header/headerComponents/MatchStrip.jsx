import { Link } from "react-router-dom";

export default function MatchStrip() {
  const matches = [
    { id: 1, title: "Pakistan v Australia", to: "/match/1" },
    { id: 2, title: "Pakistan v Australia", to: "/match/2" },
    { id: 3, title: "Pakistan v Australia", to: "/match/3" },
    { id: 4, title: "Pakistan v Australia", to: "/match/4" },
  ];

  return (
    <div
      className="
        w-full
        h-[30px] sm:h-[32px]
        bg-[#434343]
        text-[#cfcfcf]
        text-[12px] sm:text-[14px]
        font-bold
        overflow-x-auto
        hide-scrollbar
      "
    >
      <div className="flex h-full min-w-max">
        {matches.map((m, i) => (
          <Link
            key={m.id}
            to={m.to}
            className={`
              flex items-center justify-center
              h-full
              min-w-[220px] sm:min-w-0
              flex-1
              whitespace-nowrap leading-none
              hover:bg-black/20 transition
              ${i !== matches.length - 1 ? "border-r-[4px] border-black" : ""}
            `}
          >
            <span className="blink px-2">
              {m.title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
