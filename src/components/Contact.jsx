import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageNavigation from './PageNavigation/PageNavigation';

export default function Contact() {
    usePageTitle('Contact');
    const location = useLocation();

    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState(null);

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

    const contactMethods = [
        {
            icon: '📧',
            label: 'Email',
            value: 'tyejoseph732@gmail.com',
            href: 'mailto:tyejoseph732@gmail.com',
            color: '#4cc9f0'
        },
        {
            icon: '📱',
            label: 'Phone',
            value: '+254 714 430 308',
            href: 'tel:+254714430308',
            color: '#4ade80'
        },
        {
            icon: '💼',
            label: 'LinkedIn',
            value: 'tye-nzambu',
            href: 'https://www.linkedin.com/in/tye-nzambu-07254muzan',
            color: '#a855f7',
            external: true
        },
        {
            icon: '🐙',
            label: 'GitHub',
            value: 'm-bwela',
            href: 'https://github.com/m-bwela',
            color: '#f472b6',
            external: true
        }
    ];

    return (
        <>
        {location.pathname !== '/' && (
            <div className='home-link-wrap'>
                <Link to='/' className='home-link'>Home🏠</Link>
            </div>
        )}
        <section className='contact section' id='contact'>
            <div className="contact-hero">
                <h2 className='contact-title'>Let's Work Together</h2>
                <p className='contact-subtitle'>
                    Have a project in mind or just want to say hello? I'd love to hear from you.
                </p>
            </div>

            <div className="contact-layout">
                {/* Left side — Contact info cards */}
                <div className="contact-info-side">
                    <div className="contact-cards-grid">
                        {contactMethods.map((method, index) => (
                            <a
                                key={index}
                                href={method.href}
                                className="contact-method-card"
                                style={{ '--card-accent': method.color, animationDelay: `${index * 0.1}s` }}
                                {...(method.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                            >
                                <span className="contact-method-icon">{method.icon}</span>
                                <span className="contact-method-label">{method.label}</span>
                                <span className="contact-method-value">{method.value}</span>
                            </a>
                        ))}
                    </div>

                    <div className="contact-availability">
                        <span className="availability-dot"></span>
                        <span>Currently available for freelance work</span>
                    </div>
                </div>

                {/* Right side — Contact form */}
                <div className='contact-form-side'>
                    <div className="contact-form-header">
                        <h3>Send a Message</h3>
                        <p>Fill out the form and I'll get back to you within 24 hours.</p>
                    </div>

                    <form onSubmit={handleSubmit} className='contact-form' noValidate>
                        {/* Honeypot */}
                        <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                        
                        <div className={`form-group ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'has-error' : ''}`}>
                            <label htmlFor="contact-name">Your Name</label>
                            <input
                                id="contact-name"
                                type="text"
                                name="name"
                                placeholder="Tye Nzambu"
                                required
                                aria-invalid={!!errors.name}
                                onFocus={() => setFocusedField('name')}
                                onBlur={() => setFocusedField(null)}
                            />
                            {errors.name && <p className="form-field-error">{errors.name}</p>}
                        </div>

                        <div className={`form-group ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'has-error' : ''}`}>
                            <label htmlFor="contact-email">Your Email</label>
                            <input
                                id="contact-email"
                                type="email"
                                name="email"
                                placeholder="tye@example.com"
                                required
                                aria-invalid={!!errors.email}
                                onFocus={() => setFocusedField('email')}
                                onBlur={() => setFocusedField(null)}
                            />
                            {errors.email && <p className="form-field-error">{errors.email}</p>}
                        </div>

                        <div className={`form-group ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'has-error' : ''}`}>
                            <label htmlFor="contact-message">Your Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell me about your project..."
                                required
                                aria-invalid={!!errors.message}
                                onFocus={() => setFocusedField('message')}
                                onBlur={() => setFocusedField(null)}
                            ></textarea>
                            {errors.message && <p className="form-field-error">{errors.message}</p>}
                        </div>

                        <button type="submit" className="contact-submit-btn" disabled={status === 'loading'}>
                            {status === 'loading' ? (
                                <><span className="spinner"></span> Sending...</>
                            ) : (
                                <>Send Message <span className="btn-arrow">→</span></>
                            )}
                        </button>

                        {status === 'success' && (
                            <div className='form-success-msg'>
                                <span>✅</span> Thanks — your message has been sent! I'll reply soon.
                            </div>
                        )}
                        {status === 'error' && (
                            <div className='form-error-msg'>
                                <span>⚠️</span> Something went wrong — please try again later.
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
        <PageNavigation />
        </>
    )
}