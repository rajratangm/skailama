const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust path if needed

// POST route to register a new user
router.post('/register', async (req, res) => {
  const { name, email, username } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    user = new User({ name, email, username });
    await user.save();

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error('Error registering user:', error); // Log the specific error
    res.status(500).json({ message: 'Server error' });
  }
});

// POST route to login a user
router.post('/login', async (req, res) => {
  const { email } = req.body;

  try {
    let user = await User.findOne({ email:String });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User logged in successfully', user });
  } catch (error) {
    console.error('Error logging in:', error); // Log the specific error
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
