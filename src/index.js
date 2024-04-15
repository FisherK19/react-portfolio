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
            <ParticlesBg type="square" bg={true} />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// Consider registering the service worker if your application is ready for production
// and you have tested it thoroughly to handle cache issues.
serviceWorker.register();  // Change based on your caching strategy and readiness for production
