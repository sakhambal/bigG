// src/pages/ProjectsPage.jsx
import { Navigate, NavLink, useParams } from "react-router-dom";
import {
  projectCategories,
  getProjectsByCategory,
  isValidCategory,
} from "./projectpage.js";

const pill = (isActive) =>
  `rounded-full px-4 py-2 text-sm transition-colors ${
    isActive
      ? "bg-stone-200 text-stone-900"
      : "text-stone-300 hover:bg-stone-700"
  }`;

// Gallery-style project page: name -> description -> tags -> images with notes
function ProjectDetail({ project }) {
  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-10 py-6">
      {/* Intro */}
      <header className="flex flex-col gap-5">
        <h2 className="text-4xl font-light uppercase leading-none md:text-7xl">
          {project.title}
        </h2>

        <p className="max-w-2xl text-sm text-stone-300 md:text-base">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-stone-500 px-3 py-1 text-xs text-stone-200"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      {/* Gallery: each image followed by its short description */}
      {project.gallery.map((item) => (
        <figure key={item.src} className="flex flex-col gap-3">
          <figcaption className="text-xs uppercase tracking-widest text-stone-400">
            {item.label}
          </figcaption>
          <img
            src={item.src}
            alt={`${project.title} - ${item.label}`}
            className="w-full rounded-2xl object-cover"
          />
          <p className="max-w-2xl text-sm text-stone-300">{item.description}</p>
        </figure>
      ))}
    </article>
  );
}

export default function ProjectsPage() {
  const { category, projectId } = useParams();

  // Unknown category -> fall back to the first one
  if (!isValidCategory(category)) {
    return <Navigate to={`/projects/${projectCategories[0].key}`} replace />;
  }

  const categoryProjects = getProjectsByCategory(category);
  const activeProject = categoryProjects.find((p) => p.id === projectId);

  // No project in the URL (or a wrong one) -> go to the first project
  if (!activeProject && categoryProjects.length > 0) {
    return (
      <Navigate to={`/projects/${category}/${categoryProjects[0].id}`} replace />
    );
  }

  return (
    <section className="min-h-screen py-24 bg-2 px-4 text-1 md:px-8">
      <h1 className="border-b border-stone-400/60 pb-2 text-3xl font-light">
        Projects
      </h1>

      {/* Category routes */}
      <nav className="mt-4 flex gap-2" aria-label="Project categories">
        {projectCategories.map(({ key, label }) => (
          <NavLink
            key={key}
            to={`/projects/${key}`}
            className={({ isActive }) => pill(isActive)}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Project switcher for the current category */}
      {categoryProjects.length > 0 && (
        <nav
          className="mt-3 flex gap-2 overflow-x-auto pb-1"
          aria-label="Projects"
        >
          {categoryProjects.map((p) => (
            <NavLink
              key={p.id}
              to={`/projects/${category}/${p.id}`}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  isActive
                    ? "border-stone-200 bg-stone-200 text-stone-900"
                    : "border-stone-500 text-stone-300 hover:border-stone-300"
                }`
              }
            >
              {p.title}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Selected project */}
      <div className="mt-6">
        {activeProject ? (
          <ProjectDetail project={activeProject} />
        ) : (
          <p className="py-10 text-center text-stone-300">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}