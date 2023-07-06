exports.getParticipants = async (req, res) => {
    try {
      const { quizId, name, answers } = req.body;
      const quiz = await Quiz.findById(quizId);
  
      if (!quiz) {
        return res.status(404).json({ message: 'Quiz not found' });
      }
  
      // TODO: Calculate score based on submitted answers
      const score = calculateScore(quiz, answers);
  
      const newParticipant = new Participant({ name, quiz: quizId, answers, score });
      const participant = await newParticipant.save();
  
      res.status(201).json(participant);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  