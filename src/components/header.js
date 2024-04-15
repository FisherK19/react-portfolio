import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import About from '../components/about';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Resume from '../components/resume';
import NavBar from '../components/navbar';

const Header = () => {
    const routes = [
        { path: '/', render: () => <Redirect to="/about" />, exact: true },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/contact', component: Contact },
        { path: '/resume', component: Resume }
    ];

    return (
        <Router>
            <NavBar />
            <Switch>
                {routes.map(route => (
                    <Route key={route.path} path={route.path} exact={route.exact}>
                        {route.render ? route.render() : <route.component />}
                    </Route>
                ))}
            </Switch>
        </Router>
    );
};

export default Header;
