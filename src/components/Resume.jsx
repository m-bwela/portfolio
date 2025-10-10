import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Resume() {
    const location = useLocation();
    return (
        <>
        {location.pathname !== '/' && (
            <div className="home-link-wrap">
                <Link to="/" className='home-link'>Home🏠</Link>
            </div>
        )}
         <section id='resume' className='resume section-bg'>
            <div className='row justify-content-center align-items-center text-center mb-5'>
                <div className='col-lg-6'>
                <h2 className='resume-title'>My Resume</h2>
                <div className='resume-content'>
                    <p>Here is a summary of my professional experience and skills.</p>
                </div>
                <div className='resume-download'>
                    <a href="/src/assets/resume_template.pdf" className="btn btn-primary" download>Download Resume</a>
                </div>
                </div>
            </div>
         </section>
        </>
    )
}