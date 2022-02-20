const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('Connection to MongoDB was successfull!');
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connect;