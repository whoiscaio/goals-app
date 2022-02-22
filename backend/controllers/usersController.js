const bcrypt = require('bcryptjs');
const generateToken = require('../helpers/generateToken');

const User = require('../models/user.model');

class usersController {
  async registerUser(req, res, next) {
    const { name, email, password } = req.body;

    if(!name) {
      res.status(400);
      const error = new Error('Name is a required field');
      return next(error);
    }

    if(!email) {
      res.status(400);
      const error = new Error('Email is a required field');
      return next(error);
    }

    if(!password) {
      res.status(400);
      const error = new Error('Password is a required field');
      return next(error);
    }

    const userExists = await User.findOne({ email });

    if(userExists) {
      res.status(400);
      const error = new Error('User already exists');
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const registeredUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if(!registeredUser) {
      const error = new Error('Internal error');
      return next(error);
    }

    res.status(201).json({
      _id: registeredUser.id,
      name: registeredUser.name,
      email: registeredUser.email,
      token: generateToken(registeredUser._id),
    });
  }

  async loginUser(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const loginConditional = user && (await bcrypt.compare(password, user.password));

    if(!loginConditional) {
      res.status(400).json({
        message: 'Incorrect credentials',
      });
    }

    res.status(200).json({
      _id: user.id,
      name: user.name,
      email: user.email
    });
  }

  async getUserData(req, res) {
    const { _id, name, email } = await User.findById(req.user.id);

    res.status(200).json({
      id: _id, name, email
    })
  }
}

module.exports = new usersController();