const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

exports.protect = async (req, res, next) => {
  let token;
  const headerAuth = req.headers.authorization;

  if(headerAuth && headerAuth.startsWith('Bearer')) {
    try {
      token = headerAuth.split(' ')[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select('-password');

      next();
    } catch (err) {
      const error = new Error('Not authorized');
      next(error);
    }
  }

  if(!token) {
    const error = new Error('Not authorized, no token');
    next(error);
  }
}