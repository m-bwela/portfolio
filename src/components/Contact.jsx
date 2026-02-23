import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageNavigation from './PageNavigation/PageNavigation';

export default function Contact() {
    usePageTitle('Contact');
    const location = useLocation();

    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errors, setErrors] = useState({});

    function validate(formData) {
        const errs = {};
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        if (!name || name.length < 2) errs.name = 'Please enter your name (at least 2 characters).';
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.';
        if (!message || message.length < 10) errs.message = 'Please enter a message (at least 10 characters).';
        return errs;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        // Honeypot check — bots will fill this hidden field
        if (formData.get('_gotcha')) return;

        const errs = validate(formData);
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        setStatus('loading');

        try {
            const res = await fetch('https://formspree.io/f/mayvldwp', {
                method: 'POST',
                headers: {
                    Accept: 'application/json'
                },
                body: formData
            });

            if (res.ok) {
                setStatus('success');
                form.reset();
            } else {
                // try to parse JSON error message
                try {
                    const json = await res.json();
                    console.error('Formspree error response:', json);
                } catch (err) {
                    console.error('Formspree non-json error', err);
                }
                setStatus('error');
            }
        } catch (err) {
            console.error('Form submit failed', err);
            setStatus('error');
        }
    }

    // Focus/blur handled via CSS :focus in main.css

    return (
        <>
        {location.pathname !== '/' && (
            <div className='home-link-wrap'>
                <Link to='/' className='home-link'>Home🏠</Link>
            </div>
        )}
            <section className='contact section' id='contact'>
            <h2 className='section-title'>Get In Touch 📞</h2>
            <section className='contact-description'> 
                <p>If you have any questions or inquiries, feel free to reach out!</p>
            </section>
            <ul className='contact-list'> 
                <li>
                    <strong className='contact-icon'>Email:</strong> <a href="mailto:tyejoseph732@gmail.com">tyejoseph732@gmail.com</a>
                </li>
                <li>
                    <strong className='contact-icon'>Phone:</strong> <a href="tel:+254714430308">+254 714 430 308</a>
                </li>
                <li>
                    <strong className='contact-icon'>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tye-nzambu-07254muzan" target="_blank" rel="noopener noreferrer">linkedin.com/in/tye-nzambu-07254muzan</a>
                </li>
                <li>
                    <strong className='contact-icon'>GitHub:</strong> <a href="https://github.com/m-bwela" target="_blank" rel="noopener noreferrer">github.com/m-bwela</a>
                </li>
            </ul>
            <div className='contact-container'>
                <form onSubmit={handleSubmit} className='contact-form' noValidate>
                    {/* Honeypot field — hidden from humans, catches bots */}
                    <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                    
                    <input type="text" name="name" placeholder="Your Name" required aria-invalid={!!errors.name} />
                    {errors.name && <p className="form-field-error" style={{ color: '#f87171', fontSize: '0.85rem', margin: '0.25rem 0 0.5rem' }}>{errors.name}</p>}
                    
                    <input type="email" name="email" placeholder="Your Email" required aria-invalid={!!errors.email} />
                    {errors.email && <p className="form-field-error" style={{ color: '#f87171', fontSize: '0.85rem', margin: '0.25rem 0 0.5rem' }}>{errors.email}</p>}
                    
                    <textarea name="message" placeholder="Your Message" required aria-invalid={!!errors.message}></textarea>
                    {errors.message && <p className="form-field-error" style={{ color: '#f87171', fontSize: '0.85rem', margin: '0.25rem 0 0.5rem' }}>{errors.message}</p>}
                    
                    <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Send'}</button>
                    {status === 'success' && <p className='form-success' style={{ color: '#7c3aed', marginTop: '0.75rem' }}>Thanks — your message has been sent.</p>}
                    {status === 'error' && <p className='form-error' style={{ color: '#a259f7', marginTop: '0.75rem' }}>Something went wrong — please try again later.</p>}
                </form>
            </div>
            </section>
            <PageNavigation />
        </>
    )
}