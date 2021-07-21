const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "Enter a name for transaction"
  },
  type: {
    type: Number,
    required: "Enter an amount"
  },
  weight: {
    type: Number,
    required: "Enter an amount"
  },
  sets: {
    type: Number,
    required: "Enter an amount"
  },
  reps: {
    type: Number,
    required: "Enter an amount"
  },
  duration: {
    type: Number,
    required: "Enter an amount"
  }
});

const Transaction = mongoose.model("Workout", workoutSchema);

module.exports = Transaction;
