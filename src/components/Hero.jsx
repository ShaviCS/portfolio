import { useState, useEffect } from 'react'

const TITLES = [
  'QA Engineer',
  'Automation Tester',
  'Selenium Expert',
  'Bug Hunter',
]

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [deleting,   setDeleting]   = useState(false)

  useEffect(() => {
    const target = TITLES[titleIndex]
    let timeout
    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  return (
    <section className="hero" id="hero">
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />
      <div className="hero__grid-overlay" />

      <div className="container hero__layout">
        {/* LEFT: text */}
        <div className="hero__body">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Portfolio</span>
          </div>

          <h1 className="hero__name">Shavindya<br />Chamalka</h1>

          <div className="hero__title">
            <span className="hero__title-static">I&apos;m a&nbsp;</span>
            <span className="hero__title-dynamic">
              {displayed}
              <span className="hero__cursor">|</span>
            </span>
          </div>

          <p className="hero__desc">
            Software Engineering graduate with hands-on industry experience
            specializing in{' '}
            <strong style={{ color: 'var(--text-primary)' }}>
              manual and automated testing
            </strong>
            . Passionate about delivering reliable, high-quality software while
            continuously improving testing efficiency and standards.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact"  className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero__stats">
            {[
              { value: '1+', label: 'Years Experience' },
              { value: '8+', label: 'Projects Tested'  },
              { value: '6+', label: 'Certifications'   },
              { value: '3',  label: 'Languages Spoken' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div className="hero__stat-value">{value}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: photo */}
        <div className="hero__photo-wrap">
          <div className="hero__photo-ring" />
          <div className="hero__photo-dots" />
          <div className="hero__photo-corner hero__photo-corner--tl" />
          <div className="hero__photo-corner hero__photo-corner--br" />

          <div className="hero__badge-float hero__badge-float--top">
            <span className="hero__badge-dot" />
            Available for hire
          </div>
          <div className="hero__badge-float hero__badge-float--bottom">
            <span>🎓</span>
            BSc (Hons) in Software Engineering
          </div>

          <div className="hero__photo-frame">
            <img
              src={`${import.meta.env.BASE_URL}profile.jpg`}
              alt="Shavindya Chamalka"
              className="hero__photo-img"
            />
            <div className="hero__photo-overlay" />
          </div>
        </div>
      </div>
    </section>
  )
}
