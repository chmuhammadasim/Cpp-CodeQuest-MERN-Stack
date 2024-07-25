const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completedChallenges: { type: [String], default: [] },
  score: { type: Number, default: 0 },
});

module.exports = mongoose.model('Progress', progressSchema);
