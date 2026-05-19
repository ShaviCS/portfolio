const STRENGTHS = [
  'Problem Solving', 'Analytical Thinking', 'Teamwork',
  'Time Management', 'Self-Motivation', 'Attention to Detail',
  'Good Communication', 'Multitasking', 'Innovative Mindset',
]

const INFO = [
  { label: 'Email',    value: 'shavindyachamalka1999@gmail.com',  href: 'mailto:shavindyachamalka1999@gmail.com' },
  { label: 'Phone',    value: '+94 71 411 9011', href: 'tel:+94714119011' },
  { label: 'LinkedIn', value: 'linkedin.com/in/shavindyachamalka',  href: 'https://linkedin.com/in/shavindyachamalka' },
  { label: 'Location', value: 'Sri Lanka' },
  { label: 'Languages', value: 'English · Sinhala · Tamil' },
]

export default function About() {
  return (
    <section className="about section surface" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Text */}
          <div className="reveal">
            <span className="section-eyebrow">Who I Am</span>
            <h2 className="section-title" style={{marginBottom:24}}>
              About <em>Me</em>
            </h2>
            <div className="section-rule" style={{marginLeft:0, marginBottom:32}} />

            <div className="about__text">
              <p>
                I'm a Software Engineering graduate with hands-on industry experience as a
                <em> Software Quality Assurance Engineer</em>, specializing in both manual and
                automated testing. I design test cases, execute regression and functional testing,
                and develop automation scripts using <em>Selenium and JavaScript</em>.
              </p>
              <p>
                My strong software development foundation — spanning backend and frontend
                technologies — enables me to collaborate effectively with development teams and
                identify defects early in the cycle.
              </p>
              <p>
                I'm passionate about delivering reliable, high-quality software and continuously
                pushing testing efficiency and standards forward.
              </p>
            </div>

            <div className="about__strengths">
              <div className="about__strengths-label">Core Strengths</div>
              <div className="about__tags">
                {STRENGTHS.map((s) => (
                  <span key={s} className="about__tag">{s}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="about__sidebar reveal rd2">
            {INFO.map(({ label, value, href }) => (
              <div key={label} className="about__info-card">
                <div className="about__info-label">{label}</div>
                <div className="about__info-value">
                  {href ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a> : value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
