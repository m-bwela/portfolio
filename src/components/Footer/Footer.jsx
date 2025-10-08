import React from 'react';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className='footer'>
            <p>&copy; 2025 - {year} All Rights Reserved</p>
            <a href='/'>Privacy Policy</a>
            <a href='/'>Terms of Service</a>
            <a href='/contact'>Contact Me</a>

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