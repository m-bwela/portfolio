import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import usePageTitle from '../../hooks/usePageTitle';
import { Link } from 'react-router-dom';
import Home2 from './Home2';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills';
import Contact from '../Contact';
import SideNav from '../SideNav/SideNav';
import ThemeToggle from '../ThemeToggle';
import Blog from '../Blog/Blog';

export default function Home() {
    usePageTitle(null); // default title

    return (

        <>
        <SideNav />
        <header className='header'>
            <nav className="glass-nav" aria-label="Main navigation">
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/" end>
                    <span className="nav-icon">🏠</span>
                    <span className="nav-text">Home</span>
                </NavLink>
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/about">
                    <span className="nav-icon">ℹ️</span>
                    <span className="nav-text">About</span>
                </NavLink>
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/projects">
                    <span className="nav-icon">💼</span>
                    <span className="nav-text">Projects</span>
                </NavLink>
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/skills">
                    <span className="nav-icon">🛠️</span>
                    <span className="nav-text">Skills</span>
                </NavLink>
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/resume">
                    <span className="nav-icon">📄</span>
                    <span className="nav-text">Resume</span>
                </NavLink>
                <NavLink className={({ isActive }) => `glass-nav-link${isActive ? ' active' : ''}`} to="/contact">
                    <span className="nav-icon">📞</span>
                    <span className="nav-text">Contact</span>
                </NavLink>
                <ThemeToggle />
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
              <div className="hero-cta">
                <Link to="/contact" className="cta-btn cta-primary">Get In Touch</Link>
                <Link to="/projects" className="cta-btn cta-secondary">View My Work</Link>
              </div>
            </Col>
          </Row>
        </Container>
        <About />
      </Container>
      <div class="marquee-section">
  <div class="marquee-track">
    <span class="marquee-item"><span class="marquee-dot"></span> Next.js</span>
    <span class="marquee-item"><span class="marquee-dot"></span> React</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Claude API</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Node.js</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Python</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Supabase</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Stripe</span>
    <span class="marquee-item"><span class="marquee-dot"></span> TypeScript</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Tailwind CSS</span>
    <span class="marquee-item"><span class="marquee-dot"></span> PostgreSQL</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Next.js</span>
    <span class="marquee-item"><span class="marquee-dot"></span> React</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Claude API</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Node.js</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Python</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Supabase</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Stripe</span>
    <span class="marquee-item"><span class="marquee-dot"></span> TypeScript</span>
    <span class="marquee-item"><span class="marquee-dot"></span> Tailwind CSS</span>
    <span class="marquee-item"><span class="marquee-dot"></span> PostgreSQL</span>
  </div>
</div>
      <Projects />
        <Skills />

        <section className="github-stats-section" id="github-stats">
          <h2 className="section-title">GitHub Activity</h2>
          <div className="github-stats-grid">
            <img
              src="https://github-readme-stats.vercel.app/api?username=m-bwela&show_icons=true&theme=midnight-purple&hide_border=true&bg_color=0d1117&title_color=c084fc&icon_color=a259f7&text_color=d1c4e9"
              alt="GitHub Stats"
              loading="lazy"
              className="github-stat-card"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=m-bwela&layout=compact&theme=midnight-purple&hide_border=true&bg_color=0d1117&title_color=c084fc&text_color=d1c4e9"
              alt="Top Languages"
              loading="lazy"
              className="github-stat-card"
            />
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=m-bwela&theme=midnight-purple&hide_border=true&background=0d1117&ring=a259f7&fire=c084fc&currStreakLabel=c084fc"
              alt="GitHub Streak"
              loading="lazy"
              className="github-stat-card github-stat-wide"
            />
          </div>
        </section>

        <Blog />

        <Contact />
    </section>
        </>
    )
}