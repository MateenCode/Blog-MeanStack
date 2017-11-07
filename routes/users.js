const express = require('express');
const router = express.Router();

// Register
router.get('/register', (req, res, next) => {
  res.send('REGISTER!');
});

// Authenticate
router.get('/authenticate', (req, res, next) => {
  res.send('AUTHENICATE!');
});

// Profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE!');
});

// Validate
router.get('/Validate', (req, res, next) => {
  res.send('VALIDATE!');
});


module.exports = router;
