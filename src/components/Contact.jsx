import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PageNavigation from './PageNavigation/PageNavigation';

export default function Contact() {
    const location = useLocation();

    const [status, setStatus] = useState('idle'); // idle | loading | success | error

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('loading');
        const form = e.target;
        const formData = new FormData(form);

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

    function handleFocus(e) {
        e.target.style.background = '#2B2E4A';
        e.target.style.color = '#fff';
    }

    function handleBlur(e) {
        e.target.style.background = '';
        e.target.style.color = '';
    }

    return (
        <>
        {location.pathname !== '/' && (
            <div className='home-link-wrap'>
                <Link to='/' className='home-link'>Home🏠</Link>
            </div>
        )}
            <section className='contact section' id='contact'>
            <h2 className='section-title'>Contact Me 📞</h2>
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
                    <strong className='contact-icon'>LinkedIn:</strong> <a href="https://ke.linkedin.com/in/tye-joseph-0bb158239/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tye-joseph-0bb158239/</a>
                </li>
                <li>
                    <strong className='contact-icon'>GitHub:</strong> <a href="https://github.com/m-bwela" target="_blank" rel="noopener noreferrer">github.com/m-bwela</a>
                </li>
            </ul>
            <div className='contact-container'>
                <form onSubmit={handleSubmit} className='contact-form'>
                    <input type="text" name="name" placeholder="Your Name" onFocus={handleFocus} onBlur={handleBlur} required />
                    <input type="email" name="email" placeholder="Your Email" onFocus={handleFocus} onBlur={handleBlur} required />
                    <textarea name="message" placeholder="Your Message" onFocus={handleFocus} onBlur={handleBlur} required></textarea>
                    <button type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Sending...' : 'Send'}</button>
                    {status === 'success' && <p className='form-success' style={{ color: '#1b7a3e', marginTop: '0.75rem' }}>Thanks — your message has been sent.</p>}
                    {status === 'error' && <p className='form-error' style={{ color: '#b00020', marginTop: '0.75rem' }}>Something went wrong — please try again later.</p>}
                </form>
            </div>
            </section>
            <PageNavigation />
        </>
    )
}