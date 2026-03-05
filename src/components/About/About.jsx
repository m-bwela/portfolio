import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../../hooks/usePageTitle';
import './About.css';
import profileImage from '../../assets/images/profile.jpg';
import PageNavigation from '../PageNavigation/PageNavigation';

export default function About() {
    usePageTitle('About');
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(true);
    
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
                        A passionate AI-augmented Full Stack web developer
                    </div>
                    <div className='about-image-description'>
                        I create responsive and user-friendly web applications.
                    </div>
                </div>
                <img 
                    src={profileImage} 
                    alt="Tye Nzambu - Web Developer"
                    loading="lazy"
                    width="300"
                    height="300"
                />
            </div>
            <div className='about-content'>
                <div className='about-accordion'>
                    <button 
                        type="button"
                        className={`about-accordion-header ${isExpanded ? 'expanded' : ''}`}
                        onClick={toggleAccordion}
                        aria-expanded={isExpanded}
                        aria-controls="about-accordion-panel"
                    >
                        <h2>About Me ℹ️</h2>
                        <div className='about-accordion-icon' aria-hidden="true">
                            {isExpanded ? '−' : '+'}
                        </div>
                    </button>
                    <div
                        id="about-accordion-panel"
                        role="region"
                        className={`about-accordion-content ${isExpanded ? 'expanded' : ''}`}
                        aria-labelledby="about-accordion-toggle"
                    >
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
        <PageNavigation />
        </>
    )
}