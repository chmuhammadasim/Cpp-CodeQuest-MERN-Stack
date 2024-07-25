import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    const fetchChallenge = async () => {
      const response = await axios.get(`http://localhost:5000/api/challenges/${id}`);
      setChallenge(response.data);
      setCode(response.data.starterCode);
    };
    fetchChallenge();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate code execution (in a real app, you'd likely send the code to a backend service for evaluation)
    if (code === challenge.solution) {
      setOutput('Correct!');
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/progress/complete',
        { challengeId: id },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else {
      setOutput('Try again.');
    }
  };

  if (!challenge) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <h1>{challenge.title}</h1>
      <p>{challenge.description}</p>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={{ width: '100%', padding: '10px' }}
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <pre>{output}</pre>
    </div>
  );
};

export default ChallengeDetail;
