import React from 'react';
import '../footer.css';

function Footer() {
    return (
        <div className="footer" id="footer">
            <div className='img-link'>
            <a href="https://github.com/FisherK19" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/github-2.png" alt="Github" className="icon"/></a>
            <a href="https://www.linkedin.com/in/kristie-fisher-753737207" target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>
            </div>
            <p className='footer-info'>
                &copy; Kristie Fisher  |  <a href="" className="link">download resume</a>  |  <a href="https://coolors.co/47e5bc-a76d60-3c3c3c-eee5e5-ff5e5b">color palette</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>
        </div>
    )
}

export default Footer;
