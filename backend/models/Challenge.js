const mongoose = require('mongoose');

// models/Challenge.js
const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  starterCode: { type: String, required: true },
  solution: { type: String, required: true },
  feedback: { type: String, default: 'No feedback yet' },
  dailyChallenge: { type: Boolean, default: false },
  weeklyChallenge: { type: Boolean, default: false },
});


module.exports = mongoose.model('Challenge', challengeSchema);
