import React from "react";
import { Link, useLocation } from 'react-router-dom';

const skillIcons = {
    HTML: { src: "https://simpleicons.org/icons/html5.svg", color: "#e34f26" },
    CSS: { src: "https://simpleicons.org/icons/css3.svg", color: "#1572B6" },
    JavaScript: { src: "https://simpleicons.org/icons/javascript.svg", color: "#f7df1e" },
    React: { src: "https://simpleicons.org/icons/react.svg", color: "#61dafb" },
    Bootstrap: { src: "https://simpleicons.org/icons/bootstrap.svg", color: "#7952b3" },
    "Material UI": { src: "https://simpleicons.org/icons/materialui.svg", color: "#0081CB" },
    "Node.js": { src: "https://simpleicons.org/icons/nodedotjs.svg", color: "#339933" },
    Express: { src: "https://simpleicons.org/icons/express.svg", color: "#000000" },
    PostgreSQL: { src: "https://simpleicons.org/icons/postgresql.svg", color: "#336791" },
    "RESTful APIs": { src: "https://simpleicons.org/icons/api.svg", color: "#e34f26" },
    MySQL: { src: "https://simpleicons.org/icons/mysql.svg", color: "#4479A1" },
    Git: { src: "https://simpleicons.org/icons/git.svg", color: "#F05032" },
    Docker: { src: "https://simpleicons.org/icons/docker.svg", color: "#2496ed" },
    AWS: { src: "https://simpleicons.org/icons/amazonaws.svg", color: "#FF9900" },
    Github: { src: "https://simpleicons.org/icons/github.svg", color: "#181717" },
    Postman: { src: "https://simpleicons.org/icons/postman.svg", color: "#FF6C37" },
    "VS Code": { src: "https://simpleicons.org/icons/visualstudiocode.svg", color: "#007ACC" },
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
                                                    {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Material UI'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Backend Development</h3>
                                                <ul>
                                                    {['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'MySQL'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Tools & Technologies</h3>
                                                <ul>
                                                    {['Git', 'Docker', 'AWS', 'Github', 'Postman', 'VS Code'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                </div>
            </section>
        </>
    )
}