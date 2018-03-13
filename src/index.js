import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import App from './components/App';
import Users from './components/Users';

const Routing = () => (
    <Router>
      <div>
        <ul className="container nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
        <Route exact path="/" component={App} />
        <Route exact path="/users" component={Users} />
      </div>
    </Router>
  );

ReactDOM.render(
      <Routing />,
    document.getElementById('root')
);
