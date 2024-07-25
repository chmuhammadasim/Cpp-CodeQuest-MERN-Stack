import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

// src/pages/Profile.js
const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [darkMode, setDarkMode] = useState(false);
  
    useEffect(() => {
      const fetchProfile = async () => {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/users/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        setDarkMode(response.data.darkMode);
      };
      fetchProfile();
    }, []);
  
    const handleDarkModeToggle = async () => {
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/users/darkmode',
        { darkMode: !darkMode },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setDarkMode(!darkMode);
    };
  
    if (!profile) return <div>Loading...</div>;
  
    return (
      <div className={darkMode ? 'dark-mode' : ''}>
        <Navbar />
        <div className="profile-container">
          <h2>Profile</h2>
          <p>Username: {profile.username}</p>
          <button onClick={handleDarkModeToggle}>
            {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    );
  };
  