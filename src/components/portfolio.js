import React from 'react';
import portfolio from '../data';
import ProjectCards from '../components/project';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => (
    <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <div className='card'>
                        <div className='card-body'>
                            <header>
                                <h3>Portfolio</h3>
                            </header>
                            <hr /> {/* Replacing modal-footer with a horizontal rule for a visual break */}

                            <div className="grid-container">
                                {portfolio?.map((project) => (
                                    <ProjectCards
                                        key={project.id}
                                        id={project.id}
                                        image={project.image}
                                        name={project.name}
                                        github={project.github}
                                        deploy={project.deploy}
                                    />
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default Portfolio;
