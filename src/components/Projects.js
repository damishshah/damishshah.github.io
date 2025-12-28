import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [expandedVideo, setExpandedVideo] = useState(false);

  const myProjects = [
    {
      title: 'WebRTC Video Chat',
      description: 'Secure, p2p video conferencing application.',
      technologies: 'nodejs, webrtc, socket.io, docker + compose, nginx',
      url: 'https://www.damishshah.com/chat',
      github: 'https://github.com/damishshah/videochat'
    },
    {
      title: 'Comic Book OCR',
      description: 'Python application to identify speech bubbles and read text from comic book pages.',
      technologies: 'python, flask, gunicorn, opencv, pytesseract',
      github: 'https://github.com/damishshah/comic-book-reader'
    },
    {
      title: 'VR Element Bending Sandbox',
      description: 'A virtual reality application using gesture recognition to allow players to control elements in a virtual sandbox.',
      technologies: 'unity, c#, steamvr, blender',
      github: 'https://github.com/damishshah/vr-earth-bending'
    },
    {
      title: 'Authentication Server',
      description: 'Auth server template to manage user accounts. Features full suite of account management API functions including: user registration, email verification, password recovery, and user data management.',
      technologies: 'nodejs, dynamodb, jwt, sendgrid',
      github: 'https://github.com/damishshah/auth-server'
    },
    {
      title: 'This Website!',
      description: 'Self-hosted personal portfolio website built with React.',
      technologies: 'react, html5, css, javascript, aws ec2, docker + compose, nginx',
      url: 'https://www.damishshah.com',
      github: 'https://github.com/damishshah/damishshah.github.io'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="projects-section">
          <h3 className="subsection-title">Some of My Work</h3>
          <div className="projects-grid">
            {myProjects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-content">
                  <h4 className="project-title">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h4>
                  <p className="project-description">{project.description}</p>
                  <p className="project-technologies">{project.technologies}</p>
                </div>
                <div className="project-footer">
                  {project.url && (
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                      View Project
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      Source @ GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
            
            <div 
              className={`project-card video-card ${expandedVideo ? 'expanded' : ''}`}
              onClick={() => setExpandedVideo(!expandedVideo)}
            >
              <div className="project-content">
                <h4 className="project-title">VR Demo Video</h4>
                <video autoPlay loop muted playsInline>
                  <source
                    src="https://www.dropbox.com/s/j9pp63c792xpeif/DemoVideo.mp4?raw=1"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="project-footer">
                <p className="project-technologies">Click to enlarge</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

