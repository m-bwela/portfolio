import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './OnlinePresence.css';
import PageNavigation from '../PageNavigation/PageNavigation';

export default function OnlinePresence() {
    const location = useLocation();

    const socialLinks = [
        {
            name: 'Twitter',
            icon: 'fab fa-twitter',
            url: 'https://x.com/Tyejoseph1',
            color: '#1DA1F2',
            description: 'Follow me for tech updates and insights'
        },
        {
            name: 'LinkedIn',
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/tye-nzambu-07254muzan/',
            color: '#0077B5',
            description: 'Connect with me professionally'
        },
        {
            name: 'GitHub',
            icon: 'fab fa-github',
            url: 'https://github.com/m-bwela',
            color: '#333',
            description: 'Check out my code and projects'
        },
        {
            name: 'Stack Overflow',
            icon: 'fab fa-stack-overflow',
            url: 'https://stackoverflow.com/users/30053937',
            color: '#F48024',
            description: 'See my contributions and answers'
        },
        {
            name: 'Geeksforgeeks',
            icon: 'fas fa-code',
            url: 'https://www.geeksforgeeks.org/user/tyejosegbd5/',
            color: '#0F9D58',
            description: 'Explore coding tutorials and challenges'
        }
    ];

    return (
        <>
            {location.pathname !== '/' && (
                <div className='home-link-wrap'>
                    <Link to="/" className='home-link'>Home🏠</Link>
                </div>
            )}
            <section className='online-presence section' id='online-presence'>
                <h2 className='section-title'>My Online Presence 🌐</h2>
                <p className='section-description'>
                    Connect with me on various platforms and stay updated with my latest work and insights.
                </p>
                
                <div className='social-cards'>
                    {socialLinks.map((social, index) => (
                        <a 
                            href={social.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='social-card'
                            key={index}
                            style={{ '--hover-color': social.color }}
                        >
                            <div className='social-icon'>
                                <i className={social.icon}></i>
                            </div>
                            <h3 className='social-name'>{social.name}</h3>
                            <p className='social-description'>{social.description}</p>
                            <span className='visit-link'>Visit Profile →</span>
                        </a>
                    ))}
                </div>
            </section>
            <PageNavigation />
        </>
    );
}
