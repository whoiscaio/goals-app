const express = require('express');
const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal
} = require('../controllers/goalsController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(protect);

router.route('/')
  .get(getGoals)
  .post(createGoal);

router.route('/:id')
  .put(updateGoal)
  .delete(deleteGoal);

module.exports = router;