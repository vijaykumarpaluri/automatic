import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Monstera Deliciosa', price: 45, image: '🌿', category: 'Large' },
    { id: 2, name: 'Pothos', price: 25, image: '🌿', category: 'Small' },
    { id: 3, name: 'Snake Plant', price: 35, image: '🌿', category: 'Medium' },
    { id: 4, name: 'Succulents Mix', price: 15, image: '🌿', category: 'Small' },
    { id: 5, name: 'Fiddle Leaf Fig', price: 55, image: '🌿', category: 'Large' },
    { id: 6, name: 'Peace Lily', price: 30, image: '🌿', category: 'Medium' },
  ]);

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Small', 'Medium', 'Large'];

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <div className="product-list">
      <h1>Our Plants</h1>
      
      <div className="filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
            onClick={() => handleCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="category">{product.category}</p>
            <p className="price">${product.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
