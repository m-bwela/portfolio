import React, { useState, useEffect, useRef } from 'react';
import './ScrollToTop.css';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [percent, setPercent] = useState(0);
  const rafRef = useRef(null);

  // SVG circle constants
  const SIZE = 56;
  const STROKE = 3;
  const RADIUS = (SIZE - STROKE) / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    const check = () => {
      const scrollTop = Math.max(
        window.pageYOffset || 0,
        document.documentElement.scrollTop || 0,
        document.body.scrollTop || 0
      );
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight || 0,
        document.body.scrollHeight || 0
      );
      const clientHeight = window.innerHeight;
      const maxScroll = scrollHeight - clientHeight;
      const pct = maxScroll > 0 ? Math.round((scrollTop / maxScroll) * 100) : 0;

      setPercent(pct);
      setVisible(scrollTop > 300);
      rafRef.current = requestAnimationFrame(check);
    };
    rafRef.current = requestAnimationFrame(check);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleClick = () => {
    const candidates = new Set();
    candidates.add(document.scrollingElement || document.documentElement);
    candidates.add(document.documentElement);
    candidates.add(document.body);

    document.querySelectorAll('body *').forEach((el) => {
      try {
        const s = getComputedStyle(el).overflowY;
        if (s === 'auto' || s === 'scroll') candidates.add(el);
      } catch (e) {}
    });

    const list = Array.from(candidates);

    const attemptOnce = () => {
      let changed = false;
      for (const el of list) {
        try {
          if (el && typeof el.scrollTop === 'number' && el.scrollTop > 0) {
            changed = true;
            if (typeof el.scrollTo === 'function') {
              try { el.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { el.scrollTop = 0; }
            } else {
              el.scrollTop = 0;
            }
          }
        } catch (e) {}
      }
      try {
        if (window.scrollY > 0) {
          changed = true;
          try { window.scrollTo({ top: 0, behavior: 'smooth' }); } catch (e) { window.scrollTo(0, 0); }
        }
      } catch (e) {}
      return changed;
    };

    const start = Date.now();
    const id = setInterval(() => {
      const active = attemptOnce();
      if (!active || Date.now() - start > 1200) {
        clearInterval(id);
        try { window.scrollTo(0, 0); } catch (e) {}
        try { document.documentElement.scrollTop = 0; document.body.scrollTop = 0; } catch (e) {}
      }
    }, 50);
  };

  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;

  return (
    <button
      className={`scroll-progress-btn ${visible ? 'visible' : ''}`}
      onClick={handleClick}
      aria-label={`Scroll to top — ${percent}% scrolled`}
    >
      <svg
        className="scroll-progress-ring"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        <circle
          className="scroll-progress-bg"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
        />
        <circle
          className="scroll-progress-fill"
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          strokeWidth={STROKE}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={offset}
        />
      </svg>
      <span className="scroll-progress-label">
        <span className="scroll-progress-percent">{percent}%</span>
        <span className="scroll-progress-arrow" aria-hidden="true">↑</span>
      </span>
    </button>
  );
}