const CERTS = [
  { icon: '🌐', name: 'Software Architecture for the IoT', issuer: 'Coursera' },
  { icon: '🔧', name: 'Architecting Smart IoT Devices',    issuer: 'Coursera' },
  { icon: '✅', name: 'Fundamentals of Quality Assurance',  issuer: 'Alison' },
  { icon: '🤖', name: 'Selenium Basic',                     issuer: 'Great Learning' },
  { icon: '🚀', name: 'Selenium WebDriver Automation Testing — Real-Time Live Projects, Advanced Framework', issuer: 'Udemy', status: 'In Progress' },
  { icon: '🎨', name: 'Master Figma UI/UX Prototyping: Basic to Advanced Level', issuer: 'Udemy' },
]

export default function Certifications() {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <div className="reveal" style={{marginBottom: 52, textAlign:'center'}}>
          <span className="section-eyebrow">Continuous Learning</span>
          <h2 className="section-title"><em>Certifications</em></h2>
          <div className="section-rule" />
        </div>

        <div className="certs__grid">
          {CERTS.map((c, i) => (
            <div className={`cert-card reveal rd${(i % 3) + 1}`} key={c.name}>
              <div className="cert-card__icon">{c.icon}</div>
              <div>
                <div className="cert-card__name">{c.name}</div>
                <span className="cert-card__issuer">{c.issuer}</span>
                {c.status && <span className="cert-card__status">{c.status}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
