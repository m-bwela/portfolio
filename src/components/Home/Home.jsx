import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import usePageTitle from '../../hooks/usePageTitle';
import Home2 from './Home2';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ClientReviews from '../ClientReviews/ClientReviews';
import Skills from '../Skills';
import Contact from '../Contact';
import SideNav from '../SideNav/SideNav';

export default function Home() {
    usePageTitle(null); // default title

    return (

        <>
        <SideNav />
        <header className='header'>
            <nav aria-label="Main navigation">
            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="home-tab2" to="/" end>Home 🏠</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="about-tab2" to="/about">About ℹ️</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="projects-tab2" to="/projects">Projects 💼</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="skills-tab2" to="/skills">Skills 🛠️</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="resume-tab2" to="/resume">Resume 📄</NavLink>
                </li>
                <li className="nav-item" role="presentation">
                <NavLink className={({ isActive }) => `nav-link rounded-5${isActive ? ' active' : ''}`} id="contact-tab2" to="/contact">Contact 📞</NavLink>
                </li>
            </ul>
            </nav>
        </header>

        <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> TYE NZAMBU</strong>
              </h1>
              <Home2 />
                <div className="portfolio-stats">
                <div className="stat">
                  <span className="stat-number">1+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Clients</span>
                </div>
                <div className="stat">
                  <span className="stat-number">10+</span>
                  <span className="stat-label">Technologies</span>
                </div>
              </div>
              <div style={{ padding: 50, textAlign: "left" }}>
              </div>
            </Col>
          </Row>
        </Container>
        <About />
      </Container>
      <Projects />
      <ClientReviews />
        <Skills />
        <Contact />
    </section>
        </>
    )
}