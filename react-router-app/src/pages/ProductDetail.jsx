import { useParams, Link, useNavigate } from 'react-router-dom'
import './Page.css'

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const products = {
    1: {
      id: 1,
      name: 'Laptop',
      price: 999,
      description: 'High-performance laptop with latest processor',
      details:
        'This laptop features a powerful processor, ample storage, and a high-resolution display. Perfect for work, gaming, and creative tasks.',
    },
    2: {
      id: 2,
      name: 'Smartphone',
      price: 699,
      description: 'Latest smartphone model',
      details:
        'A feature-packed smartphone with an advanced camera system, fast charging, and all-day battery life.',
    },
    3: {
      id: 3,
      name: 'Headphones',
      price: 199,
      description: 'Wireless noise-canceling headphones',
      details:
        'Premium wireless headphones with active noise cancellation and exceptional sound quality for music lovers.',
    },
    4: {
      id: 4,
      name: 'Tablet',
      price: 499,
      description: 'Portable tablet device',
      details:
        'A versatile tablet perfect for reading, drawing, and entertainment on the go.',
    },
    5: {
      id: 5,
      name: 'Smartwatch',
      price: 299,
      description: 'Feature-rich smartwatch',
      details:
        'Track your fitness, receive notifications, and stay connected with this feature-rich smartwatch.',
    },
    6: {
      id: 6,
      name: 'Camera',
      price: 1299,
      description: 'Professional DSLR camera',
      details:
        'Capture stunning photos and videos with this professional-grade DSLR camera.',
    },
  }

  const product = products[id]

  if (!product) {
    return (
      <div className="page-container">
        <div className="page-content">
          <h1 className="page-title">Product Not Found</h1>
          <p className="page-description">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/products" className="cta-button">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="page-container">
      <div className="page-content">
        <button
          onClick={() => navigate(-1)}
          className="back-button"
          aria-label="Go back"
        >
          ← Back
        </button>

        <div className="product-detail">
          <div className="product-detail-image">
            <span className="product-icon-large">📦</span>
          </div>
          <div className="product-detail-info">
            <h1 className="page-title">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-section">
              <h2>Details</h2>
              <p>{product.details}</p>
            </div>
            <div className="product-detail-actions">
              <button className="buy-button">Add to Cart</button>
              <Link to="/products" className="link-button">
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail

