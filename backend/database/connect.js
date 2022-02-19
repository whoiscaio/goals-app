const mongoose = require('mongoose');

const MONGODB_ADDRESS = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@goalscluster.3sfzl.mongodb.net/goalsDb?retryWrites=true&w=majority`;

async function connect() {
  await mongoose.connect(MONGODB_ADDRESS, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('Connection with MongoDB sucedeed');
  });
}

module.exports = connect;