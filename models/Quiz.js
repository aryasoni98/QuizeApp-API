const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  questions: [{
    question: {
      type: String,
      required: true,
    },
    choices: [{
      type: String,
      required: true,
    }],
    correctAnswers: [{
      type: Number,
      required: true,
    }],
  }],
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Quiz', QuizSchema);
