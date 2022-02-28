const bcrypt = require('bcryptjs');
const generateToken = require('../helpers/generateToken');

const User = require('../models/user.model');

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class usersController {
  async registerUser(req, res, next) {
    const { name, email, password } = req.body;

    if (!name) {
      res.status(400);
      const error = new Error('Name is a required field');
      return next(error);
    }

    if (!email) {
      res.status(400);
      const error = new Error('Email is a required field');
      return next(error);
    }

    if (!emailRegex.test(email)) {
      res.status(400);
      const error = new Error('Email format is incorrect');
      return next(error);
    }

    if (!password) {
      res.status(400);
      const error = new Error('Password is a required field');
      return next(error);
    }

    if (password.length < 8) {
      res.status(400);
      const error = new Error('Password must have at least 8 digits');
      return next(error);
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
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

    if (!registeredUser) {
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

  async loginUser(req, res, next) {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    const loginConditional = user && (await bcrypt.compare(password, user.password));

    if (!loginConditional) {
      const error = new Error('Incorrect credentials');
      return next(error);
    }

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  }

  async getUserData(req, res) {
    res.status(200).json(req.user);
  }
}

module.exports = new usersController();