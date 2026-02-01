const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Task", taskSchema);
