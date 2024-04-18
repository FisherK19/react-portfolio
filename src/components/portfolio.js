import React from 'react';
import portfolio from '../data';
import ProjectCards from '../components/project';
import '../App.css';
import '../portfolio.css';

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="header">
                                    <h3>Portfolio</h3>
                                </div>
                                <div className="modal-footer" />

                                <div className="grid-container vertical-line">
                                    {portfolio.map((project) => (
                                        <ProjectCards
                                            id={project.id}
                                            key={project.id}
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
        </React.Fragment>
    );
};

export default Portfolio;
