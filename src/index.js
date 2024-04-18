import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure you are using the minified version
import ParticlesBg from "particles-bg";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <App />
            {/* Change the type prop to the desired effect */}
            <ParticlesBg type="thick" bg={true} num={100} />

        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.register();
