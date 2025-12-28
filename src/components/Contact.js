import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-text">
            Check out my{' '}
            <a
              href="https://www.linkedin.com/in/damish"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn
            </a>
            ,{' '}
            <a
              href="https://github.com/damishshah"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              GitHub
            </a>
          </p>
          <p className="contact-text">or</p>
          <a href="mailto:damish.shah@gmail.com" className="email-button">
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

