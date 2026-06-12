import { skillGroups } from "../data/skills";

export default function Skills() {
  const sortedSkills = [...skillGroups].sort((a, b) => a.priority - b.priority);

  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="eyebrow">Technical Stack</p>
        <h2>Skills & Tools</h2>
      </div>

      <div className="skills-grid">
        {sortedSkills.map((group) => (
          <div key={group.id} className="glass-card skill-card">
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span key={`${group.id}-${skill}`}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}