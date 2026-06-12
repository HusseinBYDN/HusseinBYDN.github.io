import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>
        <h2>Let’s Connect</h2>
        <p>
          Open to academic, professional, software engineering, full-stack
          development, and applied AI opportunities.
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>Email</a>

          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>

          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          )}

          {profile.cvUrl && (
            <a href={profile.cvUrl} target="_blank" rel="noreferrer">
              Download CV
            </a>
          )}

          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}