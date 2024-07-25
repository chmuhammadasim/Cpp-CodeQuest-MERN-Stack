const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  starterCode: { type: String, required: true },
  solution: { type: String, required: true },
  feedback: { type: String, default: 'No feedback yet' },
});

module.exports = mongoose.model('Challenge', challengeSchema);
