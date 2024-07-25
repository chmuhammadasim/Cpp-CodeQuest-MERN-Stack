import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Challenges = () => {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    const fetchChallenges = async () => {
      const response = await axios.get('http://localhost:5000/api/challenges');
      setChallenges(response.data);
    };
    fetchChallenges();
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Challenges</h1>
      <ul>
        {challenges.map((challenge) => (
          <li key={challenge._id}>
            <Link to={`/challenges/${challenge._id}`}>{challenge.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Challenges;
