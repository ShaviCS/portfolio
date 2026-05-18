import { useState, useEffect } from 'react'

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
              <a href={href} className="nav__link" onClick={close}>{label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="nav__cta" onClick={close}>Contact</a>
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
