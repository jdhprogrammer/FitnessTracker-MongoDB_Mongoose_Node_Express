const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },

    excercise: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            trim: true,
            lowercase: true,
            required: true
        },
        duration: {
            type: Number,
            trim: true,
            required: true
        },
        weight: {
            type: Number,
            trim: true,
            required: true
        },
        reps: {
            type: Number,
            trim: true,
            required: true
        },
        sets: {
            type: Number,
            trim: true,
            required: true
        }
    }]
});

// adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function() {
    //loop over this.excercises and return the total duration

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;