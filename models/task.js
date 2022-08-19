const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  //without validation
  //   name: String,
  //   completed: Boolean,

  name: {
    type: String,
    required: true,
    trime: true,
    maxlenght: [20, "name can't be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("task", taskSchema);
