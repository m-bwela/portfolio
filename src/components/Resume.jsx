import React, { useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import usePageTitle from '../hooks/usePageTitle';
import './Resume.css';
import resumePdf from '../assets/Tye_resume.pdf';
import PageNavigation from './PageNavigation/PageNavigation';

// ─── EmailJS Setup ───
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Add an Email Service (e.g. Gmail) → copy the Service ID below
// 3. Create an Email Template with these variables:
//      {{to_email}}  – recipient's email
//      {{from_name}} – your name
//      {{resume_link}} – link to your resume
//      {{message}}   – email body text
// 4. Copy the Template ID and Public Key below
const EMAILJS_SERVICE_ID = 'service_rqhx4o5';
const EMAILJS_TEMPLATE_ID = 'template_z5vvxco';
const EMAILJS_PUBLIC_KEY = '-c5nbgxYJt-Oun2Rq';

export default function Resume() {
    usePageTitle('Resume');
    const location = useLocation();
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [email, setEmail] = useState('');
    const [sending, setSending] = useState(false);
    const [emailStatus, setEmailStatus] = useState(''); // '' | 'sent' | 'error'
    const downloadRef = useRef(null);

    const handleDownloadClick = () => {
        setShowEmailPopup(true);
        setEmailStatus('');
    };

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if (!email) return;

        // Immediately download the PDF
        downloadRef.current?.click();

        // Also send the resume link via email
        setSending(true);
        try {
            const resumeUrl = window.location.origin + resumePdf;
            await emailjs.send(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                {
                    to_email: email,
                    from_name: 'Tye Nzambu',
                    resume_link: resumeUrl,
                    message: `Hi! Here is my resume as requested. You can download it here: ${resumeUrl}`,
                },
                EMAILJS_PUBLIC_KEY
            );
            setEmailStatus('sent');
        } catch {
            setEmailStatus('error');
        }
        setSending(false);
    };

    return (
        <>
        <div className="page-container">
            <div className="home-link-wrap">
                <Link to="/" className='home-link'>Home🏠</Link>
            </div>
            
            <section id='resume' className='resume section-bg'>
                <div className='row justify-content-center align-items-center text-center mb-5'>
                    <div className='col-lg-12'>
                        <h2 className='resume-title'>My Resume</h2>
                        
                        <div className='resume-content'>
                            <p>Full-Stack Developer with hands-on experience building modern web applications using React, Node.js, and PostgreSQL. Skilled in delivering responsive, user-centric solutions — from real-time chat systems to full-stack CRUD applications.</p>
                        </div>
                        
                        <div className='resume-details'>
                            <div className='resume-section'>
                                <h3>Key Projects</h3>
                                <div className='resume-item'>
                                    <h4>Chat App — Real-Time Messaging Platform</h4>
                                    <h5>React · Socket.io · Node.js · Express</h5>
                                    <p>Engineered a full-stack real-time chat application supporting multiple concurrent users with instant message delivery and presence detection.</p>
                                </div>
                                <div className='resume-item'>
                                    <h4>Personal Expense Tracker</h4>
                                    <h5>React · Material UI · JavaScript</h5>
                                    <p>Developed a dynamic expense tracking app with category-based visual breakdowns and interactive dashboard charts.</p>
                                </div>
                                <div className='resume-item'>
                                    <h4>Portfolio Website</h4>
                                    <h5>React · Vite · React Router · CSS3</h5>
                                    <p>Designed a responsive portfolio with dark/light mode, glass-morphism UI, GitHub API integration, and lazy-loaded code splitting.</p>
                                </div>
                                <div className='resume-item'>
                                    <h4>Bookify — Book Collection Manager</h4>
                                    <h5>Node.js · Express · HTML5</h5>
                                    <p>Built a server-side rendered book management system with RESTful API endpoints, search, and favorites.</p>
                                </div>
                            </div>

                            <div className='resume-section'>
                                <h3>Professional Experience</h3>
                                <div className='resume-item'>
                                    <h4>System Administrator</h4>
                                    <h5>Kenya News Agency · Oct 2023 – Dec 2023</h5>
                                    <p>Tested, implemented, and maintained the KNA website ensuring 99% uptime during deployment cycles.</p>
                                    <p>Administered network infrastructure, diagnosing and resolving connectivity issues organization-wide.</p>
                                    <p>Configured and deployed newly acquired hardware and software with standardized procedures.</p>
                                </div>
                                <div className='resume-item'>
                                    <h4>Frontend Developer Intern</h4>
                                    <h5>2022 – 2023</h5>
                                    <p>Built responsive client websites with mobile-first design and cross-browser compatibility.</p>
                                    <p>Translated wireframes into pixel-perfect, accessible web interfaces alongside design teams.</p>
                                </div>
                            </div>
                            
                            <div className='resume-section'>
                                <h3>Education</h3>
                                <div className='resume-item'>
                                    <h4>Diploma in Computer Science</h4>
                                    <h5>Mount Kenya University · Graduated Aug 2025</h5>
                                    <p>Data Structures & Algorithms, Database Management, Software Engineering, Web Development, Networking</p>
                                </div>
                            </div>
                            
                            <div className='resume-section'>
                                <h3>Technical Skills</h3>
                                <div className='resume-skills'>
                                    <span>React</span>
                                    <span>JavaScript (ES6+)</span>
                                    <span>Node.js</span>
                                    <span>Express.js</span>
                                    <span>HTML5/CSS3</span>
                                    <span>Tailwind CSS</span>
                                    <span>Material UI</span>
                                    <span>Socket.io</span>
                                    <span>PostgreSQL</span>
                                    <span>Git/GitHub</span>
                                    <span>REST APIs</span>
                                    <span>JWT Auth</span>
                                    <span>Vite</span>
                                    <span>Vercel</span>
                                    <span>PHP</span>
                                </div>
                            </div>

                            <div className='resume-section'>
                                <h3>Certifications</h3>
                                <div className='resume-item'>
                                    <h4>Full-Stack Web Developer</h4>
                                    <h5>Udemy · 2025</h5>
                                </div>
                                <div className='resume-item'>
                                    <h4>WordPress Developer</h4>
                                    <h5>Udemy · 2025</h5>
                                </div>
                            </div>
                        </div>
                        
                        <div className='resume-download'>
                            <button className="btn" onClick={handleDownloadClick}>
                                Download Full Resume 📄
                            </button>
                            <a
                                ref={downloadRef}
                                href={resumePdf}
                                download="Tye_resume.pdf"
                                style={{ display: 'none' }}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {showEmailPopup && (
                <div className="email-overlay" onClick={() => setShowEmailPopup(false)}>
                    <div className="email-popup" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="popup-close"
                            onClick={() => setShowEmailPopup(false)}
                            aria-label="Close"
                        >
                            ✕
                        </button>
                        <div className="popup-icon">📩</div>
                        <h3>Enter your email to download</h3>
                        <p>The resume will download and also be sent to your email.</p>

                        {emailStatus === 'sent' ? (
                            <div className="popup-success">
                                <span style={{ fontSize: '2rem' }}>✅</span>
                                <p>Resume downloaded &amp; sent to <strong>{email || 'your email'}</strong>!</p>
                                <button
                                    type="button"
                                    className="popup-submit"
                                    onClick={() => {
                                        setShowEmailPopup(false);
                                        setEmail('');
                                        setEmailStatus('');
                                    }}
                                >
                                    Close
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleEmailSubmit}>
                                <input
                                    type="email"
                                    placeholder="your.email@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    autoFocus
                                    className="popup-input"
                                    disabled={sending}
                                />
                                <button type="submit" className="popup-submit" disabled={sending}>
                                    {sending ? 'Sending...' : 'Download & Send to Email'}
                                </button>
                                {emailStatus === 'error' && (
                                    <p className="popup-error">
                                        Resume downloaded! Email delivery failed — please try again or download directly.
                                    </p>
                                )}
                            </form>
                        )}
                    </div>
                </div>
            )}

            <PageNavigation />
        </div>
        </>
    )
}