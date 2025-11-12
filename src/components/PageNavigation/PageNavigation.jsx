import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageNavigation.css';

export default function PageNavigation() {
  const location = useLocation();
  
  // Define the page order for navigation
  const pageOrder = [
    { path: '/', name: 'Home' },
    { path: '/about', name: 'About' },
    { path: '/projects', name: 'Projects' },
    { path: '/skills', name: 'Skills' },
    { path: '/resume', name: 'Resume' },
    { path: '/contact', name: 'Contact' }
  ];
  
  // Find current page index
  const currentIndex = pageOrder.findIndex(page => page.path === location.pathname);
  
  // Get previous and next pages
  const prevPage = currentIndex > 0 ? pageOrder[currentIndex - 1] : null;
  const nextPage = currentIndex < pageOrder.length - 1 ? pageOrder[currentIndex + 1] : null;
  
  // Don't show navigation on home page, terms/privacy pages, or if we can't find the current page
  if (currentIndex === -1 || location.pathname === '/' || location.pathname === '/terms' || location.pathname === '/privacy') {
    return null;
  }
  
  return (
    <div className="page-navigation">
      <div className="page-nav-container">
        {prevPage ? (
          <Link to={prevPage.path} className="page-nav-btn prev-btn">
            <span className="nav-arrow">←</span>
            <span className="nav-text">
              <span className="nav-label">Previous</span>
              <span className="nav-page-name">{prevPage.name}</span>
            </span>
          </Link>
        ) : (
          <div className="page-nav-placeholder"></div>
        )}
        
        {nextPage ? (
          <Link to={nextPage.path} className="page-nav-btn next-btn">
            <span className="nav-text">
              <span className="nav-label">Next</span>
              <span className="nav-page-name">{nextPage.name}</span>
            </span>
            <span className="nav-arrow">→</span>
          </Link>
        ) : (
          <div className="page-nav-placeholder"></div>
        )}
      </div>
    </div>
  );
}
