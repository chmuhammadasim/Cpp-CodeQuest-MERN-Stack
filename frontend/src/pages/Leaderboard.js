import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      const response = await axios.get('http://localhost:5000/api/progress/leaderboard');
      setLeaderboard(response.data);
    };
    fetchLeaderboard();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="leaderboard-container">
        <h2>Leaderboard</h2>
        <ul className="leaderboard-list">
          {leaderboard.map((entry) => (
            <li key={entry._id}>
              {entry.userId.username}: {entry.score} points
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
