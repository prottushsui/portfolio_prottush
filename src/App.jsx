import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    number: '01', title: 'ShasthoLink', eyebrow: 'Healthcare SaaS prototype',
    description: 'An investor-grade concept for a lifelong digital health record, built around a human-readable medical timeline and patient dashboard.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Recharts'], accent: 'crimson', status: 'Phase 1 MVP prototype', href: '#contact',
  },
  {
    number: '02', title: 'Study Material Library', eyebrow: 'Learning platform',
    description: 'A focused web experience for organizing study material into a searchable, readable library instead of a pile of disconnected files.',
    tags: ['Astro', 'JavaScript', 'Content UX'], accent: 'gold', status: 'Active build', href: '#contact',
  },
  {
    number: '03', title: 'Independent Legal Research', eyebrow: 'Bangladesh · Muslim personal law',
    description: 'Ongoing research into hiba, ariyat, inheritance, lifetime transfers, and the interaction between Muslim personal law and Bangladeshi statutes.',
    tags: ['Legal research', 'Comparative law', 'Policy'], accent: 'ink', status: 'Ongoing research', href: '#research',
  },
]

const principles = [
  ['Build first', 'Turn an idea into something people can actually see, use, and critique.'],
  ['Question assumptions', 'Test the premise before polishing the implementation.'],
  ['Make it human', 'Good interfaces should clarify complexity, not decorate it.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const glowRef = useRef(null)

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (!glowRef.current) return
      glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`
    }
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', handlePointerMove)
  }, [])

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')]
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActiveSection(visible.target.id)
    }, { rootMargin: '-35% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setMenuOpen(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio enquiry from ${formState.name}`)
    const body = encodeURIComponent(`${formState.message}\
\
Reply to: ${formState.email}`)
    window.location.href = `mailto:prottush2011@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="site-shell">
      <div ref={glowRef} className="cursor-glow" aria-hidden="true" />

      <header className="site-header">
        <button className="brand" onClick={() => scrollTo('home')} aria-label="Back to home">
          <span className="brand-mark">M</span><span>Mottakin</span>
        </button>

        <nav id="primary-navigation" className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
          {['home', 'work', 'research', 'about', 'contact'].map((id) => (
            <button key={id} className={activeSection === id ? 'active' : ''} onClick={() => scrollTo(id)}>{id}</button>
          ))}
        </nav>

        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          <span /><span />
        </button>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-kicker"><span /> Bangladesh · Builder · Researcher</div>
          <p className="hero-index">PORTFOLIO / 2026</p>
          <h1>I build things,<em> then ask why.</em></h1>
          <p className="hero-copy">I'm <strong>Md. Mottakin Bin Arif Prottush</strong> — a developer and independent researcher interested in the intersection of technology, people, and systems.</p>
          <div className="hero-actions">
            <button className="button button-dark" onClick={() => scrollTo('work')}>See the work <span>↘</span></button>
            <button className="text-button" onClick={() => scrollTo('about')}>A little more about me</button>
          </div>
          <div className="hero-note"><span>Currently exploring</span><strong>digital products · legal systems · research</strong></div>
        </section>

        <section id="work" className="section-wrap section">
          <div className="section-heading"><p className="eyebrow">Selected work</p><h2>Projects with a point of view.</h2></div>
          <div className="project-list">
            {projects.map((project) => (
              <article className={`project-card ${project.accent} reveal-on-scroll`} key={project.title}>
                <div className="project-visual"><span>{project.number}</span><div className="visual-lines" aria-hidden="true"><i /><i /><i /></div></div>
                <div className="project-content">
                  <p className="eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.description}</p>
                  <div className="project-meta"><div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="status">{project.status}</span></div>
                  <button className="project-link" onClick={() => scrollTo(project.href.slice(1))}>Explore <span>↗</span></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="research section-wrap section">
          <div><p className="eyebrow">Research desk</p><h2>I like problems that don't fit neatly into one box.</h2></div>
          <div className="research-body">
            <p>Alongside software work, I spend time on long-form questions: how institutions evolve, how law meets lived reality, and how historical evidence can change the way we understand a system.</p>
            <p>One current line of research examines Bangladesh's Muslim personal-law framework — particularly <strong>hiba, ariyat, inheritance, and lifetime property transfers</strong> — and where statutory reform belongs when personal law and general property law overlap.</p>
            <button className="text-button" onClick={() => scrollTo('contact')}>Talk research with me →</button>
          </div>
        </section>

        <section id="about" className="about section-wrap section">
          <div className="section-heading"><p className="eyebrow">How I work</p><h2>Curious enough to change direction. Stubborn enough to finish.</h2></div>
          <div className="principles">
            {principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="toolkit"><span>TOOLS & TERRITORIES</span><p>React · Next.js · TypeScript · Astro · Tailwind · JavaScript · UX · Product thinking · Legal research · Historical research</p></div>
        </section>

        <section id="contact" className="contact section-wrap section">
          <div className="contact-intro"><p className="eyebrow">Let's talk</p><h2>Have a difficult problem? Good.</h2><p>Whether it's a product, a research question, or an idea that needs to become something real, send it over.</p><a href="https://github.com/prottushsui" target="_blank" rel="noreferrer" className="github-link">GitHub ↗</a></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label><span>Your name</span><input name="name" value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })} required autoComplete="name" /></label>
            <label><span>Your email</span><input name="email" type="email" value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })} required autoComplete="email" /></label>
            <label><span>What are you thinking about?</span><textarea name="message" rows="5" value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })} required /></label>
            <button className="button button-dark" type="submit">Open email draft <span>↗</span></button>
            {submitted && <p className="form-note">Your email client should have opened a pre-filled draft.</p>}
          </form>
        </section>
      </main>

      <footer className="footer section-wrap"><span>© 2026 Mottakin Bin Arif Prottush</span><button onClick={() => scrollTo('home')}>Back to top ↑</button></footer>
    </div>
  )
}

export default App
