import React from 'react';
import '../App.css';
import '../portfolio.css';

function ProjectCards(props) {
    const github = "https://github.com/your-username";
    const deploy = "https://example.com";

    return (
        <div className={`grid-item gallery__item--${props.id}`}>
            <img src={props.image} alt={props.name} className="gallery__img"/>
            <div className="desc">
                <h5>{props.name}</h5>
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
}
export default ProjectCards;
