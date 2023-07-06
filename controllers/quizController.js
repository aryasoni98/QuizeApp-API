const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body);
    const quiz = await newQuiz.save();

    res.status(201).json(quiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
