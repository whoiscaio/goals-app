const goalModel = require('../models/goal.model');

async function getGoals(req, res) {
  const goals = await goalModel.find({});

  res.status(200).json(goals);
}

async function getGoal(req, res) {
  const { id } = req.params;

  if(id.length !== 24) {
    return res.status(400).json({ error: "Invalid id was provided" });
  }

  const goal = await goalModel.findById(id);

  if(!goal) {
    return res.status(404).json({ error: "Goal not found" });
  }

  res.status(200).json(goal);
}

async function createGoal(req, res) {
  res.status(200).send('<h1>POST /goals</h1>');
}

async function updateGoal(req, res) {
  res.status(200).send('<h1>PUT /goals/:id</h1>');
}

async function deleteGoal(req, res) {
  res.status(200).send('<h1>DELETE /goals/:id</h1>');
}

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal, 
  deleteGoal,
}