import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import Home2 from './Home2';
import About from '../About/About';
import Projects from '../Projects/Projects';
import ClientReviews from '../ClientReviews/ClientReviews';
import Skills from '../Skills';
import Contact from '../Contact';
import SideNav from '../SideNav/SideNav';

export default function Home() {

    const [isButton, setIsButton] = React.useState(false);

    const handleButtonClick = () => {
        setIsButton(!isButton);
    };

    return (

        <>
        <SideNav />
        <header className='header'>
            <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-primary)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
                <li className="nav-item" role="presentation">
                <Link className="nav-link active rounded-5" id="home-tab2" to="/">Home 🏠</Link>
                </li>
                <li className="nav-item" role="presentation">
                <Link className="nav-link rounded-5" id="about-tab2" to="/about">About ℹ️</Link>
                </li>
                <li className="nav-item" role="presentation">
                <Link className="nav-link rounded-5" id="projects-tab2" to="/projects">Projects 💼</Link>
                </li>
                <li className="nav-item" role="presentation">
                <Link className="nav-link rounded-5" id="skills-tab2" to="/skills">Skills 🛠️</Link>
                </li>
                <li className="nav-item" role="presentation">
                <Link className="nav-link rounded-5" id="resume-tab2" to="/resume">Resume 📄</Link>
                </li>
                <li className="nav-item" role="presentation">
                <Link className="nav-link rounded-5" id="contact-tab2" to="/contact">Contact 📞</Link>
                </li>
            </ul>
        </header>

        <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content" id="home">
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
                <div className='resume-download'>
                    <a href="/src/assets/resume_template.pdf" className="btn btn-primary" download>Download Resume</a>
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