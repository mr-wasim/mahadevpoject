export default function BannerSlide({ slide }) {
  return (
    <div className="w-full h-[100%] flex-shrink-0">
      <img
        src={slide.src}
        alt={slide.alt}
        loading="lazy"
        draggable={false}
        className="
          w-full
          h-[220px]
          md:h-[360px]
          object-cover
          select-none
        "
      />
    </div>
  );
}
