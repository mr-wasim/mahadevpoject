export default function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center justify-center py-[40px] px-4 text-center"
      style={{
        background:
          "linear-gradient(180deg, #1b1b1b 0%, #222 100%)",
        fontFamily:
          "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
      }}
    >
      {/* LOGO */}
      <img
        src="/logo.png"
        alt="Mahadeva Shambhu"
        className="h-[52px] mb-[14px]"
        draggable={false}
      />

      {/* JOIN US */}
      <h3 className="text-[#ff7a1a] text-[18px] font-semibold mb-[8px]">
        Join Us On
      </h3>

      {/* DISCLAIMER */}
      <p className="text-[#b5b5b5] text-[14px] leading-[20px] max-w-[520px]">
        This site is only for fun. Not Any real money involve in this.
      </p>
    </footer>
  )
}
