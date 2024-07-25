import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';

const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:5000/api/challenges/daily');
      setChallenges(response.data);
    };
    fetchChallenges();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="challenge-container">
        <h2>Daily Challenges</h2>
        {challenges.map((challenge) => (
          <div key={challenge._id}>
            <h3>{challenge.title}</h3>
            <p>{challenge.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyChallenges;
