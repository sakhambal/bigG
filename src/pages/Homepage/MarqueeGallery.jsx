// src/components/MarqueeGallery.jsx
const defaultImages = [
  { src: "/images/projects/residential/img1.png", alt: "Living room" },
  { src: "/images/projects/residential/img2.png", alt: "Bedroom" },
  { src: "/images/projects/residential/img5.png", alt: "Salon interior" },
  { src: "/images/projects/residential/img7.png", alt: "Kitchen" },
  { src: "/images/projects/residential/img6.png", alt: "Office space" },
  { src: "/images/projects/residential/img10.png", alt: "Dining area" },
];
//One scrolling row of images
function ImageRow({ images, speed, reverse, pauseOnHover }) {
  // Two identical sets side by side. Each set slides left by exactly its own
  // width, so the second set lands precisely where the first one started.
  const sets = [0, 1].map((n) => (
    <ul
      key={n}
      aria-hidden={n === 1} // hide the duplicate from screen readers
      className={`marquee-gallery-set flex shrink-0 gap-4 pr-4 will-change-transform ${
        pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
      }`}
      style={{
        animation: `marquee-gallery-scroll ${speed}s linear infinite`,
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {images.map((img, i) => (
        <li key={i} className="shrink-0">
          <img
            src={img.src}
            alt={n === 1 ? "" : img.alt}
            className="h-48 w-72 rounded-xl object-cover md:h-64 md:w-96"
          />
        </li>
      ))}
    </ul>
  ));
 
  return <div className="group flex w-full overflow-hidden">{sets}</div>;
}
 
export default function MarqueeGallery({
  images = defaultImages,
  speed = 40, // seconds per loop — higher = slower
  rows = 2, // 1 or 2; the second row scrolls the opposite way
  pauseOnHover = true,
}) {
  return (
    <section className="flex flex-col gap-4 overflow-hidden bg-2 py-30">
      <style>{`
        @keyframes marquee-gallery-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-100%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-gallery-set { animation: none !important; }
        }
      `}</style>
 
      <ImageRow images={images} speed={speed} pauseOnHover={pauseOnHover} />
 
      {rows === 2 && (
        <ImageRow
          images={[...images].reverse()}
          speed={speed}
          reverse
          pauseOnHover={pauseOnHover}
        />
      )}
    </section>
  );
}
 