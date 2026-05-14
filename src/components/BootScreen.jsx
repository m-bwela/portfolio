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

export default function BootScreen({ onFinish }) {
  const [lineIdx, setLineIdx]       = useState(0);
  const [typed, setTyped]           = useState('');
  const [phase, setPhase]           = useState('typing'); // 'typing' | 'thinking' | 'next'
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

  const isOk = (result) => result.trim() === 'OK';

  return (
    <div className="boot-screen">
      <div className="boot-terminal">
        {/* Completed lines */}
        {bootLines.slice(0, doneCount).map((line, i) => (
          <div key={i} className="boot-line">
            {line.base}
            <span className={isOk(line.result) ? 'boot-ok' : 'boot-result'}>
              {line.result}
            </span>
          </div>
        ))}

        {/* Active line */}
        {lineIdx < bootLines.length && doneCount <= lineIdx && (
          <div className="boot-line">
            {typed}
            <span className="boot-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </div>
        )}

        {/* Identity line */}
        {showIdentity && (
          <div className="boot-line boot-identity">
            ► <span className="boot-identity-name">TYE</span> — FULL STACK ENGINEER
            <span className="boot-cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
          </div>
        )}
      </div>
    </div>
  );
}
