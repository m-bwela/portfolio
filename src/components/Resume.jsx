import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Resume.css'; // We'll create this file
import PageNavigation from './PageNavigation/PageNavigation';

export default function Resume() {
    const location = useLocation();
    return (
        <>
        <div className="page-container">
            <div className="home-link-wrap">
                <Link to="/" className='home-link'>Home🏠</Link>
            </div>
            
            <section id='resume' className='resume section-bg'>
                <div className='row justify-content-center align-items-center text-center mb-5'>
                    <div className='col-lg-12'>
                        <h2 className='resume-title'>My Resume</h2>
                        
                        <div className='resume-content'>
                            <p>Here is a summary of my professional experience and skills.</p>
                        </div>
                        
                        <div className='resume-details'>
                            <div className='resume-section'>
                                <h3>Professional Experience</h3>
                                <div className='resume-item'>
                                    <h4>System Administrator</h4>
                                    <h5>Oct 2023 - Dec 2023</h5>
                                    <p>Testing, implementing and maintained Kenya News Agency Website.</p>
                                    <p>Network administration and troubleshooting.</p>
                                    <p>Testing and configuring newly acquired and relocated equipment.</p>
                                </div>
                                <div className='resume-item'>
                                    <h4>Frontend Developer Intern</h4>
                                    <h5>2022 - 2023</h5>
                                    <p>Assisted in building and maintaining client websites, focusing on responsive design and user experience.</p>
                                </div>
                            </div>
                            
                            <div className='resume-section'>
                                <h3>Education</h3>
                                <div className='resume-item'>
                                    <h4>Computer Science</h4>
                                    <h5>2020 - 2025</h5>
                                    <p>Mount Kenya University, focused on software development and web technologies.</p>
                                </div>
                            </div>
                            
                            <div className='resume-section'>
                                <h3>Skills</h3>
                                <div className='resume-skills'>
                                    <span>React</span>
                                    <span>JavaScript</span>
                                    <span>Node.js</span>
                                    <span>HTML/CSS</span>
                                    <span>Git</span>
                                    <span>RESTful APIs</span>
                                    <span>PostgreSQL</span>
                                    <span>SQL</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='resume-download'>
                            <a href="/resume_template.pdf" className="btn" download>Download Full Resume</a>
                        </div>
                    </div>
                </div>
            </section>
            <PageNavigation />
        </div>
        </>
    )
}