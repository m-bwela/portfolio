import React, { useState, useEffect } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button only when near the bottom of the page
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const clientHeight = window.innerHeight;
      const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
      
      // Show when within 300px of the bottom
      setVisible(distanceFromBottom < 300 && scrollTop > 200);
    };
    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Always render the button, but with different classes based on visibility
  return (
    <button 
      className={`scroll-to-top-btn ${visible ? 'visible pulse' : ''}`} 
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <span aria-hidden="true">↑</span>
      <span>Scroll to Top</span>
    </button>
  );
}