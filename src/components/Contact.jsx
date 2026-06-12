import { profile } from "../data/profile";

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="contact-card">
        <p className="eyebrow">Contact</p>

        <h2>Let’s connect.</h2>

        <p>
          I am open to software development, applied AI, research, internship,
          and collaboration opportunities.
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>Email</a>

          {profile.github && (
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}

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