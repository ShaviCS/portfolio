const PROJECTS = [
  {
    icon: '🎵', num: '01',
    title: 'Music Recommendation System',
    subtitle: 'Based on User Facial Expressions',
    description: 'A web application that detects user emotions in real time and recommends personalized music playlists. Integrated a ML emotion-detection model with Flask. Validated system accuracy, API responses, and frontend–backend integration.',
    tags: ['Python', 'Flask', 'TensorFlow', 'JavaScript', 'Spotify API'],
    highlight: true,
  },
  {
    icon: '🛒', num: '02',
    title: 'Digital Products SaaS Platform',
    subtitle: 'Buy & Sell Digital Products',
    description: 'A SaaS-based platform enabling users to buy and sell digital products securely. Conducted functional and integration testing to ensure system reliability and data consistency.',
    tags: ['PHP', 'MySQL'],
  },
  {
    icon: '📋', num: '03',
    title: 'Student Attendance System',
    subtitle: 'Web-Based Management',
    description: 'A web-based attendance tracking system with role-based access and CRUD functionalities. Performed manual testing to validate workflows, database operations, and UI behavior.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    icon: '⚖️', num: '04',
    title: 'BMI Calculator App',
    subtitle: 'Mobile Application',
    description: 'A mobile application to calculate BMI based on user input. Tested application logic, UI components, and input validations across multiple scenarios.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '📅', num: '05',
    title: 'Timetable Management System',
    subtitle: 'Scheduling for Students & Faculty',
    description: 'A role-based timetable system for schools supporting Admins, Teachers, and Students. End-to-end testing to validate role permissions, data accuracy, and usability.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal" style={{ marginBottom: 56 }}>
          <span className="section-eyebrow">What I&apos;ve Built</span>
          <h2 className="section-title">Featured <em>Projects</em></h2>
          <div className="section-rule" style={{ marginLeft: 0 }} />
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div
              className={`project-card reveal rd${(i % 3) + 1}${p.highlight ? ' project-card--highlight' : ''}`}
              key={p.title}
            >
              <div className="project-card__num">{p.num}</div>
              <div className="project-card__top">
                <div className="project-card__icon">{p.icon}</div>
              </div>
              <div className="project-card__title">{p.title}</div>
              <div className="project-card__subtitle">{p.subtitle}</div>
              <div className="project-card__desc">{p.description}</div>
              <div className="project-card__tags">
                {p.tags.map((t) => (
                  <span key={t} className="project-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
