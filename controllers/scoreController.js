const Participant = require('../models/Participant');

exports.getScore = async (req, res) => {
  const { quizId, participantId } = req.params;
  const participant = await Participant.findOne({ _id: participantId, quiz: quizId });

  if (!participant) {
    return res.status(404).json({ message: 'Participant not found' });
  }

  res.json({ score: participant.score });
};
