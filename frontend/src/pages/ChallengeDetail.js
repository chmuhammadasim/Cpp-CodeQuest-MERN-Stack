import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/theme-github';

const ChallengeDetail = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [hint, setHint] = useState('');

  useEffect(() => {
    const fetchChallenge = async () => {
      const response = await axios.get(`http://localhost:5000/api/challenges/${id}`);
      setChallenge(response.data);
      setCode(response.data.starterCode);
    };
    const fetchFeedback = async () => {
      const response = await axios.get(`http://localhost:5000/api/challenges/${id}`);
      setHint(response.data.feedback);
    };
    fetchFeedback();
    fetchChallenge();
  }, [id]);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (code === challenge.solution) {
      setOutput('Correct!');
      const token = localStorage.getItem('token');
      await axios.post(
        'http://localhost:5000/api/progress/complete',
        { challengeId: id, scoreIncrement: 10 },
        { headers: { Authorization: `Bearer ${token}` } }
      );
    } else {
      setOutput('Try again.');
      setHint('Hint: Check your syntax.');
    }
  };

  if (!challenge) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="challenge-container">
        <h1>{challenge.title}</h1>
        <p>{challenge.description}</p>
        <form onSubmit={handleSubmit}>
          <AceEditor
            mode="c_cpp"
            theme="github"
            name="code_editor"
            value={code}
            onChange={(newValue) => setCode(newValue)}
            editorProps={{ $blockScrolling: true }}
            style={{ width: '100%', height: '300px' }}
          />
          <button type="submit">Submit</button>
        </form>
        <pre>{output}</pre>
        {hint && <p>{hint}</p>}
      </div>
    </div>
  );
};

export default ChallengeDetail;
