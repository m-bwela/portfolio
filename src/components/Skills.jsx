import React from "react";
import { Link, useLocation } from 'react-router-dom';
import usePageTitle from '../hooks/usePageTitle';
import PageNavigation from './PageNavigation/PageNavigation';

const skillIcons = {
    HTML: { src: "https://simpleicons.org/icons/html5.svg", color: "#E34F26" },
    CSS: { src: "https://simpleicons.org/icons/css3.svg", color: "#1572B6" },
    JavaScript: { src: "https://simpleicons.org/icons/javascript.svg", color: "#F7DF1E" },
    React: { src: "https://simpleicons.org/icons/react.svg", color: "#61DAFB" },
    Bootstrap: { src: "https://simpleicons.org/icons/bootstrap.svg", color: "#7952B3" },
    "Material UI": { src: "https://simpleicons.org/icons/mui.svg", color: "#007FFF" },
    "Node.js": { src: "https://simpleicons.org/icons/nodedotjs.svg", color: "#339933" },
    Express: { src: "https://simpleicons.org/icons/express.svg", color: "#000000" },
    PostgreSQL: { src: "https://simpleicons.org/icons/postgresql.svg", color: "#4169E1" },
    "RESTful APIs": { src: "https://simpleicons.org/icons/fastapi.svg", color: "#009688" },
    MySQL: { src: "https://simpleicons.org/icons/mysql.svg", color: "#4479A1" },
    Git: { src: "https://simpleicons.org/icons/git.svg", color: "#F05032" },
    Docker: { src: "https://simpleicons.org/icons/docker.svg", color: "#2496ED" },
    AWS: { src: "https://simpleicons.org/icons/amazonwebservices.svg", color: "#FF9900" },
    Github: { src: "https://simpleicons.org/icons/github.svg", color: "#181717" },
    Postman: { src: "https://simpleicons.org/icons/postman.svg", color: "#FF6C37" },
    "VS Code": { src: "https://simpleicons.org/icons/visualstudiocode.svg", color: "#007ACC" },
    TailwindCSS: { src: "https://simpleicons.org/icons/tailwindcss.svg", color: "#06B6D4" },
    SocketIO: { src: "https://simpleicons.org/icons/socketdotio.svg", color: "#010101" },
    MongoDB: { src: "https://simpleicons.org/icons/mongodb.svg", color: "#47A248" },
    Vercel: { src: "https://simpleicons.org/icons/vercel.svg", color: "#000000" },
};

function SkillItem({ name }) {
    const icon = skillIcons[name];
    const [imgError, setImgError] = React.useState(false);
    return (
        <li style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
            {icon && (
                <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 32,
                    height: 32,
                    background: icon.color,
                    borderRadius: 6,
                    marginRight: 10,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    overflow: 'hidden',
                    fontSize: 16,
                    color: '#fff',
                }}>
                    {imgError ? (
                        name.charAt(0)
                    ) : (
                        <img
                            src={icon.src}
                            alt={name + ' logo'}
                            style={{ width: '100%', height: '100%', objectFit: 'contain', padding: 4 }}
                            onError={() => setImgError(true)}
                            loading="lazy"
                        />
                    )}
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
                        <h3 style={{ color: '#c084fc', fontWeight: 700, marginBottom: '1rem' }}>Frontend Development</h3>
                                                <ul>
                                                    {['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap', 'Material UI', 'TailwindCSS'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 style={{ color: '#c084fc', fontWeight: 700, marginBottom: '1rem' }}>Backend Development</h3>
                                                <ul>
                                                    {['Node.js', 'Express', 'PostgreSQL', 'RESTful APIs', 'MySQL', 'MongoDB'].map(skill => (
                                                        <SkillItem key={skill} name={skill} />
                                                    ))}
                                                </ul>
                    </div>
                    <div className="col-md-4">
                        <h3 style={{ color: '#c084fc', fontWeight: 700, marginBottom: '1rem' }}>Tools & Technologies</h3>
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