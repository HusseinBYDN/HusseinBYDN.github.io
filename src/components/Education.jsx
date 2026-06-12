import { education } from "../data/education";

export default function Education() {
  const sortedEducation = [...education].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <section id="education" className="section education-section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Academic Background</h2>
      </div>

      <div className="two-column-grid">
        {sortedEducation.map((item) => (
          <article key={item.id} className="glass-card education-card">
            <p className="timeline-date">{item.date}</p>
            <h3>{item.degree}</h3>
            <p className="timeline-place">
              {item.institution} · {item.location}
            </p>

            {item.expectedGraduation && (
              <p>Expected Graduation: {item.expectedGraduation}</p>
            )}

            {item.description && <p>{item.description}</p>}

            {item.keyCourses.length > 0 && (
              <div className="skill-list">
                {item.keyCourses.map((course) => (
                  <span key={`${item.id}-${course}`}>{course}</span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}