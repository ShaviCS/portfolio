import { useState, useEffect } from 'react'

const links = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',     href: '#skills'     },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Education',  href: '#education'  },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section tracker
  useEffect(() => {
    const ids = [...links.map(l => l.href.slice(1)), 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#hero" className="nav__logo" onClick={close}>
          <span className="nav__logo-bracket">[</span>
          SC
          <span className="nav__logo-bracket">]</span>
        </a>

        <ul className={`nav__links${menuOpen ? ' open' : ''}`}>
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`nav__link${activeSection === href.slice(1) ? ' active' : ''}`}
                onClick={close}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`nav__cta${activeSection === 'contact' ? ' active' : ''}`} onClick={close}>
              Contact
            </a>
          </li>
        </ul>

        <button
          className={`nav__hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
