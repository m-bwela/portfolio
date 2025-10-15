import React from 'react';
import { Link } from 'react-router-dom';
import './Privacy.css';

export default function Privacy() {
  return (
    <div className="privacy-container">
      <div className="home-link-wrap">
        <Link to="/" className="home-link">Home🏠</Link>
      </div>
      
      <div className="privacy-content">
        <h1 className="privacy-title">Privacy Policy</h1>
        
        <div className="privacy-section">
          <h2>1. Introduction</h2>
          <p>Welcome to Tye Nzambu's portfolio website. I respect your privacy and am committed to protecting your personal data. This privacy policy will inform you about how I look after your personal data when you visit my website and tell you about your privacy rights.</p>
        </div>

        <div className="privacy-section">
          <h2>2. The Data I Collect</h2>
          <p>When you visit my portfolio website, I may collect:</p>
          <ul>
            <li>Contact information: If you use the contact form, I collect your name, email address, and any message content you provide.</li>
            <li>Technical data: This includes your IP address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
            <li>Usage data: Information about how you use my website.</li>
          </ul>
        </div>

        <div className="privacy-section">
          <h2>3. How I Use Your Data</h2>
          <p>I use the data I collect to:</p>
          <ul>
            <li>Respond to your inquiries or messages</li>
            <li>Improve my website and user experience</li>
            <li>Monitor and analyze usage patterns and trends</li>
            <li>Protect the security and integrity of my website</li>
          </ul>
          <p>I will never sell your information to third parties.</p>
        </div>

        <div className="privacy-section">
          <h2>4. Cookies and Similar Technologies</h2>
          <p>My website may use cookies and similar tracking technologies to track activity on my website and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier.</p>
          <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of my website.</p>
        </div>

        <div className="privacy-section">
          <h2>5. Third-Party Services</h2>
          <p>My website may contain links to third-party websites, plug-ins, and applications. Clicking on those links may allow third parties to collect or share data about you. I do not control these third-party websites and am not responsible for their privacy statements.</p>
        </div>

        <div className="privacy-section">
          <h2>6. Data Security</h2>
          <p>I have implemented appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.</p>
        </div>

        <div className="privacy-section">
          <h2>7. Your Data Protection Rights</h2>
          <p>Depending on your location, you may have certain rights regarding your personal data, including:</p>
          <ul>
            <li>The right to access your personal data</li>
            <li>The right to correction of your personal data</li>
            <li>The right to erasure of your personal data</li>
            <li>The right to restrict processing of your personal data</li>
            <li>The right to data portability</li>
            <li>The right to object to processing of your personal data</li>
          </ul>
          <p>If you wish to exercise any of these rights, please contact me using the contact form on my website.</p>
        </div>

        <div className="privacy-section">
          <h2>8. Changes to This Privacy Policy</h2>
          <p>I may update this privacy policy from time to time. I will notify you of any changes by posting the new privacy policy on this page. You are advised to review this privacy policy periodically for any changes.</p>
        </div>

        <div className="privacy-section last-updated">
          <p>Last Updated: October 15, 2025</p>
        </div>
      </div>
    </div>
  );
}