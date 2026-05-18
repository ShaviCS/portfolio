export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          © {year} <span>Shavindya Chamalka</span>. Built with React &amp; Vite.
        </p>
        <div className="footer__links">
          <a href="mailto:shavindyachamalka1999@gmail.com" className="footer__link">Email</a>
          <a href="https://linkedin.com/in/shavindyachamalka" target="_blank" rel="noopener noreferrer" className="footer__link">LinkedIn</a>
          <a href="#hero" className="footer__link">↑ Top</a>
        </div>
      </div>
    </footer>
  )
}
