import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Project from './components/project'; 
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/project/:id" component={Project} /> 
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

