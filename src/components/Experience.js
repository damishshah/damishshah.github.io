import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'Roblox',
      role: 'Senior Software Engineer - Safety Foundations Platform Team',
      duration: 'August 2021 - Present',
      description: 'Design and build highly available, low-latency distributed systems that handle all trust & safety operations for over 100 million daily active users and trillions of pieces of content across all of Roblox. These systems regularly process >50 million requests per second.',
      achievements: [
        {
          title: 'High-volume Ticketing Platform',
          description: 'Designed and implemented a high-volume ticketing platform with APIs for managing tickets and queues. Queues are implemented as sparse indexes in DynamoDB, enabling dynamic priority queuing for content and user moderation by humans and machines at massive scale.'
        },
        {
          title: 'RIFTTT (Roblox If This Then That)',
          description: 'Built a no-code triggered action programming engine using Google\'s CEL (Common Expression Language). Allows events to trigger configured actions based on CEL rules, enabling automation of ticket creation, routing to various queues, and automated application of decisions and labels—all without requiring engineering support.'
        },
        {
          title: 'Entity Scoring Platform',
          description: 'Developed an entity scoring platform that is now responsible for executing all user consequence policy across Roblox, driving critical trust and safety decisions at scale.'
        },
        {
          title: 'Machine Learning Platform',
          description: 'Built a machine learning integration platform for engineering partners to automatically classify content and apply decisions, enabling seamless integration of ML models into trust and safety workflows.'
        },
        {
          title: 'Labeling Platform',
          description: 'Built a generalized entity labeling system, similar to Label Studio, that allows teams to define and apply labels for any content on Roblox'
        },
        {
          title: 'Content Policy Platform',
          description: 'Developed a policy platform that enables non-engineer policy teams to automate content access rules, content descriptors, and age ratings (both Roblox internal and International Age Rating Coalition (IARC)). Includes management of the Roblox Creator Questionnaire—a dynamic, recursive survey shown to all experience creators that allows them to self-attest to content within their experience and apply automated age ratings.'
        }
      ]
    },
    {
      company: 'Amazon Web Services (AWS)',
      role: 'Software Development Engineer - MediaTailor',
      duration: 'May 2018 - August 2021',
      description: 'Built a highly available and scalable server-side ad insertion platform that supported millions of concurrent user streams for live streaming and video-on-demand (VoD). Enabled video providers to seamlessly insert individually targeted advertising into their video streams with low-latency, dynamically transcoded advertisements.'
    },
    {
      company: 'Yodle Inc.',
      role: 'Software Developer - Email Marketing',
      duration: 'March 2016 - May 2017',
      description: 'Full-stack engineer on a team responsible for development and management of client communications pipeline. Extracted independent, easily scalable microservices from monolithic architecture. Built scalable analytics tools to handle millions of daily messages for clients to gauge email marketing campaign efficacy.'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <h3 className="company-name">{exp.company}</h3>
                <span className="role">{exp.role}</span>
                <span className="duration">{exp.duration}</span>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.achievements && (
                <div className="achievements">
                  <h4 className="achievements-title">Key Achievements:</h4>
                  <div className="achievements-grid">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="achievement-card">
                        <h5 className="achievement-title">{achievement.title}</h5>
                        <p className="achievement-description">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

