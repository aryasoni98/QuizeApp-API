const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const quizRoutes = require('./routes/quizRoutes');
const participantRoutes = require('./routes/participantRoutes');

const app = express();

mongoose.connect(config.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/quizzes', participantRoutes);


app.listen(3000, () => console.log('Server is running on port 3000'));