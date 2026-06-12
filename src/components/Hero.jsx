import { profile } from "../data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="hero-main">
        <div className="hero-content">
          <p className="eyebrow">Digital Portfolio</p>

          <h1>
            {profile.fullName}
            <span>{profile.title}</span>
          </h1>

          <p className="hero-headline">{profile.headline}</p>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-tags">
            {profile.heroTags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn primary-btn">
              View Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>

            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                className="btn ghost-btn"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="hero-visuals">
          <div className="profile-photo-card">
            <img
              src={profile.image}
              alt={`${profile.fullName} profile`}
              className="profile-photo"
            />
          </div>

          <div className="hero-card">
            <div className="terminal-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="terminal-content">
              <p>
                <span className="code-keyword">const</span> focus =
                <span className="code-string"> "Applied AI + Software"</span>;
              </p>
              <p>
                <span className="code-keyword">build</span>
                {"({ research, systems, products });"}
              </p>
              <p className="terminal-muted">
                status: portfolio ready for continuous growth
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-spotlight-grid">
        {profile.heroCards.map((card) => (
          <article
            key={card.id}
            className={`spotlight-card spotlight-${card.accent}`}
          >
            <p className="spotlight-label">{card.label}</p>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}