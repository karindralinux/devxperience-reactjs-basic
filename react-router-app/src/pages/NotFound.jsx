import { Link } from 'react-router-dom'
import './Page.css'

const NotFound = () => {
  return (
    <div className="page-container">
      <div className="page-content not-found-content">
        <h1 className="page-title">404</h1>
        <h2 className="not-found-title">Page Not Found</h2>
        <p className="page-description">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="cta-button">
          Go to Homepage
        </Link>
      </div>
    </div>
  )
}

export default NotFound

