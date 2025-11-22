import { Link } from 'react-router-dom'
import './Page.css'

const Home = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Welcome to React Router App</h1>
        <p className="page-description">
          This is a demonstration of React Router DOM in a Vite project.
          Navigate through different pages using the navigation menu above.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h2>Routing</h2>
            <p>Multiple routes configured with React Router</p>
          </div>
          <div className="feature-card">
            <h2>Dynamic Routes</h2>
            <p>Support for URL parameters and nested routes</p>
          </div>
          <div className="feature-card">
            <h2>Navigation</h2>
            <p>Seamless navigation between pages</p>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/products" className="cta-button">
            View Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home

