import React, { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, MapPin, TrendingUp, Bell, CheckCircle } from "lucide-react";
import './App.css';
import Footer from '../components/Footer';

const CityTrack = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const mobileNavRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Handle mobile menu toggle
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobileMenuOpen(false);
      }
      
      // Set viewport height for mobile devices
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle search
  const handleSearch = () => {
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      // Here you would typically send the query to your backend
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle report button
  const handleReport = () => {
    alert('Report Issue functionality would open here');
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="app-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="logo-container">
          <div className="logo-icon">
            🏢
          </div>
          <span className="logo-text">CityTrack</span>
        </div>
        
        {/* Desktop Navigation */}
        <ul className="nav-links">
          <li>
            <button 
              onClick={() => scrollToSection('home')}
              className="nav-button"
            >
              Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('issues')}
              className="nav-button"
            >
              Issues
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('map')}
              className="nav-button"
            >
              Map
            </button>
          </li>
          <li>
            <button 
              onClick={() => scrollToSection('about')}
              className="nav-button"
            >
              About
            </button>
          </li>
        </ul>

        {/* Right side navigation */}
        <div className="nav-right">
          <Search className="search-icon" />
          <button 
            onClick={handleReport}
            className="report-button"
          >
            Report Issue
          </button>
          <div className="profile-avatar">
            👤
          </div>
          
          {/* Mobile menu button */}
          <button 
            ref={menuButtonRef}
            onClick={toggleMobileMenu}
            className={`mobile-menu-button ${isMobileMenuOpen ? 'active' : ''}`}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div 
            ref={mobileNavRef}
            className="mobile-nav"
          >
            <ul className="mobile-nav-list">
              <li className="mobile-nav-item">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="mobile-nav-button"
                >
                  Home
                </button>
              </li>
              <li className="mobile-nav-item">
                <button 
                  onClick={() => scrollToSection('issues')}
                  className="mobile-nav-button"
                >
                  Issues
                </button>
              </li>
              <li className="mobile-nav-item">
                <button 
                  onClick={() => scrollToSection('map')}
                  className="mobile-nav-button"
                >
                  Map
                </button>
              </li>
              <li className="mobile-nav-item">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="mobile-nav-button"
                >
                  About
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Track Your City's Issues in Real-Time
          </h1>
          <p className="hero-description">
            Stay informed about the progress of civic issues in your community. From potholes to public safety, we keep you updated.
          </p>
          
          {/* Search Container */}
          <div className="search-container">
            <input 
              type="text" 
              className="search-input"
              placeholder="Search by area or category (e.g., 'Downtown', 'potholes')"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              onClick={handleSearch}
              className="search-button"
            >
              Search
            </button>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons">
            <button 
              onClick={() => scrollToSection('map')}
              className="action-button primary"
            >
              <MapPin size={20} />
              <span>View Map</span>
            </button>
            <button 
              onClick={() => scrollToSection('progress')}
              className="action-button secondary"
            >
              <TrendingUp size={20} />
              <span>Check Progress</span>
            </button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="how-it-works-section">
        <div className="section-container">
          <h2 className="section-title">
            How CityTrack Works
          </h2>
          <p className="section-description">
            Our platform simplifies civic engagement by providing real-time tracking of issues, from reporting to resolution.
          </p>

          {/* Features Grid */}
          <div className="features-grid">
            <FeatureCard
              icon={<CheckCircle size={32} />}
              iconClass="icon-blue"
              title="Report Issues"
              description="Easily report issues with detailed descriptions and location data."
              delay={0}
            />
            <FeatureCard
              icon={<TrendingUp size={32} />}
              iconClass="icon-amber"
              title="Track Progress"
              description="Follow the progress of reported issues with regular updates and status changes."
              delay={200}
            />
            <FeatureCard
              icon={<Bell size={32} />}
              iconClass="icon-red"
              title="Stay Informed"
              description="Receive notifications and updates on issues affecting your community."
              delay={400}
            />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ icon, iconClass, title, description, delay }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className={`feature-card ${isVisible ? 'visible' : ''}`}
    >
      <div className={`feature-icon ${iconClass}`}>
        {icon}
      </div>
      <h3 className="feature-title">
        {title}
      </h3>
      <p className="feature-description">
        {description}
      </p>
    </div>
  );
};

export default CityTrack;