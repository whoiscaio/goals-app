const express = require('express');
const {
  registerUser,
  loginUser,
  getUserData
} = require('../controllers/usersController');

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getUserData)


module.exports = router;