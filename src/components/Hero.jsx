import { useState, useEffect, useRef } from 'react'

const TITLES = ['QA Engineer', 'Automation Tester', 'Selenium Expert', 'Bug Hunter']

function useCounter(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!started) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, started])
  return count
}

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [deleting,   setDeleting]   = useState(false)
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  // typing animation
  useEffect(() => {
    const target = TITLES[titleIndex]
    let timeout
    if (!deleting && displayed.length < target.length)
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80)
    else if (!deleting && displayed.length === target.length)
      timeout = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && displayed.length > 0)
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIndex((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, titleIndex])

  // trigger counters when stats come into view
  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsVisible(true) }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const c1 = useCounter(1,  1200, statsVisible)
  const c2 = useCounter(8,  1500, statsVisible)
  const c3 = useCounter(6,  1700, statsVisible)
  const c4 = useCounter(3,  1000, statsVisible)

  return (
    <section className="hero" id="hero">
      {/* background layers */}
      <div className="hero__grid-overlay" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      <div className="hero__glow hero__glow--3" />
      {/* floating orbs */}
      <div className="hero__orb hero__orb--a" />
      <div className="hero__orb hero__orb--b" />
      <div className="hero__orb hero__orb--c" />

      <div className="container hero__layout">
        {/* ── LEFT ── */}
        <div className="hero__body">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-line" />
            <span className="hero__eyebrow-text">Portfolio</span>
            <div className="hero__eyebrow-line" />
          </div>

          <h1 className="hero__name">
            <span className="hero__name-grad">Shavindya</span>
            <br />Chamalka
          </h1>

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
            <mark className="hero__highlight">manual and automated testing</mark>.
            Passionate about delivering reliable, high-quality software while
            continuously improving testing efficiency.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#contact" className="btn btn-outline">Get In Touch</a>
          </div>

          <div className="hero__stats" ref={statsRef}>
            {[
              { value: c1, suffix: '+', label: 'Years Experience' },
              { value: c2, suffix: '+', label: 'Projects Tested'  },
              { value: c3, suffix: '+', label: 'Certifications'   },
              { value: c4, suffix: '',  label: 'Languages Spoken' },
            ].map(({ value, suffix, label }) => (
              <div className="hero__stat" key={label}>
                <div className="hero__stat-value">{value}{suffix}</div>
                <div className="hero__stat-label">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
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
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Shavindya Chamalka"
              className="hero__photo-img"
            />
            <div className="hero__photo-overlay" />
          </div>
        </div>
      </div>

      {/* scroll hint */}
      <div className="hero__scroll-hint">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}
