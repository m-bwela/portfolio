import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import './Projects.css';
import PageNavigation from '../PageNavigation/PageNavigation';

const projects = [
  {
    title: "Chat App",
    description: "A Full-Stack real-time messaging application for conversations and friendly chats.",
    tech: ["React", "Tailwind", "Socket.io", "Node.js", "Express"],
    demo: "https://chat-app-sable-gamma-68.vercel.app/",
    github: "https://github.com/m-bwela/chat-app",
    icon: "💬",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #a259f7 100%)",
    caseStudy: {
      challenge: "Building real-time bidirectional communication between multiple users simultaneously.",
      solution: "Implemented Socket.io for live messaging with event-driven architecture, with Node.js/Express backend handling concurrent connections.",
      outcome: "Supports real-time chat with instant message delivery and user presence detection."
    }
  },
  {
    title: "Personal Expense Tracker",
    description: "A web application to track and manage personal expenses with visual breakdowns.",
    tech: ["React", "Material UI", "JavaScript", "CSS"],
    demo: "https://expense-tracker-xi-ecru-46.vercel.app/",
    github: "https://github.com/m-bwela/Expense-Tracker",
    icon: "💰",
    gradient: "linear-gradient(135deg, #9333ea 0%, #c084fc 100%)",
    caseStudy: {
      challenge: "Users needed an intuitive way to categorize and visualize spending patterns.",
      solution: "Built a React app with Material UI components and dynamic chart breakdowns for expense categories.",
      outcome: "Clean visual dashboard that helps users understand their spending at a glance."
    }
  },
  {
    title: "Keeper App",
    description: "A note-taking app inspired by Google Keep — create, edit and delete notes.",
    tech: ["React", "JavaScript", "CSS", "HTML5"],
    demo: "https://keeper-app-six-mu.vercel.app/",
    github: "https://github.com/m-bwela/Keeper-App",
    icon: "📝",
    gradient: "linear-gradient(135deg, #a259f7 0%, #7c3aed 100%)",
    caseStudy: {
      challenge: "Creating a seamless note-taking experience similar to Google Keep with full CRUD operations.",
      solution: "Used React component composition and state management to handle dynamic note creation, editing, and deletion.",
      outcome: "A lightweight, responsive note app that works smoothly across devices."
    }
  },
  {
    title: "Bookify",
    description: "A web application to find and manage your book collection with search and favorites.",
    tech: ["Node.js", "Express", "HTML5", "CSS"],
    demo: null,
    github: "https://github.com/m-bwela/Bookify",
    icon: "📚",
    gradient: "linear-gradient(135deg, #c084fc 0%, #9333ea 100%)",
    caseStudy: {
      challenge: "Building a server-side rendered book management system with search and favorites functionality.",
      solution: "Developed a Node.js/Express backend with RESTful API endpoints and server-side templating.",
      outcome: "A functional book collection manager with persistent data and clean UI."
    }
  },
  {
    title: "Todo App",
    description: "A clean task management app — add, complete, and delete your daily tasks.",
    tech: ["React", "JavaScript", "CSS", "HTML5"],
    demo: "https://todo-list-project-eight-eta.vercel.app/",
    github: "https://github.com/m-bwela/Todo-list-project",
    icon: "✅",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)",
    caseStudy: {
      challenge: "Designing a task management flow that is simple yet complete — add, toggle, and remove tasks.",
      solution: "Built with React state management, conditional rendering, and CSS transitions for smooth interactions.",
      outcome: "A polished, minimal task app that's fast and satisfying to use."
    }
  }
];

export default function Projects() {
    usePageTitle('Projects');
    const location = useLocation();
    const [expandedCase, setExpandedCase] = useState(null);

    const toggleCase = (idx) => {
        setExpandedCase(prev => prev === idx ? null : idx);
    };

  return (
    <>
    {location.pathname !== '/' && (
      <div className="home-link-wrap">
        <Link to="/" className='home-link'>Home🏠</Link>
      </div>
    )}
      <section className="projects section" id="projects">
        <h2 className="section-title">Projects</h2>
        <div className="row">
          {projects.map((project, idx) => (
            <div className="col-lg-3 col-md-6 col-12 mb-4" key={idx}>
            <div className="card">
              <div className="card-thumbnail" style={{ background: project.gradient }}>
                <span className="card-thumbnail-icon">{project.icon}</span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                {project.caseStudy && (
                  <div className="case-study-section">
                    <button
                      className={`case-study-toggle ${expandedCase === idx ? 'expanded' : ''}`}
                      onClick={() => toggleCase(idx)}
                      type="button"
                    >
                      Case Study {expandedCase === idx ? '▲' : '▼'}
                    </button>
                    <div className={`case-study-content ${expandedCase === idx ? 'expanded' : ''}`}>
                      <div className="case-study-item">
                        <span className="case-label">Challenge:</span>
                        <span>{project.caseStudy.challenge}</span>
                      </div>
                      <div className="case-study-item">
                        <span className="case-label">Solution:</span>
                        <span>{project.caseStudy.solution}</span>
                      </div>
                      <div className="case-study-item">
                        <span className="case-label">Outcome:</span>
                        <span>{project.caseStudy.outcome}</span>
                      </div>
                    </div>
                  </div>
                )}
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                      Live Demo →
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                      Code ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <PageNavigation />
    </>
  );
}