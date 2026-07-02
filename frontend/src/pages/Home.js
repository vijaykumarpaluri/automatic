import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to PlantShop</h1>
          <p>Discover the finest selection of plants for your home and office</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="features">
        <h2>Why Choose PlantShop?</h2>
        <div className="features-grid">
          <div className="feature">
            <span className="feature-icon">🌱</span>
            <h3>Fresh Plants</h3>
            <p>Hand-picked plants delivered fresh to your door</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🚚</span>
            <h3>Fast Shipping</h3>
            <p>Quick and reliable delivery across the country</p>
          </div>
          <div className="feature">
            <span className="feature-icon">🎓</span>
            <h3>Expert Care</h3>
            <p>Free care guides and tips with every plant</p>
          </div>
          <div className="feature">
            <span className="feature-icon">💚</span>
            <h3>Satisfaction Guaranteed</h3>
            <p>30-day money-back guarantee on all plants</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
