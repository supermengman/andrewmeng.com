import './App.css'

const links = [
  { label: 'Email', href: 'mailto:andrewm17us@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrew-meng-cs' },
  { label: 'GitHub', href: 'https://github.com/supermengman' },
  { label: 'Resume', href: '/Andrew_Meng_resume.pdf' },
]

function App() {
  return (
    <main className="portfolio">
      <header className="intro">
        <h1>Andrew Meng</h1>
        <p>Computer Science at UCLA</p>
        <nav aria-label="Links">
          {links.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading">Experience</h2>
        <ul className="items">
          <li>
            <div>
              <strong>Art of Problem Solving</strong>
              <span>Software Engineer Intern</span>
            </div>
            <time>2026</time>
          </li>
          <li>
            <div>
              <strong>LA Hacks</strong>
              <span>Tech Coordinator / Finance Director</span>
            </div>
            <time>2024–Present</time>
          </li>
          <li>
            <div>
              <strong>UCSD San Diego Supercomputer Center</strong>
              <span>Research Intern</span>
            </div>
            <time>2023</time>
          </li>
        </ul>
      </section>

      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading">Projects</h2>
        <ul className="items">
          <li>
            <div>
              <strong>BruinBite</strong>
              <span>Go, Next.js, PostgreSQL</span>
            </div>
            <time>2025</time>
          </li>
          <li>
            <div>
              <strong>Trello–Notion Sync</strong>
              <span>JavaScript, webhooks</span>
            </div>
            <time>2024</time>
          </li>
        </ul>
      </section>

      <section className="skills" aria-labelledby="skills-heading">
        <h2 id="skills-heading">Tools I use</h2>
        <p>
          TypeScript, JavaScript, Python, Go, React, Next.js, Fastify,
          PostgreSQL, Docker, and AWS.
        </p>
      </section>
    </main>
  )
}

export default App
