import { lazy, Suspense, useEffect, useRef, useState } from "react";

const BannerSlide = lazy(() => import("./BannerSlide"));

export default function ImageBannerSlider() {
  const slides = [
    { id: 1, src: "/banner/banner1.png", alt: "Banner 1" },
    { id: 2, src: "/banner/banner2.png", alt: "Banner 2" },
    { id: 3, src: "/banner/banner3.png", alt: "Banner 3" },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const intervalRef = useRef(null);

  /* drag refs */
  const startX = useRef(0);
  const currentX = useRef(0);
  const dragging = useRef(false);

  /* ===== AUTOPLAY ===== */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 4500);

    return () => clearInterval(intervalRef.current);
  }, [paused, slides.length]);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setIndex(i);
  };

  const prev = () => goTo((index - 1 + slides.length) % slides.length);
  const next = () => goTo((index + 1) % slides.length);

  /* ===== MOUSE DRAG ===== */
  const onMouseDown = (e) => {
    dragging.current = true;
    startX.current = e.clientX;
    currentX.current = e.clientX;
    setPaused(true);
  };

  const onMouseMove = (e) => {
    if (!dragging.current) return;
    currentX.current = e.clientX;
  };

  const onMouseUp = () => {
    if (!dragging.current) return;
    const diff = startX.current - currentX.current;
    dragging.current = false;
    setPaused(false);

    if (Math.abs(diff) > 80) {
      diff > 0 ? next() : prev();
    }
  };

  /* ===== TOUCH ===== */
  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
    setPaused(true);
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    setPaused(false);
    if (Math.abs(diff) > 60) {
      diff > 0 ? next() : prev();
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-black cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* ===== SLIDES ===== */}
      <div
        className="flex transition-transform duration-[1000ms]
                   ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide) => (
          <Suspense
            key={slide.id}
            fallback={
              <div
                className="w-full h-[240px] sm:h-[320px] md:h-[460px] lg:h-[520px]
                           bg-gradient-to-r from-zinc-800 to-zinc-700
                           animate-pulse"
              />
            }
          >
            <div className="w-full flex-shrink-0">
              <BannerSlide slide={slide} />
            </div>
          </Suspense>
        ))}
      </div>

      {/* ===== ARROWS ===== */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11
                   bg-black/40 hover:bg-black/70
                   backdrop-blur
                   text-white text-2xl
                   flex items-center justify-center
                   transition"
        aria-label="Previous"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10
                   w-11 h-11
                   bg-black/40 hover:bg-black/70
                   backdrop-blur
                   text-white text-2xl
                   flex items-center justify-center
                   transition"
        aria-label="Next"
      >
        ›
      </button>

      {/* ===== DOTS ===== */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-[3px] transition-all duration-300
              ${i === index
                ? "w-8 bg-orange-500"
                : "w-4 bg-white/50 hover:bg-white"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
