class usersController {
  async registerUser(req, res) {
    res.json({message: 'register new user'});
  }

  async loginUser(req, res) {
    res.json({message: 'login user'});
  }

  async getUserData(req, res) {
    res.json({message: 'get user data'});
  }
}

module.exports = new usersController();