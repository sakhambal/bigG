// src/components/Projects.jsx
import { useState } from "react";
import { projects, projectCategories } from "./project";

function ProjectTile({ project }) {
  return (
    <article className="flex flex-col gap-6 rounded-2xl bg-stone-200 p-2 md:flex-row md:gap-10">
      {/* Image */}
      <div className="md:w-[45%] md:shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="h-64 w-full rounded-xl object-cover md:h-full md:min-h-80"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between gap-6 p-4 md:py-6 md:pr-8">
        <h3 className="text-5xl font-light uppercase leading-none text-stone-900 md:text-6xl font-fraunces tracking-tighter">
          {project.title}
        </h3>

        <div className="flex flex-col gap-3">
          <p className="max-w-md text-sm text-stone-800 font-inter">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-stone-300 bg-stone-100 px-2 py-0.5 text-[10px] text-stone-700"
              >
                {tag}
              </li>
            ))}
          </ul>

          {/* Swap <a> for <Link to={project.link}> if you use react-router-dom */}
          <a
            href={project.link}
            className="w-fit text-sm text-stone-900 underline underline-offset-2"
          >
            View Projects
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const [active, setActive] = useState(projectCategories[0].key);

  const visibleProjects = projects.filter((p) => p.category === active);

  return (
    <section className="bg-1 px-4 py-8 text-2 md:px-8">
      {/* Header */}
      <div className="flex items-end justify-between border-b border-stone-400/60 pb-2">
        <h2 className="text-3xl font-light">Projects</h2>
        <a href="/projects" className="text-sm underline underline-offset-2">
          View Projects ↗
        </a>
      </div>

      {/* Tabs */}
      <div className="mt-4 flex gap-2">
        {projectCategories.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setActive(key)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              active === key
                ? "bg-stone-200 text-stone-900"
                : "bg-transparent text-stone-300 hover:bg-stone-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Tiles */}
      <div className="mt-4 flex flex-col gap-4">
        {visibleProjects.length > 0 ? (
          visibleProjects.map((project) => (
            <ProjectTile key={project.id} project={project} />
          ))
        ) : (
          <p className="py-10 text-center text-stone-300">
            No projects in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}