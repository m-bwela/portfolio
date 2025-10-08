import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Contact() {
    const location = useLocation();

    function handleSubmit(e) {
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        console.log(data);
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
        {location.pathname !== '/' && <Link to='/' className='home-link'>Home🏠</Link>}
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
                <form action="https://formspree.io/f/mayvldwp" method="POST" className='contact-form'>
                    <input type="text" name="name" placeholder="Your Name" onFocus={handleFocus} onBlur={handleBlur} required />
                    <input type="email" name="email" placeholder="Your Email" onFocus={handleFocus} onBlur={handleBlur} required />
                    <textarea name="message" placeholder="Your Message" onFocus={handleFocus} onBlur={handleBlur} required></textarea>
                    <button type="submit" onClick={handleSubmit}>Send</button>
                </form>
            </div>
            </section>
        </>
    )
}