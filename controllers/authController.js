const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.validPassword(password)) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user._id }, config.secret, {
    expiresIn: 86400, // 24 hours
  });

  res.json({ accessToken: token });
};

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
