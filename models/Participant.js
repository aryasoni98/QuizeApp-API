const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz',
    required: true,
  },
  answers: [{
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  }],
  score: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Participant', ParticipantSchema);
