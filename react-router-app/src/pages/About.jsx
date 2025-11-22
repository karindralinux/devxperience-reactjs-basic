import './Page.css'

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">About Us</h1>
        <div className="about-content">
          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to building modern web applications using React
              and React Router for seamless navigation and user experience.
            </p>
          </section>

          <section className="about-section">
            <h2>Technologies</h2>
            <ul className="tech-list">
              <li>React 19</li>
              <li>React Router DOM</li>
              <li>Vite</li>
              <li>JavaScript (ES6+)</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>Features</h2>
            <ul className="tech-list">
              <li>Client-side routing</li>
              <li>Dynamic route parameters</li>
              <li>Active link highlighting</li>
              <li>404 Not Found page</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About

