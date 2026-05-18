const CATEGORIES = [
  {
    icon: '🧪',
    name: 'Testing & QA',
    skills: ['Manual Testing', 'Test Case Writing', 'Regression Testing', 'Functional Testing', 'Performance Testing', 'Selenium', 'TestNG'],
  },
  {
    icon: '⚙️',
    name: 'Automation & Tools',
    skills: ['Selenium WebDriver', 'JavaScript (Automation)', 'Postman', 'Jira', 'Android Studio'],
  },
  {
    icon: '💻',
    name: 'Programming',
    skills: ['Java', 'Python', 'JavaScript', 'PHP', 'Dart'],
  },
  {
    icon: '🎨',
    name: 'Frontend',
    skills: ['HTML5', 'CSS3', 'Bootstrap', 'React (basics)'],
  },
  {
    icon: '🗄️',
    name: 'Database',
    skills: ['MySQL'],
  },
  {
    icon: '📱',
    name: 'Mobile',
    skills: ['Flutter', 'Dart', 'Android Studio'],
  },
]

export default function Skills() {
  return (
    <section className="section surface" id="skills">
      <div className="container">
        <div className="reveal" style={{marginBottom: 52}}>
          <span className="section-eyebrow">Technical Stack</span>
          <h2 className="section-title">Skills &amp; <em>Technologies</em></h2>
          <div className="section-rule" style={{marginLeft:0}} />
        </div>

        <div className="skills__grid">
          {CATEGORIES.map((cat, i) => (
            <div className={`skills__cat reveal rd${(i % 4) + 1}`} key={cat.name}>
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
