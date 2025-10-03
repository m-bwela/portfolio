import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './About.css';

export default function About() {
    const location = useLocation();
    return (
        <>
        {location.pathname !== '/' && <Link to="/" className='home-link'>Home🏠</Link>}
        <section className='about section' id='about'>
            <div className='about-image'>
                <div className='about-image-overlay'>
                    <div className='about-image-title'>
                        Hello, I'm Tye Nzambu
                        </div>
                        <div className='about-image-subtitle'>
                            A passionate web developer
                        </div>
                        <div className='about-image-description'>
                            I create responsive and user-friendly web applications.
                        </div>
                        
                </div>
                <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTExL3Jhd3BpeGVsX29mZmljZV8zMl9ibGFja19mbGF0X3ZlY3Rvcl9pbGx1c3RyYXRpb25fb2Zfc2V0X29mXzRfc183YWRhN2I5MC1iNDFhLTQwZmYtYWQxOC04MWNmZjQ4NWFlM2QtbTN3dXc4c3MucG5n.png" alt="About Me" />
            </div>
            <div className='about-content'>
                <h2>About Me ℹ️</h2>
                <p className='about-description'>
                    Result-driven Web developer and knowledgeable computer science student with experience in building responsive, user-friendly software applications. My expertise includes using technologies such as React, Node.JS, and REST APIs. Seeking to leverage coding expertise in a fast-paced software development role. Excellent problem solving skills and a strong desire to learn and grow in the field.
                </p>
            </div>
        </section>
        </>
    )
}