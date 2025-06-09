// App.js
import React from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1 className="logo">LifeInsight</h1>
          <nav>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h2>Innovating Through Research &amp; Inspection</h2>
          <p>Providing cutting-edge solutions in Life Sciences, Medical Care, and Industrial Applications.</p>
          <a href="#contact" className="btn-primary">Get In Touch</a>
        </div>
      </section>
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            LifeInsight is a trusted leader in advanced research and inspection services. We specialize in delivering high-quality solutions across life sciences, medical technologies, and industrial systems through innovative tools and deep scientific knowledge.
          </p>
        </div>
      </section>
      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service-cards">
            <div className="card">
              <h3>Life Science Research</h3>
              <p>Supporting biotech and pharma industries with lab-based investigations and data analytics.</p>
            </div>
            <div className="card">
              <h3>Medical Equipment Inspection</h3>
              <p>Ensuring the safety and performance of medical devices through detailed technical evaluations.</p>
            </div>
            <div className="card">
              <h3>Industrial Inspection</h3>
              <p>Providing rigorous assessments for industrial tools, machinery, and environments.</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form action="#" method="post">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="btn-primary">Send Message</button>
          </form>
        </div>
      </section>
      <footer>
        <div className="container">
          <p>&copy; 2025 LifeInsight. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;