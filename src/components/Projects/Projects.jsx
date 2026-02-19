import React from 'react';
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
    github: "https://github.com/m-bwela/chat-app"
  },
  {
    title: "Personal Expense Tracker",
    description: "A web application to track and manage personal expenses with visual breakdowns.",
    tech: ["React", "Material UI", "JavaScript", "CSS"],
    demo: "https://expense-tracker-xi-ecru-46.vercel.app/",
    github: "https://github.com/m-bwela/Expense-Tracker"
  },
  {
    title: "Keeper App",
    description: "A note-taking app inspired by Google Keep — create, edit and delete notes.",
    tech: ["React", "JavaScript", "CSS", "HTML5"],
    demo: "https://keeper-app-six-mu.vercel.app/",
    github: "https://github.com/m-bwela/Keeper-App"
  },
  {
    title: "Bookify",
    description: "A web application to find and manage your book collection with search and favorites.",
    tech: ["Node.js", "Express", "HTML5", "CSS"],
    demo: null,
    github: "https://github.com/m-bwela/Bookify"
  },
  {
    title: "Todo App",
    description: "A clean task management app — add, complete, and delete your daily tasks.",
    tech: ["React", "JavaScript", "CSS", "HTML5"],
    demo: "https://todo-list-project-eight-eta.vercel.app/",
    github: "https://github.com/m-bwela/Todo-list-project"
  }
];

export default function Projects() {
    usePageTitle('Projects');
    const location = useLocation();
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
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-demo">
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-github">
                      <i className="fab fa-github"></i> Code
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