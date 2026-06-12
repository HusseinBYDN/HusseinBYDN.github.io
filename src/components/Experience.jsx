import { experience } from "../data/experience";

export default function Experience() {
  const sortedExperience = [...experience].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <section id="experience" className="section experience-section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Professional Experience</h2>
      </div>

      <div className="timeline">
        {sortedExperience.map((item) => (
          <article key={item.id} className="glass-card timeline-card">
            <div>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.role}</h3>
              <p className="timeline-place">
                {item.organization} · {item.location}
              </p>
              <p>{item.description}</p>

              <ul>
                {item.bullets.slice(0, 5).map((bullet) => (
                  <li key={`${item.id}-${bullet}`}>{bullet}</li>
                ))}
              </ul>

              <div className="tech-list">
                {item.technologies.slice(0, 8).map((tech) => (
                  <span key={`${item.id}-${tech}`}>{tech}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}