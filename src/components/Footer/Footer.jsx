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
            <Link to='/online-presence'>Online Presence</Link>
        </footer>
    )
}