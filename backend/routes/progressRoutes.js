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
    const progress = await Progress.findOne({ userId: req.user.id });
    res.json(progress || {});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update progress for the authenticated user
router.post('/complete', authenticate, async (req, res) => {
  const { challengeId } = req.body;
  try {
    const progress = await Progress.findOneAndUpdate(
      { userId: req.user.id },
      { $addToSet: { completedChallenges: challengeId } },
      { new: true, upsert: true }
    );
    res.json(progress);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
