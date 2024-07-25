const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  completedChallenges: { type: [String], default: [] },
});

module.exports = mongoose.model('Progress', progressSchema);
