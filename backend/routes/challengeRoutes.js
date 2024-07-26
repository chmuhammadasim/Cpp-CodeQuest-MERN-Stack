const express = require('express');
const Challenge = require('../models/Challenge');

const router = express.Router();
const authenticate = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};
// Create a new challenge
router.post('/create', async (req, res) => {
  const { title, description, starterCode, solution } = req.body;
  try {
    const challenge = new Challenge({ title, description, starterCode, solution });
    await challenge.save();
    res.status(201).json({ message: 'Challenge created successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const challenges = await Challenge.find();
    res.json(challenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific challenge
router.get('/:id', async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    res.json(challenge);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post('/feedback/:id', authenticate, async (req, res) => {
  const { feedback } = req.body;
  try {
    const challenge = await Challenge.findById(req.params.id);
    challenge.feedback = feedback;
    await challenge.save();
    res.json({ message: 'Feedback updated successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.get('/daily', async (req, res) => {
  try {
    const challenges = await Challenge.find({ dailyChallenge: true });
    res.json(challenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/weekly', async (req, res) => {
  try {
    const challenges = await Challenge.find({ weeklyChallenge: true });
    res.json(challenges);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
