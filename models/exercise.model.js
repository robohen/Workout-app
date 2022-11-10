const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    username: { type: String, required: true},
    description : { type: String, required: true},
    setsAndReps : { type: String, required: true},
    date: { type: Date, required: true},
    extraNotes: {type: String, required: true},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;