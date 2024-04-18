import React from 'react';
import Avatar from '../assets/images/Kristie portfolio.jpg';
import EdXLogo from '../assets/images/EdX_newer_logo.svg.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} alt="Kristie Fisher" />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                    My name is <b>Kristie Fisher</b>, I am currently a full-stack developer student with a solid foundation in computer science and a growing expertise in key web technologies. 
                                    My toolkit includes JavaScript, ReactJS, and NodeJS for building dynamic front-end and back-end applications. 
                                    I also work with MongoDB for database management, and I'm skilled in crafting well-structured HTML and stylish CSS layouts.
                                    Additionally, I use tools like Insomnia to test and manage APIs. 
                                    I am passionate about learning and applying this knowledge to solve real-world problems.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>edX</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>
                                </div>
                                    
                                <div className='logo-container'>
                                    <a href='https://www.edx.org/' target='_blank' rel="noopener noreferrer"><img className='EDX-logo' src={EdXLogo} alt="EdX logo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

