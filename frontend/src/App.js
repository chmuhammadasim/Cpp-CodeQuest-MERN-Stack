import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Challenges from './pages/Challenges';
import ChallengeDetail from './pages/ChallengeDetail';
import Notifications from './pages/Notifications';
import ProtectedRoute from './components/ProtectedRoute';


const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<ProtectedRoute component={Dashboard} />} />
      <Route path="/challenges" element={<ProtectedRoute component={Challenges} />} />
      <Route path="/challenges/:id" element={<ProtectedRoute component={ChallengeDetail} />} />
      <Route path="/notifications" element={<ProtectedRoute component={Notifications} />} />
      </Routes>
    </Router>
  );
};

export default App;
