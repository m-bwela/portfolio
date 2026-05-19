import React, { useEffect, useState } from 'react';
import './BootScreen.css';

// Each line has a base (typed out) and a result (revealed after "thinking")
const bootLines = [
  { base: 'SYSTEM INIT ............', result: ' v2.4.1' },
  { base: 'Loading kernel models ............', result: ' OK' },
  { base: 'Mounting filesystem ............', result: ' OK' },
  { base: 'Establishing network connections ............', result: ' OK' },
  { base: 'Loading portfolio assets ............', result: ' OK' },
  { base: 'Applying purple theme ............', result: ' OK' },
  { base: 'System ready. Launching UI ............', result: ' OK' },
];

const speechMessages = [
  'INIT...', 'Loading...', 'Mounting...', 'Connecting...', 'Assets...', 'Theming...', 'Almost!',
];

export default function BootScreen({ onFinish }) {
  const [lineIdx, setLineIdx]       = useState(0);
  const [typed, setTyped]           = useState('');
  const [phase, setPhase]           = useState('typing');
  const [doneCount, setDoneCount]   = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [showIdentity, setShowIdentity] = useState(false);

  // Blinking cursor
  useEffect(() => {
    const id = setInterval(() => setShowCursor(c => !c), 500);
    return () => clearInterval(id);
  }, []);

  // Typing phase
  useEffect(() => {
    if (phase !== 'typing' || lineIdx >= bootLines.length) return;
    let char = 0;
    setTyped('');
    const id = setInterval(() => {
      char++;
      setTyped(bootLines[lineIdx].base.slice(0, char));
      if (char >= bootLines[lineIdx].base.length) {
        clearInterval(id);
        setPhase('thinking');
      }
    }, 48);
    return () => clearInterval(id);
  }, [lineIdx, phase]);

  // Thinking phase — just blink cursor silently, then reveal result
  useEffect(() => {
    if (phase !== 'thinking') return;
    const id = setTimeout(() => setPhase('next'), 900);
    return () => clearTimeout(id);
  }, [phase]);

  // Advance to next line
  useEffect(() => {
    if (phase !== 'next') return;
    setDoneCount(lineIdx + 1);
    if (lineIdx + 1 < bootLines.length) {
      const id = setTimeout(() => {
        setLineIdx(i => i + 1);
        setPhase('typing');
      }, 500);
      return () => clearTimeout(id);
    }
  }, [phase, lineIdx]);

  // All lines done — show identity then finish
  useEffect(() => {
    if (doneCount < bootLines.length) return;
    const t1 = setTimeout(() => setShowIdentity(true), 400);
    const t2 = setTimeout(onFinish, 2400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [doneCount, onFinish]);

  const isOk     = (result) => result.trim() === 'OK';
  const barWidth = Math.round(72 * (doneCount / bootLines.length));
  const isActive = doneCount < bootLines.length;
  const speech   = showIdentity
    ? 'Online! 🚀'
    : speechMessages[Math.min(lineIdx, speechMessages.length - 1)];

  return (
    <div className="boot-screen">
      <div className="boot-layout">

        {/* ── ROBOT PANEL ── */}
        <div className="robot-panel">
          <div className="speech-bubble">{speech}</div>

          <svg
            className={`robot-svg${isActive ? ' robot-active' : ''}`}
            viewBox="0 0 140 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="head-shine" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00ff41" stopOpacity="1"/>
                <stop offset="100%" stopColor="#00ff41" stopOpacity="0"/>
              </linearGradient>
            </defs>

            {/* Antenna */}
            <line x1="70" y1="8" x2="70" y2="28" stroke="#00a829" strokeWidth="3" strokeLinecap="round"/>
            <circle className="antenna-ball" cx="70" cy="6" r="5" fill="#00ff41" opacity="0.8"/>
            <circle cx="70" cy="6" r="8" fill="#00ff41" opacity="0.15"/>

            {/* Robot body — floats when active */}
            <g className="robot-body">
              {/* HEAD */}
              <rect x="22" y="28" width="96" height="76" rx="12" fill="#0d1a0f" stroke="#00a829" strokeWidth="2"/>
              <rect x="28" y="32" width="84" height="30" rx="8" fill="url(#head-shine)" opacity="0.15"/>

              {/* Eye sockets */}
              <rect x="30" y="45" width="34" height="26" rx="6" fill="#001a06" stroke="#00a829" strokeWidth="1.5"/>
              <rect x="76" y="45" width="34" height="26" rx="6" fill="#001a06" stroke="#00a829" strokeWidth="1.5"/>

              {/* Left eye */}
              <g className="eye-left" style={{ transformOrigin: '47px 58px' }}>
                <ellipse cx="47" cy="58" rx="10" ry="10" fill="#00ff41" opacity="0.9"/>
                <ellipse cx="47" cy="58" rx="5"  ry="5"  fill="#001a06"/>
                <ellipse cx="48.5" cy="56.5" rx="2" ry="2" fill="#00ff41" opacity="0.7"/>
              </g>
              {/* Right eye */}
              <g className="eye-right" style={{ transformOrigin: '93px 58px' }}>
                <ellipse cx="93" cy="58" rx="10" ry="10" fill="#00ff41" opacity="0.9"/>
                <ellipse cx="93" cy="58" rx="5"  ry="5"  fill="#001a06"/>
                <ellipse cx="94.5" cy="56.5" rx="2" ry="2" fill="#00ff41" opacity="0.7"/>
              </g>

              {/* Eye glow */}
              <ellipse cx="47" cy="58" rx="13" ry="13" fill="#00ff41" opacity="0.08"/>
              <ellipse cx="93" cy="58" rx="13" ry="13" fill="#00ff41" opacity="0.08"/>

              {/* Mouth */}
              <rect x="35" y="80" width="70" height="16" rx="4" fill="#001a06" stroke="#00a829" strokeWidth="1.5"/>
              <rect x="42" y="87" width="56" height="2" rx="1" fill="#00a829" opacity="0.8"/>

              {/* Neck */}
              <rect x="58" y="104" width="24" height="12" rx="3" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>

              {/* Body */}
              <rect x="16" y="116" width="108" height="72" rx="14" fill="#081208" stroke="#00a829" strokeWidth="2"/>
              <rect x="26" y="126" width="88" height="52" rx="8"  fill="#001a06" stroke="#00a829" strokeWidth="1"/>

              {/* Chest LEDs */}
              <circle className="chest-led" cx="46" cy="142" r="5" fill="#00ff41" style={{ animationDelay: '0s' }}/>
              <circle className="chest-led" cx="70" cy="142" r="5" fill="#00ff41" style={{ animationDelay: '0.27s' }}/>
              <circle className="chest-led" cx="94" cy="142" r="5" fill="#00ff41" style={{ animationDelay: '0.54s' }}/>

              {/* Progress bar */}
              <rect x="34" y="156" width="72" height="8" rx="4" fill="#001a06" stroke="#00a829" strokeWidth="1"/>
              <rect x="34" y="156" width={barWidth} height="8" rx="4" fill="#00ff41" opacity="0.85"
                style={{ transition: 'width 0.5s ease' }}/>

              {/* Left arm — waves when active */}
              <g className={`arm-left${isActive ? ' arm-wave' : ''}`} style={{ transformOrigin: '10px 130px' }}>
                <rect x="0" y="110" width="20" height="50" rx="8" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
                <circle cx="10" cy="165" r="9" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
                <line x1="6"  y1="161" x2="6"  y2="169" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="10" y1="160" x2="10" y2="170" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="14" y1="161" x2="14" y2="169" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
              </g>

              {/* Right arm */}
              <g>
                <rect x="120" y="110" width="20" height="50" rx="8" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
                <circle cx="130" cy="165" r="9" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
                <line x1="126" y1="161" x2="126" y2="169" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="130" y1="160" x2="130" y2="170" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
                <line x1="134" y1="161" x2="134" y2="169" stroke="#00a829" strokeWidth="1.5" strokeLinecap="round"/>
              </g>

              {/* Legs */}
              <rect x="36" y="186" width="26" height="20" rx="6" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
              <rect x="78" y="186" width="26" height="20" rx="6" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>

              {/* Feet */}
              <rect x="30" y="202" width="36" height="10" rx="5" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
              <rect x="74" y="202" width="36" height="10" rx="5" fill="#0d1a0f" stroke="#00a829" strokeWidth="1.5"/>
            </g>
          </svg>
        </div>

        {/* ── TERMINAL ── */}
        <div className="boot-terminal">
          {bootLines.slice(0, doneCount).map((line, i) => (
            <div key={i} className="boot-line">
              {line.base}
              <span className={isOk(line.result) ? 'boot-ok' : 'boot-result'}>{line.result}</span>
            </div>
          ))}
          {lineIdx < bootLines.length && doneCount <= lineIdx && (
            <div className="boot-line">
              {typed}
              <span className="boot-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </div>
          )}
          {showIdentity && (
            <div className="boot-line boot-identity">
              ► <span className="boot-identity-name">TYE NZAMBU</span> — FULL STACK ENGINEER
              <span className="boot-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
