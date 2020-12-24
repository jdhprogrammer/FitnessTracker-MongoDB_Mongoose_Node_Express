const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },

    excercise: [{
        type: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true,
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
    toJSON: {
        // include any virtual properties when data is requested
        virtuals: true,
    },
});

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
    //loop over this.excercises and return the total duration
    this.excercises.aggregate({
        $addFields: {
            totalDuration: {
                $sum: "$duration",
            },
        },
    });
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;