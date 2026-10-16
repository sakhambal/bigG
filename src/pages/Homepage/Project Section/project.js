// src/data/projects.js
// Add new projects here — the Projects component picks them up automatically.
// category must be either "commercial" or "residential".

export const projects = [
  {
    id: "residential-sample",
    category: "residential",
    title: "2BHK Space in Worli",
    description:
      "The space follows a contemporary style, blending marble, fluted glass and wood to create warm yet sophisticated look. The black metal accents add elegance, texture and a welcoming contemporary look",
    image: "/images/projects/residential/img1.png",
    tags: ["1,200 sq. ft.", "Contemporary", "Warm & Serene", "2026"],
    link: "/projects/2bhk-worli",
  },
  {
    id: "commercial-sample",
    category: "commercial",
    title: "Residential Project",
    description:
      "Replace this with your residential project description. It shows up when the Residential tab is selected.",
    image: "/images/projects/residential.jpg",
    tags: ["1,500 sq. ft.", "Modern", "2026"],
    link: "/projects/residential-sample",
  },
];

export const projectCategories = [
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
];
