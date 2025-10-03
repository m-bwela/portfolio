import React from 'react';
import Typewriter from 'typewriter-effect';
import './Home2.css';

export default function Home2() {
    return (
        <div className="typewriter-container">
        <Typewriter
            options={{
                strings: ['Welcome to my portfolio', 'A Web Developer', 'a Software Engineer', 'a Tech Enthusiast'],
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