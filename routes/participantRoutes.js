const express = require('express');
const router = express.Router();

const participantController = require('../controllers/participantController');

router.post('/:quizId/participants', participantController.submitQuiz);
router.get('/:quizId/participants', participantController.getParticipants);

module.exports = router;
