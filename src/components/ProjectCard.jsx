export default function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured-card" : ""}`}>
      <div className="project-topline">
        <span>{project.category}</span>
        <span>{project.status}</span>
      </div>

      <h3>{project.title}</h3>

      <p className="project-meta">
        {project.type} · {project.date}
      </p>

      <p className="project-description">{project.shortDescription}</p>

      {project.metrics.length > 0 && (
        <div className="metrics-grid">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={`${project.id}-${metric.label}`} className="metric-box">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="tech-list">
        {project.technologies.slice(0, 8).map((tech) => (
          <span key={`${project.id}-${tech}`}>{tech}</span>
        ))}
      </div>

      <ul className="project-highlights">
        {project.highlights.slice(0, 3).map((highlight) => (
          <li key={`${project.id}-${highlight}`}>{highlight}</li>
        ))}
      </ul>

      <div className="project-links">
        {project.links.github ? (
          <a href={project.links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        ) : (
          <span className="disabled-link">Repository available upon request</span>
        )}

        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        )}

        {project.links.report && (
          <a href={project.links.report} target="_blank" rel="noreferrer">
            Report
          </a>
        )}
      </div>
    </article>
  );
}