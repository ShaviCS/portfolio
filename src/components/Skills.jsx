const CATEGORIES = [
  {
    icon: '🧪', color: 'green',
    name: 'Testing & QA',
    skills: ['Manual Testing', 'Test Case Writing', 'Regression Testing', 'Functional Testing', 'Performance Testing', 'Selenium', 'TestNG'],
  },
  {
    icon: '⚙️', color: 'sky',
    name: 'Automation & Tools',
    skills: ['Selenium WebDriver', 'JavaScript Automation', 'Postman', 'Jira', 'Android Studio'],
  },
  {
    icon: '💻', color: 'purple',
    name: 'Programming',
    skills: ['Java', 'Python', 'JavaScript', 'PHP', 'Dart'],
  },
  {
    icon: '🎨', color: 'sky',
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React'],
  },
  {
    icon: '🗄️', color: 'green',
    name: 'Database',
    skills: ['MySQL'],
  },
  {
    icon: '📱', color: 'purple',
    name: 'Mobile',
    skills: ['Flutter', 'Dart', 'Android Studio'],
  },
]

// Core skills with proficiency levels shown as a bar
const CORE_SKILLS = [
  { name: 'Manual Testing',       pct: 95 },
  { name: 'Selenium Automation',  pct: 85 },
  { name: 'Test Case Writing',    pct: 92 },
  { name: 'JavaScript',           pct: 78 },
  { name: 'Java',                 pct: 72 },
  { name: 'Postman / API Testing',pct: 80 },
]

export default function Skills() {
  return (
    <section className="section surface" id="skills">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-eyebrow">Technical Stack</span>
          <h2 className="section-title">Skills &amp; <em>Technologies</em></h2>
          <div className="section-rule" style={{ marginLeft: 0 }} />
        </div>

        {/* proficiency bars */}
        <div className="skills__bars-wrap reveal rd1">
          <div className="skills__bars-label">Core Proficiency</div>
          <div className="skills__bars">
            {CORE_SKILLS.map(({ name, pct }) => (
              <div className="skills__bar-row" key={name}>
                <div className="skills__bar-name">{name}</div>
                <div className="skills__bar-track">
                  <div className="skills__bar-fill" style={{ '--pct': `${pct}%` }} />
                </div>
                <div className="skills__bar-pct">{pct}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* category cards */}
        <div className="skills__grid" style={{ marginTop: 40 }}>
          {CATEGORIES.map((cat, i) => (
            <div className={`skills__cat skills__cat--${cat.color} reveal rd${(i % 4) + 1}`} key={cat.name}>
              <div className="skills__cat-head">
                <div className="skills__cat-icon">{cat.icon}</div>
                <div className="skills__cat-name">{cat.name}</div>
              </div>
              <div className="skills__badges">
                {cat.skills.map((s) => (
                  <span key={s} className="skills__badge">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
