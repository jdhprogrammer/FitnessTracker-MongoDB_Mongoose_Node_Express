const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/api/workouts', async(req, res) => {
    try {
        const result = await db.Workout.find({});
        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', async({ body }, res) => {
    try {
        const result = await db.Workout.create(body);
        res.json(result);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;