import { useMemo, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => a.priority - b.priority);
  }, []);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(sortedProjects.map((project) => project.category)),
    ];

    return ["Featured", "All", ...uniqueCategories];
  }, [sortedProjects]);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") {
      return sortedProjects;
    }

    if (activeCategory === "Featured") {
      return sortedProjects.filter((project) => project.featured);
    }

    return sortedProjects.filter(
      (project) => project.category === activeCategory
    );
  }, [activeCategory, sortedProjects]);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects</h2>
        <p>
          Selected academic, research, and software engineering work. The
          projects combine applied AI, medical signal modeling, full-stack
          systems, database design, and low-level programming.
        </p>
      </div>

      <div className="project-filter-bar" aria-label="Project filters">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-btn ${
              activeCategory === category ? "active-filter" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-count">
        Showing <strong>{visibleProjects.length}</strong> project
        {visibleProjects.length === 1 ? "" : "s"}
      </div>

      <div className="projects-grid featured-projects">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}