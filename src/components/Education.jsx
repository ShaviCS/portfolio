const EDU = [
  {
    icon: '🎓',
    degree: 'BSc (Hons) in Software Engineering',
    institution: 'Sri Lanka Technology Campus',
    period: '2021 – 2025',
  },
  {
    icon: '🖥️',
    degree: 'NVQ Level 4 — Computer Application Assistant',
    institution: 'National Youth Service Council',
    period: '2019',
  },
  {
    icon: '📚',
    degree: 'Advanced Level — Physical Science Stream',
    institution: 'Badulla Central College',
    period: '2010 – 2018',
  },
]

export default function Education() {
  return (
    <section className="section surface" id="education">
      <div className="container">
        <div className="reveal" style={{marginBottom: 52, textAlign:'center'}}>
          <span className="section-eyebrow">Academic Background</span>
          <h2 className="section-title">Education</h2>
          <div className="section-rule" />
        </div>

        <div className="education__grid">
          {EDU.map((e, i) => (
            <div className={`edu-card reveal rd${i + 1}`} key={e.degree}>
              <div className="edu-card__icon">{e.icon}</div>
              <div>
                <div className="edu-card__degree">{e.degree}</div>
                <div className="edu-card__institution">{e.institution}</div>
                <span className="edu-card__period">{e.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
