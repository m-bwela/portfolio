import React from "react";
import { Link, useLocation } from 'react-router-dom';

export default function Skills() {
    const location = useLocation();
    return (
        <>
        {location.pathname !== '/' && <Link to="/">Home🏠</Link>}
            <section id="skills" className="container" style={{ marginTop: '20px'}}>
                <h2 className="section-title text-center mb-4">My Skills</h2>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Frontend Development</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Material UI</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Backend Development</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>PostgreSQL</li>
                            <li>RESTful APIs</li>
                            <li>MySQL</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h3>Tools & Technologies</h3>
                        <ul>
                            <li>Git</li>
                            <li>Docker</li>
                            <li>AWS</li>
                            <li>Github</li>
                            <li>Postman</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}