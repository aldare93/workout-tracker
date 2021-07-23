const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      name: {
        type: String,
        trim: true,
        required: "Enter a name for transaction"
      },
      type: {
        type: String,
        required: "Enter an amount"
      },
      duration: {
        type: Number,
        required: "Enter an amount"
      },
      weight: {
        type: Number
      },
      sets: {
        type: Number
      },
      reps: {
        type: Number
      },
      distance: {
        type: Number
      }
    }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
