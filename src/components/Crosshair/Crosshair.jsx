import { useEffect, useRef } from 'react';
import './Crosshair.css';

export default function Crosshair() {
  const crosshairRef = useRef(null);
  const ringRef     = useRef(null);
  const xValRef     = useRef(null);
  const yValRef     = useRef(null);

  const cursorPos = useRef({ x: -300, y: -300 });
  const ringPos   = useRef({ x: -300, y: -300 });
  const rafRef    = useRef(null);
  const onScreen  = useRef(false);

  useEffect(() => {
    const onMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
      onScreen.current = true;
    };
    const onLeave = () => { onScreen.current = false; };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    document.body.style.cursor = 'none';
    document.documentElement.style.cursor = 'none';

    const animate = () => {
      const { x, y } = cursorPos.current;
      const show = onScreen.current ? '1' : '0';

      // Lerp ring toward cursor
      ringPos.current.x += (x - ringPos.current.x) * 0.12;
      ringPos.current.y += (y - ringPos.current.y) * 0.12;

      if (crosshairRef.current) {
        crosshairRef.current.style.transform = `translate(${x}px,${y}px)`;
        crosshairRef.current.style.opacity   = show;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px,${ringPos.current.y}px)`;
        ringRef.current.style.opacity   = show;
      }
      if (xValRef.current) xValRef.current.textContent = String(x).padStart(4, '0');
      if (yValRef.current) yValRef.current.textContent = String(y).padStart(4, '0');

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
      document.body.style.cursor = '';
      document.documentElement.style.cursor = '';
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      {/* Crosshair lines + center dot */}
      <div ref={crosshairRef} className="hud-crosshair" style={{ opacity: 0 }}>
        <div className="hud-line hud-h-left" />
        <div className="hud-line hud-h-right" />
        <div className="hud-line hud-v-top" />
        <div className="hud-line hud-v-bottom" />
        <div className="hud-dot" />
      </div>

      {/* Lagging outer ring */}
      <div ref={ringRef} className="hud-ring" style={{ opacity: 0 }} />

      {/* X / Y coordinate HUD */}
      <div className="hud-coords">
        <span className="hud-coord-label">X</span>
        <span ref={xValRef} className="hud-coord-value">0000</span>
        <span className="hud-coord-sep"> / </span>
        <span className="hud-coord-label">Y</span>
        <span ref={yValRef} className="hud-coord-value">0000</span>
      </div>
    </>
  );
}
