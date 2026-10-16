// src/components/Marquee.jsx
const defaultItems = [
    "Interior Design",
    "Space Planning",
    "Custom Furniture",
    "Turnkey Projects",
    "3D Visualisation",
  ];
  
  export default function MarqueeText({
    items = defaultItems,
    speed = 20, // seconds for one full loop — higher = slower
    pauseOnHover = true,
  }) {
    // The list is rendered twice so the loop restarts seamlessly
    const row = (
      <ul className="flex shrink-0 items-center" aria-hidden="false">
        {items.map((item, i) => (
          <li key={i} className="px-8 text-2xl whitespace-nowrap">
            {item}
          </li>
        ))}
      </ul>
    );
  
    return (
      <div
        className={`group flex w-full overflow-hidden bg-1 py-4 text-2  ${
          pauseOnHover ? "hover:[&>div]:[animation-play-state:paused]" : ""
        }`}
      >
        {/* Keyframes live here so no Tailwind config change is needed */}
        <style>{`
          @keyframes marquee-scroll {
            from { transform: translateX(0); }
            to   { transform: translateX(-50%); }
          }
          @media (prefers-reduced-motion: reduce) {
            .marquee-track { animation: none !important; }
          }
        `}</style>
  
        <div
          className="marquee-track flex w-max"
          style={{ animation: `marquee-scroll ${speed}s linear infinite` }}
        >
          {row}
          {row}
        </div>
      </div>
    );
  }