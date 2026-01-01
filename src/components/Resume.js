import React from 'react';
import './Resume.css';

const Resume = () => {
  const resumeUrl = 'https://drive.google.com/uc?export=download&id=18IOCj5pBcI_nosb1VPs3v8_HWNv6HGa5';

  return (
    <section id="resume" className="resume">
      <div className="resume-container">
        <h2 className="section-title">Resume</h2>
        <p className="resume-text">
          Download my resume{' '}
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-link">
            here
          </a>
        </p>
        <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="resume-icon-link">
          <div className="resume-icon">
            <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <path d="m7 51h34v2h-34z" />
              <path d="m7 47h34v2h-34z" />
              <path d="m7 43h26v2h-26z" />
              <path d="m7 39h26v2h-26z" />
              <path d="m23 21h8c.553 0 1-.448 1-1v-4c0-1.723-.876-3.245-2.207-4.145.743-.727 1.207-1.736 1.207-2.855 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.119.464 2.128 1.207 2.855-1.331.9-2.207 2.422-2.207 4.145v4c0 .552.447 1 1 1zm2-12c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2zm-1 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3h-6z" />
              <path d="m18 23h18v2h-18z" />
              <path d="m18 27h18v2h-18z" />
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Resume;

