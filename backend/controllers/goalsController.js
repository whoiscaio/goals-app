const goalModel = require('../models/goal.model');

async function getGoals(req, res) {
  const goals = await goalModel.find({});

  res.status(200).json(goals);
}

async function getGoal(req, res) {
  const { id } = req.params;

  if(id.length !== 24) {
    res.status(400);
    throw new Error('Invalid id provided');
  }

  const goal = await goalModel.findById(id);

  if(!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  res.status(200).json(goal);
}

async function createGoal(req, res) {
  const body = req.body;

  if(!body.text) {
    res.status(400);
    throw new Error('Text field is required');
  }

  if(!body.completed) {
    res.status(400);
    throw new Error('Completed field is required');
  }

  const newGoal = await goalModel.create(body);

  res.status(201).json(newGoal);
}

async function updateGoal(req, res) {
  const { id } = req.params;
  const body = req.body;

  if(id.length !== 24) {
    res.status(400);
    throw new Error('Invalid id provided');
  }

  const goal = await goalModel.findById(id);

  if(!goal) {
    res.status(404);
    throw new Error('Goal not found');
  }

  const updatedGoal = await goalModel.findByIdAndUpdate(id, body, { new: true });

  res.status(200).json(updatedGoal);
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