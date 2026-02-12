import React from "react";
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageNavigation from './PageNavigation/PageNavigation';

const skillIcons = {
    HTML: { src: "https://simpleicons.org/icons/html5.svg", color: "#7c3aed" },
    CSS: { src: "https://simpleicons.org/icons/css3.svg", color: "#a259f7" },
    JavaScript: { src: "https://simpleicons.org/icons/javascript.svg", color: "#c084fc" },
    React: { src: "https://simpleicons.org/icons/react.svg", color: "#9333ea" },
    Bootstrap: { src: "https://simpleicons.org/icons/bootstrap.svg", color: "#7c3aed" },
    "Material UI": { src: "https://simpleicons.org/icons/materialui.svg", color: "#a259f7" },
    "Node.js": { src: "https://simpleicons.org/icons/nodedotjs.svg", color: "#c084fc" },
    Express: { src: "https://simpleicons.org/icons/express.svg", color: "#000000" },
    PostgreSQL: { src: "https://simpleicons.org/icons/postgresql.svg", color: "#7c3aed" },
    "RESTful APIs": { src: "https://simpleicons.org/icons/api.svg", color: "#a259f7" },
    MySQL: { src: "https://simpleicons.org/icons/mysql.svg", color: "#9333ea" },
    Git: { src: "https://simpleicons.org/icons/git.svg", color: "#c084fc" },
    Docker: { src: "https://simpleicons.org/icons/docker.svg", color: "#7c3aed" },
    AWS: { src: "https://simpleicons.org/icons/amazonaws.svg", color: "#a259f7" },
    Github: { src: "https://simpleicons.org/icons/github.svg", color: "#000000" },
    Postman: { src: "https://simpleicons.org/icons/postman.svg", color: "#9333ea" },
    "VS Code": { src: "https://simpleicons.org/icons/visualstudiocode.svg", color: "#c084fc" },
    TailwindCSS: { src: "https://simpleicons.org/icons/tailwindcss.svg", color: "#7c3aed" },
    SocketIO: { src: "https://simpleicons.org/icons/socketdotio.svg", color: "#000000" },
    MongoDB: { src: "https://simpleicons.org/icons/mongodb.svg", color: "#a259f7" },
    Vercel: { src: "https://simpleicons.org/icons/vercel.svg", color: "#000000" },
};

function SkillItem({ name }) {
    const icon = skillIcons[name];
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            {icon && (
                <span style={{
                    display: 'inline-block',
                    width: 32,
                    height: 32,
                    background: icon.color,
                    borderRadius: 6,
                    marginRight: 10,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                }}>
                    <img src={icon.src} alt={name + ' logo'} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }} />
                </span>
            )}
            <span style={{ fontWeight: 500 }}>{name}</span>
        </li>
    );
}

export default function Skills() {
    usePageTitle('Skills');
    const location = useLocation();
    return (
            <>
            {location.pathname !== '/' && (
                <div className="home-link-wrap">
                    <Link to="/" className="home-link">Home🏠</Link>
                </div>
            )}
            <section id="skills" className="container" style={{ marginTop: '20px'}}>
                <h2 className="section-title text-center mb-4">My Skills</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Frontend Development</h3>
                                                <ul>
                                                    {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Material UI', 'TailwindCSS'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Backend Development</h3>
                                                <ul>
                                                    {['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'MySQL', 'MongoDB'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Tools & Technologies</h3>
                                                <ul>
                                                    {['Git', 'Docker', 'AWS', 'Github', 'Postman', 'VS Code', 'SocketIO', 'Vercel'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                </div>
            </section>
            <PageNavigation />
        </>
    )
}