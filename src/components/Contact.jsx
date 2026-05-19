import { useState } from 'react'

const CONTACT_ITEMS = [
  {
    icon: '✉️', label: 'Email',
    value: 'shavindyachamalka1999@gmail.com',
    href: 'mailto:shavindyachamalka1999@gmail.com',
  },
  {
    icon: '📱', label: 'Phone',
    value: '+94 71 411 9011',
    href: 'tel:+94714119011',
  },
  {
    icon: '💼', label: 'LinkedIn',
    value: 'linkedin.com/in/shavindyachamalka',
    href: 'https://linkedin.com/in/shavindyachamalka',
  },
  {
    icon: '📍', label: 'Location',
    value: 'Sri Lanka',
  },
]

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'ok' | 'err' | null

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // ⚠️  To enable the contact form, sign up at https://formspree.io,
  //     create a form, and replace YOUR_FORM_ID below.
  const FORMSPREE_ID = 'YOUR_FORM_ID'

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (FORMSPREE_ID === 'YOUR_FORM_ID') {
      setStatus('err_config')
      return
    }
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  return (
    <section className="section surface" id="contact">
      <div className="container">
        <div className="reveal" style={{marginBottom: 52, textAlign:'center'}}>
          <span className="section-eyebrow">Get In Touch</span>
          <h2 className="section-title">Contact <em>Me</em></h2>
          <div className="section-rule" />
        </div>

        <div className="contact__grid">
          {/* Left: info */}
          <div className="reveal">
            <div className="contact__intro">
              <p>
                I'm currently open to new opportunities. Whether you have a question,
                a project, or just want to say hi — my inbox is always open!
              </p>
            </div>
            <div className="contact__items">
              {CONTACT_ITEMS.map(({ icon, label, value, href }) => (
                <div key={label} className="contact__item">
                  <div className="contact__item-icon">{icon}</div>
                  <div>
                    <div className="contact__item-label">{label}</div>
                    <div className="contact__item-value">
                      {href
                        ? <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{value}</a>
                        : value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="reveal rd2">
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form__row">
                <div className="form__group">
                  <label className="form__label">Name</label>
                  <input
                    className="form__input" name="name" type="text"
                    placeholder="Your name" value={form.name}
                    onChange={handleChange} required
                  />
                </div>
                <div className="form__group">
                  <label className="form__label">Email</label>
                  <input
                    className="form__input" name="email" type="email"
                    placeholder="your@email.com" value={form.email}
                    onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="form__group">
                <label className="form__label">Subject</label>
                <input
                  className="form__input" name="subject" type="text"
                  placeholder="How can I help?" value={form.subject}
                  onChange={handleChange} required
                />
              </div>
              <div className="form__group">
                <label className="form__label">Message</label>
                <textarea
                  className="form__textarea" name="message"
                  placeholder="Your message..." value={form.message}
                  onChange={handleChange} required
                />
              </div>

              {status === 'ok' && (
                <div className="form__status form__status--ok">
                  ✓ Message sent! I'll get back to you soon.
                </div>
              )}
              {status === 'err' && (
                <div className="form__status form__status--err">
                  Something went wrong. Please try emailing me directly.
                </div>
              )}
              {status === 'err_config' && (
                <div className="form__status form__status--err">
                  Form not yet configured. Please email me directly at shavindyachamalka1999@gmail.com
                </div>
              )}

              <button type="submit" className="btn btn-primary form__submit">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
