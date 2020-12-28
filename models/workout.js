//Import mongoose package and get Sechema
const mongoose = require("mongoose");
const { Schema } = mongoose;

//Setup Workout schema
const WorkoutSchema = new Schema({
    day: {
        type: Date,
        required: true,
        default: Date.now,
    },
    exercises: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            required: true,
            lowercase: true,
        },
        duration: {
            type: Number,
            trim: true,
        },
        weight: {
            type: Number,
            trim: true,
        },
        reps: {
            type: Number,
            trim: true,
        },
        sets: {
            type: Number,
            trim: true,
        },
        distance: {
            type: Number,
            trim: true,
        },
    }, ],
}, {
    toObject: {
        virtuals: true,
    },
    toJSON: {
        virtuals: true,
    },
});

WorkoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + (exercise.duration || 0);
    }, 0);
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;





// const mongoose = require("mongoose");

// const Schema = mongoose.Schema;

// const workoutSchema = new Schema({
//     day: {
//         type: Date,
//         default: Date.now,
//         required: true,
//     },

//     excercise: [{
//         type: {
//             type: String,
//             required: true,
//         },
//         name: {
//             type: String,
//             trim: true,
//             lowercase: true,
//             required: true,
//         },
//         duration: {
//             type: Number,
//             trim: true,
//         },
//         weight: {
//             type: Number,
//             trim: true,
//         },
//         reps: {
//             type: Number,
//             trim: true,
//         },
//         sets: {
//             type: Number,
//             trim: true,
//         },
//         distance: {
//             type: Number,
//             trim: true,
//         },
//     }, ],
// }, {
//     toObject: {
//         virtuals: true,
//     },

//     toJSON: {
//         // include any virtual properties when data is requested
//         virtuals: true,
//     },
// });

// workoutSchema.virtual("totalDuration").get(function() {
//     return this.exercises.reduce((total, exercise) => {
//         return total + (exercise.duration || 0);
//     }, 0);
// });
// adds a dynamically-created property to schema
// workoutSchema.virtual("totalDuration").get(function() {
//     //loop over this.excercises and return the total duration
//     this.excercises.aggregate({
//         $addFields: {
//             totalDuration: {
//                 $sum: "$duration",
//             },
//         },
//     });
// });

// const Workout = mongoose.model("Workout", workoutSchema);

// module.exports = Workout;