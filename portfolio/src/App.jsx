import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState('hero')
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = [heroRef, aboutRef, projectsRef, contactRef].map(ref => ref.current)
    sections.forEach(section => section && observer.observe(section))

    return () => sections.forEach(section => section && observer.unobserve(section))
  }, [])

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const projects = [
    {
      title: 'Neural Art Generator',
      description: 'AI-powered artwork creation using deep learning models',
      tags: ['React', 'TensorFlow', 'Node.js'],
      color: '#ff6b6b'
    },
    {
      title: 'Quantum Dashboard',
      description: 'Real-time analytics platform with stunning visualizations',
      tags: ['Vue', 'D3.js', 'Python'],
      color: '#4ecdc4'
    },
    {
      title: 'Echo Chat',
      description: 'End-to-end encrypted messaging with beautiful UI',
      tags: ['React Native', 'Firebase', 'WebSocket'],
      color: '#a55eea'
    }
  ]

  const skills = [
    'JavaScript/TypeScript', 'React/Vue/Angular', 'Node.js/Python',
    'GraphQL/REST', 'AWS/GCP', 'Docker/Kubernetes',
    'PostgreSQL/MongoDB', 'Figma/Adobe XD', 'Three.js/WebGL'
  ]

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background-gradient">
        <div 
          className="cursor-glow" 
          style={{ 
            left: mousePosition.x - 300, 
            top: mousePosition.y - 300 
          }} 
        />
      </div>

      {/* Navigation */}
      <nav className="navigation">
        <div className="logo">JD</div>
        <div className="nav-links">
          <button onClick={() => scrollToSection(heroRef)}>Home</button>
          <button onClick={() => scrollToSection(aboutRef)}>About</button>
          <button onClick={() => scrollToSection(projectsRef)}>Work</button>
          <button onClick={() => scrollToSection(contactRef)}>Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="hero" className="section hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="gradient-text">Hello, I'm John Doe</span>
          </h1>
          <p className="hero-subtitle">
            Creative Developer & Digital Artist
          </p>
          <p className="hero-description">
            I craft memorable digital experiences that blend art, technology, and innovation.
            Let's build something extraordinary together.
          </p>
          <div className="hero-buttons">
            <button className="btn primary" onClick={() => scrollToSection(projectsRef)}>
              View My Work
            </button>
            <button className="btn secondary" onClick={() => scrollToSection(contactRef)}>
              Get In Touch
            </button>
          </div>
        </div>
        <div className="floating-shapes">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i} 
              className={`shape shape-${i + 1}`}
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="section about-section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              With over 8 years of experience in creative development, I specialize in 
              building immersive web experiences that captivate and engage users.
            </p>
            <p>
              My approach combines technical excellence with artistic vision, creating 
              digital products that are not only functional but also emotionally resonant.
            </p>
            <div className="skills-container">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">30+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="section projects-section">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ '--accent-color': project.color }}
            >
              <div className="project-image">
                <div className="project-placeholder" />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <button className="btn-project">View Project →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="section contact-section">
        <h2 className="section-title">Let's Create Together</h2>
        <div className="contact-content">
          <p className="contact-description">
            Have a project in mind? I'd love to hear about it. 
            Let's discuss how we can bring your vision to life.
          </p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit" className="btn primary">Send Message</button>
          </form>
          <div className="social-links">
            <a href="#" className="social-link">GitHub</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">Dribbble</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 John Doe. Crafted with ❤️ and creativity.</p>
      </footer>
    </div>
  )
}

export default App
