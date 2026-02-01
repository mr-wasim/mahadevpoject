export default function GameHeader({ title }) {
  return (
    <div className="w-full bg-[#c56a2d] h-[36px] flex items-center">
      
      {/* LEFT WHITE STRIP */}
      <div className="w-[8px] h-full"/>

      {/* TITLE */}
      <span className="ml-3 text-white font-bold text-[15px]">
        {title}
      </span>

    </div>
  );
}
