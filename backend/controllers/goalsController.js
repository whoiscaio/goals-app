function getGoals(req, res) {
  res.status(200).send('<h1>GET /goalssss</h1>');
}

function getGoal(req, res) {
  res.status(200).send('<h1>GET /goals/:id</h1>');
}

function createGoal(req, res) {
  res.status(200).send('<h1>POST /goals</h1>');
}

function updateGoal(req, res) {
  res.status(200).send('<h1>PATCH /goals/:id</h1>');
}

function deleteGoal(req, res) {
  res.status(200).send('<h1>DELETE /goals/:id</h1>');
}

module.exports = {
  getGoals,
  getGoal,
  createGoal,
  updateGoal, 
  deleteGoal,
}