const Goal = require('../models/goal.model');

class goalsController {
  async getGoals(req, res) {
    const goals = await Goal.find({ userId: req.user.id });
  
    res.status(200).json(goals);
  }
  
  async createGoal(req, res, next) {
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
  
    const newGoal = await Goal.create({
      ...body,
      userId: req.user.id,
    });
  
    res.status(201).json(newGoal);
  }
  
  async updateGoal(req, res, next) {
    const { id } = req.params;
    const body = req.body;
  
    if (id.length !== 24) {
      res.status(400);
      const error = new Error('Invalid id provided');
      return next(error);
    }
  
    const goal = await Goal.findOne({
      _id: id,
      userId: req.user.id,
    });
  
    if (!goal) {
      res.status(404);
      const error = new Error('Goal not found');
      return next(error);
    }
  
    const updatedGoal = await Goal.findByIdAndUpdate(id, body, { new: true });
  
    res.status(200).json(updatedGoal);
  }
  
  async deleteGoal(req, res, next) {
    const { id } = req.params;
  
    if (id.length !== 24) {
      const error = new Error('Invalid id provided');
      return next(error);
    }
  
    const goal = await Goal.findOneAndDelete({
      _id: id,
      userId: req.user.id,
    });

    if(!goal) {
      const error = new Error('Goal not found');
      return next(error);
    }
  
    res.status(200).json(goal);
  }
}

module.exports = new goalsController();