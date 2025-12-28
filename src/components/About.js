import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a software developer currently based in{' '}
              <span className="highlight">Portland, Oregon.</span>
            </p>
            <div className="about-description">
              <p>
                I have over 10 years of experience spanning startups and
                large corporations. I am currently a senior software engineer on the
                Safety Foundations platform team at                 <a
                  href="https://www.roblox.com/charts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Roblox
                </a>, where I've designed and built
                a suite of highly available, low-latency distributed systems that handle
                all trust & safety operations for over 100 million daily active users
                and trillions of pieces of content across all of Roblox. Before that, I was
                on the MediaTailor team at Amazon Web Services (AWS), where I built a highly available 
                and scalable server-side ad insertion platform that supported millions of concurrent user 
                streams for live streaming and VoD.
              </p>
              <p>
                While most of my roles have been full-stack, my focus
                has always been on building highly available and scalable
                backend distributed services running on the cloud. I've always
                loved to build things; the more challenging the better. I'm
                motivated by large-scale, impactful, customer-driven problems.
                Bonus points if I'm a customer of the product myself! I'm
                interested in senior individual contributor roles with plenty
                of opportunities to grow my architecture and distributed system design skills.
              </p>
            </div>
          </div>
          <div className="about-image">
            <img src="/static/images/damish500x700.png" alt="Damish Shah" />
          </div>
        </div>
      </div>
      
      <div className="fun-facts">
        <div className="fun-facts-container">
          <h2 className="section-title">Some Fun Facts</h2>
          <div className="facts-content">
            <ul className="facts-list">
              <li>I have 3 cats</li>
              <li>
                I play <em>a lot</em> of video games
              </li>
              <li>
                I've led two teams to national championships in an arcade
                game called{' '}
                <a
                  href="https://killerqueenarcade.com/howtoplay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Killer Queen
                </a>
              </li>
              <li>
                I also like making games. My game Slug Lord's Run won best game design at the NYU Global Game Jam
              </li>
              <li>
                I love photography! I'm currently rocking a Sony A7CII and take about a million pictures of my daughter
              </li>
              <li>
                I love reading, typically high fantasy and sci-fi. Let me know if you're a Brandon Sanderson fan!
              </li>
              <li>
                I'm passionate about community service (check out{' '}
                <a
                  href="https://www.oregonfoodbank.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Oregon Food Bank
                </a>{' '}
                and{' '}
                <a
                  href="https://blanchethouse.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link"
                >
                  Blanchet House
                </a>{' '}
                if you're local to Portland!)
              </li>
            </ul>
            <div className="cat-gallery">
              <img src="/static/images/cat1.jpg" alt="Cat 1" />
              <img src="/static/images/cat2.jpg" alt="Cat 2" />
              <img src="/static/images/cat3.jpg" alt="Cat 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

