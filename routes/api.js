const router = require("express").Router();
const Workouts = require("../models/workouts.js");

router.get("/api/workouts", (req, res) => {
    Workouts.find({})
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(error => {
        res.status(400).json(error);
    });
});

module.exports = router;