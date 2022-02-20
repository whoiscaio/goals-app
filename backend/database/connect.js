const mongoose = require('mongoose');

async function connect() {
  await mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('Connection with MongoDB sucedeed');
  });
}

module.exports = connect;