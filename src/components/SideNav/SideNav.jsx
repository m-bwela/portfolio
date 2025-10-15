import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';
import { scrollToElement } from '../../utils/scrollUtils';

const SideNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Detect scroll position and set active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'resume', 'contact'];
      
      // Show the side nav after scrolling a bit
      setIsVisible(window.scrollY > 100);
      
      // Determine active section based on scroll position
      const scrollPosition = window.scrollY + 50; // Reduced offset since header isn't sticky
      
      // Keep track of the closest section
      let closestSection = null;
      let closestDistance = Infinity;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const distance = Math.abs(element.offsetTop - scrollPosition);
          
          // If this element is visible and closer than previous ones
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = section;
          }
          
          // Traditional method: if we're inside a section
          if (scrollPosition >= element.offsetTop && 
              scrollPosition < element.offsetTop + element.offsetHeight) {
            setActiveSection(section);
            return;
          }
        }
      }
      
      // If we didn't find an exact match, use the closest section
      if (closestSection) {
        setActiveSection(closestSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    scrollToElement(sectionId);
  };
  
  return (
    <div className={`side-nav ${isVisible ? 'visible' : ''}`}>
      <div className="side-nav-content">
        <a 
          href="#home" 
          className={`side-nav-item ${activeSection === 'home' ? 'active' : ''}`}
          aria-label="Home"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <span className="side-nav-icon">🏠</span>
          <span className="side-nav-label">Home</span>
        </a>
        <a 
          href="#about" 
          className={`side-nav-item ${activeSection === 'about' ? 'active' : ''}`}
          aria-label="About"
          onClick={(e) => handleNavClick(e, 'about')}
        >
          <span className="side-nav-icon">ℹ️</span>
          <span className="side-nav-label">About</span>
        </a>
        <a 
          href="#projects" 
          className={`side-nav-item ${activeSection === 'projects' ? 'active' : ''}`}
          aria-label="Projects"
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          <span className="side-nav-icon">💼</span>
          <span className="side-nav-label">Projects</span>
        </a>
        <a 
          href="#skills" 
          className={`side-nav-item ${activeSection === 'skills' ? 'active' : ''}`}
          aria-label="Skills"
          onClick={(e) => handleNavClick(e, 'skills')}
        >
          <span className="side-nav-icon">🛠️</span>
          <span className="side-nav-label">Skills</span>
        </a>
        <a 
          href="#resume" 
          className={`side-nav-item ${activeSection === 'resume' ? 'active' : ''}`}
          aria-label="Resume"
          onClick={(e) => handleNavClick(e, 'resume')}
        >
          <span className="side-nav-icon">📄</span>
          <span className="side-nav-label">Resume</span>
        </a>
        <a 
          href="#contact" 
          className={`side-nav-item ${activeSection === 'contact' ? 'active' : ''}`}
          aria-label="Contact"
          onClick={(e) => handleNavClick(e, 'contact')}
        >
          <span className="side-nav-icon">📞</span>
          <span className="side-nav-label">Contact</span>
        </a>
      </div>
    </div>
  );
};

export default SideNav;