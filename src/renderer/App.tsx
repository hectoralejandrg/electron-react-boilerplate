import React from 'react';
import { MemoryRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Pages/Login';
import './App.global.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
}
