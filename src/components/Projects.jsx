const PROJECTS = [
  {
    icon: '🎵',
    title: 'Music Recommendation System Based on User Facial Expressions',
    description:
      'A web application that detects user emotions in real time and recommends personalized music playlists. Integrated a machine learning emotion-detection model with a Flask backend. Validated system accuracy, API responses, and frontend–backend integration through functional testing.',
    tags: ['Python', 'Flask', 'TensorFlow/Keras', 'JavaScript', 'HTML/CSS', 'Spotify API'],
  },
  {
    icon: '🛒',
    title: 'Application for Buying and Selling Digital Products (SaaS Platform)',
    description:
      'A SaaS-based platform enabling users to buy and sell digital products securely. Implemented backend–frontend integration to support seamless data flow. Conducted functional and integration testing to ensure system reliability and data consistency.',
    tags: ['PHP', 'MySQL'],
  },
  {
    icon: '📋',
    title: 'Student Attendance Management System',
    description:
      'A web-based attendance tracking system developed as a group project. Implemented role-based user access and CRUD functionalities. Performed manual testing to validate workflows, database operations, and UI behavior.',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
  },
  {
    icon: '⚖️',
    title: 'BMI Calculation Mobile Application',
    description:
      'A mobile application to calculate Body Mass Index (BMI) based on user input. Tested application logic, UI components, and input validations across multiple scenarios. Ensured accurate calculations and user-friendly interaction.',
    tags: ['Flutter', 'Dart'],
  },
  {
    icon: '📅',
    title: 'Timetable Management System',
    description:
      'A role-based timetable management system for schools, supporting Admins, Teachers, and Students. Implemented event management, course updates, and scheduling features. Conducted end-to-end testing to validate role permissions, data accuracy, and system usability.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
  },
]

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="reveal" style={{marginBottom: 52}}>
          <span className="section-eyebrow">What I've Built</span>
          <h2 className="section-title">Featured <em>Projects</em></h2>
          <div className="section-rule" style={{marginLeft:0}} />
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <div className={`project-card reveal rd${(i % 3) + 1}`} key={p.title}>
              <div className="project-card__top">
                <div className="project-card__icon">{p.icon}</div>
              </div>
              <div className="project-card__title">{p.title}</div>
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
