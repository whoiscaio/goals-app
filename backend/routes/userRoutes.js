const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const {
  registerUser,
  loginUser,
  getUserData
} = require('../controllers/usersController');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserData)


module.exports = router;