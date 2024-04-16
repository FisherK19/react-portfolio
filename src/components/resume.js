import React from 'react';
import Logo from '../assets/images/logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import MernLogo from '../assets/images/mern-logo.jpg';
import WebpackLogo from '../assets/images/webpack-logo.jpg';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.jpg';
import MongoLogo from '../assets/images/mongodb-logo.jpg';
import '../App.css';
import '../portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                                <h3>Download Resume: <a href="">Kristie Fisher</a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Computer Science Fundamentals</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Data Structures</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Algorithm</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Design Patterns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Logo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MernLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={ReduxLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={WebpackLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={VueLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' />
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Project Management</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Agile Principles and Practices</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Schedule and Risk Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Project Scope and Quality Management</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Web Developer</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Resume;