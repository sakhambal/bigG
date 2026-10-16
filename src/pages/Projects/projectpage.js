// src/data/projects.js
// Add new projects here. Category buttons, project buttons and routes update
// automatically. `category` must match a key in projectCategories.
//
// Each project:
//   image    -> cover image (used by the home-page tile)
//   gallery  -> the images shown on the project page, in order.
//               Each entry: { label, src, description }
//               Add as many as you like (plan, moodboard, 3D render, final photos...)

export const projectCategories = [
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
];

export const projects = [
  {
    id: "2bhk-worli",
    category: "residential",
    title: "2BHK Space in Worli",
    description:
      "The space follows a contemporary style, blending marble, fluted glass and wood to create warm yet sophisticated look. The black metal accents add elegance, texture and a welcoming contemporary look",
    tags: ["1,200 sq. ft.", "Contemporary", "Warm & Serene", "2026"],
    image: "/images/projects/worli.jpg",
    gallery: [
      {
        label: "The Plan",
        src: "/images/projects/residential/img4.png",
        description:
          "A short note about the layout, flow of the space and how the zones are divided.",
      },
      {
        label: "The Moodboard",
        src: "/images/projects/residential/img8.png",
        description:
          "A short note about the materials, colours and textures chosen for the space.",
      },
    ],
  },
  {
    id: "salon-bandra",
    category: "commercial",
    title: "Salon in Bandra",
    description: "Placeholder description for a second commercial project.",
    tags: ["900 sq. ft.", "Modern", "2025"],
    image: "/images/projects/salon.jpg",
    gallery: [
      { label: "The Plan", src: "/images/projects/salon-plan.jpg", description: "Placeholder plan note." },
      { label: "The Moodboard", src: "/images/projects/salon-moodboard.jpg", description: "Placeholder moodboard note." },
    ],
  },
  {
    id: "juhu-apartment",
    category: "residential",
    title: "Apartment in Juhu",
    description: "Placeholder description for a residential project.",
    tags: ["1,500 sq. ft.", "Minimal", "2026"],
    image: "/images/projects/juhu.jpg",
    gallery: [
      { label: "The Plan", src: "/images/projects/juhu-plan.jpg", description: "Placeholder plan note." },
      { label: "The Moodboard", src: "/images/projects/juhu-moodboard.jpg", description: "Placeholder moodboard note." },
    ],
  },
  {
    id: "powai-villa",
    category: "residential",
    title: "Villa in Powai",
    description: "Placeholder description for a second residential project.",
    tags: ["2,800 sq. ft.", "Classic", "2024"],
    image: "/images/projects/powai.jpg",
    gallery: [
      { label: "The Plan", src: "/images/projects/powai-plan.jpg", description: "Placeholder plan note." },
      { label: "The Moodboard", src: "/images/projects/powai-moodboard.jpg", description: "Placeholder moodboard note." },
    ],
  },
];

// Helpers
export const getProjectsByCategory = (category) =>
  projects.filter((p) => p.category === category);

export const isValidCategory = (category) =>
  projectCategories.some((c) => c.key === category);