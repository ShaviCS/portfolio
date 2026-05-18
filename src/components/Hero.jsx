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

      <div className="container hero__body">
        <div className="hero__eyebrow">
          <div className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Portfolio</span>
        </div>

        <h1 className="hero__name">Shavindya<br />Chamalka</h1>

        <div className="hero__title">
          <span className="hero__title-static">I'm a&nbsp;</span>
          <span className="hero__title-dynamic">
            {displayed}
            <span className="hero__cursor">|</span>
          </span>
        </div>

        <p className="hero__desc">
          Software Engineering graduate with hands-on industry experience
          specializing in <strong style={{color:'var(--text-primary)'}}>manual and automated testing</strong>.
          Passionate about delivering reliable, high-quality software while
          continuously improving testing efficiency and standards.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        <div className="hero__stats">
          <div>
            <div className="hero__stat-value">1+</div>
            <div className="hero__stat-label">Years Experience</div>
          </div>
          <div>
            <div className="hero__stat-value">8+</div>
            <div className="hero__stat-label">Projects Tested</div>
          </div>
          <div>
            <div className="hero__stat-value">6+</div>
            <div className="hero__stat-label">Certifications</div>
          </div>
          <div>
            <div className="hero__stat-value">3</div>
            <div className="hero__stat-label">Languages Spoken</div>
          </div>
        </div>
      </div>
    </section>
  )
}
