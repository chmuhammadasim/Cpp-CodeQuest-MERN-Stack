// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/challenges" exact component={Challenges} />
        <ProtectedRoute path="/challenges/:id" component={ChallengeDetail} />
      </Switch>
    </Router>
  );
};

export default App;
