const JOBS = [
  {
    role: 'Software Quality Assurance Engineer',
    company: 'Wemixt',
    period: 'Feb 2026 – Present',
    current: true,
    bullets: [
      'Automated testing for GSA & GSA Admin Project using Selenium and JavaScript, improving test accuracy and reducing manual effort.',
      'Participated in regression and functional testing to ensure system reliability and compliance with requirements.',
      'Automated critical functionalities for Q Bank Project using Selenium and JavaScript, increasing test coverage and efficiency.',
      'Worked with Bootstrap-based UI components to validate responsiveness and functionality across modules.',
      'Conducted thorough manual testing for Aero Docs System, GovTra System, Concierge System, Charika Plus System, Sathkara System, and MOR System.',
      'Designed and documented detailed test cases and prepared user manuals for end-users.',
    ],
  },
  {
    role: 'Software Quality Assurance Engineer (Intern)',
    company: 'Sri Lankan Airlines',
    period: 'Feb 2025 – Aug 2025',
    current: false,
    bullets: [
      'Identified and documented bugs, validated functionality, and ensured quality assurance across multiple projects.',
      'Collaborated with the IT Projects & Systems Integration team on airline management systems.',
      'Gained practical experience in enterprise-level QA processes and standards.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="experience__header reveal">
          <span className="section-eyebrow">Work History</span>
          <h2 className="section-title">Work <em>Experience</em></h2>
          <div className="section-rule" style={{marginLeft:0}} />
        </div>

        <div className="experience__timeline">
          {JOBS.map((job, i) => (
            <div className={`experience__item reveal rd${i + 1}`} key={job.company}>
              <div className={`experience__dot${job.current ? ' experience__dot--current' : ''}`} />
              <div className="experience__card">
                <div className="experience__top">
                  <div className="experience__role">{job.role}</div>
                  <span className="experience__badge">{job.period}</span>
                </div>
                <div className="experience__company">{job.company}</div>
                <ul className="experience__list">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
