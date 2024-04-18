import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import missing Router and Switch
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio'; // Ensure this is the correct path to your component
import Project from './components/project'; 
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/about" exact component={About} /> 
          <Route path="/portfolio" component={Portfolio} /> {/* Portfolio route */}
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={Project} /> 
          <Route path="/resume" component={Resume} />
          {/* Other routes as needed */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


