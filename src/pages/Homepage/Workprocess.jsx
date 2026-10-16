// src/components/Accordion.jsx
import { useState } from "react";

const defaultItems = [
  { id: 1, title: "Design", content: "Concept, mood boards and 3D renders for your space." },
  { id: 2, title: "Execution", content: "On-site project management from civil work to final styling." },
  { id: 3, title: "Furnishing", content: "Custom furniture, lighting and decor sourced to match the design." },
];

export default function Workprocess({ items = defaultItems }) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((current) => (current === id ? null : id));

  return (
    <div className="w-full px-4 py-24 bg-2">
      <h3 className="font-fraunces text-5xl uppercase">How we work.</h3>
    <div className="w-full max-w-8xl divide-y divide-stone-300 rounded-2xl bg-stone-200 text-stone-900">
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => toggle(item.id)}
              className="flex w-full items-center justify-between px-5 py-4 text-left text-lg"
            >
              {item.title}
              <span
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {/* grid-rows trick animates height without knowing it */}
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4 text-sm text-stone-700">{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
    </div>
  );
}