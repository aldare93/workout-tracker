const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/workouts", (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

router.post("/workouts", (req, res) => {
    console.log(req.body);
    Workout.create({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      // "runValidators" will ensure new exercises meet our schema requirements
      { new: true, runValidators: true }
    )
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
});

// router.get("/exercise", (req, res) => {
//     Workout.find({})
//     .then(dbWorkouts => {
//         res.json(dbWorkouts);
//     })
//     .catch(error => {
//         res.status(400).json(error);
//     });
// });

module.exports = router;