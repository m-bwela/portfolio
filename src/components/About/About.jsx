import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './About.css';

export default function About() {
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };
    
    return (
        <>
        {location.pathname !== '/' && (
            <div className='home-link-wrap'>
                <Link to="/" className='home-link'>Home🏠</Link>
            </div>
        )}
        <section className='about section' id='about'>
            <div className='about-image'>
                <div className='about-image-overlay'>
                    <div className='about-image-title'>
                        Hello, I'm Tye Nzambu
                    </div>
                    <div className='about-image-subtitle'>
                        A passionate web developer
                    </div>
                    <div className='about-image-description'>
                        I create responsive and user-friendly web applications.
                    </div>
                </div>
                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMl9ibGFja19mbGF0X3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2Zfc2V0X29mXzRfc183YWRhN2I5MC1iNDFhLTQwZmYtYWQxOC04MWNmZjQ4NWFlM2QtbTN3dXc4c3MucG5n.png" alt="About Me" />
            </div>
            <div className='about-content'>
                <div className='about-accordion'>
                    <div 
                        className={`about-accordion-header ${isExpanded ? 'expanded' : ''}`}
                        onClick={toggleAccordion}
                    >
                        <h2>About Me ℹ️</h2>
                        <div className='about-accordion-icon'>
                            {isExpanded ? '−' : '+'}
                        </div>
                    </div>
                    <div className={`about-accordion-content ${isExpanded ? 'expanded' : ''}`}>
                        <p className='about-description'>
                            Result-driven Web developer and knowledgeable computer science student with experience in building responsive, user-friendly software applications. My expertise includes using technologies such as React, Node.JS, and REST APIs. Seeking to leverage coding expertise in a fast-paced software development role. Excellent problem solving skills and a strong desire to learn and grow in the field.
                        </p>
                        <div className='about-skills'>
                            <div className='about-skills-item'>React</div>
                            <div className='about-skills-item'>Node.js</div>
                            <div className='about-skills-item'>JavaScript</div>
                            <div className='about-skills-item'>HTML/CSS</div>
                            <div className='about-skills-item'>RESTful APIs</div>
                            <div className='about-skills-item'>Problem Solving</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}