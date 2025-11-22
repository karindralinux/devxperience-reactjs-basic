import { Link } from 'react-router-dom'
import './Page.css'

const Products = () => {
  const products = [
    { id: 1, name: 'Laptop', price: 999, description: 'High-performance laptop' },
    { id: 2, name: 'Smartphone', price: 699, description: 'Latest smartphone model' },
    { id: 3, name: 'Headphones', price: 199, description: 'Wireless noise-canceling headphones' },
    { id: 4, name: 'Tablet', price: 499, description: 'Portable tablet device' },
    { id: 5, name: 'Smartwatch', price: 299, description: 'Feature-rich smartwatch' },
    { id: 6, name: 'Camera', price: 1299, description: 'Professional DSLR camera' },
  ]

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-title">Our Products</h1>
        <p className="page-description">
          Browse through our collection of products. Click on any product to see
          more details.
        </p>

        <div className="products-grid">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              className="product-card"
            >
              <div className="product-image">
                <span className="product-icon">📦</span>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products

