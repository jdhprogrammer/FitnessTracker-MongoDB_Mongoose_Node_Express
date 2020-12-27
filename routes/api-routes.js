const express = require('express');
const router = express.Router();
// Import model
const db = require('../models');

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
        .sort({
            date: -1,
        })
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.post("/api/workouts/", ({ body }, res) => {
    db.Workout.create(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

router.put("/api/workouts/:id", ({ body }, res) => {
    try {
        let savedExercises = [];

        const prevWorkout = db.Workout.findById(params.id);

        savedExercises = prevWorkout.exercises;

        totalExercises = [...savedExercises, body];
        res.json(totalExercises);

        db.Workout.findByIdAndUpdate(params.id, { exercises: totalExercises });
    } catch {
        res.status(404)
        res.send({ error: "Workout doesn't exist!" })
    }
})

router.post("/api/workouts/bulk", ({ body }, res) => {
    Workout.insertMany(body)
        .then((dbWorkout) => {
            res.json(dbWorkout);
        })
        .catch((err) => {
            res.status(400).json(err);
        });
});

module.exports = router;

//     router.get("/api/workouts", (req, res) => {
//         Workout.find({})
//             .sort({
//                 date: -1,
//             })
//             .then((dbWorkout) => {
//                 res.json(dbWorkout);
//             })
//             .catch((err) => {
//                 res.status(400).json(err);
//             });

//     });

//     router.post("/api/workouts/", ({ body }, res) => {
//         Workout.create(body)
//         .then((dbWorkout) => {
//             res.json(dbWorkout);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
//     });

//     router.put("/api/workouts/:id", ({ body }, res) => {
//         try {
//             const post = await Workout.findOne({ _id: req.params.id })

//             if (req.body.title) {
//                 post.title = req.body.title
//             }

//             if (req.body.content) {
//             post.content = req.body.content
//         }

//         await post.save()
//         res.send(post)
//     } catch {
//         res.status(404)
//         res.send({ error: "Workout doesn't exist!" })
//     }
// })

// router.post("/api/workouts/bulk", ({ body }, res) => {
//     Workout.insertMany(body)
//         .then((dbWorkout) => {
//             res.json(dbWorkout);
//         })
//         .catch((err) => {
//             res.status(400).json(err);
//         });
// });








//************ */
//Route for GET "/api/workouts/"
// router.get('/', async(req, res) => {
//     try {
//         const result = await db.Workout.find({});
//         res.json(result);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// //Route for POST "api/workouts/"
// router.post('/', async({ body }, res) => {
//     try {
//         const result = await db.Workout.create(body);
//         res.json(result);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// //Route for PUT "/api/workouts/workout_id"
// router.put('/:id', async({ params, body }, res) => {
//     try {
//         let savedExercises = [];

//         const prevWorkout = await db.Workout.findById(params.id);

//         savedExercises = prevWorkout.exercises;

//         totalExercises = [...savedExercises, body];
//         res.json(totalExercises);

//         await db.Workout.findByIdAndUpdate(params.id, { exercises: totalExercises });
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

// //Route for GET "/api/workouts/range"
// router.get('/range', async(req, res) => {
//     try {
//         const result = await db.Workout.find({});
//         res.json(result);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });

//Export router
// module.exports = router;