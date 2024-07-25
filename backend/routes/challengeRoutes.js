const express = require('express');
const Challenge = require('../models/Challenge');

const router = express.Router();

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

module.exports = router;