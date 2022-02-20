const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  }
}, {
  timestamps: true,
});

const goalModel = mongoose.model("Goal", goalSchema);

module.exports = goalModel;