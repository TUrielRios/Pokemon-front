import React from 'react';
import './About.css'
import Tiziano from '../../assets/tiziano.jpg'
import linkedinLogo from '../../assets/linkedin-logo.png'
import gitHubLogo from '../../assets/github-logo.png'
import { Link } from 'react-router-dom';

const About = () => {
    const skills = [

        { name: 'HTML', level: 100 },
        { name: 'CSS', level: 100 },
        { name: 'JavaScript', level: 100 },
        { name: 'Python', level: 50 },
        { name: 'React', level: 100 },
        { name: 'Redux', level: 95 },
        { name: 'Node.js', level: 100 },
        { name: 'Express', level: 100 },
        { name: 'Sequelize', level: 100 },

    ];
    const linkedinURL = 'https://www.linkedin.com/in/tiziano-rios-049b5b264/'; // Reemplaza con tu URL de LinkedIn
    const githubURL = 'https://github.com/TUrielRios'; // Reemplaza con tu URL de GitHub

    return (
        <div className="card-about">
            <div className="card-about-content">
                <Link to="/home">
                    <button className="back-to-home-button">Back</button>
                </Link>
                <div className="card-about-image">
                    <img src={Tiziano} alt="Image" />
                </div>
                <div className="card-about-details">
                    <h1 className='about-text'>About Me</h1>
                    <p className='paragraph-text'>
                        Hi! I'm Tiziano, a passionate full stack web developer from Argentina. Here are my skills in some key languages and technologies:
                    </p>
                    <div className="skills">
                        {skills.map((skill, index) => (
                            <div className="skill" key={index}>
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-bar">
                                    <div className="skill-fill" style={{ width: `${skill.level}%` }}>
                                        {skill.level}%
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="social-links">
                        <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
                            <img src={linkedinLogo} alt="LinkedIn" />
                        </a>
                        <a href={githubURL} target="_blank" rel="noopener noreferrer">
                            <img src={gitHubLogo} alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;