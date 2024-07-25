const express = require('express');
const Progress = require('../models/Progress');
const jwt = require('jsonwebtoken');

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

// Get progress for the authenticated user
router.get('/', authenticate, async (req, res) => {
  try {
    const progress = await Progress.findOne({ userId: req.user.id }).populate('userId', 'username');
    res.json(progress || {});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update progress for the authenticated user
router.post('/complete', authenticate, async (req, res) => {
  const { challengeId, scoreIncrement } = req.body;
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId: req.user.id },
      { $addToSet: { completedChallenges: challengeId }, $inc: { score: scoreIncrement } },
      { new: true, upsert: true }
    );
    res.json(progress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get leaderboard
router.get('/leaderboard', async (req, res) => {
  try {
    const leaderboard = await Progress.find()
      .populate('userId', 'username')
      .sort({ score: -1 })
      .limit(10);
    res.json(leaderboard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
