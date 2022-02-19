const express = require('express');
const goalsController = require('../controllers/goalsController');

const router = express.Router();

router.get('/', goalsController.getGoals);

router.get('/:id', goalsController.getGoal);

router.post('/', goalsController.createGoal);

router.patch('/:id', goalsController.updateGoal);

router.delete('/:id', goalsController.deleteGoal);

module.exports = router;