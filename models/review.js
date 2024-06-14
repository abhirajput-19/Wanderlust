// const { string } = require('joi');
const { ref } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewScehma = new Schema({
    comments: String,
    rating: {
        type: Number,
        min: 1,
        max: 5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Review", reviewScehma);