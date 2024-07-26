import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Dashboard = () => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    const fetchProgress = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:5000/api/progress/', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setProgress(response.data.progress);
    };
    fetchProgress();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(progress, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;
