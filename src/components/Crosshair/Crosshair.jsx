import React, { useEffect, useRef, useState } from 'react';
import './Crosshair.css';

export default function Crosshair() {
  const crosshairRef = useRef(null);
  const ringRef = useRef(null);
  const cursorPos = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
      setCoords({ x: e.clientX, y: e.clientY });
    };
    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const animate = () => {
      const t = 0.1;
      ringPos.current.x += (cursorPos.current.x - ringPos.current.x) * t;
      ringPos.current.y += (cursorPos.current.y - ringPos.current.y) * t;

      if (crosshairRef.current) {
        crosshairRef.current.style.transform =
          `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ringPos.current.x}px, ${ringPos.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pad = (n) => String(n).padStart(4, '0');

  return (
    <>
      {/* Crosshair lines + center dot */}
      <div
        ref={crosshairRef}
        className="hud-crosshair"
        style={{ opacity: visible ? 1 : 0 }}
      >
        <div className="hud-line hud-h-left" />
        <div className="hud-line hud-h-right" />
        <div className="hud-line hud-v-top" />
        <div className="hud-line hud-v-bottom" />
        <div className="hud-dot" />
      </div>

      {/* Lagging outer ring */}
      <div
        ref={ringRef}
        className="hud-ring"
        style={{ opacity: visible ? 1 : 0 }}
      />

      {/* X / Y coordinate HUD */}
      <div className="hud-coords" style={{ opacity: visible ? 1 : 0 }}>
        <span className="hud-coord-label">X</span>
        <span className="hud-coord-value">{pad(coords.x)}</span>
        <span className="hud-coord-sep"> / </span>
        <span className="hud-coord-label">Y</span>
        <span className="hud-coord-value">{pad(coords.y)}</span>
      </div>
    </>
  );
}
