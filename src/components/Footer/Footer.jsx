import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>&copy; 2025 - {year} All Rights Reserved</p>
            <Link to='/privacy'>Privacy Policy</Link>
            <Link to='/terms'>Terms of Service</Link>
            <Link to='/contact'>Contact Me</Link>

            <div className='socials'>
                <div className="socials">
                    <a href='https://x.com/Tyejoseph1' target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href='https://ke.linkedin.com/in/tye-joseph-0bb158239/' target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href='https://github.com/m-bwela' target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}