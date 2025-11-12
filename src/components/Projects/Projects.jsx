import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Projects.css';
import PageNavigation from '../PageNavigation/PageNavigation';

const projects = [
  {
    title: "Personal Express Tracker",
    description: "A web Application to track personal expenses. Technologies used include; React, CSS, JavaScript, HTML5, Material UI.",
    link: "https://expense-tracker-xi-ecru-46.vercel.app/"
  },
  {
    title: "Keeper App",
    description: "A web Application to keep track of notes. Technologies used include; HTML5, CSS, JavaScript, React.",
    link: "https://keeper-app-six-mu.vercel.app/"
  },
  {
    title: "Bookify",
    description: "A web Application to find and manage your book collection. Technologies used include; HTML5, CSS, Node.JS, Express.",
    link: "https://your-blog-link.com"
  },

  {
    title: "Todo App",
    description: "A web Application to manage your tasks. Technologies used include; HTML5, CSS, JavaScript, React.",
    link: "https://todo-list-project-eight-eta.vercel.app/"
  }
];

export default function Projects() {
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
            <div className="col-3" key={idx}>
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
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