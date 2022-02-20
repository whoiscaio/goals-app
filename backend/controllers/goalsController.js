const goalModel = require('../models/goal.model');

async function getGoals(req, res) {
  const goals = await goalModel.find({});

  res.status(200).json(goals);
}

async function getGoal(req, res, next) {
  const { id } = req.params;

  if (id.length !== 24) {
    res.status(400);
    const error = new Error('Invalid id provided');
    return next(error);
  }

  const goal = await goalModel.findById(id);

  if (!goal) {
    res.status(404);
    const error = new Error('Goal not found');
    return next(error);
  }

  res.status(200).json(goal);
}

async function createGoal(req, res, next) {
  const body = req.body;

  if (!body.text) {
    res.status(400);
    const error = new Error('Text field is required');
    return next(error);
  }

  if (!body.completed && body.completed !== false) {
    res.status(400);
    const error = new Error('Completed field is required');
    return next(error);
  }

  const newGoal = await goalModel.create(body);

  res.status(201).json(newGoal);
}

async function updateGoal(req, res, next) {
  const { id } = req.params;
  const body = req.body;

  if (id.length !== 24) {
    res.status(400);
    const error = new Error('Invalid id provided');
    return next(error);
  }

  const goal = await goalModel.findById(id);

  if (!goal) {
    res.status(404);
    const error = new Error('Goal not found');
    return next(error);
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(id, body, { new: true });

  res.status(200).json(updatedGoal);
}

async function deleteGoal(req, res, next) {
  const { id } = req.params;

  if (id.length !== 24) {
    const error = new Error('Invalid id provided');
    return next(error);
  }

  await goalModel.findByIdAndDelete(id);

  res.sendStatus(204);
}

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal,
  deleteGoal,
}