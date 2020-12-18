const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        required: "First Name is Required"
    },

    lastName: {
        type: String,
        trim: true,
        required: "Last Name is Required"
    },

    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
}, {
    toJSON: {
        virtuals: true
    }
});

// adds a dynamically-created property to schema
workoutSchema.virtual('totalDuration').get(function() {
    //loop over this.excercises and return the total duration

});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;