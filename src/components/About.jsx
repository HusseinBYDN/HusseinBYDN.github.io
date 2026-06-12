import { profile } from "../data/profile";

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Profile Overview</h2>
      </div>

      <div className="about-grid">
        <div className="glass-card about-card">
          <p>{profile.about}</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <strong>AI</strong>
            <span>Applied research and model evaluation</span>
          </div>

          <div className="stat-card">
            <strong>Web</strong>
            <span>Full-stack systems and secure workflows</span>
          </div>

          <div className="stat-card">
            <strong>Data</strong>
            <span>Signal processing, databases, and metrics</span>
          </div>

          <div className="stat-card">
            <strong>Systems</strong>
            <span>Low-level programming and Linux driver basics</span>
          </div>
        </div>
      </div>
    </section>
  );
}