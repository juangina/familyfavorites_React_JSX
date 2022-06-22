import React from 'react';
import './App.css';
import NavBar from '../Nav/NavBar';
import LoginStatus from '../Layout/LoginStatus';
import Welcome from '../Pages/Welcome';
import Registration from '../Pages/Registration';
import Login from '../Pages/Login';
import Contact from '../Pages/Contact';
import Dashboard from '../Pages/Dashboard';
import Trivia from '../Pages/Trivia';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return ( 
    <div>
      <Router>
        <NavBar />
          <Switch>
            <Route path="/" exact component={() => <Welcome />} />
            <Route path="/registration" exact component={() => <Registration />} />
            <Route path="/login" exact component={() => <Login />} />
            <Route path="/contact" exact component={() => <Contact />} />
            <Route path="/dashboard" exact component={() => <Dashboard />} />
            <Route path="/trivia" exact component={() => <Trivia />} />
          </Switch>
        <LoginStatus />
      </Router>
    </div>


  );
}

export default App;
