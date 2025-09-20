import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">CityTrack</h3>
            <p>Your real-time guide to civic issues and resolutions in your community.</p>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><button onClick={() => scrollToSection('home')}>Home</button></li>
              <li><button onClick={() => scrollToSection('issues')}>Issues</button></li>
              <li><button onClick={() => scrollToSection('map')}>Map</button></li>
              <li><button onClick={() => scrollToSection('about')}>About</button></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook" className="social-icon"><Facebook size={20} /></a>
              <a href="#" aria-label="Twitter" className="social-icon"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="social-icon"><Instagram size={20} /></a>
              <a href="#" aria-label="LinkedIn" className="social-icon"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} CityTrack. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;