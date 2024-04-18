// React and asset imports
import React from 'react';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import MernLogo from '../assets/images/mern-logo.jpg';
import WebpackLogo from '../assets/images/webpack-logo.jpg';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.jpg';
import MongoLogo from '../assets/images/mongodb-logo.jpg';
import '../App.css';  // General app styles
import '../portfolio.css';  // Specific styles for the portfolio components

// Resume component definition
const Resume = () => {
    return (
        // React Fragment used to return multiple child elements without adding extra nodes to the DOM
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            {/* Resume download link section */}
                            <div className="header">
                                <h3>
                                    <a href="/resume.pdf" download="Kristie_Fisher_Resume.pdf">
                                        Download Resume: Kristie Fisher
                                    </a>
                                </h3>
                            </div>

                            <div className="modal-footer"/>  // Placeholder for layout consistency

                            {/* Skills header */}
                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer"/>  // Another placeholder for layout consistency

                            {/* Skills list section */}
                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Web Development Skills</div>
                                </div>
                                <div className='grid-container-skills'>
                                    {/* Each grid-item-skills contains a skill label */}
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>HTML</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>CSS</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>JavaScript</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>React.js</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Node.js</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>Express.js</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>MongoDB</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>RESTful APIs</p>
                                    </div>
                                    <div className='grid-item-skills'>
                                        <p className='p-about'>GraphQL</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer"/>  // Footer to create separation and balance in layout

                            {/* Technologies logos section */}
                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>
                                {/* Display logos of various technologies used */}
                                <div className='grid-item-skills'>
                                    <img src={MernLogo} className='img-skills' alt="MERN Stack logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={JqueryLogo} className='img-skills' alt="jQuery logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={WebpackLogo} className='img-skills' alt="Webpack logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={BootstrapLogo} className='img-skills' alt="Bootstrap logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={HandlebarsLogo} className='img-skills' alt="Handlebars logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={SqlLogo} className='img-skills' alt="SQL logo" />
                                </div>
                                <div className='grid-item-skills'>
                                    <img src={MongoLogo} className='img-skills' alt="MongoDB logo" />
                                </div>
                            </div>

                            <div className="modal-footer"/>  // Another footer for aesthetic completion
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

// Export the Resume component for use elsewhere in the application
export default Resume;
