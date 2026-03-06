import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './NotFound.css';

const funMessages = [
  "Looks like you've drifted into uncharted space.",
  "This page took a vacation and forgot to come back.",
  "You've discovered a void in the matrix.",
  "Even GPS can't find this page.",
  "This page is playing hide and seek — and winning.",
];

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function NotFound() {
  const [message] = useState(() => funMessages[Math.floor(Math.random() * funMessages.length)]);
  const [countdown, setCountdown] = useState(15);
  const navigate = useNavigate();

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/');
      return;
    }
    const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <section className="not-found">
      <div className="not-found-particles">
        {[...Array(6)].map((_, i) => (
          <span key={i} className="particle" />
        ))}
      </div>

      <div className="not-found-content">
        <div className="not-found-astronaut">🧑‍🚀</div>
        <h1 className="not-found-code">404</h1>
        <h2 className="not-found-title">Lost in Space</h2>
        <p className="not-found-text">{message}</p>

        <div className="not-found-links">
          <p className="not-found-suggest">Maybe try one of these:</p>
          <div className="quick-links">
            {quickLinks.map(link => (
              <Link key={link.path} to={link.path} className="quick-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/" className="not-found-btn">
          ← Back to Home
        </Link>
        <p className="not-found-countdown">
          Auto-redirecting in <strong>{countdown}s</strong>
        </p>
      </div>
    </section>
  );
}
