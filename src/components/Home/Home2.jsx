import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home2.css';

export default function Home2() {
    return (
        <div className="typewriter-container">
        <Typewriter
            options={{
                strings: ['A Web Developer', 'A Software Engineer', 'A Tech Enthusiast', 'A Problem Solver', 'An Innovator', 'A Lifelong Learner', 'A Team Player', 'A Creative Thinker', 'A Passionate Coder', 'A Future Leader', 'A Dedicated Professional', 'A Continuous Improver', 'A Tech Explorer', 'A Solution Finder', 'A Detail Oriented Developer', 'A Collaborative Worker', 'A Critical Thinker', 'A Results Driven Individual', 'A Self Motivated Person', 'A Reliable Teammate', 'A Visionary', 'A Strategic Planner'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                cursor: '|',
                delay: 75,
            }}
        />
        </div>
    )
}