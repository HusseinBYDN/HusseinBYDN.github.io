import { certifications } from "../data/certifications";

export default function Certifications() {
  const sortedCertifications = [...certifications].sort(
    (a, b) => a.priority - b.priority
  );

  return (
    <section id="certifications" className="section certifications-section">
      <div className="section-heading">
        <p className="eyebrow">Development</p>
        <h2>Workshops & Certifications</h2>
      </div>

      <div className="two-column-grid">
        {sortedCertifications.map((item) => (
          <article key={item.id} className="glass-card certification-card">
            <p className="timeline-date">{item.date}</p>
            <h3>{item.title}</h3>
            <p className="timeline-place">{item.provider}</p>
            <p>{item.description}</p>

            <div className="skill-list">
              {item.skills.map((skill) => (
                <span key={`${item.id}-${skill}`}>{skill}</span>
              ))}
            </div>

            {item.certificateUrl && (
              <a
                href={item.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-link"
              >
                View Certificate
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}