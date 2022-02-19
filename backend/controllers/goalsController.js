const goalModel = require('../models/goal.model');

async function getGoals(req, res) {
  const goals = await goalModel.find({});

  res.status(200).json(goals);
}

async function getGoal(req, res) {
  const { id } = req.params;

  const goal = await goalModel.findById(id);

  res.status(200).json(goal);
}

async function createGoal(req, res) {
  const body = req.body;

  const newGoal = await goalModel.create(body);

  res.status(201).json(newGoal);
}

async function updateGoal(req, res) {
  const { id } = req.params;
  const body = req.body;

  const updatedUser = await goalModel.findByIdAndUpdate(id, body, { new: true });

  res.status(200).json(updatedUser);
}

async function deleteGoal(req, res) {
  const { id } = req.params;

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