const mongoose = require('mongoose');

async function connect() {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Connection to MongoDB was successfull: ${connect.connection.host}`);
  } catch (err) {
    console.log(err.message);
  }
}

module.exports = connect;