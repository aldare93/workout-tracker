const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/workouts", (req, res) => {
    Workouts.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

router.post("/exercise", ({ body }, res) => {
    Workouts.create(body)
    .then(dbWorkouts => {
        res.json(dbWorkouts);
        res.render("/exercise");
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

router.get("/stats", (req, res) => {
    Workouts.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

module.exports = router;