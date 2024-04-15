import React from 'react';
import '../App.css';
import '../portfolio.css';

const ProjectCards = ({ id, image, name, github, deploy }) => (
    <div className={`grid-item gallery__item--${id}`}>
        <img src={image} alt={name} className="gallery__img" />
        <div className="desc">
            <h5>{name}</h5>
        </div>
        <div className="dep-links">
            <a href={github} target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" className="project-icon" />
            </a>
            <a href={deploy} target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" className="project-icon" />
            </a>
        </div>
    </div>
);

export default ProjectCards;
