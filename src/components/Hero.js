import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="greeting">Hi.</span>
          <span className="name">I'm Damish</span>
        </h1>
        <p className="hero-subtitle">Senior SWE & Platform Engineer</p>
        <button className="scroll-down" onClick={scrollToAbout} aria-label="Scroll down">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;

